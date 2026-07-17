import { Prisma } from "@/generated/prisma/client";

export type CategoryWidhBadges = Prisma.CategoryGetPayload<{ include: { badges: true } }>;