import { useEffect, useState } from "react";

/** False on the server and the first client paint, then true. Keeps auth UI from hydrating as signed-out. */
export function useMounted() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return mounted;
}
