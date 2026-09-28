import { useEffect, useState } from "react";
import { usePlusAccess } from "@/lib/plus-membership";
import { useMounted } from "@/lib/use-mounted";

/** Mondays 4:30–4:45pm Pacific — the square is open without EcoMapPlus. */
export const OPEN_SQUARE_LABEL = "Mondays 4:30–4:45pm PST";

const PACIFIC = "America/Los_Angeles";
const START_HOUR = 16;
const START_MINUTE = 30;
const END_HOUR = 16;
const END_MINUTE = 45;
const START_MIN = START_HOUR * 60 + START_MINUTE;
const END_MIN = END_HOUR * 60 + END_MINUTE;
const WARMUP_MINUTES = 5;
const WARMUP_START = START_MIN - WARMUP_MINUTES;

type PacificParts = {
  weekday: number;
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
  second: number;
  minutes: number;
};

function pacificParts(now: Date): PacificParts {
  const parts = Object.fromEntries(
    new Intl.DateTimeFormat("en-US", {
      timeZone: PACIFIC,
      weekday: "short",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hourCycle: "h23",
    })
      .formatToParts(now)
      .filter((part) => part.type !== "literal")
      .map((part) => [part.type, part.value]),
  ) as Record<string, string>;
  const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(parts.weekday);
  const hour = Number(parts.hour);
  const minute = Number(parts.minute);
  return {
    weekday,
    year: Number(parts.year),
    month: Number(parts.month),
    day: Number(parts.day),
    hour,
    minute,
    second: Number(parts.second),
    minutes: hour * 60 + minute,
  };
}

function addCivilDays(year: number, month: number, day: number, days: number) {
  const next = new Date(Date.UTC(year, month - 1, day + days));
  return {
    year: next.getUTCFullYear(),
    month: next.getUTCMonth() + 1,
    day: next.getUTCDate(),
  };
}

/** Civil Pacific clock → instant. 16:30 never lands on a DST gap. */
export function fromPacific(
  year: number,
  month: number,
  day: number,
  hour: number,
  minute: number,
  second = 0,
): Date {
  const asUtc = Date.UTC(year, month - 1, day, hour, minute, second);
  const zoned = pacificParts(new Date(asUtc));
  const zonedAsUtc = Date.UTC(zoned.year, zoned.month - 1, zoned.day, zoned.hour, zoned.minute, zoned.second);
  return new Date(asUtc - (zonedAsUtc - asUtc));
}

export function isOpenSquareWindow(now = new Date()): boolean {
  const { weekday, minutes } = pacificParts(now);
  return weekday === 1 && minutes >= START_MIN && minutes < END_MIN;
}

/** Monday 4:25–4:30pm Pacific. Devices can be on. Nobody else can see or hear them yet. */
export function isSquareWarmup(now = new Date()): boolean {
  const { weekday, minutes } = pacificParts(now);
  return weekday === 1 && minutes >= WARMUP_START && minutes < START_MIN;
}

export function nextSquareOpenAt(now = new Date()): Date {
  const parts = pacificParts(now);
  let daysAhead = (1 - parts.weekday + 7) % 7;
  if (daysAhead === 0 && parts.minutes >= START_MIN) daysAhead = 7;
  const civil = addCivilDays(parts.year, parts.month, parts.day, daysAhead);
  return fromPacific(civil.year, civil.month, civil.day, START_HOUR, START_MINUTE);
}

/** This Monday's 4:30pm if it has not ended, otherwise next Monday. Used for a repeating calendar event. */
export function squareSeriesStart(now = new Date()): Date {
  const parts = pacificParts(now);
  let daysAhead = (1 - parts.weekday + 7) % 7;
  if (daysAhead === 0 && parts.minutes >= END_MIN) daysAhead = 7;
  const civil = addCivilDays(parts.year, parts.month, parts.day, daysAhead);
  return fromPacific(civil.year, civil.month, civil.day, START_HOUR, START_MINUTE);
}

export function squareSeriesEnd(start: Date): Date {
  const parts = pacificParts(start);
  return fromPacific(parts.year, parts.month, parts.day, END_HOUR, END_MINUTE);
}

export function pacificClock(date: Date): string {
  const parts = pacificParts(date);
  const month = String(parts.month).padStart(2, "0");
  const day = String(parts.day).padStart(2, "0");
  const hour = String(parts.hour).padStart(2, "0");
  const minute = String(parts.minute).padStart(2, "0");
  return `${parts.year}${month}${day}T${hour}${minute}00`;
}

export function squareWindowEndsAt(now = new Date()): Date {
  const parts = pacificParts(now);
  return fromPacific(parts.year, parts.month, parts.day, END_HOUR, END_MINUTE);
}

export type SquareSession =
  | { state: "open"; remainingMs: number; at: Date }
  | { state: "upcoming"; remainingMs: number; at: Date };

export function getSquareSession(now = new Date()): SquareSession {
  if (isOpenSquareWindow(now)) {
    const at = squareWindowEndsAt(now);
    return { state: "open", remainingMs: Math.max(0, at.getTime() - now.getTime()), at };
  }
  const at = nextSquareOpenAt(now);
  return { state: "upcoming", remainingMs: Math.max(0, at.getTime() - now.getTime()), at };
}

export function splitRemaining(ms: number) {
  const total = Math.max(0, Math.floor(ms / 1000));
  return {
    days: Math.floor(total / 86400),
    hours: Math.floor((total % 86400) / 3600),
    minutes: Math.floor((total % 3600) / 60),
    seconds: total % 60,
    total,
  };
}

export function useOpenSquareWindow(): boolean {
  const mounted = useMounted();
  const [open, setOpen] = useState(() => typeof window !== "undefined" && isOpenSquareWindow());

  useEffect(() => {
    const tick = () => setOpen(isOpenSquareWindow());
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  return mounted && open;
}

export function useSquareWarmup(): boolean {
  const mounted = useMounted();
  const [warmup, setWarmup] = useState(() => typeof window !== "undefined" && isSquareWarmup());

  useEffect(() => {
    const tick = () => setWarmup(isSquareWarmup());
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  return mounted && warmup;
}

export function useSquareSession(): SquareSession | null {
  const mounted = useMounted();
  const [session, setSession] = useState<SquareSession | null>(null);

  useEffect(() => {
    const tick = () => setSession(getSquareSession());
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  return mounted ? session : null;
}

export function useSquareAccess() {
  const plus = usePlusAccess();
  const openHour = useOpenSquareWindow();
  return { plus, openHour, allowed: plus || openHour };
}
