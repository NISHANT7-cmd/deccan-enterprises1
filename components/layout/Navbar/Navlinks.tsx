"use client";

import Link from "next/link";

interface Props {
  href: string;
  label: string;
}

export default function NavLink({
  href,
  label,
}: Props) {
  return (
    <Link
      href={href}
      className="
      relative
      font-medium
      text-slate-700
      transition-all
      duration-300
      hover:text-[#005EB8]

      after:absolute
      after:-bottom-1
      after:left-0
      after:h-[2px]
      after:w-0
      after:bg-[#005EB8]
      after:transition-all
      hover:after:w-full
      "
    >
      {label}
    </Link>
  );
}