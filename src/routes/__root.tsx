import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { CollabStrip } from "@/components/collab-strip";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { SiteFooter, SiteHeader } from "@/components/site-header";
import { HallVoiceHost } from "@/components/hall-voice-host";
import { SquareOnlineBubble } from "@/components/square-online-bubble";
import { AuthProvider } from "@/lib/auth/provider";
import appCss from "../styles.css?url";

const APP_NAME = "EcoMapPlus";

export const Route = createRootRoute({
 head: () => ({
 meta: [
 { charSet: "utf-8" },
 { name: "viewport", content: "width=device-width, initial-scale=1" },
 { title: APP_NAME },
 {
 name: "description",
 content:
 "Answer 7 questions, find your most aligned eco-community.",
 },
 { name: "theme-color", content: "#3B5D3A" },
 ],
 links: [
 { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
 { rel: "stylesheet", href: appCss },
 {
 rel: "stylesheet",
 href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9.144,500;9.144,600&family=Source+Sans+3:ital,wght@0,400;0,500;0,600;1,400&display=swap",
 },
 { rel: "manifest", href: "/__grok/manifest.webmanifest" },
 { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
 ],
 }),
 component: () => (<html lang="en" className="antialiased" suppressHydrationWarning>
 <head>
 <HeadContent />
 </head>
 <body className="min-h-dvh bg-bg font-sans text-fg">
 <PreviewHostBridge />
 <AuthProvider>
 <div className="flex min-h-dvh flex-col">
 <SiteHeader />
 <CollabStrip />
 <Outlet />
 <SiteFooter />
 </div>
 <HallVoiceHost />
 <SquareOnlineBubble />
 </AuthProvider>
 <Scripts />
 </body>
 </html>),
});
