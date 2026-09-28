import { createCsrfMiddleware, createStart } from "@tanstack/react-start";

function headerHost(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-host")?.split(",")[0]?.trim();
  return (forwarded || request.headers.get("host") || "").toLowerCase();
}

/** The preview proxy rewrites the internal URL, so the browser origin will not match it. */
function previewOrigin(origin: string, request: Request): boolean {
  let host = "";
  try {
    host = new URL(origin).host.toLowerCase();
  } catch {
    return false;
  }
  if (!host) return false;
  if (host === headerHost(request)) return true;
  if (host === new URL(request.url).host.toLowerCase()) return true;
  return host.endsWith(".grok.me") || host.endsWith(".hades-www");
}

const csrfMiddleware = createCsrfMiddleware({
  filter: (ctx) => ctx.handlerType === "serverFn",
  secFetchSite: (value, ctx) => {
    if (value === "same-origin" || value === "none") return true;
    const origin = ctx.request.headers.get("origin");
    return Boolean(origin && previewOrigin(origin, ctx.request));
  },
  origin: (origin, ctx) => previewOrigin(origin, ctx.request),
});

export const startInstance = createStart(() => ({
  requestMiddleware: [csrfMiddleware],
}));
