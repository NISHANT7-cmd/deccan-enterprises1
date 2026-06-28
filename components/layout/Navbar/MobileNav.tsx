"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { navigation } from "@/constants/navigation";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Hamburger */}
      <button
        onClick={() => setOpen(true)}
        aria-label="Open Menu"
        className="right-0 rounded-xl border border-slate-300 p-3 transition hover:bg-slate-100 lg:hidden"
      >
        <Menu size={22} />
      </button>

      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
        />
      )}

      {/* Drawer */}
      <aside
        className={`fixed top-0 right-0 z-50 h-screen w-80 bg-white shadow-2xl transition-transform duration-300 lg:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b p-6">
          <div>
            <h2 className="text-xl font-bold text-[#005EB8]">
              DECCAN
            </h2>

            <p className="text-sm text-slate-500">
              Enterprises
            </p>
          </div>

          <button
            onClick={() => setOpen(false)}
            className="rounded-lg p-2 hover:bg-slate-100"
          >
            <X size={24} />
          </button>
        </div>

        {/* Links */}
        <nav className="flex flex-col p-6">
          {navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-4 text-lg font-medium transition hover:bg-[#005EB8] hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Bottom CTA */}
        <div className="absolute bottom-0 w-full border-t p-6">
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="block rounded-2xl bg-[#005EB8] py-4 text-center font-semibold text-white transition hover:bg-[#004c94]"
          >
            Request Quote
          </a>
        </div>
      </aside>
    </>
  );
}