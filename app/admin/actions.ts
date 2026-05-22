"use server";

import { redirect } from "next/navigation";
import {
  clearAdminSession,
  createAdminSession,
  isAdminAuthenticated,
  validateAdminCredentials
} from "@/lib/admin-auth";
import { getFallbackContent, isLocale, type SiteContent } from "@/lib/i18n";
import {
  createSupabaseAdminClient,
  hasSupabaseAdminConfig
} from "@/lib/supabase/server";

export async function loginAction(formData: FormData) {
  const username = String(formData.get("username") || "");
  const password = String(formData.get("password") || "");

  if (!validateAdminCredentials(username, password)) {
    redirect("/admin/login?error=invalid");
  }

  await createAdminSession();
  redirect("/admin");
}

export async function logoutAction() {
  await clearAdminSession();
  redirect("/admin/login?status=logged-out");
}

export async function saveSnapshotAction(formData: FormData) {
  if (!(await isAdminAuthenticated())) {
    redirect("/admin/login?error=session");
  }

  const localeValue = String(formData.get("locale") || "");
  const contentValue = String(formData.get("content") || "");

  if (!isLocale(localeValue)) {
    redirect("/admin?error=locale");
  }

  let parsedContent: SiteContent;

  try {
    parsedContent = JSON.parse(contentValue) as SiteContent;
  } catch {
    redirect(`/admin?locale=${localeValue}&error=json`);
  }

  const normalizedContent: SiteContent = {
    ...getFallbackContent(localeValue),
    ...parsedContent,
    locale: localeValue
  };

  if (!hasSupabaseAdminConfig()) {
    redirect(`/admin?locale=${localeValue}&error=supabase`);
  }

  const supabase = createSupabaseAdminClient();

  if (!supabase) {
    redirect(`/admin?locale=${localeValue}&error=supabase`);
  }

  const { error } = await supabase.from("site_snapshots").upsert(
    {
      locale: localeValue,
      content: normalizedContent,
      updated_at: new Date().toISOString()
    },
    { onConflict: "locale" }
  );

  if (error) {
    redirect(`/admin?locale=${localeValue}&error=save`);
  }

  redirect(`/admin?locale=${localeValue}&status=saved`);
}
