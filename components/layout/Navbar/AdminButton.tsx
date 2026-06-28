import Link from "next/link";
import { ShieldCheck } from "lucide-react";

export default function AdminButton() {
  return (
    <Link
      href="/admin/login"
      aria-label="Administrator Login"
      className="hidden items-center justify-center rounded-xl border border-slate-300 p-2 transition-all duration-300 hover:border-[#005EB8] hover:bg-[#005EB8] hover:text-white lg:flex"
    >
      <ShieldCheck size={20} />
    </Link>
  );
}