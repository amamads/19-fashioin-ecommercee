import db from "@/db";

const colors = [
  { name: "مشکی", hex: "#2A0505" },
  { name: "قهوه‌ای", hex: "#7C6666" },
  { name: "قهوه‌ای روشن", hex: "#A77A78" },
  { name: "گلبهی", hex: "#F6A68B" },
  { name: "بژ", hex: "#C9B3A3" },
  { name: "طوسی مایل به صورتی", hex: "#A8969D" },
  { name: "صورتی روشن", hex: "#E8CFD0" },
  { name: "خردلی", hex: "#E8C875" },
  { name: "مرجانی", hex: "#E86A6A" },
  { name: "یاسی", hex: "#9A8BAA" },
  { name: "آجری", hex: "#C8835F" },
  { name: "نارنجی روشن", hex: "#DD956D" },
  { name: "زرشکی", hex: "#83111B" },
  { name: "سالمونی", hex: "#F1997C" },
];

export default async function seedColors() {
  await db.color.createMany({
    data: colors,
  });
}
