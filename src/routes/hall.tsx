import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { Avatar } from "@/components/avatar";
import { PresenceMark } from "@/components/presence-mark";
import { ChatPane } from "@/components/chat-pane";
import { FundingBar } from "@/components/funding-meter";
import { GroupProjectCard } from "@/components/group-public";
import { CaravanCardButton } from "@/components/caravan";
import { HallLand } from "@/components/hall-land";
import { HallModerator } from "@/components/hall-moderator";
import { HallMicButton } from "@/components/hall-mic-button";
import { HallSlideshow } from "@/components/hall-slideshow";
import { HallSquareStage, HallVideoSquare } from "@/components/hall-square-stage";
import { AddSquareOpening } from "@/components/add-square-opening";
import { PersonPreview } from "@/components/person-preview";
import { Button } from "@/components/ui/button";
import { HALL_ROOM_ID, listRooms, type RoomSummary } from "@/lib/chat";
import { listCaravans, type CaravanCard } from "@/lib/caravans";
import { useCurrentUserState } from "@/lib/auth/use-current-user";
import { listPeople, type PersonCard } from "@/lib/people";
import { PLUS_PRICE_LABEL, rememberPlusNext } from "@/lib/plus-membership";
import { CheckoutForm } from "@/routes/plus";
import { BOOKMARKS_CHANGED, isUnauthorized } from "@/lib/social";
import { OPEN_SQUARE_LABEL, splitRemaining, useSquareAccess, useSquareSession, useSquareWarmup } from "@/lib/square-hours";
import { useMounted } from "@/lib/use-mounted";
import { startLivePoll } from "@/lib/live-poll";

type HallSearch = { room?: string; canceled?: boolean };

function roomsStamp(rows: RoomSummary[]) {
  return rows
    .map((r) => `${r.id}:${r.memberCount}:${r.name}:${r.pendingCount}:${r.isMember ? 1 : 0}:${r.requested ? 1 : 0}`)
    .join("|");
}

function caravansStamp(rows: CaravanCard[]) {
  return rows
    .map((c) => `${c.roomId}:${c.memberCount}:${c.founderCount}:${c.startLocked ? 1 : 0}:${c.startDate ?? ""}:${c.title}`)
    .join("|");
}

type PeopleSort = "name" | "shared";

function peopleStamp(rows: PersonCard[]) {
  return rows.map((p) => `${p.id}:${p.name}:${p.wantsToFound ? 1 : 0}:${p.image ? 1 : 0}:${p.isMe ? 1 : 0}:${p.online ? 1 : 0}:${p.sharedBookmarks}`).join("|");
}

export const Route = createFileRoute("/hall")({
  ssr: false,
  component: HallPage,
  validateSearch: (search: Record<string, unknown>): HallSearch => ({
    room: typeof search.room === "string" ? search.room : undefined,
    canceled: search.canceled === "1" || search.canceled === true ? true : undefined,
  }),
  head: () => ({
    meta: [{ title: "The village square · ecocommunitymap.com" }],
  }),
});

function HallPage() {
  const { room: roomParam, canceled } = Route.useSearch();
  const roomId = roomParam && /^[a-zA-Z0-9_-]{2,64}$/.test(roomParam) ? roomParam : HALL_ROOM_ID;
  const navigate = useNavigate({ from: "/hall" });
  const mounted = useMounted();
  const { plus, openHour, allowed } = useSquareAccess();
  const { user } = useCurrentUserState();
  const [people, setPeople] = useState<PersonCard[] | null>(null);
  const [rooms, setRooms] = useState<RoomSummary[] | null>(null);
  const [caravans, setCaravans] = useState<CaravanCard[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [previewId, setPreviewId] = useState<string | null>(null);
  const [peopleSort, setPeopleSort] = useState<PeopleSort>("shared");

  useEffect(() => {
    let cancelled = false;
    function loadPeople() {
      listPeople()
        .then((nextPeople) => {
          if (!cancelled) {
            setPeople((prev) => (prev && peopleStamp(prev) === peopleStamp(nextPeople) ? prev : nextPeople));
          }
        })
        .catch((err) => {
          if (cancelled) return;
          setPeople((prev) => prev ?? []);
          if (!isUnauthorized(err)) setError("Could not load people right now.");
        });
    }
    function loadRooms() {
      listRooms()
        .then((nextRooms) => {
          if (cancelled) return;
          setRooms((prev) => (prev && roomsStamp(prev) === roomsStamp(nextRooms) ? prev : nextRooms));
        })
        .catch(() => {
          /* keep last */
        });
    }
    function loadCaravans() {
      listCaravans()
        .then((next) => {
          if (cancelled) return;
          setCaravans((prev) => (prev && caravansStamp(prev) === caravansStamp(next) ? prev : next));
        })
        .catch(() => {
          /* keep last */
        });
    }
    loadPeople();
    loadRooms();
    loadCaravans();
    const stop = startLivePoll(() => {
      loadPeople();
      loadRooms();
      loadCaravans();
    }, 12000);
    window.addEventListener(BOOKMARKS_CHANGED, loadPeople);
    return () => {
      cancelled = true;
      stop();
      window.removeEventListener(BOOKMARKS_CHANGED, loadPeople);
    };
  }, [user?.id]);

  const sortedPeople = useMemo(() => {
    if (!people) return [];
    const copy = [...people];
    if (peopleSort === "shared") {
      copy.sort((a, b) => {
        if (a.isMe !== b.isMe) return a.isMe ? -1 : 1;
        return b.sharedBookmarks - a.sharedBookmarks || a.name.localeCompare(b.name);
      });
    } else {
      copy.sort((a, b) => a.name.localeCompare(b.name));
    }
    return copy;
  }, [people, peopleSort]);

  if (!mounted) {
    return (
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-16">
        <div className="h-10 w-48 animate-pulse rounded-md bg-panel" />
        <div className="mt-6 h-96 animate-pulse rounded-lg bg-panel" />
      </main>
    );
  }

  if (!allowed) return <HallLocked />;

  const groups = (rooms ?? []).filter((r) => r.kind === "private" && !/sayulita/i.test(r.name));
  const projects = groups.filter((g) => g.statsArePublic);

  function openRoom(id: string) {
    void navigate({ search: { room: id } });
  }

  return (
    <main
      data-square-state={plus ? "member" : "open"}
      className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 py-8 sm:px-6 sm:py-10"
    >
      <p className="text-sm font-medium uppercase tracking-[0.16em] text-moss">Members</p>
      <h1 className="mt-2 font-display text-4xl leading-tight text-fg">The village square</h1>
      {openHour && !plus ? (
        <p
          data-square-open-hour
          className="mt-3 rounded-md bg-forest/10 px-3 py-2 text-sm leading-relaxed text-fg"
        >
          Open hour. Everyone can enter until 4:45pm PST — then EcoMapPlus keeps the door.
        </p>
      ) : null}
      {user ? null : (
        <p className="mt-3">
          <Link to="/login" search={{ redirect: "/hall" }} className="font-medium text-forest hover:underline">
            Sign in to post in the village square
          </Link>
        </p>
      )}
      {error ? <p className="mt-3 text-sm text-forest-deep">{error}</p> : null}

      <HallSlideshow />

      <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1fr)_16rem] lg:items-start">
        <div>
          <ChatPane roomId={roomId} meId={user?.id ?? null} onOpenPerson={setPreviewId} />
        </div>
        <aside>
          <h2 className="font-display text-xl text-fg">Eco-community caravans</h2>
          <p className="mt-1 text-xs text-muted">
            A travel plan submitted to the square. Open a caravan to see the route and join.
          </p>
          {(caravans ?? []).filter((caravan) => !/sayulita/i.test(caravan.title)).length > 0 ? (
            <ul className="mt-3 space-y-2">
              {(caravans ?? [])
                .filter((caravan) => !/sayulita/i.test(caravan.title))
                .map((caravan) => (
                <li key={caravan.roomId}>
                  <CaravanCardButton caravan={caravan} active={roomId === caravan.roomId} />
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-3 rounded-md border border-dashed border-border px-3 py-4 text-sm text-muted">
              Make a travel plan on the{" "}
              <Link to="/travel-plan" className="font-medium text-forest hover:underline">
                travel plan
              </Link>{" "}
              page, then submit it to the village square.
            </p>
          )}
        </aside>
      </div>

      <HallSquareStage />
      <HallModerator people={sortedPeople} />
      <HallLand signedIn={Boolean(user)} onOpenPerson={setPreviewId} />

      {projects.length > 0 ? (
        <section className="mt-8">
          <h2 className="font-display text-xl text-fg">Open projects</h2>
          <p className="mt-1 text-sm text-muted">
            Groups of three or more. Mission, photo, pledged versus goal, and skill counts are public.
          </p>
          <ul className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((group) => (
              <li key={group.id}>
                <GroupProjectCard group={group} active={roomId === group.id} onOpen={() => openRoom(group.id)} />
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <section className="mt-8">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <h2 className="font-display text-xl text-fg">People</h2>
          <div className="flex flex-wrap gap-1">
            <PeopleSortChip current={peopleSort} value="shared" onClick={setPeopleSort}>
              Shared bookmarks
            </PeopleSortChip>
            <PeopleSortChip current={peopleSort} value="name" onClick={setPeopleSort}>
              Name
            </PeopleSortChip>
          </div>
        </div>
        {peopleSort === "shared" ? (
          <p className="mt-1 text-sm text-muted">
            {user
              ? "People who saved the same villages as you, most overlap first."
              : (
                <>
                  <Link to="/login" search={{ redirect: "/hall" }} className="font-medium text-forest hover:underline">
                    Sign in
                  </Link>{" "}
                  to match people who saved the same villages as you.
                </>
              )}
          </p>
        ) : null}
        {!people ? (
          <div className="mt-3 h-20 animate-pulse rounded-md bg-panel" />
        ) : people.length === 0 ? (
          <p className="mt-3 text-sm text-muted">No one has signed in yet.</p>
        ) : (
          <ul className="mt-3 flex gap-3 overflow-x-auto pb-2">
            {sortedPeople.map((person) => (
              <li key={person.id} className="shrink-0">
                <button
                  type="button"
                  aria-haspopup="dialog"
                  onClick={() => setPreviewId(person.id)}
                  className="flex min-h-11 w-28 flex-col items-center rounded-lg border border-border bg-surface px-2 py-3 text-center shadow-border hover:border-forest/40"
                >
                  <Avatar name={person.name} image={person.image} online={person.online} />
                  <span className="mt-2 line-clamp-2 text-sm font-medium text-fg">
                    {person.isMe ? "You" : person.name}
                  </span>
                  <span className="mt-1">
                    <PresenceMark online={person.online} hasAccount={person.hasAccount} />
                  </span>
                  {person.wantsToFound ? <span className="mt-1 text-xs text-moss">Wants to found</span> : null}
                  {person.isMe || !user ? null : peopleSort === "shared" || person.sharedBookmarks > 0 ? (
                    <span className="mt-1 text-xs text-moss">
                      {person.sharedBookmarks} in common
                    </span>
                  ) : null}
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>

      <details className="mt-8 rounded-md border border-border bg-surface">
        <summary className="cursor-pointer px-4 py-3 font-display text-xl text-fg">
          Private groups
          <span className="ml-2 font-sans text-sm font-medium text-muted">
            {groups.find((group) => group.id === roomId)?.name ?? (groups.length === 0 ? "None yet" : String(groups.length))}
          </span>
        </summary>
        <div className="border-t border-border px-4 py-3">
          <p className="text-xs text-muted">
            Signing a village-square agreement puts you in a group. Names, mission, photo, and funding go public when the first three agree.
          </p>
          <ul className="mt-3 space-y-2">
            <li>
              <button
                type="button"
                onClick={() => openRoom(HALL_ROOM_ID)}
                className={`flex min-h-11 w-full items-center justify-between rounded-md border px-3 py-2 text-left text-sm ${
                  roomId === HALL_ROOM_ID ? "border-forest bg-panel" : "border-border bg-surface hover:border-forest/40"
                }`}
              >
                <span className="font-medium text-fg">The village square</span>
                <span className="text-xs text-muted">Open square</span>
              </button>
            </li>
            {groups.map((group) => (
              <li key={group.id}>
                <button
                  type="button"
                  onClick={() => openRoom(group.id)}
                  className={`flex min-h-11 w-full flex-col rounded-md border px-3 py-2 text-left ${
                    roomId === group.id ? "border-forest bg-panel" : "border-border bg-surface hover:border-forest/40"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {group.statsArePublic && group.thumbnail ? (
                      <img src={group.thumbnail} alt="" className="size-8 shrink-0 rounded-sm object-cover bg-panel" />
                    ) : null}
                    <span className="text-sm font-medium text-fg">{group.name}</span>
                  </span>
                  <span className="mt-0.5 text-xs text-muted">
                    {group.isMember
                      ? `${group.memberCount} in the room`
                      : group.requested
                        ? "Request sent"
                        : group.statsArePublic
                          ? `${group.memberCount} members · public`
                          : "Closed · request to join"}
                    {group.isFounder && group.pendingCount > 0 ? ` · ${group.pendingCount} waiting` : ""}
                  </span>
                  {group.statsArePublic ? (
                    <div className="mt-2 w-full">
                      <FundingBar pledgedUsd={group.pledgedUsd ?? 0} goalUsd={group.goalUsd} />
                    </div>
                  ) : null}
                </button>
              </li>
            ))}
            {groups.length === 0 ? (
              <li className="rounded-md border border-dashed border-border px-3 py-4 text-sm text-muted">
                Tap a name and send a personal message. Either of you can name the chat and invite others.
              </li>
            ) : null}
          </ul>
        </div>
      </details>

      {plus ? null : (
        <section className="mx-auto mt-10 w-full max-w-md rounded-lg border border-border bg-surface p-5 shadow-border sm:p-6">
          <CheckoutForm next="/hall" confirmError="" canceled={Boolean(canceled)} />
        </section>
      )}

      {previewId ? (
        <PersonPreview
          userId={previewId}
          onClose={() => setPreviewId(null)}
          onDeleted={() => {
            setPreviewId(null);
            void listPeople()
              .then(setPeople)
              .catch(() => {
                /* keep last */
              });
            void listRooms()
              .then(setRooms)
              .catch(() => {
                /* keep last */
              });
          }}
          onMessage={(nextRoom) => {
            setPreviewId(null);
            void listRooms()
              .then(setRooms)
              .catch(() => {
                /* keep last */
              });
            void navigate({ search: { room: nextRoom } });
          }}
        />
      ) : null}
    </main>
  );
}

function HallLocked() {
  const session = useSquareSession();
  const warmup = useSquareWarmup();
  const parts = session ? splitRemaining(session.remainingMs) : null;
  const time = parts
    ? `${pad(parts.days)}d ${pad(parts.hours)}h ${pad(parts.minutes)}m ${pad(parts.seconds)}s`
    : "––";

  return (
    <main data-square-state="locked" className="mx-auto flex w-full max-w-xl flex-1 flex-col px-4 py-12 sm:px-6 sm:py-16">
      <p className="text-sm font-medium uppercase tracking-[0.16em] text-moss">Village square</p>
      <h1 className="mt-2 font-display text-4xl leading-tight text-fg">The door opens Monday</h1>
      <p className="mt-4 text-lg leading-relaxed text-muted">
        Free for fifteen minutes, {OPEN_SQUARE_LABEL}. When the clock hits zero, the square is open.
      </p>
      <p
        role="timer"
        aria-label={`Next open village square ${time}. ${OPEN_SQUARE_LABEL}`}
        className="mt-8 font-display text-4xl tabular-nums text-fg sm:text-5xl"
      >
        {time}
      </p>
      <AddSquareOpening className="mt-4" />
      {warmup ? (
        <div className="mt-8">
          <HallVideoSquare hideWhenEmpty />
          <div className="mt-3">
            <HallMicButton inline />
          </div>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            Nobody else can see or hear you until the square opens.
          </p>
        </div>
      ) : null}
      <p className="mt-3 text-sm leading-relaxed text-muted">{PLUS_PRICE_LABEL} keeps the door open the rest of the week.</p>
      <HallSlideshow manageOnly />
      <Button asChild size="lg" className="mt-8 w-full sm:w-auto">
        <Link to="/plus" onClick={() => rememberPlusNext("/hall")}>
          Join EcoMapPlus · {PLUS_PRICE_LABEL}
        </Link>
      </Button>
    </main>
  );
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

function PeopleSortChip({
  current,
  value,
  onClick,
  children,
}: {
  current: PeopleSort;
  value: PeopleSort;
  onClick: (next: PeopleSort) => void;
  children: string;
}) {
  const active = current === value;
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={() => onClick(value)}
      className={`inline-flex min-h-11 items-center rounded-md px-3 text-sm font-medium ${
        active ? "bg-forest text-cream" : "text-muted hover:bg-panel hover:text-fg"
      }`}
    >
      {children}
    </button>
  );
}

