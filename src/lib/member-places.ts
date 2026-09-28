import { createServerFn } from "@tanstack/react-start";

export type MemberPlace = {
  id: string;
  name: string;
  lat: number;
  lng: number;
  updatedAt: string;
};

const DEVICE_KEY = "ecomap-member-place";

export type MemberDevice = {
  id: string;
  token: string;
  name: string;
  shared?: boolean;
};

function randomId(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) return crypto.randomUUID();
  return `m-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
}

export function readMemberDevice(): MemberDevice {
  const blank: MemberDevice = { id: "", token: "", name: "" };
  if (typeof window === "undefined") return blank;
  try {
    const raw = window.localStorage.getItem(DEVICE_KEY);
    if (!raw) return blank;
    const parsed = JSON.parse(raw) as Partial<MemberDevice>;
    return {
      id: typeof parsed.id === "string" ? parsed.id : "",
      token: typeof parsed.token === "string" ? parsed.token : "",
      name: typeof parsed.name === "string" ? parsed.name : "",
      shared: Boolean(parsed.shared),
    };
  } catch {
    return blank;
  }
}

export function ensureMemberDevice(name: string): MemberDevice {
  const current = readMemberDevice();
  const next: MemberDevice = {
    id: current.id || randomId(),
    token: current.token || randomId() + randomId(),
    name: name.trim().slice(0, 40) || current.name || "Plus member",
  };
  window.localStorage.setItem(DEVICE_KEY, JSON.stringify(next));
  return next;
}

export function rememberMemberName(name: string) {
  const current = readMemberDevice();
  if (!current.id) return;
  window.localStorage.setItem(
    DEVICE_KEY,
    JSON.stringify({ ...current, name: name.trim().slice(0, 40) }),
  );
}

function cleanName(value: unknown): string {
  if (typeof value !== "string") return "";
  return value.trim().replace(/\s+/g, " ").slice(0, 40);
}

function cleanCoord(value: unknown, min: number, max: number): number {
  const n = typeof value === "number" ? value : Number(value);
  if (!Number.isFinite(n) || n < min || n > max) throw new Error("That location isn’t on the map.");
  return Math.round(n * 1e5) / 1e5;
}

function cleanId(value: unknown): string {
  if (typeof value !== "string" || !/^[A-Za-z0-9-]{8,80}$/.test(value)) {
    throw new Error("Missing pin.");
  }
  return value;
}

function cleanToken(value: unknown): string {
  if (typeof value !== "string" || value.length < 8 || value.length > 120) {
    throw new Error("Missing pin.");
  }
  return value;
}

export const listMemberPlaces = createServerFn({ method: "GET" }).handler(async (): Promise<MemberPlace[]> => {
  const { listPlaces } = await import("./member-places.server");
  return listPlaces();
});

export const shareMemberPlace = createServerFn({ method: "POST" })
  .validator((input: { id?: string; token?: string; name?: string; lat?: number; lng?: number }) => ({
    id: cleanId(input?.id),
    token: cleanToken(input?.token),
    name: cleanName(input?.name) || "Plus member",
    lat: cleanCoord(input?.lat, -90, 90),
    lng: cleanCoord(input?.lng, -180, 180),
  }))
  .handler(async ({ data }): Promise<MemberPlace> => {
    const { upsertPlace } = await import("./member-places.server");
    return upsertPlace(data);
  });

export const clearMemberPlace = createServerFn({ method: "POST" })
  .validator((input: { id?: string; token?: string }) => ({
    id: cleanId(input?.id),
    token: cleanToken(input?.token),
  }))
  .handler(async ({ data }): Promise<{ ok: true }> => {
    const { deletePlace } = await import("./member-places.server");
    await deletePlace(data.id, data.token);
    return { ok: true };
  });
