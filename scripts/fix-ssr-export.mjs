#!/usr/bin/env node
/**
 * Nitro/Vercel ESM emit is `export { foo as default }`. Some runtimes only
 * pick up a real `export default` on the server function. Rewrite the last
 * export so grok.me / Vercel can load the handler.
 */
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const target = join(root, ".vercel/output/functions/__server.func/index.mjs");

if (!existsSync(target)) {
  console.warn("[fix-ssr-export] skip: no server bundle at", target);
  process.exit(0);
}

const src = readFileSync(target, "utf8");
const rewritten = src.replace(
  /export\s*\{\s*([A-Za-z0-9_$]+)\s+as\s+default\s*\};?\s*$/m,
  "export default $1;",
);

if (rewritten === src) {
  if (/^export default /m.test(src)) {
    console.log("[fix-ssr-export] already has `export default`");
  } else {
    console.warn("[fix-ssr-export] no `export { X as default }` found; leaving as-is");
  }
  process.exit(0);
}

writeFileSync(target, rewritten);
console.log("[fix-ssr-export] rewrote default export in", target);
