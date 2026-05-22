import { createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";

export const adminCookieName = "arreglo_admin_session";
export const adminUsername = process.env.ADMIN_USERNAME || "admin";
const adminPassword = process.env.ADMIN_PASSWORD || "passWord123!";
const sessionSecret = process.env.ADMIN_SESSION_SECRET || "arreglo-local-admin-secret";

function sign(value: string) {
  return createHmac("sha256", sessionSecret).update(value).digest("hex");
}

function sessionValue() {
  return `${adminUsername}.${sign(adminUsername)}`;
}

export function validateAdminCredentials(username: string, password: string) {
  return username === adminUsername && password === adminPassword;
}

export async function createAdminSession() {
  const cookieStore = await cookies();

  cookieStore.set(adminCookieName, sessionValue(), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/admin",
    maxAge: 60 * 60 * 8
  });
}

export async function clearAdminSession() {
  const cookieStore = await cookies();
  cookieStore.delete(adminCookieName);
}

export async function isAdminAuthenticated() {
  const cookieStore = await cookies();
  const currentSession = cookieStore.get(adminCookieName)?.value;
  const expectedSession = sessionValue();

  if (!currentSession) {
    return false;
  }

  const current = Buffer.from(currentSession);
  const expected = Buffer.from(expectedSession);

  return current.length === expected.length && timingSafeEqual(current, expected);
}
