import { createFileRoute } from "@tanstack/react-router";
import { auth } from "@/lib/auth/server";
import { getSql } from "@/lib/db";
import { listUserIds, recordNewSignups } from "@/lib/signup-alerts";

function watchPath(request: Request) {
  if (request.method === "POST") return true;
  const path = new URL(request.url).pathname.toLowerCase();
  return path.includes("callback") || path.includes("sign-up") || path.includes("signup");
}

function isGetSession(request: Request) {
  return new URL(request.url).pathname.toLowerCase().includes("get-session");
}

async function stripHeavyImages() {
  try {
    const sql = await getSql();
    await sql`
      update "user"
      set "image" = null
      where "image" is not null and length("image") > 16000
    `;
  } catch (err) {
    console.error("[auth] strip images", err);
  }
}

async function slimSessionResponse(response: Response): Promise<Response> {
  const type = response.headers.get("content-type") ?? "";
  if (!type.includes("json")) return response;
  try {
    const data = (await response.json()) as { user?: { image?: string | null } } | null;
    if (data?.user?.image && data.user.image.length > 16000) {
      data.user.image = null;
    }
    const headers = new Headers(response.headers);
    headers.delete("content-length");
    return new Response(JSON.stringify(data), { status: response.status, headers });
  } catch {
    return response;
  }
}

async function handleAuth(request: Request) {
  if (isGetSession(request)) {
    await stripHeavyImages();
  }
  if (!watchPath(request)) {
    const response = await auth.handler(request);
    return isGetSession(request) ? slimSessionResponse(response) : response;
  }
  let before = new Set<string>();
  try {
    before = await listUserIds();
  } catch (err) {
    console.error("[signup-alerts] snapshot failed", err);
    before = new Set();
  }
  const response = await auth.handler(request);
  try {
    const created = await recordNewSignups(before);
    if (created.length > 0) {
      console.info("[signup-alerts] recorded", created.map((row) => row.email).join(", "));
    }
  } catch (err) {
    console.error("[signup-alerts] record failed", err);
  }
  return isGetSession(request) ? slimSessionResponse(response) : response;
}

export const Route = createFileRoute("/api/auth/$")({
  server: {
    handlers: {
      GET: ({ request }) => handleAuth(request),
      POST: ({ request }) => handleAuth(request),
    },
  },
});
