import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { compressUpload, uploadErrorMessage } from "@/lib/compress-image";
import { formatUsd } from "@/components/funding-meter";
import { getRoom, updateRoomAbout, type RoomView } from "@/lib/chat";
import { agreePublish, proposePublish } from "@/lib/room-publish";

const MAX_MISSION = 600;

export function GroupAbout({
  room,
  meId,
  onUpdated,
}: {
  room: RoomView;
  meId: string | null;
  onUpdated: (next: RoomView) => void;
}) {
  const [mission, setMission] = useState(room.mission ?? "");
  const [thumbnail, setThumbnail] = useState<string | null>(room.thumbnail);
  const [thumbDirty, setThumbDirty] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setMission(room.mission ?? "");
    setThumbnail(room.thumbnail);
    setThumbDirty(false);
    setSaved(false);
    setError(null);
  }, [room.id]);

  useEffect(() => {
    if (thumbDirty) return;
    setMission(room.mission ?? "");
    setThumbnail(room.thumbnail);
  }, [room.mission, room.thumbnail, thumbDirty]);

  async function onPhoto(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    event.target.value = "";
    if (!file) return;
    setError(null);
    setSaved(false);
    try {
      const src = await compressUpload(file);
      setThumbnail(src);
      setThumbDirty(true);
    } catch (err) {
      setError(uploadErrorMessage(err));
    }
  }

  async function reload() {
    onUpdated(await getRoom({ data: room.id }));
  }

  async function onSave(event: FormEvent) {
    event.preventDefault();
    setBusy(true);
    setError(null);
    setSaved(false);
    try {
      const next = await updateRoomAbout({
        data: {
          roomId: room.id,
          mission,
          thumbnail: thumbDirty ? thumbnail : undefined,
        },
      });
      onUpdated(next);
      setThumbDirty(false);
      setSaved(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not save that.");
    } finally {
      setBusy(false);
    }
  }

  async function onPropose() {
    setBusy(true);
    setError(null);
    try {
      await proposePublish({ data: room.id });
      await reload();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not send that proposal.");
    } finally {
      setBusy(false);
    }
  }

  async function onAgree() {
    setBusy(true);
    setError(null);
    try {
      await agreePublish({ data: room.id });
      await reload();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not record your agreement.");
    } finally {
      setBusy(false);
    }
  }

  const foundersReady = room.founderIds.length >= 3;
  const proposal = room.publishProposal;
  const iAgreed = Boolean(meId && proposal?.agreed.some((row) => row.userId === meId));
  const waitingOn = room.founderIds.filter(
    (id) => !proposal?.agreed.some((row) => row.userId === id),
  );
  const publicNote = room.statsArePublic
    ? "Anyone can see this project's name, mission, photo, pledged amount versus the goal, and how many people hold each skill. Talk, pledges by name, and votes stay with the members."
    : "This stays in the room until all three founders agree on the mission, the funding goal, and the thumbnail. Any founder can propose. The other two have to agree.";

  return (
    <div className="flex min-h-0 flex-1 flex-col overflow-y-auto px-4 py-4">
      <h3 className="font-display text-xl text-fg">About this project</h3>
      <p className="mt-1 text-sm text-muted">{publicNote}</p>

      {thumbnail ? (
        <div className="mt-4 shrink-0 overflow-hidden rounded-md bg-panel">
          <img src={thumbnail} alt="" className="block aspect-video h-auto w-full object-cover" />
        </div>
      ) : (
        <div className="mt-4 flex aspect-video shrink-0 items-center justify-center rounded-md bg-panel text-sm text-muted">
          No thumbnail yet
        </div>
      )}

      {room.mission && !room.isFounder ? (
        <p className="mt-4 text-base leading-relaxed text-fg">{room.mission}</p>
      ) : null}

      {room.isFounder ? (
        <form onSubmit={onSave} className="mt-6 space-y-5">
          <label className="block">
            <span className="text-sm font-medium text-fg">Thumbnail photo</span>
            <span className="mt-1 block text-xs text-muted">A picture of the land, the crew, or the work.</span>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => void onPhoto(e)}
              className="mt-2 block w-full text-sm text-muted file:mr-3 file:rounded-md file:border-0 file:bg-forest file:px-3 file:py-2 file:text-sm file:font-medium file:text-cream"
            />
          </label>
          {thumbnail ? (
            <button
              type="button"
              className="text-sm text-forest hover:underline"
              onClick={() => {
                setThumbnail(null);
                setThumbDirty(true);
                setSaved(false);
              }}
            >
              Remove photo
            </button>
          ) : null}

          <label className="flex flex-col gap-1.5 text-sm">
            <span className="font-medium text-fg">Mission</span>
            <textarea
              value={mission}
              onChange={(e) => {
                setMission(e.target.value);
                setSaved(false);
              }}
              maxLength={MAX_MISSION}
              rows={5}
              placeholder="What this group is trying to build, and for whom."
              className="rounded-md border border-border bg-bg px-3 py-2 text-fg placeholder:text-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest/40"
            />
            <span className="text-xs text-subtle">
              {mission.trim().length}/{MAX_MISSION}
            </span>
          </label>

          <div className="flex flex-wrap items-center gap-3">
            <Button type="submit" disabled={busy}>
              {busy ? "Saving…" : "Save about"}
            </Button>
            {saved ? <p className="text-sm text-moss">Saved.</p> : null}
          </div>
        </form>
      ) : !room.mission && !thumbnail ? (
        <p className="mt-4 text-sm text-muted">The founders have not written a mission or added a photo yet.</p>
      ) : null}

      {room.kind === "private" && room.isMember ? (
        <section className="mt-8 rounded-md border border-border bg-panel p-4">
          <h4 className="font-display text-lg text-fg">Going public</h4>
          <p className="mt-1 text-sm text-muted">
            Three founders. They all have to agree on the mission, the funding goal, and the thumbnail.
            {room.statsArePublic ? " This project is public. A new proposal can change that face once the other two agree." : ""}
          </p>
          <p className="mt-2 text-sm text-fg">
            {room.founderIds.length} of 3 founder seats filled
            {room.goalUsd != null ? ` · goal ${formatUsd(room.goalUsd)}` : " · no funding goal yet"}
          </p>

          {proposal ? (
            <div className="mt-4 space-y-3">
              <p className="text-sm text-fg">
                {proposal.proposerName} proposed going public with this mission, a {formatUsd(proposal.goalUsd)} goal, and this photo.
              </p>
              {proposal.thumbnail ? (
                <img src={proposal.thumbnail} alt="" className="aspect-video w-full max-w-xs object-cover" />
              ) : null}
              <p className="text-sm leading-relaxed text-muted">{proposal.mission}</p>
              <p className="text-sm text-fg">
                Agreed: {proposal.agreed.map((row) => row.name).join(", ") || "none yet"}
                {waitingOn.length > 0 ? ` · waiting on ${waitingOn.length}` : ""}
              </p>
              {room.isFounder && meId && !iAgreed ? (
                <Button type="button" disabled={busy} onClick={() => void onAgree()}>
                  {busy ? "Saving…" : "I agree"}
                </Button>
              ) : room.isFounder && iAgreed ? (
                <p className="text-sm text-moss">You have agreed. Waiting on the others.</p>
              ) : null}
            </div>
          ) : room.isFounder ? (
            <div className="mt-4">
              {!foundersReady ? (
                <p className="text-sm text-muted">
                  Fill the three founder seats first. More people join by signing the village-square agreement, or a founder can invite them. Then any founder can propose.
                </p>
              ) : (
                <Button type="button" disabled={busy} onClick={() => void onPropose()}>
                  {busy ? "Sending…" : room.statsArePublic ? "Propose a new public face" : "Propose going public"}
                </Button>
              )}
              <p className="mt-2 text-xs text-muted">
                Save the mission and photo here, and set the dollar goal on Funding, then propose. The other two founders will see it and can agree.
              </p>
            </div>
          ) : (
            <p className="mt-3 text-sm text-muted">Waiting on the three founders to agree.</p>
          )}
        </section>
      ) : null}

      {error ? <p className="mt-4 text-sm text-forest-deep">{error}</p> : null}
    </div>
  );
}
