import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient();
export const { signIn, signUp, signOut, useSession } = authClient;

export const singInGoogle = async () =>
  await authClient.signIn.social({
    provider: "google",
  });