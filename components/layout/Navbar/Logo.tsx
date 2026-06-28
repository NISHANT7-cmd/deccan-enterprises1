import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <Image
        src="/logo/logo.png"
        width={120}
        height={120}
        alt="Deccan Enterprises"
        priority
      />

      
    </Link>
  );
}