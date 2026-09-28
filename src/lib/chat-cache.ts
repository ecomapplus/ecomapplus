import type { RoomView } from "@/lib/chat";

const prefix = "vc-chats:";

export type CachedChatRoom = {
  roomId: string;
  roomKey: string;
  kind: "public" | "private" | "caravan";
  roomName: string;
  otherEmail: string | null;
  messages: {
    authorEmail?: string | null;
    authorName: string;
    body: string;
    createdAt: string;
    villageSlug?: string | null;
  }[];
};

function keyFor(email: string) {
  return prefix + email.trim().toLowerCase();
}

export function readCachedChats(email: string): CachedChatRoom[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(keyFor(email));
    if (!raw) return [];
    const parsed = JSON.parse(raw) as unknown;
    return Array.isArray(parsed) ? (parsed as CachedChatRoom[]) : [];
  } catch {
    return [];
  }
}

export function forgetCachedHall(email: string) {
  if (typeof window === "undefined") return;
  const key = email.trim().toLowerCase();
  if (!key) return;
  try {
    const list = readCachedChats(key).filter(
      (row) => row.roomId !== "hall" && row.roomKey !== "hall" && row.kind !== "public",
    );
    window.localStorage.setItem(keyFor(key), JSON.stringify(list));
  } catch {
    /* quota */
  }
}

export function cacheRoomChat(email: string, room: RoomView, myEmail: string) {
  if (typeof window === "undefined") return;
  if (room.kind === "public" || room.id === "hall") {
    forgetCachedHall(email);
    return;
  }
  const key = email.trim().toLowerCase();
  if (!key) return;
  const otherEmail =
    room.kind === "private"
      ? room.messages.find((msg) => msg.authorEmail && msg.authorEmail !== myEmail)?.authorEmail ?? null
      : null;
  const next: CachedChatRoom = {
    roomId: room.id,
    roomKey: room.id,
    kind: room.kind,
    roomName: room.name,
    otherEmail,
    messages: room.messages.slice(-200).map((msg) => ({
      authorEmail: msg.authorEmail ?? null,
      authorName: msg.authorName,
      body: msg.body,
      createdAt: msg.createdAt,
      villageSlug: msg.villageSlug,
    })),
  };
  try {
    const list = readCachedChats(key).filter((row) => row.roomId !== room.id);
    list.unshift(next);
    window.localStorage.setItem(keyFor(key), JSON.stringify(list.slice(0, 30)));
  } catch {
    /* quota */
  }
}
