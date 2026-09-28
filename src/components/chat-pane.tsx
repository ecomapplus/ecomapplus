import { useEffect, useRef, useState, type FormEvent } from "react";
import { Link } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  deleteHallMessage,
  decideJoin,
  getRoom,
  inviteToRoom,
  postMessage,
  renameRoom,
  requestJoin,
  type RoomView,
} from "@/lib/chat";
import { amIAdmin } from "@/lib/admin";
import { GroupAbout } from "@/components/group-about";
import { GroupAgreements } from "@/components/group-agreements";
import { GroupCollab } from "@/components/group-collab";
import { GroupVotes } from "@/components/group-votes";
import { GroupFunding } from "@/components/group-funding";
import { GroupPublicFace } from "@/components/group-public";
import { GroupSkills } from "@/components/group-skills";
import { GroupTasks } from "@/components/group-tasks";
import { CaravanPanel } from "@/components/caravan";
import { VoiceChat } from "@/components/voice-chat";
import { HallMicButton } from "@/components/hall-mic-button";
import { HallVideoSquare } from "@/components/hall-square-stage";
import { PersonNameButton } from "@/components/person-preview";
import { PresenceMark } from "@/components/presence-mark";
import { VillageChip } from "@/components/village-chip";
import { VillagePicker } from "@/components/village-picker";
import { listPeople, type PersonCard } from "@/lib/people";
import { isUnauthorized } from "@/lib/social";
import { startLivePoll } from "@/lib/live-poll";
import { useCurrentUserState } from "@/lib/auth/use-current-user";
import { cacheRoomChat, forgetCachedHall } from "@/lib/chat-cache";
import { villageRef, villageSlugFromText, type VillageRef } from "@/data/communities";

type Tab = "talk" | "route" | "about" | "collab" | "funding" | "skills" | "votes" | "agreements" | "tasks";

function ChatBody({ text, mine }: { text: string; mine: boolean }) {
  const parts = text.split(/(\/caravans\/[a-zA-Z0-9_-]+|https?:\/\/[^\s]+)/g);
  const linkClass = mine ? "underline decoration-cream/70" : "font-medium text-forest underline";
  return (
    <>
      {parts.map((part, index) => {
        const caravan = part.match(/^\/caravans\/([a-zA-Z0-9_-]+)$/);
        if (caravan?.[1]) {
          return (
            <Link key={`${part}-${index}`} to="/caravans/$roomId" params={{ roomId: caravan[1] }} className={linkClass}>
              Join this caravan
            </Link>
          );
        }
        if (/^https?:\/\//.test(part)) {
          return (
            <a key={`${part}-${index}`} href={part} className={linkClass} rel="noreferrer">
              {part}
            </a>
          );
        }
        return <span key={`${part}-${index}`}>{part}</span>;
      })}
    </>
  );
}

function roomStamp(room: RoomView) {
  const last = room.messages[room.messages.length - 1];
  return [
    room.id,
    room.name,
    room.memberCount,
    room.pendingCount,
    room.isMember ? 1 : 0,
    room.messages.length,
    last?.id ?? 0,
    last?.createdAt ?? "",
    room.statsArePublic ? 1 : 0,
    room.publishProposal?.proposedBy ?? "",
    room.publishProposal?.agreed.map((row) => row.userId).join(",") ?? "",
    room.caravan?.startLocked ? 1 : 0,
    room.caravan?.founderCount ?? 0,
    room.caravan?.villageCount ?? 0,
    room.caravan?.plan.stops.map((stop) => stop.slug ?? stop.id).join(",") ?? "",
    Math.round(room.caravan?.plan.totalKm ?? 0),
    room.caravan?.proposal?.agreed.map((row) => row.userId).join(",") ?? "",
    room.members.map((m) => `${m.id}:${m.online ? 1 : 0}`).join(","),
  ].join("|");
}

export function ChatPane({
  roomId,
  meId,
  onOpenPerson,
}: {
  roomId: string;
  meId: string | null;
  onOpenPerson: (userId: string) => void;
}) {
  const [room, setRoom] = useState<RoomView | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [body, setBody] = useState("");
  const [busy, setBusy] = useState(false);
  const [renaming, setRenaming] = useState(false);
  const [nameDraft, setNameDraft] = useState("");
  const [inviting, setInviting] = useState(false);
  const [people, setPeople] = useState<PersonCard[]>([]);
  const [tab, setTab] = useState<Tab>("talk");
  const [isAdmin, setIsAdmin] = useState(false);
  const [village, setVillage] = useState<VillageRef | null>(null);
  const [pickingVillage, setPickingVillage] = useState(false);
  const signedIn = Boolean(meId);
  const { user } = useCurrentUserState();
  const myEmail = user?.primaryEmail ?? "";
  const loginRedirect = room?.kind === "caravan" ? `/caravans/${roomId}` : roomId === "hall" ? "/hall" : `/hall?room=${roomId}`;
  const listRef = useRef<HTMLOListElement>(null);
  const seenRoom = useRef<string | null>(null);
  const lastMsgId = useRef<number>(0);
  const stickAfterSend = useRef(false);

  useEffect(() => {
    let cancelled = false;
    if (seenRoom.current !== roomId) {
      setRoom(null);
      setTab("talk");
    }
    const apply = (next: RoomView) => {
      if (cancelled) return;
      if (seenRoom.current !== next.id) {
        setTab(next.kind === "caravan" ? "route" : "talk");
      }
      setRoom((prev) => {
        if (prev && roomStamp(prev) === roomStamp(next)) return prev;
        if (myEmail) cacheRoomChat(myEmail, next, myEmail);
        return next;
      });
    };
    if (roomId === "hall" && myEmail) forgetCachedHall(myEmail);
    getRoom({ data: roomId })
      .then(apply)
      .catch((err) => {
        if (cancelled) return;
        setRoom((prev) => {
          if (prev && prev.id === roomId) return prev;
          if (roomId !== "hall") return prev;
          return {
            id: "hall",
            kind: "public",
            name: "The village square",
            memberCount: 0,
            isMember: true,
            isFounder: false,
            requested: false,
            pendingCount: 0,
            nameIsPublic: true,
            statsArePublic: false,
            mission: null,
            thumbnail: null,
            pledgedUsd: null,
            goalUsd: null,
            skillCounts: null,
            founderIds: [],
            members: [],
            requests: [],
            publishProposal: null,
            caravan: null,
            messages: [],
          };
        });
        setError(isUnauthorized(err) ? "Sign in to post or use the tools." : "Could not load the chat.");
      });
    const stop = startLivePoll(() => {
      getRoom({ data: roomId })
        .then(apply)
        .catch(() => {
          /* keep last good view */
        });
    }, 8000);
    return () => {
      cancelled = true;
      stop();
    };
  }, [roomId, myEmail]);

  useEffect(() => {
    if (!signedIn) {
      setIsAdmin(false);
      return;
    }
    let cancelled = false;
    amIAdmin()
      .then((row) => {
        if (!cancelled) setIsAdmin(Boolean(row.admin));
      })
      .catch(() => {
        if (!cancelled) setIsAdmin(false);
      });
    return () => {
      cancelled = true;
    };
  }, [signedIn, meId]);

  const lastId = room?.messages.length ? room.messages[room.messages.length - 1].id : 0;

  useEffect(() => {
    if (!room) return;
    const last = room.messages[room.messages.length - 1];
    const id = last?.id ?? 0;
    const list = listRef.current;
    const pinList = () => {
      if (!list) return;
      list.scrollTop = list.scrollHeight;
    };

    if (seenRoom.current !== roomId) {
      seenRoom.current = roomId;
      lastMsgId.current = id;
      requestAnimationFrame(pinList);
      return;
    }

    const grew = id !== lastMsgId.current;
    lastMsgId.current = id;
    if (!grew) return;

    const force = stickAfterSend.current;
    stickAfterSend.current = false;
    const nearBottom = list
      ? list.scrollHeight - list.scrollTop - list.clientHeight < 120
      : true;
    if (force || nearBottom) requestAnimationFrame(pinList);
  }, [roomId, lastId, room?.messages.length]);

  async function onDeleteHall(id: number) {
    setBusy(true);
    setError(null);
    try {
      setRoom(await deleteHallMessage({ data: id }));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not delete that.");
    } finally {
      setBusy(false);
    }
  }

  async function onSend(event: FormEvent) {
    event.preventDefault();
    if (busy) return;
    if (!body.trim() && !village) return;
    setBusy(true);
    setError(null);
    try {
      stickAfterSend.current = true;
      const next = await postMessage({
        data: { roomId, body, villageSlug: village?.slug ?? null },
      });
      setRoom(next);
      setBody("");
      setVillage(null);
      setPickingVillage(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not send that.");
    } finally {
      setBusy(false);
    }
  }

  async function onRename(event: FormEvent) {
    event.preventDefault();
    setBusy(true);
    try {
      const next = await renameRoom({ data: { roomId, name: nameDraft } });
      setRoom(next);
      setRenaming(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not rename that.");
    } finally {
      setBusy(false);
    }
  }

  async function onRequest() {
    setBusy(true);
    try {
      setRoom(await requestJoin({ data: roomId }));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not ask to join.");
    } finally {
      setBusy(false);
    }
  }

  async function onDecide(userId: string, approve: boolean) {
    setBusy(true);
    try {
      setRoom(await decideJoin({ data: { roomId, userId, approve } }));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not decide that.");
    } finally {
      setBusy(false);
    }
  }

  async function openInvite() {
    setInviting(true);
    try {
      setPeople(await listPeople());
    } catch {
      setPeople([]);
    }
  }

  async function onInvite(userId: string) {
    setBusy(true);
    try {
      setRoom(await inviteToRoom({ data: { roomId, userId } }));
      setInviting(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not invite them.");
    } finally {
      setBusy(false);
    }
  }

  if (!room && !error) {
    return (
      <div className="flex min-h-96 flex-1 flex-col rounded-lg border border-border bg-surface p-4">
        <div className="h-8 w-40 animate-pulse rounded-md bg-panel" />
        <div className="mt-4 flex-1 animate-pulse rounded-md bg-panel" />
      </div>
    );
  }

  if (!room) {
    return (
      <div className="flex min-h-96 flex-1 items-center justify-center rounded-lg border border-border bg-surface p-6 text-muted">
        {error ?? "Unknown chat"}
      </div>
    );
  }

  const memberIds = new Set(room.members.map((m) => m.id));
  const invitees = people.filter((p) => !p.isMe && !memberIds.has(p.id));
  const closedBlurb = room.statsArePublic
    ? "Anyone can see the name, mission, photo, pledged amount versus the goal, and skill counts. Talk and history stay with the people who are in it. Ask, and a founder can let you in."
    : "This group stays private until the three founders agree on the mission, the funding goal, and the thumbnail. Talk stays with the people who are in it.";

  const tabClass = (id: Tab) =>
    `min-h-11 px-3 text-sm font-medium ${
      tab === id ? "border-b-2 border-forest text-fg" : "text-muted hover:text-fg"
    }`;

  return (
    <section className="flex min-h-96 flex-1 flex-col overflow-hidden rounded-lg border border-border bg-surface shadow-border">
      {room.kind === "public" ? (
        <HallVideoSquare />
      ) : (
      <header className="border-b border-border px-4 py-3">
        {renaming ? (
          <form onSubmit={onRename} className="flex gap-2">
            <input
              value={nameDraft}
              onChange={(e) => setNameDraft(e.target.value)}
              maxLength={80}
              className="h-11 min-w-0 flex-1 rounded-md border border-border bg-bg px-3 text-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest/40"
            />
            <Button type="submit" size="sm" disabled={busy}>
              Save name
            </Button>
            <Button type="button" size="sm" variant="ghost" onClick={() => setRenaming(false)}>
              Cancel
            </Button>
          </form>
        ) : (
          <div className="flex flex-wrap items-start justify-between gap-2">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-moss">
                {room.kind === "caravan" ? "Eco-community caravan" : "Private group"}
              </p>
              <h2 className="mt-1 font-display text-2xl text-fg">{room.name}</h2>
              <p className="text-xs text-muted">
                {room.kind === "caravan"
                    ? room.caravan
                      ? room.caravan.startLocked
                        ? `${room.memberCount} on the caravan · start is set`
                        : `${room.caravan.founderCount} of 3 founders · start not set yet`
                      : "A travel plan shared in the hall"
                    : room.isMember
                    ? `${room.memberCount} ${room.memberCount === 1 ? "member" : "members"}${
                        room.statsArePublic ? " · public project" : ""
                      }`
                    : room.statsArePublic
                      ? `${room.memberCount} members · public project`
                      : room.nameIsPublic
                        ? "Closed group. The name is public. Talk is not."
                        : "Closed group"}
              </p>
              {room.isMember && room.members.length > 0 ? (
                <ul className="mt-2 flex flex-wrap gap-x-3 gap-y-1">
                  {room.members.map((member) => (
                    <li key={member.id} className="flex items-center gap-1.5">
                      <PersonNameButton
                        userId={member.id}
                        onOpen={onOpenPerson}
                        className="text-xs font-medium text-forest hover:underline"
                      >
                        {member.id === meId ? "You" : member.name}
                      </PersonNameButton>
                      <PresenceMark online={member.online} />
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
            {room.isFounder ? (
              <div className="flex gap-1">
                <Button
                  type="button"
                  size="sm"
                  variant="outline"
                  onClick={() => {
                    setNameDraft(room.name);
                    setRenaming(true);
                  }}
                >
                  Rename
                </Button>
                {room.kind === "caravan" && room.caravan && room.caravan.founderCount >= 3 && !room.caravan.startLocked ? null : (
                <Button type="button" size="sm" variant="outline" onClick={() => void openInvite()}>
                  Invite
                </Button>
                )}
              </div>
            ) : null}
          </div>
        )}
      </header>
      )}

      {inviting ? (
        <div className="border-b border-border bg-panel px-4 py-3">
          <p className="text-sm font-medium text-fg">Invite someone in</p>
          <ul className="mt-2 max-h-40 overflow-y-auto">
            {invitees.length === 0 ? (
              <li className="text-sm text-muted">Everyone here is already in this chat.</li>
            ) : (
              invitees.map((person) => (
                <li key={person.id} className="flex items-center justify-between gap-2 py-1">
                  <span className="flex min-w-0 items-center gap-2">
                    <PersonNameButton
                      userId={person.id}
                      onOpen={onOpenPerson}
                      className="min-h-11 text-left text-sm font-medium text-forest hover:underline"
                    >
                      {person.name}
                    </PersonNameButton>
                    <PresenceMark online={person.online} hasAccount={person.hasAccount} />
                  </span>
                  <Button type="button" size="sm" variant="ghost" disabled={busy} onClick={() => void onInvite(person.id)}>
                    Invite
                  </Button>
                </li>
              ))
            )}
          </ul>
          <button type="button" className="mt-2 text-xs text-forest hover:underline" onClick={() => setInviting(false)}>
            Close
          </button>
        </div>
      ) : null}

      {room.isFounder && room.requests.length > 0 ? (
        <div className="border-b border-border bg-panel px-4 py-3">
          <p className="text-sm font-medium text-fg">Want to join</p>
          <ul className="mt-2 space-y-2">
            {room.requests.map((req) => (
              <li key={req.userId} className="flex flex-wrap items-center justify-between gap-2">
                <PersonNameButton
                  userId={req.userId}
                  onOpen={onOpenPerson}
                  className="min-h-11 text-sm font-medium text-forest hover:underline"
                >
                  {req.name}
                </PersonNameButton>
                <span className="flex gap-1">
                  <Button type="button" size="sm" disabled={busy} onClick={() => void onDecide(req.userId, true)}>
                    Approve
                  </Button>
                  <Button type="button" size="sm" variant="outline" disabled={busy} onClick={() => void onDecide(req.userId, false)}>
                    Ignore
                  </Button>
                </span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {room.kind === "public" || room.kind === "caravan" || (room.isMember && signedIn) ? (
        <>
          {room.kind !== "public" && room.isMember && signedIn ? (
          <div className="flex items-center gap-2 px-2 pt-2">
            <VoiceChat
              key={room.id}
              roomId={room.id}
              meId={meId}
              meName={user?.displayName ?? "Member"}
              signedIn={signedIn}
              loginRedirect={loginRedirect}
            />
          </div>
          ) : null}
          <div className="flex flex-wrap border-b border-border px-2">
          {room.kind === "caravan" ? (
            <button type="button" onClick={() => setTab("route")} className={tabClass("route")}>
              Route
            </button>
          ) : null}
          {room.kind === "public" || room.isMember ? (
          <button type="button" onClick={() => setTab("talk")} className={tabClass("talk")}>
            Chat
          </button>
          ) : null}
          {room.kind === "public" ? (
            <>
              <button type="button" onClick={() => setTab("skills")} className={tabClass("skills")}>
                Skills
              </button>
              <button type="button" onClick={() => setTab("agreements")} className={tabClass("agreements")}>
                Agreements
              </button>
              <button type="button" onClick={() => setTab("tasks")} className={tabClass("tasks")}>
                Tasks
              </button>
              <button type="button" onClick={() => setTab("votes")} className={tabClass("votes")}>
                Vote
              </button>
            </>
          ) : null}
          {room.kind === "private" && room.isMember && signedIn ? (
            <>
              <button type="button" onClick={() => setTab("about")} className={tabClass("about")}>
                About
              </button>
              <button type="button" onClick={() => setTab("collab")} className={tabClass("collab")}>
                Collaboration
              </button>
              <button type="button" onClick={() => setTab("funding")} className={tabClass("funding")}>
                Funding
              </button>
              <button type="button" onClick={() => setTab("skills")} className={tabClass("skills")}>
                Skills
              </button>
            </>
          ) : null}
        </div>
        </>
      ) : null}

      {tab === "route" && room.caravan ? (
        <CaravanPanel
          caravan={room.caravan}
          meId={meId}
          signedIn={signedIn}
          loginRedirect={loginRedirect}
          onOpenPerson={onOpenPerson}
          onChanged={(next) => {
            if (next) {
              setRoom((prev) => (prev ? { ...prev, caravan: next } : prev));
            }
          }}
        />
      ) : tab === "about" && room.isMember && signedIn && room.kind === "private" ? (
        <GroupAbout room={room} meId={meId} onUpdated={setRoom} />
      ) : room.isMember && signedIn && tab === "collab" && room.kind === "private" ? (
        <GroupCollab
          roomId={room.id}
          roomName={room.name}
          members={room.members}
          meId={meId ?? ""}
          onOpenPerson={onOpenPerson}
        />
      ) : room.isMember && signedIn && tab === "funding" && room.kind === "private" ? (
        <GroupFunding roomId={room.id} meId={meId ?? ""} isFounder={room.isFounder} onOpenPerson={onOpenPerson} />
      ) : tab === "skills" && (room.kind === "public" || (room.isMember && signedIn)) ? (
        <GroupSkills
          roomId={room.id}
          memberCount={room.kind === "private" ? room.memberCount : null}
          openHall={room.kind === "public"}
          onOpenPerson={onOpenPerson}
        />
      ) : tab === "votes" && room.kind === "public" ? (
        <GroupVotes
          roomId={room.id}
          meId={meId ?? ""}
          onOpenPerson={onOpenPerson}
          openHall
        />
      ) : tab === "agreements" && room.kind === "public" ? (
        <GroupAgreements
          roomId={room.id}
          roomName={room.name}
          members={people.map((p) => ({ id: p.id, name: p.name }))}
          meId={meId ?? ""}
          onOpenPerson={onOpenPerson}
          openHall
        />
      ) : tab === "tasks" && room.kind === "public" ? (
        <GroupTasks
          roomId={room.id}
          meId={meId ?? ""}
          onOpenPerson={onOpenPerson}
          openHall
        />
      ) : room.kind === "public" || room.isMember ? (
        <>
          <ol ref={listRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
            {room.messages.length === 0 ? (
              <li className="text-sm text-muted">No one has spoken yet.</li>
            ) : (
              room.messages.map((msg) => {
                const sent = formatSentAt(msg.createdAt);
                return (
                <li key={msg.id} className={msg.userId === meId ? "text-right" : ""}>
                  <p className="text-xs text-subtle">
                    <PersonNameButton
                      userId={msg.userId}
                      onOpen={onOpenPerson}
                      className="font-medium text-forest hover:underline"
                    >
                      {msg.authorName}
                    </PersonNameButton>
                    {" · "}
                    <PresenceMark online={msg.online} hasAccount={msg.hasAccount} />
                    {sent ? (
                      <>
                        {" · "}
                        <time className="tabular-nums" dateTime={toDateTime(msg.createdAt)}>
                          {sent}
                        </time>
                      </>
                    ) : null}
                  </p>
                  {msg.body ? (
                  <p
                    className={`mt-0.5 inline-block max-w-[90%] rounded-md px-3 py-2 text-left text-sm leading-relaxed ${
                      msg.userId === meId ? "bg-forest text-cream" : "bg-panel text-fg"
                    }`}
                  >
                    <ChatBody text={msg.body} mine={msg.userId === meId} />
                  </p>
                  ) : null}
                  {msg.village ? (
                    <div className={msg.userId === meId ? "flex justify-end" : ""}>
                      <VillageChip village={msg.village} mine={msg.userId === meId} />
                    </div>
                  ) : null}
                  {isAdmin && room.kind === "public" ? (
                    <button
                      type="button"
                      disabled={busy}
                      onClick={() => void onDeleteHall(msg.id)}
                      className="mt-1 text-xs font-medium text-muted hover:text-forest-deep"
                    >
                      Delete
                    </button>
                  ) : null}
                </li>
                );
              })
            )}
          </ol>
          {signedIn ? (
            <form onSubmit={onSend} className="border-t border-border">
              {village ? (
                <div className="px-3 pt-3">
                  <VillageChip village={village} compact onRemove={() => setVillage(null)} />
                </div>
              ) : pickingVillage ? (
                <VillagePicker
                  onPick={(next) => {
                    setVillage(next);
                    setPickingVillage(false);
                  }}
                  onClose={() => setPickingVillage(false)}
                />
              ) : null}
              <div className="flex gap-2 p-3">
                {room.kind === "public" ? (
                  <HallMicButton inline loginRedirect={loginRedirect} />
                ) : null}
                <input
                  value={body}
                  onChange={(e) => {
                    const next = e.target.value;
                    setBody(next);
                    if (!village) {
                      const slug = villageSlugFromText(next);
                      if (slug) setVillage(villageRef(slug));
                    }
                  }}
                  maxLength={1000}
                  placeholder={
                    room.kind === "public" ? "Write to the square, or link a village" : "Write to the room"
                  }
                  className="h-11 min-w-0 flex-1 rounded-md border border-border bg-bg px-3 text-fg placeholder:text-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest/40"
                />
                <button
                  type="button"
                  onClick={() => setPickingVillage((open) => !open)}
                  className={`inline-flex size-11 shrink-0 items-center justify-center rounded-md border ${
                    pickingVillage || village
                      ? "border-forest bg-forest/10 text-forest"
                      : "border-border bg-bg text-muted hover:text-fg"
                  }`}
                  aria-label="Link a village"
                  title="Link a village"
                >
                  <MapPin className="size-4" aria-hidden />
                </button>
                <Button type="submit" disabled={busy || (!body.trim() && !village)}>
                  Send
                </Button>
              </div>
            </form>
          ) : (
            <p className="flex items-center gap-3 border-t border-border px-4 py-3 text-sm text-muted">
              {room.kind === "public" ? (
                <HallMicButton inline loginRedirect={loginRedirect} />
              ) : null}
              <span>
                <Link to="/login" search={{ redirect: loginRedirect }} className="font-medium text-forest hover:underline">
                  Sign in to post
                </Link>{" "}
                in the {room.kind === "public" ? "village square" : "group"}.
              </span>
            </p>
          )}
        </>
      ) : (
        <div className="flex min-h-0 flex-1 flex-col">
          {room.statsArePublic ? <GroupPublicFace group={room} /> : null}
          <div className={`flex flex-col items-start gap-3 px-6 ${room.statsArePublic ? "border-t border-border py-5" : "flex-1 justify-center py-12"}`}>
            {room.statsArePublic ? null : <p className="font-display text-xl text-fg">You are outside this chat</p>}
            <p className="max-w-md text-sm leading-relaxed text-muted">{closedBlurb}</p>
            {!signedIn ? (
              <Button asChild>
                <Link to="/login" search={{ redirect: loginRedirect }}>
                  Sign in to request to join
                </Link>
              </Button>
            ) : room.requested ? (
              <p className="text-sm text-muted">Request sent. Waiting on a founder.</p>
            ) : (
              <Button type="button" disabled={busy} onClick={() => void onRequest()}>
                Request to join
              </Button>
            )}
          </div>
        </div>
      )}
      {error ? <p className="px-4 pb-3 text-sm text-forest-deep">{error}</p> : null}
    </section>
  );
}

function parseSentDate(value: string): Date | null {
  const date = new Date(value);
  if (!Number.isNaN(date.getTime())) return date;
  const fallback = new Date(value.replace(" ", "T"));
  return Number.isNaN(fallback.getTime()) ? null : fallback;
}

function formatSentAt(value: string): string {
  const date = parseSentDate(value);
  if (!date) return "";
  return date.toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

function toDateTime(value: string): string {
  return parseSentDate(value)?.toISOString() ?? value;
}
