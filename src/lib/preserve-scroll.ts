/** Keep the window from jumping during in-place updates. Call at the click, not after. */
export function pinWindowScroll(): () => void {
  if (typeof window === "undefined") return () => {};
  const x = window.scrollX;
  const y = window.scrollY;
  const restore = () => {
    window.scrollTo({ left: x, top: y, behavior: "instant" });
  };
  restore();
  const frames = [
    window.requestAnimationFrame(restore),
    window.requestAnimationFrame(() => window.requestAnimationFrame(restore)),
  ];
  const timers = [window.setTimeout(restore, 0), window.setTimeout(restore, 50), window.setTimeout(restore, 200)];
  return () => {
    for (const id of frames) window.cancelAnimationFrame(id);
    for (const id of timers) window.clearTimeout(id);
    restore();
  };
}
