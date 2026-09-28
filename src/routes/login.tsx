import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { readLoginEmail } from "@/lib/auth/client";
import { useCurrentUserState } from "@/lib/auth/use-current-user";
import { finishEmailLogin, loginWithEmail } from "@/lib/email-login-client";
import { useMounted } from "@/lib/use-mounted";

type LoginSearch = { redirect?: string; reason?: "save" | "plan" };

function safeRedirect(value: unknown): string {
  if (typeof value !== "string") return "/";
  if (!value.startsWith("/") || value.startsWith("//") || value.startsWith("/login")) return "/";
  return value;
}

function RedirectNow({ href }: { href: string }) {
  useEffect(() => {
    const id = window.setTimeout(() => {
      window.location.replace(href);
    }, 40);
    return () => window.clearTimeout(id);
  }, [href]);
  return null;
}

export const Route = createFileRoute("/login")({
  component: Login,
  validateSearch: (search: Record<string, unknown>): LoginSearch => ({
    redirect: typeof search.redirect === "string" ? search.redirect : undefined,
    reason: search.reason === "save" || search.reason === "plan" ? search.reason : undefined,
  }),
  head: () => ({
    meta: [{ title: "Sign in · ecocommunitymap.com" }],
  }),
});

function Login() {
  const { redirect, reason } = Route.useSearch();
  const dest = safeRedirect(redirect);
  const mounted = useMounted();
  const { user, isPending } = useCurrentUserState();
  const [email, setEmail] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [wantFound, setWantFound] = useState(false);

  useEffect(() => {
    const remembered = readLoginEmail();
    if (remembered) setEmail(remembered);
  }, []);

  function afterAuth(created: boolean) {
    if (!created && !wantFound) return dest;
    const params = new URLSearchParams();
    if (dest !== "/") params.set("redirect", dest);
    if (wantFound) params.set("help", "1");
    const q = params.toString();
    return q ? `/welcome?${q}` : "/welcome";
  }

  function rememberHelp() {
    try {
      sessionStorage.setItem("vc-founder-help", wantFound ? "1" : "0");
    } catch {
      /* ignore */
    }
  }

  if (!mounted || isPending) {
    return (
      <main className="mx-auto w-full max-w-md flex-1 px-4 py-16">
        <div className="h-10 w-56 animate-pulse rounded-md bg-panel" />
        <div className="mt-4 h-20 animate-pulse rounded-md bg-panel" />
      </main>
    );
  }

  if (user && !user.isDevFallback) {
    return (
      <main className="mx-auto w-full max-w-md flex-1 px-4 py-16">
        <h1 className="font-display text-3xl text-fg">You’re signed in</h1>
        <p className="mt-3 text-muted">
          Save villages and leave notes as {user.displayName ?? user.primaryEmail ?? "your account"}. Taking you through now.
        </p>
        <a href={dest} className="mt-6 inline-flex min-h-11 items-center font-medium text-forest hover:underline">
          Continue
        </a>
        <RedirectNow href={dest} />
      </main>
    );
  }

  async function submitEmail() {
    setError(null);
    const emailValue =
      email.trim().toLowerCase() ||
      String((document.getElementById("vc-email") as HTMLInputElement | null)?.value || "")
        .trim()
        .toLowerCase();
    if (!emailValue) {
      setError("Enter your email");
      return;
    }
    setBusy(true);
    rememberHelp();
    try {
      const result = await loginWithEmail(emailValue);
      await finishEmailLogin(result, emailValue, afterAuth(result.created));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not sign in. Try again.");
      setBusy(false);
    }
  }

  function onEmail(event: FormEvent) {
    event.preventDefault();
    void submitEmail();
  }

  return (
    <main className="mx-auto w-full max-w-md flex-1 px-4 py-12 sm:py-16">
      <p className="text-sm font-medium uppercase tracking-[0.16em] text-moss">Account</p>
      <h1 className="mt-2 font-display text-4xl leading-tight text-fg">Sign in</h1>
      <p className="mt-3 text-muted">
        {reason === "plan"
          ? "Enter your email to save this travel plan. Saved plans live in a folder at the top of Travel."
          : reason === "save"
          ? "Enter your email to save villages. They show on your public profile, and on the map."
          : "Enter your email to save villages, leave notes, or help start a place. Saved villages are public on your profile."}
      </p>
      <p className="mt-2 text-sm text-muted">No password. Use the same email each time and you are that person.</p>

      <label className="mt-8 flex min-h-11 items-start gap-3 rounded-md border border-forest/30 bg-surface px-3 py-3 text-sm shadow-border">
        <input
          type="checkbox"
          checked={wantFound}
          onChange={(e) => setWantFound(e.target.checked)}
          className="mt-1 size-4 accent-forest"
        />
        <span>
          <span className="block font-medium text-fg">I want to help create a new eco-community</span>
          <span className="text-xs text-muted">
            We’ll ask what skills you have, what you can put in, and whether you have land.
          </span>
        </span>
      </label>

      <form
        onSubmit={onEmail}
        className="mt-6 space-y-3 rounded-lg border border-border bg-surface p-4 shadow-border"
      >
        <label className="flex flex-col gap-1.5 text-sm">
          <span className="font-medium text-fg">Email</span>
          <input
            id="vc-email"
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            inputMode="email"
            autoCapitalize="none"
            autoCorrect="off"
            className="h-11 rounded-md border border-border bg-bg px-3 text-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest/40"
          />
        </label>
        {error ? <p className="text-sm text-forest-deep">{error}</p> : null}
        <Button type="submit" className="w-full" disabled={busy}>
          {busy ? "Working…" : "Continue"}
        </Button>
      </form>
    </main>
  );
}