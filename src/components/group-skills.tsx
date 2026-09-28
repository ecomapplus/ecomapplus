import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { PersonNameButton } from "@/components/person-preview";
import { getRoomSkillCounts, listRoomSkillPeople, type RoomSkillCount, type SkillPerson } from "@/lib/room-skills";
import { startLivePoll } from "@/lib/live-poll";

export function GroupSkills({
  roomId,
  memberCount,
  openHall = false,
  onOpenPerson,
}: {
  roomId: string;
  memberCount: number | null;
  openHall?: boolean;
  onOpenPerson: (userId: string) => void;
}) {
  const [rows, setRows] = useState<RoomSkillCount[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [openId, setOpenId] = useState<string | null>(null);
  const [people, setPeople] = useState<SkillPerson[] | null>(null);
  const [peopleBusy, setPeopleBusy] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const apply = (next: RoomSkillCount[]) => {
      if (cancelled) return;
      setRows((prev) => {
        const stamp = (list: RoomSkillCount[]) => list.map((r) => `${r.id}:${r.count}`).join("|");
        return prev && stamp(prev) === stamp(next) ? prev : next;
      });
    };
    getRoomSkillCounts({ data: roomId })
      .then(apply)
      .catch((err) => {
        if (!cancelled) setError(err instanceof Error ? err.message : "Could not load skills.");
      });
    const stop = startLivePoll(() => {
      getRoomSkillCounts({ data: roomId })
        .then(apply)
        .catch(() => {
          /* keep last */
        });
    }, 15000);
    return () => {
      cancelled = true;
      stop();
    };
  }, [roomId]);

  useEffect(() => {
    setOpenId(null);
    setPeople(null);
  }, [roomId]);

  useEffect(() => {
    if (!openId) {
      setPeople(null);
      return;
    }
    let cancelled = false;
    setPeopleBusy(true);
    listRoomSkillPeople({ data: { roomId, skillId: openId } })
      .then((next) => {
        if (!cancelled) setPeople(next);
      })
      .catch((err) => {
        if (!cancelled) setError(err instanceof Error ? err.message : "Could not load who has that skill.");
      })
      .finally(() => {
        if (!cancelled) setPeopleBusy(false);
      });
    return () => {
      cancelled = true;
    };
  }, [openId, roomId]);

  function toggleSkill(id: string) {
    setError(null);
    setOpenId((current) => (current === id ? null : id));
  }

  return (
    <div className="flex min-h-0 flex-1 flex-col overflow-y-auto px-4 py-4">
      <h3 className="font-display text-xl text-fg">{openHall ? "Skills in the village square" : "Skills in this group"}</h3>
      <p className="mt-1 text-sm text-muted">
        {openHall
          ? "Tap a skill to see who listed it in the village square."
          : `Tap a skill to see who in this group listed it${
              memberCount != null ? ` · ${memberCount} ${memberCount === 1 ? "member" : "members"}` : ""
            }.`}
        {!openHall ? " Counts stay in the room until the three founders agree to go public." : ""}
      </p>
      {error ? <p className="mt-3 text-sm text-forest-deep">{error}</p> : null}
      {!rows ? (
        <div className="mt-4 h-40 animate-pulse rounded-md bg-panel" />
      ) : (
        <ul className="mt-4 divide-y divide-border">
          {rows.map((row) => {
            const open = openId === row.id;
            return (
              <li key={row.id}>
                <button
                  type="button"
                  onClick={() => toggleSkill(row.id)}
                  className="flex min-h-11 w-full items-center justify-between gap-3 py-2 text-left"
                  aria-expanded={open}
                >
                  <span className="min-w-0">
                    <span className="block text-sm font-medium text-fg">{row.label}</span>
                    <span className="block text-xs text-muted">{row.detail}</span>
                  </span>
                  <span className="flex shrink-0 items-center gap-2">
                    <span
                      className={`tabular-nums text-sm font-medium ${row.count > 0 ? "text-fg" : "text-subtle"}`}
                    >
                      {row.count}
                    </span>
                    <ChevronDown
                      className={`size-4 text-muted transition-transform ${open ? "rotate-180" : ""}`}
                      aria-hidden
                    />
                  </span>
                </button>
                {open ? (
                  <div className="pb-3 pl-1">
                    {peopleBusy && people === null ? (
                      <p className="text-sm text-muted">Looking that up…</p>
                    ) : !people || people.length === 0 ? (
                      <p className="text-sm text-muted">No one has listed this yet.</p>
                    ) : (
                      <ul className="space-y-1">
                        {people.map((person) => (
                          <li key={person.id}>
                            <PersonNameButton
                              userId={person.id}
                              onOpen={onOpenPerson}
                              className="inline-flex min-h-11 items-center font-medium text-forest hover:underline"
                            >
                              {person.name}
                            </PersonNameButton>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : null}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
