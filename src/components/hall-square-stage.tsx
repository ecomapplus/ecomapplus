import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AtlasMap } from "@/components/atlas-map";
import { communities } from "@/data/communities";
import { displayPeerName, getHallVoice, isHostPeerName, subscribeHallVoice, type HallVoiceSnapshot } from "@/lib/hall-voice";
import { useCurrentUserState } from "@/lib/auth/use-current-user";
import { isPlusAdminEmail } from "@/lib/plus-membership";
import { OpportunityCalendar } from "@/routes/calendar";

function useHallVoice() {
  const [voice, setVoice] = useState<HallVoiceSnapshot>(() => getHallVoice());
  useEffect(() => subscribeHallVoice(() => setVoice(getHallVoice())), []);
  return voice;
}

function hasLiveVideo(stream: MediaStream | null) {
  return Boolean(stream?.getVideoTracks().some((track) => track.readyState === "live" && track.enabled));
}

export function HallVideoSquare({ hideWhenEmpty = false }: { hideWhenEmpty?: boolean } = {}) {
  const voice = useHallVoice();
  const { user } = useCurrentUserState();
  const localHost = isPlusAdminEmail(user?.primaryEmail);
  const boxRef = useRef<HTMLDivElement>(null);
  const [docked, setDocked] = useState(false);
  const remotes = voice.remotes.filter((remote) => hasLiveVideo(remote.stream));
  const feeds: { id: string; stream: MediaStream; label: string; featured: boolean; contain: boolean }[] = [];
  if (voice.videoOn && voice.local && hasLiveVideo(voice.local)) {
    feeds.push({
      id: "local",
      stream: voice.local,
      label: voice.screenOn ? "Your screen" : "You",
      featured: localHost,
      contain: voice.screenOn,
    });
  }
  for (const remote of remotes) {
    const peer = voice.peers.find((row) => row.id === remote.id);
    const host = peer ? isHostPeerName(peer.name) : false;
    feeds.push({
      id: remote.id,
      stream: remote.stream,
      label: peer ? displayPeerName(peer.name) : "Camera",
      featured: host,
      contain: Boolean(voice.screenPeers[remote.id]),
    });
  }
  const featured = feeds.find((feed) => feed.featured);
  const rest = featured ? feeds.filter((feed) => feed.id !== featured.id) : feeds;
  const count = feeds.length;
  const cols = !featured || rest.length === 0 ? (count > 0 ? Math.ceil(Math.sqrt(count)) : 1) : 2;
  const rows = !featured || rest.length === 0 ? (count > 0 ? Math.ceil(count / cols) : 1) : Math.max(rest.length, 1);

  useEffect(() => {
    const el = boxRef.current;
    if (!el || count === 0) return;
    const observer = new IntersectionObserver(
      ([entry]) => setDocked(entry ? !entry.isIntersecting : false),
      { rootMargin: "-64px 0px 0px 0px", threshold: 0 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [count]);

  if (hideWhenEmpty && count === 0) return null;
  const floating = docked && count > 0;
  const grid = (
    <div
      className={
        floating
          ? "fixed bottom-[max(1rem,env(safe-area-inset-bottom))] left-4 z-30 aspect-square w-36 overflow-hidden rounded-lg border border-white/15 bg-ink shadow-border-hover"
          : "absolute inset-0 overflow-hidden bg-ink"
      }
      data-hall-video-feeds
      data-hall-video-dock={floating ? "yes" : "no"}
      style={{
        display: "grid",
        gridTemplateColumns:
          featured && rest.length > 0 ? "minmax(0, 2fr) minmax(0, 1fr)" : `repeat(${cols}, minmax(0, 1fr))`,
        gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))`,
      }}
    >
      {featured && rest.length > 0 ? (
        <Feed
          key={featured.id}
          stream={featured.stream}
          label={featured.label}
          contain={featured.contain}
          style={{ gridColumn: 1, gridRow: `1 / span ${rows}` }}
        />
      ) : null}
      {(featured && rest.length > 0 ? rest : feeds).map((feed) => (
        <Feed key={feed.id} stream={feed.stream} label={feed.label} contain={feed.contain} />
      ))}
    </div>
  );

  return (
    <div ref={boxRef} className="relative aspect-square w-full shrink-0">
      {floating ? createPortal(grid, document.body) : grid}
    </div>
  );
}

export function HallSquareStage() {
  return (
    <div className="mt-6" data-hall-map="atlas">
      <AtlasMap
        communities={communities}
        showRandom
        hallPlan
        belowMap={(routeSlugs) => <OpportunityCalendar embedded shared routeSlugs={routeSlugs} />}
      />
    </div>
  );
}

function Feed({
  stream,
  label,
  contain = false,
  style,
}: {
  stream: MediaStream;
  label: string;
  contain?: boolean;
  style?: { gridColumn: number; gridRow: string };
}) {
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.srcObject = stream;
    void el.play().catch(() => undefined);
    return () => {
      el.srcObject = null;
    };
  }, [stream]);
  return (
    <figure className="relative h-full min-h-0 min-w-0" style={style}>
      <video
        ref={ref}
        autoPlay
        playsInline
        muted
        className={`absolute inset-0 h-full w-full bg-ink ${contain ? "object-contain" : "object-cover"}`}
      />
      <figcaption className="absolute bottom-1 left-1 max-w-[calc(100%-0.5rem)] truncate rounded-sm bg-ink/70 px-1.5 py-0.5 text-xs text-cream">
        {label}
      </figcaption>
    </figure>
  );
}
