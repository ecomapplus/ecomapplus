/** Interval that sleeps while the tab is hidden so pages do not keep redrawing. */
export function startLivePoll(fn: () => void, ms: number) {
  const tick = () => {
    if (document.visibilityState === "hidden") return;
    fn();
  };
  const timer = window.setInterval(tick, ms);
  const onVis = () => {
    if (document.visibilityState === "visible") fn();
  };
  document.addEventListener("visibilitychange", onVis);
  return () => {
    window.clearInterval(timer);
    document.removeEventListener("visibilitychange", onVis);
  };
}
