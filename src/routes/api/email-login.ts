import { createFileRoute } from "@tanstack/react-router";
import { serializeSignedCookie } from "better-call";
import { auth } from "@/lib/auth/server";
import { completeEmailLogin } from "@/lib/email-session.server";

function corsHeaders(request: Request) {
  const headers = new Headers();
  const origin = request.headers.get("origin");
  if (origin && originAllowed(origin)) {
    headers.set("access-control-allow-origin", origin);
    headers.set("access-control-allow-credentials", "true");
    headers.set("access-control-allow-headers", "content-type, authorization");
    headers.set("access-control-allow-methods", "POST, OPTIONS");
    headers.set("access-control-expose-headers", "set-auth-token");
    headers.set("vary", "Origin");
  }
  return headers;
}

function json(data: unknown, status: number, request: Request, extra?: Headers) {
  const headers = extra ? new Headers(extra) : corsHeaders(request);
  for (const [key, value] of corsHeaders(request).entries()) {
    if (!headers.has(key)) headers.set(key, value);
  }
  headers.set("content-type", "application/json");
  return new Response(JSON.stringify(data), { status, headers });
}

function hostAllowed(host: string) {
  const h = host.toLowerCase().replace(/:\d+$/, "");
  if (
    h === "localhost" ||
    h === "127.0.0.1" ||
    h === "[::1]" ||
    h === "grok.com" ||
    h === "grok.me" ||
    h === "collabground.com"
  ) {
    return true;
  }
  return (
    h.endsWith(".grok.com") ||
    h.endsWith(".grok.me") ||
    h.endsWith(".grok-sandbox.com") ||
    h.endsWith(".collabground.com") ||
    h.endsWith(".hades-www")
  );
}

function originAllowed(origin: string) {
  try {
    return hostAllowed(new URL(origin).hostname);
  } catch {
    return false;
  }
}

function originOk(request: Request) {
  const origin = request.headers.get("origin");
  if (!origin) return true;
  try {
    const from = new URL(origin);
    const to = new URL(request.url);
    if (from.origin === to.origin) return true;
    return hostAllowed(from.hostname);
  } catch {
    return false;
  }
}

export const Route = createFileRoute("/api/email-login")({
  server: {
    handlers: {
      OPTIONS: async ({ request }) =>
        new Response(null, { status: 204, headers: corsHeaders(request) }),
      POST: async ({ request }) => {
        if (!originOk(request)) return json({ error: "Could not sign in" }, 403, request);
        let body: Record<string, unknown> = {};
        try {
          body = (await request.json()) as Record<string, unknown>;
        } catch {
          return json({ error: "Could not read that request" }, 400, request);
        }
        try {
          const result = await completeEmailLogin(String(body.email ?? ""), {
            name: typeof body.name === "string" ? body.name : "",
            profile: body.profile,
            chats: body.chats,
            land: body.land,
          });
          const headers = corsHeaders(request);
          headers.set("set-auth-token", result.token);
          try {
            const ctx = await auth.$context;
            const cookie = await serializeSignedCookie(
              ctx.authCookies.sessionToken.name,
              result.token,
              ctx.secret,
              {
                ...ctx.authCookies.sessionToken.attributes,
                maxAge: ctx.sessionConfig?.expiresIn ?? 60 * 60 * 24 * 30,
              },
            );
            headers.append("set-cookie", cookie);
          } catch {
            /* bearer token is enough */
          }
          return json(result, 200, request, headers);
        } catch (err) {
          console.error("[email-login]", err);
          const message = err instanceof Error && err.message === "Enter your email" ? err.message : "Could not sign in";
          return json({ error: message }, message === "Enter your email" ? 400 : 500, request);
        }
      },
    },
  },
});
