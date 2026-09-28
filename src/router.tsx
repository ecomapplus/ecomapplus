import { createRouter } from "@tanstack/react-router";
import { NotFound } from "@/components/not-found";
import { AppErrorComponent } from "@/lib/error-component";
import { routeTree } from "./routeTree.gen";

export function getRouter() {
  const router = createRouter({
    routeTree,
    defaultErrorComponent: AppErrorComponent,
    defaultNotFoundComponent: NotFound,
    // Never let in-place server calls (bookmark, chat poll) jump the window.
    scrollRestoration: () => false,
    defaultHashScrollIntoView: false,
  });

  if (typeof window !== "undefined") {
    history.scrollRestoration = "manual";
    let prevPath = window.location.pathname;
    router.subscribe("onRendered", (event) => {
      const path = event.toLocation.pathname;
      if (path === prevPath) return;
      prevPath = path;
      window.scrollTo({ left: 0, top: 0, behavior: "instant" });
    });
  }

  return router;
}
