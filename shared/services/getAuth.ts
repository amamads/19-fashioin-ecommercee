import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export default async function getAuth() {
  const session = await auth.api.getSession({ headers: await headers() });

  return { user: session?.user, isLoggedIn: !!session?.user };
}
  