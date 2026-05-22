import type { MetadataRoute } from "next";
import { getLocalizedPath, getSiteUrl, locales } from "@/lib/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();

  return locales.map((locale) => ({
    url: `${siteUrl}${getLocalizedPath(locale)}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: locale === "es" ? 1 : 0.9,
    alternates: {
      languages: Object.fromEntries(
        locales.map((alternateLocale) => [
          alternateLocale,
          `${siteUrl}${getLocalizedPath(alternateLocale)}`
        ])
      )
    }
  }));
}
