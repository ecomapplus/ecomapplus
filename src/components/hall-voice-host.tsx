import { Link, useRouterState } from "@tanstack/react-router";
import { Mic, MicOff, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { useCurrentUserState } from "@/lib/auth/use-current-user";
import {
  ensureHallVoice,
  getHallVoice,
  holdHallVoice,
  leaveHallVoice,
  setHallMic,
  setHallVideo,
  subscribeHallVoice,
  type HallVoiceSnapshot,
} from "@/lib/hall-voice";
import { takeHallOrders } from "@/lib/hall-moderation";
import { isPlusAdminEmail } from "@/lib/plus-membership";
import { useMounted } from "@/lib/use-mounted";
import { useSquareAccess, useSquareWarmup } from "@/lib/square-hours";

function useHallVoice() {
  const [state, setState] = useState<HallVoiceSnapshot>(() => getHallVoice());
  useEffect(() => subscribeHallVoice(() => setState(getHallVoice())), []);
  return state;
}

export function HallVoiceHost() {
  const mounted = useMounted();
  const { user, isPending } = useCurrentUserState();
  const { allowed } = useSquareAccess();
  const warmup = useSquareWarmup();
  const voice = useHallVoice();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const onHall = pathname === "/hall";

  const userId = user?.id;
  const userName = user?.displayName?.slice(0, 64) || "Member";
  const host = isPlusAdminEmail(user?.primaryEmail);

  const micOn = Boolean(voice?.micOn);
  const videoOn = Boolean(voice?.videoOn);
  const live = Boolean(voice?.live);
  const remotes = voice?.remotes ?? [];

  useEffect(() => {
    if (!mounted) return;
    if (!userId || (!allowed && !warmup)) {
      if (!isPending) leaveHallVoice();
      return;
    }
    if (!allowed) {
      holdHallVoice();
      return;
    }
    if (onHall || getHallVoice().micOn || getHallVoice().videoOn) {
      void ensureHallVoice({
        meId: userId,
        meName: userName,
        host,
      });
      return;
    }
    leaveHallVoice();
  }, [userId, userName, isPending, onHall, micOn, videoOn, allowed, warmup, mounted, host]);

  useEffect(() => {
    if (!mounted || !userId || !allowed) return;
    let cancelled = false;
    async function pull() {
      if (cancelled || !getHallVoice().live || getHallVoice().busy) return;
      try {
        const row = await takeHallOrders();
        if (cancelled) return;
        for (const action of row.actions) {
          if (action === "mute") await setHallMic(false);
          if (action === "drop-video") await setHallVideo(false);
        }
      } catch {
        /* signed out or offline */
      }
    }
    void pull();
    const id = window.setInterval(() => void pull(), 2000);
    return () => {
      cancelled = true;
      window.clearInterval(id);
    };
  }, [mounted, userId, allowed]);

  if (!mounted) return null;

  return (
    <>
      <div
        data-hall-voice-host
        data-hall-voice-live={micOn ? "on" : "off"}
        data-hall-voice-connected={live ? "yes" : "no"}
        data-hall-voice-remotes={String(remotes.length)}
        hidden
      />
      {remotes.map((remote) => (
        <RemoteMedia key={remote.id} stream={remote.stream} />
      ))}
      {micOn && allowed && !onHall && voice ? <HallVoiceDock voice={voice} /> : null}
    </>
  );
}

function HallVoiceDock({ voice }: { voice: HallVoiceSnapshot }) {
  return (
    <div
      data-hall-voice-dock
      className="fixed inset-x-3 bottom-[max(0.75rem,env(safe-area-inset-bottom))] z-40 rounded-lg border border-border bg-forest-deep p-3 text-cream shadow-border-hover sm:inset-x-auto sm:right-4 sm:w-[22rem]"
    >
      <div className="flex items-center gap-2">
        <Button
          type="button"
          variant="outline"
          disabled={voice.busy}
          aria-pressed={voice.micOn}
          aria-label={voice.micOn ? "Turn mic off" : "Turn mic on"}
          title={voice.micOn ? "You are live in the village square." : "Turn the mic on"}
          className="size-11 shrink-0 border-cream/30 bg-forest p-0 text-cream hover:bg-forest-deep hover:text-cream"
          onClick={() => void setHallMic(!voice.micOn)}
        >
          {voice.micOn ? <Mic className="size-4" aria-hidden /> : <MicOff className="size-4" aria-hidden />}
        </Button>
        <div className="min-w-0 flex-1">
          <p className="font-medium leading-tight">Live in the village square</p>
          <p className="mt-0.5 text-xs text-cream/80">
            Others can still hear you. You can still hear them.
          </p>
        </div>
        <Link
          to="/hall"
          className="inline-flex min-h-11 shrink-0 items-center px-2 text-sm font-medium text-cream underline-offset-2 hover:underline"
        >
          Open
        </Link>
        <button
          type="button"
          className="inline-flex size-11 shrink-0 items-center justify-center rounded-full text-cream hover:bg-forest"
          aria-label="Leave the village square voice"
          onClick={() => leaveHallVoice()}
        >
          <X className="size-4" aria-hidden />
        </button>
      </div>
      {voice.error ? <p className="mt-2 text-xs text-cream">{voice.error}</p> : null}
    </div>
  );
}

function RemoteMedia({ stream }: { stream: MediaStream }) {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.srcObject = stream;
    const play = () => {
      void audio.play().catch(() => undefined);
    };
    play();
    audio.addEventListener("canplay", play);
    return () => {
      audio.removeEventListener("canplay", play);
      audio.srcObject = null;
    };
  }, [stream]);

  return <audio ref={audioRef} data-hall-remote-audio autoPlay playsInline className="sr-only" />;
}
