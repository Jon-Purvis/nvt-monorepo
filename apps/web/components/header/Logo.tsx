import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <Image
        src="/logo-for-dark-background.svg"
        alt="North Valley Tavern"
        height={100}
        width={100}
        priority
        className="h-12 w-auto"
      />

      <span className="text-xl font-serif font-bold text-foreground hidden sm:block">
        North Valley Tavern
      </span>
    </Link>
  );
}
