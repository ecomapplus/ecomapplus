export function PresenceMark({
  online,
  hasAccount = true,
}: {
  online: boolean;
  hasAccount?: boolean;
}) {
  if (!hasAccount) {
    return <span className="text-xs text-muted">No account</span>;
  }
  return (
    <span className={`text-xs ${online ? "text-moss" : "text-muted"}`}>{online ? "Online" : "Offline"}</span>
  );
}

export function PresenceDot({ online }: { online: boolean }) {
  return (
    <span
      className={`absolute bottom-0 right-0 size-2.5 rounded-full border-2 border-surface ${
        online ? "bg-moss" : "bg-subtle"
      }`}
      aria-hidden
    />
  );
}
