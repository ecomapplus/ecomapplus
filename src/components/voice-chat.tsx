import { useEffect, useRef, useState } from "react";
import { HallMicButton, MicButton, SignInMic } from "@/components/hall-mic-button";
import { P2PRoom, type PeerInfo } from "@/lib/multiplayer";

function peerIdFromUser(userId: string) {
  const clean = userId.replace(/[^a-zA-Z0-9_-]/g, "").slice(0, 40);
  return clean.length >= 2 ? clean : `u${Math.random().toString(36).slice(2, 10)}`;
}

export function VoiceChat({
  roomId,
  meId,
  meName,
  signedIn,
  loginRedirect,
  openHall = false,
}: {
  roomId: string;
  meId: string | null;
  meName: string;
  signedIn: boolean;
  loginRedirect: string;
  openHall?: boolean;
}) {
  if (openHall) {
    return <HallMicButton loginRedirect={loginRedirect} />;
  }
  return (
    <GroupVoiceChat
      roomId={roomId}
      meId={meId}
      meName={meName}
      signedIn={signedIn}
      loginRedirect={loginRedirect}
    />
  );
}

export { HallMicButton };

function GroupVoiceChat({
  roomId,
  meId,
  meName,
  signedIn,
  loginRedirect,
}: {
  roomId: string;
  meId: string | null;
  meName: string;
  signedIn: boolean;
  loginRedirect: string;
}) {
  const [micOn, setMicOn] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [, setPeers] = useState<PeerInfo[]>([]);
  const [, setMutedPeers] = useState<Record<string, boolean>>({});
  const roomRef = useRef<P2PRoom | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const micOnRef = useRef(false);
  const remoteRef = useRef<Map<string, MediaStream>>(new Map());
  const [remoteVersion, setRemoteVersion] = useState(0);

  useEffect(() => {
    if (!signedIn || !meId) return;
    let cancelled = false;
    const p2p = new P2PRoom({
      room: `vc-${roomId}`.slice(0, 64),
      selfId: peerIdFromUser(meId),
      name: meName.slice(0, 64) || "Member",
      onPeersChanged: (next) => {
        setPeers(next);
        roomRef.current?.send({ muted: !micOnRef.current });
      },
      onMessage: (from, data) => {
        if (!data || typeof data !== "object") return;
        const row = data as { muted?: boolean };
        if (typeof row.muted === "boolean") {
          setMutedPeers((prev) => ({ ...prev, [from]: row.muted as boolean }));
        }
      },
      onTrack: (from, track, streams) => {
        const stream = streams[0] ?? new MediaStream([track]);
        remoteRef.current.set(from, stream);
        track.onended = () => {
          remoteRef.current.delete(from);
          setRemoteVersion((n) => n + 1);
        };
        setRemoteVersion((n) => n + 1);
      },
    });
    roomRef.current = p2p;
    void p2p.join().then(() => {
      if (cancelled) return;
      p2p.send({ muted: true });
    });
    return () => {
      cancelled = true;
      roomRef.current = null;
      p2p.close();
      streamRef.current?.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
      remoteRef.current.clear();
      micOnRef.current = false;
      setMicOn(false);
      setPeers([]);
      setMutedPeers({});
    };
  }, [roomId, meId, signedIn, meName]);

  async function toggleMic() {
    if (!signedIn || !meId || busy) return;
    const next = !micOn;
    setBusy(true);
    setError(null);
    try {
      if (next) {
        if (!streamRef.current) {
          streamRef.current = await navigator.mediaDevices.getUserMedia({
            audio: { echoCancellation: true, noiseSuppression: true },
            video: false,
          });
        }
        streamRef.current.getAudioTracks().forEach((track) => {
          track.enabled = true;
        });
        roomRef.current?.setLocalStream(streamRef.current);
      } else {
        streamRef.current?.getAudioTracks().forEach((track) => {
          track.enabled = false;
        });
      }
      micOnRef.current = next;
      setMicOn(next);
      roomRef.current?.send({ muted: !next });
    } catch (err) {
      if (err instanceof DOMException && err.name === "NotAllowedError") {
        setError("The browser blocked the microphone. Allow it, then try again.");
      } else {
        setError("Could not turn the mic on.");
      }
    } finally {
      setBusy(false);
    }
  }

  const remotes = [...remoteRef.current.entries()];

  return (
    <>
      {signedIn ? (
        <MicButton
          micOn={micOn}
          busy={busy}
          error={error}
          where="this group"
          onToggle={() => void toggleMic()}
        />
      ) : (
        <SignInMic loginRedirect={loginRedirect} />
      )}
      {remotes.map(([id, remote]) => (
        <RemoteAudio key={`${id}-${remoteVersion}`} stream={remote} />
      ))}
    </>
  );
}

function RemoteAudio({ stream }: { stream: MediaStream }) {
  const ref = useRef<HTMLAudioElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.srcObject = stream;
    const play = () => {
      void el.play().catch(() => undefined);
    };
    play();
    el.addEventListener("canplay", play);
    return () => {
      el.removeEventListener("canplay", play);
      el.srcObject = null;
    };
  }, [stream]);
  return <audio ref={ref} autoPlay playsInline className="sr-only" />;
}
