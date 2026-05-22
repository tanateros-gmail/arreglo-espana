import {
  CrescentMoon,
  OrnateCross,
  RavenSigil,
  SkeletonKey
} from "@/components/gothic-icons";
import { contactItems, futureCmsCollections, portfolioPieces } from "@/lib/site-content";

const navigation = ["Atelier", "Works", "Ritual", "Contact"];

export default function Home() {
  return (
    <main className="site-shell">
      <div className="viewport-vignette" aria-hidden="true" />
      <div className="weathered-grain" aria-hidden="true" />

      <header className="site-header" aria-label="Primary navigation">
        <a className="brand-mark" href="#top" aria-label="Arreglo Espana home">
          <OrnateCross className="brand-icon" />
          <span>Arreglo Espana</span>
        </a>
        <nav>
          {navigation.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}>
              {item}
            </a>
          ))}
        </nav>
      </header>

      <section className="hero-section" id="top" aria-labelledby="hero-title">
        <div className="hero-fog hero-fog-one" aria-hidden="true" />
        <div className="hero-fog hero-fog-two" aria-hidden="true" />
        <div className="candle candle-left" aria-hidden="true" />
        <div className="candle candle-right" aria-hidden="true" />

        <div className="hero-copy">
          <p className="eyebrow">Moonlit visual atelier</p>
          <h1 id="hero-title">Where velvet darkness keeps its quiet vows.</h1>
          <p className="hero-lede">
            A cinematic gothic portfolio for melancholic editorials, object stories, and
            atmospheric commissions shaped by cathedral shadow, parchment light, and the
            patience of old libraries.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#works">
              View the works
            </a>
            <a className="button button-ghost" href="#contact">
              Request a commission
            </a>
          </div>
        </div>

        <aside className="hero-card ornamental-card" aria-label="Featured atmosphere">
          <CrescentMoon className="moon-icon" />
          <RavenSigil className="raven-icon" />
          <p className="card-kicker">In the nave of night</p>
          <h2>Cathedral hush, crimson breath, a key turning slowly.</h2>
          <p>
            Deep blacks, blood-red glimmers, aged parchment contrast, and midnight-blue
            haze compose a restrained world of elegant unease.
          </p>
        </aside>
      </section>

      <div className="ornamental-divider" aria-hidden="true">
        <span />
      </div>

      <section className="atelier-section section-grid" id="atelier" aria-labelledby="atelier-title">
        <div>
          <p className="eyebrow">The atelier</p>
          <h2 id="atelier-title">Designed like a whispered passage through stone.</h2>
        </div>
        <div className="section-copy">
          <p>
            The composition leaves room for silence: asymmetric columns, long shadows, and
            deliberate pacing. Decorative filigree frames the content without turning the
            work into costume.
          </p>
          <p>
            Every hover is slow and ceremonial, with candle-flicker warmth and fading
            whisper transitions that make the interface feel alive in the periphery.
          </p>
        </div>
      </section>

      <section className="works-section" id="works" aria-labelledby="works-title">
        <div className="section-heading">
          <p className="eyebrow">Selected works</p>
          <h2 id="works-title">A cabinet of atmospheric studies.</h2>
        </div>

        <div className="portfolio-grid">
          {portfolioPieces.map((piece, index) => (
            <article className="portfolio-card ornamental-card" key={piece.title}>
              <div className="portfolio-image" data-index={index + 1}>
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
          <span>Future CMS path</span>
        </div>
        <div>
          <p className="eyebrow">Next ritual</p>
          <h2 id="ritual-title">Ready for a Supabase-backed admin room.</h2>
          <p>
            Portfolio entries and contact details are already separated into typed content
            collections. In the next iteration, these can become Supabase tables for photo
            sets, work metadata, contact information, and hero settings.
          </p>
          <ul className="cms-list" aria-label="Planned CMS collections">
            {futureCmsCollections.map((collection) => (
              <li key={collection}>{collection}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="contact-section ornamental-card" id="contact" aria-labelledby="contact-title">
        <div>
          <p className="eyebrow">Contact</p>
          <h2 id="contact-title">Send a note beneath the iron moon.</h2>
        </div>
        <div className="contact-list">
          {contactItems.map((item) => (
            <a className="contact-item" href={item.href} key={item.label}>
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
