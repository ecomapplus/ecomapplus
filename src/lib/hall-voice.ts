import { P2PRoom, type PeerInfo } from "@/lib/multiplayer";
import { hasPlusAccess } from "@/lib/plus-membership";
import { isOpenSquareWindow } from "@/lib/square-hours";

export type HallRemote = { id: string; stream: MediaStream };

const HOST_MARK = "\u2060";

export function hallSignalName(name: string, host: boolean) {
  const clean = name.replaceAll(HOST_MARK, "").slice(0, 63) || "Member";
  return host ? `${HOST_MARK}${clean}` : clean;
}

export function isHostPeerName(name: string) {
  return name.startsWith(HOST_MARK);
}

export function displayPeerName(name: string) {
  return name.replaceAll(HOST_MARK, "").trim() || "Camera";
}

export type HallVoiceSnapshot = {
  live: boolean;
  micOn: boolean;
  videoOn: boolean;
  screenOn: boolean;
  busy: boolean;
  error: string | null;
  remotes: HallRemote[];
  local: MediaStream | null;
  peers: PeerInfo[];
  mutedPeers: Record<string, boolean>;
  screenPeers: Record<string, boolean>;
};

type Listener = () => void;

const listeners = new Set<Listener>();
let p2p: P2PRoom | null = null;
let stream: MediaStream | null = null;
let remotes = new Map<string, MediaStream>();
let joinedFor: { meId: string; meName: string; host: boolean } | null = null;
let micOn = false;
let videoOn = false;
let screenOn = false;
let cameraTrack: MediaStreamTrack | null = null;
let screenTrack: MediaStreamTrack | null = null;
let busy = false;
let error: string | null = null;
let peers: PeerInfo[] = [];
let mutedPeers: Record<string, boolean> = {};
let screenPeers: Record<string, boolean> = {};
let pagehideBound = false;

function snapshot(): HallVoiceSnapshot {
  return {
    live: Boolean(p2p),
    micOn,
    videoOn,
    screenOn,
    busy,
    error,
    remotes: [...remotes.entries()].map(([id, remote]) => ({ id, stream: remote })),
    local: stream,
    peers,
    mutedPeers,
    screenPeers,
  };
}

function emit() {
  for (const fn of listeners) fn();
}

function mayPublish() {
  return hasPlusAccess() || isOpenSquareWindow();
}

function publishLocal() {
  if (!p2p || !mayPublish()) return;
  if (stream) p2p.setLocalStream(stream);
  p2p.send({ muted: !micOn, screen: screenOn });
}

export function hallPeerId(userId: string) {
  const clean = userId.replace(/[^a-zA-Z0-9_-]/g, "").slice(0, 40);
  return clean.length >= 2 ? clean : `u${Math.random().toString(36).slice(2, 10)}`;
}

function bindPageHide() {
  if (pagehideBound || typeof window === "undefined") return;
  pagehideBound = true;
  window.addEventListener("pagehide", () => {
    if (!p2p) return;
    p2p.close();
    p2p = null;
    stream?.getTracks().forEach((track) => track.stop());
    stream = null;
  });
}

export function getHallVoice(): HallVoiceSnapshot {
  return snapshot();
}

export function subscribeHallVoice(fn: Listener): () => void {
  listeners.add(fn);
  return () => {
    listeners.delete(fn);
  };
}

/** Drop the room but keep this device's mic and camera running. */
export function holdHallVoice() {
  if (!p2p) return;
  const room = p2p;
  p2p = null;
  peers = [];
  mutedPeers = {};
  remotes.clear();
  room.close();
  emit();
}

export async function ensureHallVoice(input: { meId: string; meName: string; host?: boolean }) {
  if (typeof window === "undefined") return;
  if (!mayPublish()) return;
  bindPageHide();
  const host = input.host ?? joinedFor?.host ?? false;
  const name = hallSignalName(input.meName, host);
  if (p2p && joinedFor?.meId === input.meId) {
    joinedFor = { meId: input.meId, meName: input.meName, host };
    p2p.setName(name);
    publishLocal();
    return;
  }
  if (p2p) leaveHallVoice();
  joinedFor = { meId: input.meId, meName: input.meName, host };
  const room = new P2PRoom({
    room: "vc-hall",
    selfId: hallPeerId(input.meId),
    name,
    onPeersChanged: (next) => {
      peers = next;
      publishLocal();
      emit();
    },
    onChannelOpen: () => publishLocal(),
    onMessage: (from, data) => {
      if (!data || typeof data !== "object") return;
      const row = data as { muted?: boolean; screen?: boolean };
      let changed = false;
      if (typeof row.muted === "boolean") {
        mutedPeers = { ...mutedPeers, [from]: row.muted };
        changed = true;
      }
      if (typeof row.screen === "boolean") {
        screenPeers = { ...screenPeers, [from]: row.screen };
        changed = true;
      }
      if (changed) emit();
    },
    onTrack: (from, track, streams) => {
      const remote = streams[0] ?? remotes.get(from) ?? new MediaStream([track]);
      if (!remote.getTracks().some((row) => row.id === track.id)) remote.addTrack(track);
      remotes.set(from, remote);
      track.onended = () => {
        const current = remotes.get(from);
        if (!current) return;
        const live = current.getTracks().some((row) => row.readyState === "live");
        if (!live) remotes.delete(from);
        emit();
      };
      emit();
    },
  });
  p2p = room;
  emit();
  await room.join();
  if (p2p !== room) return;
  publishLocal();
  emit();
}

export function leaveHallVoice() {
  if (!p2p && !stream && !micOn && !busy && !error) return;
  const room = p2p;
  p2p = null;
  joinedFor = null;
  micOn = false;
  videoOn = false;
  screenOn = false;
  busy = false;
  error = null;
  peers = [];
  mutedPeers = {};
  screenPeers = {};
  remotes.clear();
  room?.close();
  stopScreenTrack();
  cameraTrack = null;
  stream?.getTracks().forEach((track) => track.stop());
  stream = null;
  emit();
}

export async function setHallMic(next: boolean) {
  if (typeof window === "undefined" || busy) return;
  busy = true;
  error = null;
  emit();
  try {
    if (next) {
      stream = await ensureAudio(stream);
      stream.getAudioTracks().forEach((track) => {
        track.enabled = true;
      });
    } else {
      stream?.getAudioTracks().forEach((track) => {
        track.enabled = false;
      });
    }
    micOn = next;
    publishLocal();
  } catch (err) {
    error = mediaError(err, "microphone");
  } finally {
    busy = false;
    emit();
  }
}

export async function setHallVideo(next: boolean) {
  if (typeof window === "undefined" || busy) return;
  busy = true;
  error = null;
  emit();
  try {
    if (next) {
      if (screenOn) {
        videoOn = true;
      } else {
        stream = await ensureVideo(stream);
        videoOn = true;
      }
    } else {
      stopScreenTrack();
      screenOn = false;
      dropVideoTracks();
      cameraTrack = null;
      videoOn = false;
    }
    publishLocal();
  } catch (err) {
    error = mediaError(err, "camera");
  } finally {
    busy = false;
    emit();
  }
}

async function ensureAudio(current: MediaStream | null) {
  if (current?.getAudioTracks().some((track) => track.readyState === "live")) return current;
  const extra = await navigator.mediaDevices.getUserMedia({
    audio: { echoCancellation: true, noiseSuppression: true },
    video: false,
  });
  return mergeTracks(current, extra);
}

async function ensureVideo(current: MediaStream | null) {
  if (current?.getVideoTracks().some((track) => track.readyState === "live")) return current;
  const extra = await navigator.mediaDevices.getUserMedia({
    audio: false,
    video: { facingMode: "user" },
  });
  return mergeTracks(current, extra);
}

function mergeTracks(current: MediaStream | null, extra: MediaStream) {
  const next = current ?? new MediaStream();
  for (const track of extra.getTracks()) {
    if (!next.getTracks().some((row) => row.id === track.id)) next.addTrack(track);
  }
  return next;
}

function stopScreenTrack() {
  if (!screenTrack) return;
  screenTrack.onended = null;
  screenTrack.stop();
  stream?.removeTrack(screenTrack);
  screenTrack = null;
}

function restoreCamera() {
  stopScreenTrack();
  screenOn = false;
  if (cameraTrack && cameraTrack.readyState === "live") {
    cameraTrack.enabled = true;
    stream = mergeTracks(stream, new MediaStream([cameraTrack]));
    videoOn = true;
  } else {
    cameraTrack = null;
    videoOn = Boolean(stream?.getVideoTracks().some((track) => track.readyState === "live" && track.enabled));
  }
}

export async function setHallScreen(next: boolean, who?: { meId: string; meName: string }) {
  if (typeof window === "undefined" || busy) return;
  if (!next) {
    busy = true;
    error = null;
    emit();
    try {
      restoreCamera();
      publishLocal();
    } finally {
      busy = false;
      emit();
    }
    return;
  }

  const capture = navigator.mediaDevices?.getDisplayMedia?.bind(navigator.mediaDevices);
  if (!capture) {
    error = "This phone can’t share a screen. Open the village square on a computer, then tap share.";
    emit();
    return;
  }

  busy = true;
  error = null;
  emit();
  let display: MediaStream;
  try {
    // First await in the tap, so the browser still treats it as the user gesture.
    display = await capture({ video: true, audio: false });
  } catch (err) {
    error = mediaError(err, "screen");
    busy = false;
    emit();
    return;
  }

  try {
    if (who) await ensureHallVoice({ meId: who.meId, meName: who.meName, host: true });
    if (!joinedFor?.host) {
      display.getTracks().forEach((track) => track.stop());
      error = "Screen share is only available to the host while the square is open.";
      return;
    }
    const track = display.getVideoTracks()[0];
    if (!track) throw new Error("no-screen");
    track.contentHint = "detail";
    const camera = stream?.getVideoTracks().find((row) => row.readyState === "live");
    if (camera) {
      cameraTrack = camera;
      camera.enabled = false;
      stream?.removeTrack(camera);
    }
    stopScreenTrack();
    stream = mergeTracks(stream, new MediaStream([track]));
    screenTrack = track;
    screenOn = true;
    videoOn = true;
    track.onended = () => {
      void setHallScreen(false);
    };
    publishLocal();
  } catch (err) {
    display.getTracks().forEach((track) => track.stop());
    screenOn = false;
    error = mediaError(err, "screen");
  } finally {
    busy = false;
    emit();
  }
}

function dropVideoTracks() {
  if (!stream) return;
  for (const track of stream.getVideoTracks()) {
    track.stop();
    stream.removeTrack(track);
  }
}

function mediaError(err: unknown, device: "microphone" | "camera" | "screen") {
  if (err instanceof DOMException && err.name === "AbortError") {
    return device === "screen" ? "Screen sharing was cancelled." : "That was cancelled.";
  }
  if (err instanceof DOMException && (err.name === "NotAllowedError" || err.name === "NotFoundError")) {
    return device === "screen"
      ? "The browser blocked screen sharing. On a phone this isn’t available — use a computer."
      : `The browser blocked the ${device}. Allow it, then try again.`;
  }
  if (device === "screen") return "Could not share the screen. Try again from a computer browser.";
  return device === "camera" ? "Could not turn the camera on." : "Could not turn the mic on.";
}

export async function toggleHallMic(who: { meId: string; meName: string }) {
  if (typeof window === "undefined" || busy) return;
  if (!micOn) {
    if (mayPublish()) await ensureHallVoice(who);
    await setHallMic(true);
    return;
  }
  await setHallMic(false);
}
