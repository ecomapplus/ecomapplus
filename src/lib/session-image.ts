/** Small enough to ride in Better Auth get-session without crashing the page. */
export const SESSION_IMAGE_MAX = 16_000;
/** Full portrait for the profile page only, never the session cookie. */
export const PORTRAIT_IMAGE_MAX = 280_000;

export function sessionSafeImage(value: string | null | undefined): string | null {
  if (!value) return null;
  if (value.startsWith("http://") || value.startsWith("https://")) {
    return value.length < 2000 ? value : null;
  }
  if (!value.startsWith("data:image/")) return null;
  if (value.length > SESSION_IMAGE_MAX) return null;
  return value;
}

export function portraitImage(value: string | null | undefined): string | null {
  if (!value || typeof value !== "string") return null;
  if (!value.startsWith("data:image/") && !value.startsWith("http")) return null;
  if (value.startsWith("data:image/") && value.length > PORTRAIT_IMAGE_MAX) return null;
  return value;
}
