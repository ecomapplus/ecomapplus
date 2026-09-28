import { Link } from "@tanstack/react-router";
import { Locate } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { communityBetween, formatDistance } from "@/data/geo";
import { publicFlagOrder, type PublicFlag } from "@/data/public-flags";
import { visitDoorLabel } from "@/data/visit-types";
import { titlesForDoor } from "@/components/village-doors";
import { readLocalIdentity } from "@/lib/local-identity";
import {
  clearMemberPlace,
  ensureMemberDevice,
  listMemberPlaces,
  readMemberDevice,
  rememberMemberName,
  shareMemberPlace,
  type MemberPlace,
} from "@/lib/member-places";

export function useMemberPlaces(enabled: boolean) {
  const [places, setPlaces] = useState<MemberPlace[]>([]);

  const refresh = useCallback(async () => {
    if (!enabled) {
      setPlaces([]);
      return;
    }
    try {
      setPlaces(await listMemberPlaces());
    } catch {
      /* keep the last list */
    }
  }, [enabled]);

  useEffect(() => {
    void refresh();
    if (!enabled) return;
    const timer = window.setInterval(() => void refresh(), 20000);
    return () => window.clearInterval(timer);
  }, [enabled, refresh]);

  return { places, refresh };
}

export function MemberShareButton({ onChange }: { onChange: () => void }) {
  const [name, setName] = useState("");
  const [sharing, setSharing] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const device = readMemberDevice();
    const identity = readLocalIdentity();
    setName(device.name || identity?.displayName || "");
    setSharing(Boolean(device.shared));
  }, []);

  async function share() {
    setError("");
    setBusy(true);
    try {
      const position = await new Promise<GeolocationPosition>((resolve, reject) => {
        if (!navigator.geolocation) {
          reject(new Error("This browser can’t share a location."));
          return;
        }
        navigator.geolocation.getCurrentPosition(resolve, () => {
          reject(new Error("Location was blocked. Allow it, then try again."));
        }, { enableHighAccuracy: true, timeout: 12000, maximumAge: 60000 });
      });
      const label = name.trim() || readLocalIdentity()?.displayName || "Plus member";
      const device = ensureMemberDevice(label);
      await shareMemberPlace({
        data: {
          id: device.id,
          token: device.token,
          name: label,
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        },
      });
      rememberMemberName(label);
      const saved = readMemberDevice();
      window.localStorage.setItem(
        "ecomap-member-place",
        JSON.stringify({ ...saved, name: label, shared: true }),
      );
      setName(label);
      setSharing(true);
      onChange();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not share that location.");
    } finally {
      setBusy(false);
    }
  }

  async function stop() {
    setError("");
    setBusy(true);
    try {
      const device = readMemberDevice();
      if (device.id && device.token) {
        await clearMemberPlace({ data: { id: device.id, token: device.token } });
      }
      window.localStorage.removeItem("ecomap-member-place");
      setSharing(false);
      onChange();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not stop sharing.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="flex max-w-xs flex-col gap-1">
      <div className="flex flex-wrap items-center gap-2">
        <label className="sr-only" htmlFor="member-place-name">
          Name on the map
        </label>
        <input
          id="member-place-name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Your name"
          maxLength={40}
          className="h-11 w-36 rounded-md bg-bg px-3 text-sm text-fg shadow-border outline-none focus-visible:ring-2 focus-visible:ring-forest/40"
        />
        {sharing ? (
          <Button type="button" variant="outline" className="h-11" disabled={busy} onClick={() => void stop()}>
            Stop sharing
          </Button>
        ) : null}
        <Button type="button" className="h-11" disabled={busy} onClick={() => void share()}>
          <Locate className="size-4" aria-hidden />
          {busy ? "Sharing…" : sharing ? "Update my location" : "Share my location"}
        </Button>
      </div>
      {error ? <p className="text-xs text-danger">{error}</p> : null}
      {sharing && !error ? (
        <p className="text-xs text-muted">Other Plus members can see this pin.</p>
      ) : null}
    </div>
  );
}

export function MeetHalfway({
  places,
  onOpen,
}: {
  places: MemberPlace[];
  onOpen?: (slug: string) => void;
}) {
  const [leftId, setLeftId] = useState("");
  const [rightId, setRightId] = useState("");
  const [door, setDoor] = useState<PublicFlag | "">("");
  const [hit, setHit] = useState<{
    slug: string;
    name: string;
    miles: string;
    left: string;
    right: string;
    door: PublicFlag | "";
    doors: string[];
  } | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    setLeftId((current) => (places.some((place) => place.id === current) ? current : (places[0]?.id ?? "")));
    setRightId((current) => {
      if (places.some((place) => place.id === current) && current !== (places[0]?.id ?? "")) return current;
      return places[1]?.id ?? "";
    });
  }, [places]);

  function generate() {
    setError("");
    const left = places.find((place) => place.id === leftId);
    const right = places.find((place) => place.id === rightId);
    if (!left || !right || left.id === right.id) {
      setHit(null);
      setError("Pick two different members who are sharing a location.");
      return;
    }
    const found = communityBetween(left, right, door || null);
    if (!found) {
      setHit(null);
      setError(
        door
          ? `No eco-community with a ${visitDoorLabel[door].toLowerCase()} door is on the map.`
          : "No eco-community with a map point is on file.",
      );
      return;
    }
    setHit({
      slug: found.community.slug,
      name: found.community.name,
      miles: formatDistance(found.km, "mi"),
      left: left.name,
      right: right.name,
      door,
      doors: door ? titlesForDoor(found.community.slug, door) : [],
    });
    onOpen?.(found.community.slug);
  }

  return (
    <div className="flex max-w-md flex-col gap-2">
      <p className="text-xs font-medium uppercase tracking-[0.14em] text-moss">Meet in the middle</p>
      {places.length < 2 ? (
        <p className="text-xs text-muted">Two Plus members need to be sharing a location.</p>
      ) : (
        <>
          <div className="flex flex-wrap items-center gap-2">
            <MemberPick id="meet-left" value={leftId} places={places} onChange={setLeftId} />
            <MemberPick id="meet-right" value={rightId} places={places} onChange={setRightId} />
            <select
              id="meet-door"
              aria-label="Open door it must have"
              value={door}
              onChange={(event) => setDoor(event.target.value as PublicFlag | "")}
              className="h-11 rounded-md bg-bg px-2 text-sm text-fg shadow-border"
            >
              <option value="">Any open door</option>
              {publicFlagOrder.map((flag) => (
                <option key={flag} value={flag}>
                  Must have {visitDoorLabel[flag].toLowerCase()}
                </option>
              ))}
            </select>
            <Button type="button" className="h-11" onClick={generate}>
              Find the community between us
            </Button>
          </div>
          {error ? <p className="text-xs text-danger">{error}</p> : null}
          {hit ? (
            <>
            <p className="text-sm text-fg">
              <Link
                to="/communities/$slug"
                params={{ slug: hit.slug }}
                className="font-medium text-forest hover:underline"
              >
                {hit.name}
              </Link>{" "}
              <span className="text-muted">
                is closest to the middle of {hit.left} and {hit.right}
                {hit.door ? ` with a ${visitDoorLabel[hit.door].toLowerCase()} door` : ""}, about {hit.miles} from that point.
              </span>
            </p>
            {hit.doors.length > 0 ? (
              <p className="text-sm text-fg">
                {hit.doors[0]}
                {hit.doors.length > 1 ? (
                  <>
                    {" "}
                    <Link
                      to="/communities/$slug/doors"
                      params={{ slug: hit.slug }}
                      className="font-medium text-forest hover:underline"
                    >
                      See all open doors
                    </Link>
                  </>
                ) : null}
              </p>
            ) : null}
            </>
          ) : null}
        </>
      )}
    </div>
  );
}

function MemberPick({
  id,
  value,
  places,
  onChange,
}: {
  id: string;
  value: string;
  places: MemberPlace[];
  onChange: (id: string) => void;
}) {
  return (
    <select
      id={id}
      aria-label="Plus member"
      value={value}
      onChange={(event) => onChange(event.target.value)}
      className="h-11 max-w-[10rem] rounded-md bg-bg px-2 text-sm text-fg shadow-border"
    >
      {places.map((place) => (
        <option key={place.id} value={place.id}>
          {place.name}
        </option>
      ))}
    </select>
  );
}
