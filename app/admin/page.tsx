import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { logoutAction, saveSnapshotAction } from "@/app/admin/actions";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import { getSiteContent } from "@/lib/cms-content";
import { hasSupabaseAdminConfig, hasSupabaseReadConfig } from "@/lib/supabase/server";
import { isLocale, localeLabels, locales, type Locale } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "CMS Admin | Arreglo Espana",
  robots: {
    index: false,
    follow: false
  }
};

type AdminPageProps = {
  searchParams: Promise<{ locale?: string; status?: string; error?: string }>;
};

const errorMessages: Record<string, string> = {
  json: "The JSON is invalid. Check quotes, commas, and brackets.",
  locale: "Unsupported locale.",
  supabase:
    "Supabase is not configured yet. Add the required env variables and create the schema before saving.",
  save: "Supabase rejected the save request. Check table schema, RLS, and service role key.",
  session: "The admin session expired."
};

export default async function AdminPage({ searchParams }: AdminPageProps) {
  if (!(await isAdminAuthenticated())) {
    redirect("/admin/login");
  }

  const params = await searchParams;
  const activeLocale: Locale = isLocale(params.locale) ? params.locale : "es";
  const content = await getSiteContent(activeLocale);
  const snapshot = JSON.stringify(content, null, 2);

  return (
    <main className="admin-shell">
      <section className="admin-panel ornamental-card">
        <div className="admin-topbar">
          <div>
            <p className="eyebrow">CMS Admin</p>
            <h1>Curate the haunted archive.</h1>
          </div>
          <form action={logoutAction}>
            <button className="button button-ghost" type="submit">
              Logout
            </button>
          </form>
        </div>

        <div className="admin-status-grid">
          <div>
            <span>Read client</span>
            <strong>{hasSupabaseReadConfig() ? "Configured" : "Fallback content"}</strong>
          </div>
          <div>
            <span>Admin client</span>
            <strong>{hasSupabaseAdminConfig() ? "Configured" : "Needs env vars"}</strong>
          </div>
          <div>
            <span>Temporary login</span>
            <strong>admin / passWord123!</strong>
          </div>
        </div>

        {params.status === "saved" ? (
          <p className="admin-message">Snapshot saved to Supabase.</p>
        ) : null}
        {params.error ? (
          <p className="admin-message admin-message-error">
            {errorMessages[params.error] || "Something went wrong."}
          </p>
        ) : null}

        <div className="admin-locale-tabs" aria-label="CMS locale">
          {locales.map((locale) => (
            <a
              aria-current={locale === activeLocale ? "page" : undefined}
              href={`/admin?locale=${locale}`}
              key={locale}
            >
              {localeLabels[locale]}
            </a>
          ))}
        </div>

        <form action={saveSnapshotAction} className="admin-form admin-editor">
          <input name="locale" type="hidden" value={activeLocale} />
          <label>
            Site content JSON for {localeLabels[activeLocale]}
            <textarea name="content" required rows={28} spellCheck={false} defaultValue={snapshot} />
          </label>
          <div className="admin-help">
            Edit hero copy, SEO metadata, works, photo URLs, image alt text, and contact
            information here. Saving writes one localized snapshot into the Supabase
            `site_snapshots` table.
          </div>
          <button className="button button-primary" type="submit">
            Save to Supabase
          </button>
        </form>
      </section>
    </main>
  );
}
