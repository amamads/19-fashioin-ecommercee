import db from "@/db";

// const colors = [
//   { name: "مشکی", hex: "#2A0505" },
//   { name: "قهوه‌ای", hex: "#7C6666" },
//   { name: "قهوه‌ای روشن", hex: "#A77A78" },
//   { name: "گلبهی", hex: "#F6A68B" },
//   { name: "بژ", hex: "#C9B3A3" },
//   { name: "طوسی مایل به صورتی", hex: "#A8969D" },
//   { name: "صورتی روشن", hex: "#E8CFD0" },
//   { name: "خردلی", hex: "#E8C875" },
//   { name: "مرجانی", hex: "#E86A6A" },
//   { name: "یاسی", hex: "#9A8BAA" },
//   { name: "آجری", hex: "#C8835F" },
//   { name: "نارنجی روشن", hex: "#DD956D" },
//   { name: "زرشکی", hex: "#83111B" },
//   { name: "سالمونی", hex: "#F1997C" },
// ];

const colors = [
  { name: "سبز یشمی", hex: "#4B5335" },
  { name: "بادمجانی دیره", hex: "#7E1F5A" },
  { name: "طوسی تیره", hex: "#6F6262" },
  { name: "قهوه‌ای توسی روشن", hex: "#A58080" },
  { name: "گلبهی (نارنجی ملایم)", hex: "#F6A68B" },
  { name: "بژ صورتی", hex: "#C6B2A8" },
  { name: "طوسی مایل به صورتی", hex: "#A8969D" },
  { name: "صورتی خامه ای خیلی روشن", hex: "#EBE0DF" },
  { name: "صورتی روشن (چرک)", hex: "#D19C9C" },
  { name: "آبی فیروزه‌ای (مات)", hex: "#6E9CA6" },
  { name: "مرجانی (قرمز ملایم)", hex: "#E86A6A" },
  { name: "یاسی (بنفش ملایم)", hex: "#9A8BAA" },
  { name: "آجری (خردلی تیره)", hex: "#C19277" },
  { name: "نارنجی روشن", hex: "#DD956D" },
  { name: "زرشکی", hex: "#6E0B14" },
  { name: "سالمونی", hex: "#D49078" },
];

export default async function seedColors() {
  await db.color.createMany({
    data: colors,
  });
}
