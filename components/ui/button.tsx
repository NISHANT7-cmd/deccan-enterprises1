import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
}

export default function Button({
  children,
  href = "#",
}: ButtonProps) {
  return (
    <Link
      href={href}
      className="
      inline-flex
      items-center
      justify-center
      rounded-xl
      bg-[#005EB8]
      px-7
      py-4
      text-white
      font-semibold
      transition-all
      duration-300
      hover:scale-105
      hover:shadow-xl
      "
    >
      {children}
    </Link>
  );
}
