import { useEffect, type ReactNode } from "react";
import { restoreEmailSession } from "@/lib/email-login-client";

/**
 * App-wide client provider mounted once near the root (in `src/routes/__root.tsx`).
 * Restores an email session on this device so closing the tab does not drop you.
 */
export function AuthProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    void restoreEmailSession();
  }, []);
  return <>{children}</>;
}
