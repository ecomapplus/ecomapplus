import { Link } from "@tanstack/react-router";
import { AddSquareOpening } from "@/components/add-square-opening";
import { OPEN_SQUARE_LABEL, splitRemaining, useSquareSession } from "@/lib/square-hours";

function pad(n: number) {
  return String(n).padStart(2, "0");
}

function clock(parts: ReturnType<typeof splitRemaining>, open: boolean) {
  if (open) return `${pad(parts.minutes)}:${pad(parts.seconds)}`;
  return `${pad(parts.days)}d ${pad(parts.hours)}h ${pad(parts.minutes)}m ${pad(parts.seconds)}s`;
}

export function SquareCountdown() {
  const session = useSquareSession();
  const parts = session ? splitRemaining(session.remainingMs) : null;
  const open = session?.state === "open";
  const time = parts ? clock(parts, open) : "––";
  const summary = open
    ? `Village square is open. ${time} left. ${OPEN_SQUARE_LABEL}`
    : `Next open village square ${time}. ${OPEN_SQUARE_LABEL}`;

  return (
    <div
      id="square-hour"
      data-square-countdown={open ? "open" : session ? "upcoming" : "pending"}
      className="ecomap-enter ecomap-enter-5 mx-auto mt-4 flex flex-col items-center"
    >
      <Link
        to="/hall"
        aria-label={summary}
        className="inline-flex min-h-11 items-center justify-center gap-x-3 text-sm text-muted hover:text-fg"
      >
        <span className="font-medium text-fg">Next open village square</span>
        <span role="timer" className="tabular-nums text-moss">
          {time}
        </span>
      </Link>
      <Link
        to="/hall"
        className="inline-flex min-h-11 items-center rounded-md px-3 text-sm font-medium text-forest hover:underline"
      >
        {open ? "The village square is open now, pop in!" : "Enter the waiting room"}
      </Link>
      <AddSquareOpening className="justify-center" />
    </div>
  );
}
