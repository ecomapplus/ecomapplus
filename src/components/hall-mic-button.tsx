import { Link } from "@tanstack/react-router";
import { Mic, MicOff, MonitorUp, Video, VideoOff } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useCurrentUserState } from "@/lib/auth/use-current-user";
import {
  ensureHallVoice,
  getHallVoice,
  setHallScreen,
  setHallVideo,
  subscribeHallVoice,
  toggleHallMic,
  type HallVoiceSnapshot,
} from "@/lib/hall-voice";
import { isPlusAdminEmail } from "@/lib/plus-membership";
import { useSquareAccess, useSquareWarmup } from "@/lib/square-hours";

function useHallVoice() {
  const [voice, setVoice] = useState<HallVoiceSnapshot>(() => getHallVoice());
  useEffect(() => subscribeHallVoice(() => setVoice(getHallVoice())), []);
  return voice;
}

export function HallMicButton({
  compact = false,
  inline = false,
  loginRedirect = "/hall",
}: {
  compact?: boolean;
  inline?: boolean;
  loginRedirect?: string;
}) {
  const { user } = useCurrentUserState();
  const { allowed } = useSquareAccess();
  const warmup = useSquareWarmup();
  const stage = allowed || warmup;
  const voice = useHallVoice();
  const signedIn = Boolean(user);
  const meId = user?.id ?? null;
  const meName = user?.displayName ?? "Member";
  const host = isPlusAdminEmail(user?.primaryEmail);
  const micOn = Boolean(voice?.micOn);
  const videoOn = Boolean(voice?.videoOn);
  const screenOn = Boolean(voice?.screenOn);
  const staged = warmup && !allowed;

  useEffect(() => {
    if (!signedIn || !meId || compact || !allowed) return;
    void ensureHallVoice({ meId, meName, host });
  }, [signedIn, meId, meName, compact, allowed, host]);

  if (!stage) return null;

  const button = signedIn ? (
    <span className="inline-flex items-center gap-2">
      <MicButton
        micOn={micOn}
        busy={Boolean(voice?.busy)}
        error={voice?.error ?? null}
        where="the village square"
        staged={staged}
        onToggle={() => void toggleHallMic({ meId: meId ?? "", meName })}
      />
      {compact ? null : (
        <CameraButton
          videoOn={videoOn}
          busy={Boolean(voice?.busy)}
          staged={staged}
          onToggle={() => {
            void (async () => {
              if (!meId) return;
              if (allowed) await ensureHallVoice({ meId, meName, host });
              await setHallVideo(!videoOn);
            })();
          }}
        />
      )}
      {compact || !host ? null : (
        <ScreenButton
          screenOn={screenOn}
          busy={Boolean(voice?.busy)}
          onToggle={() => {
            if (!meId) return;
            void setHallScreen(!screenOn, { meId, meName });
          }}
        />
      )}
    </span>
  ) : compact ? null : (
    <SignInMic loginRedirect={loginRedirect} />
  );

  if (compact) {
    return button ? <div data-hall-header-mic>{button}</div> : null;
  }

  if (inline) {
    return button ? (
      <div data-hall-voice-control>
        {button}
        {voice?.error ? <p className="mt-1 text-sm text-forest-deep">{voice.error}</p> : null}
      </div>
    ) : null;
  }

  return (
    <div className="flex flex-wrap items-center gap-3" data-hall-voice-control>
      {button}
      {voice?.error ? <p className="w-full text-sm text-forest-deep">{voice.error}</p> : null}
      <p className="max-w-md text-sm text-muted">
        {signedIn
          ? staged
            ? "Your mic and camera stay on this screen until the square opens."
            : micOn
            ? "You are live. Leave the square and you keep talking and hearing everyone."
            : "Talk with whoever is in the square. Leave with the mic on and you stay in the conversation."
          : "Sign in to talk in the village square."}
      </p>
    </div>
  );
}

export function MicButton({
  micOn,
  busy,
  error,
  where,
  staged = false,
  onToggle,
}: {
  micOn: boolean;
  busy: boolean;
  error: string | null;
  where: string;
  staged?: boolean;
  onToggle: () => void;
}) {
  return (
    <Button
      type="button"
      variant={micOn ? "default" : "outline"}
      disabled={busy}
      aria-pressed={micOn}
      aria-label={micOn ? "Turn mic off" : "Turn mic on"}
      title={
        error
          ? error
          : staged
            ? micOn
              ? "On for you only. Nobody else can hear you until the square opens."
              : "Turn the mic on. Nobody else can hear you until the square opens."
            : micOn
            ? `You are live. Everyone else in ${where} can hear you.`
            : `Turn on the mic to talk. Anyone in ${where} can hear it.`
      }
      className="size-11 shrink-0 p-0"
      onClick={onToggle}
    >
      {micOn ? <Mic className="size-4" aria-hidden /> : <MicOff className="size-4" aria-hidden />}
    </Button>
  );
}

export function CameraButton({
  videoOn,
  busy,
  staged = false,
  onToggle,
}: {
  videoOn: boolean;
  busy: boolean;
  staged?: boolean;
  onToggle: () => void;
}) {
  return (
    <Button
      type="button"
      variant={videoOn ? "default" : "outline"}
      disabled={busy}
      aria-pressed={videoOn}
      aria-label={videoOn ? "Turn camera off" : "Turn camera on"}
      title={
        staged
          ? videoOn
            ? "On for you only. Nobody else can see you until the square opens."
            : "Turn the camera on. Nobody else can see you until the square opens."
          : videoOn
            ? "Your camera is on in the village square."
            : "Turn the camera on"
      }
      className="size-11 shrink-0 p-0"
      onClick={onToggle}
    >
      {videoOn ? <Video className="size-4" aria-hidden /> : <VideoOff className="size-4" aria-hidden />}
    </Button>
  );
}

export function ScreenButton({
  screenOn,
  busy,
  onToggle,
}: {
  screenOn: boolean;
  busy: boolean;
  onToggle: () => void;
}) {
  return (
    <Button
      type="button"
      variant={screenOn ? "default" : "outline"}
      disabled={busy}
      aria-pressed={screenOn}
      aria-label={screenOn ? "Stop sharing your screen" : "Share your screen"}
      title={screenOn ? "Stop sharing your screen" : "Share your screen in the village square"}
      className="size-11 shrink-0 p-0"
      onClick={onToggle}
    >
      <MonitorUp className="size-4" aria-hidden />
    </Button>
  );
}

export function SignInMic({ loginRedirect }: { loginRedirect: string }) {
  return (
    <Link
      to="/login"
      search={{ redirect: loginRedirect }}
      className="inline-flex size-11 shrink-0 items-center justify-center rounded-md border border-border text-forest"
      aria-label="Sign in to talk"
      title="Sign in to talk"
    >
      <MicOff className="size-4" aria-hidden />
    </Link>
  );
}
