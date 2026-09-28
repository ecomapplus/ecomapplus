import { useState } from "react";
import { useCurrentUserState } from "@/lib/auth/use-current-user";
import { getHallVoice, hallPeerId, subscribeHallVoice, type HallVoiceSnapshot } from "@/lib/hall-voice";
import { moderateHallMedia, type HallMediaAction } from "@/lib/hall-moderation";
import { isPlusAdminEmail } from "@/lib/plus-membership";
import { useEffect } from "react";

function useHallVoice() {
  const [voice, setVoice] = useState<HallVoiceSnapshot>(() => getHallVoice());
  useEffect(() => subscribeHallVoice(() => setVoice(getHallVoice())), []);
  return voice;
}

export function HallModerator({
  people,
}: {
  people: { id: string; name: string; isMe: boolean }[];
}) {
  const { user } = useCurrentUserState();
  const voice = useHallVoice();
  const [busyId, setBusyId] = useState<string | null>(null);
  const [note, setNote] = useState<string | null>(null);
  if (!isPlusAdminEmail(user?.primaryEmail)) return null;

  const liveIds = new Set(voice.peers.map((peer) => peer.id));
  const rows = people.filter((person) => !person.isMe && liveIds.has(hallPeerId(person.id)));

  async function act(person: { id: string; name: string }, action: HallMediaAction) {
    setBusyId(`${person.id}:${action}`);
    setNote(null);
    try {
      await moderateHallMedia({ data: { targetUserId: person.id, action } });
      setNote(action === "mute" ? `Muted ${person.name}.` : `Removed ${person.name}'s video.`);
    } catch {
      setNote("Could not do that.");
    } finally {
      setBusyId(null);
    }
  }

  return (
    <section className="mt-6" data-hall-moderator>
      <h2 className="font-display text-xl text-fg">Moderator</h2>
      <p className="mt-1 text-sm text-muted">Mute someone, or take their camera off. They can turn it back on.</p>
      {rows.length === 0 ? (
        <p className="mt-3 text-sm text-muted">No one else is in the square right now.</p>
      ) : (
        <ul className="mt-3 divide-y divide-border border-y border-border">
          {rows.map((person) => (
            <li key={person.id} className="flex flex-wrap items-center justify-between gap-2 py-3">
              <span className="font-medium text-fg">{person.name}</span>
              <span className="flex flex-wrap gap-2">
                <button
                  type="button"
                  disabled={busyId !== null}
                  onClick={() => void act(person, "mute")}
                  className="inline-flex min-h-11 items-center rounded-md bg-bg px-3 text-sm font-medium text-fg shadow-border"
                >
                  Mute
                </button>
                <button
                  type="button"
                  disabled={busyId !== null}
                  onClick={() => void act(person, "drop-video")}
                  className="inline-flex min-h-11 items-center rounded-md bg-bg px-3 text-sm font-medium text-fg shadow-border"
                >
                  Remove video
                </button>
              </span>
            </li>
          ))}
        </ul>
      )}
      {note ? <p className="mt-2 text-sm text-muted">{note}</p> : null}
    </section>
  );
}
