import type { CSSProperties } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  CrescentMoon,
  OrnateCross,
  RavenSigil,
  SkeletonKey
} from "@/components/gothic-icons";
import { getSiteContent } from "@/lib/cms-content";
import {
  defaultLocale,
  futureCmsCollections,
  getFallbackContent,
  getLocalizedPath,
  getSiteUrl,
  isLocale,
  localeLabels,
  locales,
  type Locale
} from "@/lib/i18n";

type LocalePageProps = {
  params: Promise<{ locale: string }>;
};

export const dynamic = "force-dynamic";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    return {};
  }

  const content = getFallbackContent(localeParam);
  const siteUrl = getSiteUrl();
  const canonical = getLocalizedPath(localeParam);
  const languages = Object.fromEntries(
    locales.map((locale) => [locale, getLocalizedPath(locale)])
  );

  return {
    metadataBase: new URL(siteUrl),
    title: content.metadata.title,
    description: content.metadata.description,
    keywords: content.metadata.keywords,
    alternates: {
      canonical,
      languages: {
        ...languages,
        "x-default": getLocalizedPath(defaultLocale)
      }
    },
    openGraph: {
      title: content.metadata.ogTitle,
      description: content.metadata.ogDescription,
      url: canonical,
      siteName: "Arreglo Espana",
      locale: ogLocale[localeParam],
      alternateLocale: locales
        .filter((locale) => locale !== localeParam)
        .map((locale) => ogLocale[locale]),
      type: "website",
      images: [
        {
          url: `${canonical}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: content.metadata.ogTitle
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: content.metadata.ogTitle,
      description: content.metadata.ogDescription,
      images: [`${canonical}/opengraph-image`]
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1
      }
    }
  };
}

const ogLocale: Record<Locale, string> = {
  es: "es_ES",
  en: "en_US",
  ru: "ru_RU"
};

export default async function LocaleHome({ params }: LocalePageProps) {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    notFound();
  }

  const content = await getSiteContent(localeParam);

  return (
    <main className="site-shell">
      <div className="viewport-vignette" aria-hidden="true" />
      <div className="weathered-grain" aria-hidden="true" />

      <header className="site-header" aria-label="Primary navigation">
        <a className="brand-mark" href={`/${localeParam}#top`} aria-label={content.brandAria}>
          <OrnateCross className="brand-icon" />
          <span>Arreglo Espana</span>
        </a>
        <div className="header-cluster">
          <nav>
            {content.navigation.map((item) => (
              <a key={item.id} href={`/${localeParam}#${item.id}`}>
                {item.label}
              </a>
            ))}
          </nav>
          <div className="language-switcher" aria-label="Language switcher">
            {locales.map((locale) => (
              <a
                aria-current={locale === localeParam ? "page" : undefined}
                href={getLocalizedPath(locale)}
                key={locale}
                lang={locale}
              >
                {localeLabels[locale]}
              </a>
            ))}
          </div>
        </div>
      </header>

      <section className="hero-section" id="top" aria-labelledby="hero-title">
        <div className="hero-fog hero-fog-one" aria-hidden="true" />
        <div className="hero-fog hero-fog-two" aria-hidden="true" />
        <div className="candle candle-left" aria-hidden="true" />
        <div className="candle candle-right" aria-hidden="true" />

        <div className="hero-copy">
          <p className="eyebrow">{content.hero.eyebrow}</p>
          <h1 id="hero-title">{content.hero.title}</h1>
          <p className="hero-lede">{content.hero.lede}</p>
          <div className="hero-actions">
            <a className="button button-primary" href={`/${localeParam}#works`}>
              {content.hero.primaryCta}
            </a>
            <a className="button button-ghost" href={`/${localeParam}#contact`}>
              {content.hero.secondaryCta}
            </a>
          </div>
        </div>

        <aside className="hero-card ornamental-card" aria-label={content.featureCard.aria}>
          <CrescentMoon className="moon-icon" />
          <RavenSigil className="raven-icon" />
          <p className="card-kicker">{content.featureCard.kicker}</p>
          <h2>{content.featureCard.title}</h2>
          <p>{content.featureCard.body}</p>
        </aside>
      </section>

      <div className="ornamental-divider" aria-hidden="true">
        <span />
      </div>

      <section className="atelier-section section-grid" id="atelier" aria-labelledby="atelier-title">
        <div>
          <p className="eyebrow">{content.atelier.eyebrow}</p>
          <h2 id="atelier-title">{content.atelier.title}</h2>
        </div>
        <div className="section-copy">
          {content.atelier.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="works-section" id="works" aria-labelledby="works-title">
        <div className="section-heading">
          <p className="eyebrow">{content.works.eyebrow}</p>
          <h2 id="works-title">{content.works.title}</h2>
        </div>

        <div className="portfolio-grid">
          {content.works.items.map((piece, index) => (
            <article className="portfolio-card ornamental-card" key={`${piece.title}-${index}`}>
              <div
                aria-label={piece.imageAlt}
                className="portfolio-image"
                data-index={index + 1}
                role="img"
                style={
                  piece.imageUrl
                    ? ({
                        "--portfolio-image": `url("${piece.imageUrl}")`
                      } as CSSProperties)
                    : undefined
                }
              >
                <span>{piece.year}</span>
              </div>
              <div className="portfolio-body">
                <p className="card-kicker">{piece.mood}</p>
                <h3>{piece.title}</h3>
                <p>{piece.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="ritual-section section-grid" id="ritual" aria-labelledby="ritual-title">
        <div className="ritual-emblem ornamental-card">
          <SkeletonKey className="key-icon" />
          <span>{content.ritual.emblem}</span>
        </div>
        <div>
          <p className="eyebrow">{content.ritual.eyebrow}</p>
          <h2 id="ritual-title">{content.ritual.title}</h2>
          <p>{content.ritual.body}</p>
          <ul className="cms-list" aria-label={content.ritual.cmsLabel}>
            {futureCmsCollections.map((collection) => (
              <li key={collection}>{collection}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="contact-section ornamental-card" id="contact" aria-labelledby="contact-title">
        <div>
          <p className="eyebrow">{content.contact.eyebrow}</p>
          <h2 id="contact-title">{content.contact.title}</h2>
        </div>
        <div className="contact-list">
          {content.contact.items.map((item) => (
            <a className="contact-item" href={item.href} key={`${item.label}-${item.value}`}>
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
