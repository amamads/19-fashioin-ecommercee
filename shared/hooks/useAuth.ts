// shared/hooks/useAuth.ts
"use client";

import { useSession } from "@/lib/auth-client";

export default function useAuth() {
  // گرفتن وضعیت لودینگ برای اینکه بدانیم آیا Better Auth در حال چک کردن کوکی هست یا نه
  const { data, isPending } = useSession();

  return {
    isLoggedIn: !!data?.user,
    user: data?.user,
    isLoading: isPending, // 👈 این را اضافه کنید
  };
}