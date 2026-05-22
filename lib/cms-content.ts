import {
  getFallbackContent,
  isLocale,
  type Locale,
  type SiteContent
} from "@/lib/i18n";
import { createSupabaseReadClient, hasSupabaseReadConfig } from "@/lib/supabase/server";

type SiteSnapshotRow = {
  locale: Locale;
  content: SiteContent;
};

export async function getSiteContent(locale: Locale): Promise<SiteContent> {
  const fallback = getFallbackContent(locale);

  if (!hasSupabaseReadConfig()) {
    return fallback;
  }

  const supabase = createSupabaseReadClient();

  if (!supabase) {
    return fallback;
  }

  const { data, error } = await supabase
    .from("site_snapshots")
    .select("locale, content")
    .eq("locale", locale)
    .maybeSingle<SiteSnapshotRow>();

  if (error || !data?.content || !isLocale(data.locale)) {
    return fallback;
  }

  return {
    ...fallback,
    ...data.content,
    locale
  };
}
