import { Link, useRouterState } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { plusMembersOnline } from "@/lib/presence";

export function SquareOnlineBubble() {
  const path = useRouterState({ select: (state) => state.location.pathname });
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      try {
        const result = await plusMembersOnline();
        if (!cancelled) setCount(result.count);
      } catch {
        if (!cancelled) setCount(0);
      }
    }
    void load();
    const id = window.setInterval(() => void load(), 20000);
    return () => {
      cancelled = true;
      window.clearInterval(id);
    };
  }, []);

  if (path === "/hall") return null;

  const label =
    count == null
      ? "Village square"
      : count === 1
        ? "1 Plus member online"
        : `${count} Plus members online`;

  return (
    <Link
      to="/hall"
      className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-40 inline-flex max-w-[16rem] items-center gap-2 rounded-2xl rounded-br-sm bg-forest px-4 py-3 text-sm font-medium leading-snug text-cream shadow-border-hover hover:bg-forest-deep"
    >
      <MessageCircle className="size-5 shrink-0" aria-hidden />
      {label}
    </Link>
  );
}
