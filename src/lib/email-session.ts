import { createServerFn } from "@tanstack/react-start";

export const signInWithEmail = createServerFn({ method: "POST" })
  .validator((input: { email: string; name?: string; profile?: unknown; chats?: unknown; land?: unknown }) => {
    const email = typeof input.email === "string" ? input.email.trim().toLowerCase() : "";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 200) {
      throw new Error("Enter your email");
    }
    return {
      email,
      name: typeof input.name === "string" ? input.name : "",
      profile: input.profile,
      chats: input.chats,
      land: input.land,
    };
  })
  .handler(async ({ data }) => {
    const { completeEmailLogin } = await import("./email-session.server");
    return completeEmailLogin(data.email, data);
  });
