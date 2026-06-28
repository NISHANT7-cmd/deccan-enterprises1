"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { navigation } from "@/constants/navigation";
import Button from "@/components/ui/Button";
import Logo from "./Logo";
import AdminButton from "./AdminButton";
import MobileNav from "@/components/layout/Navbar/MobileNav";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-lg border-b border-slate-200"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Logo /> <div className="right-0">
          <MobileNav /></div>

        <nav className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="relative font-medium text-slate-700 transition hover:text-[#005EB8]
              after:absolute after:-bottom-1 after:left-0 after:h-2px after:w-0
              after:bg-[#005EB8] after:transition-all hover:after:w-full"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href="#contact">
            Request Quote
          </Button>
        </div>
<AdminButton />
        
      </div>
    </header>
  );
}