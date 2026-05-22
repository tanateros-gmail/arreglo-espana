import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import { loginAction } from "../actions";

export const metadata: Metadata = {
  title: "Admin login | Arreglo Espana",
  robots: {
    index: false,
    follow: false
  }
};

type LoginPageProps = {
  searchParams: Promise<{ error?: string; status?: string }>;
};

export default async function AdminLoginPage({ searchParams }: LoginPageProps) {
  if (await isAdminAuthenticated()) {
    redirect("/admin");
  }

  const params = await searchParams;

  return (
    <main className="admin-shell login-shell">
      <section className="admin-panel ornamental-card">
        <p className="eyebrow">Admin room</p>
        <h1>Enter the locked library.</h1>
        <p>
          Use the temporary credentials for this iteration. Replace them with secure
          environment variables before opening the CMS to real editors.
        </p>
        {params.error ? (
          <p className="admin-message admin-message-error">Invalid login or expired session.</p>
        ) : null}
        {params.status === "logged-out" ? (
          <p className="admin-message">You have been logged out.</p>
        ) : null}
        <form action={loginAction} className="admin-form">
          <label>
            Username
            <input autoComplete="username" name="username" required type="text" />
          </label>
          <label>
            Password
            <input autoComplete="current-password" name="password" required type="password" />
          </label>
          <button className="button button-primary" type="submit">
            Unlock admin
          </button>
        </form>
      </section>
    </main>
  );
}
