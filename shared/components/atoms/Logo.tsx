import paths from "@/shared/paths";
import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href={paths.main.home}>
      <Image
        src="/logo4.png"
        alt="ams logo"
        width={200}
        height={200}
        className="w-auto h-10"
      />
    </Link>
  );
}
