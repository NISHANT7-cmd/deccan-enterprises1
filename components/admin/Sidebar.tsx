"use client";

import Link from "next/link";

import {
  LayoutDashboard,
  MessageSquare,
  Package,
  ImageIcon,
  CircleHelp,
  Mail,
  Settings,
  LogOut,
  Users,
} from "lucide-react";

const links = [
  {
    href: "/admin/admins",
    label: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    href: "/admin/admins/customers",
    label: "Customers",
    icon: Users,
  },
  {
    href: "/admin/reviews",
    label: "Reviews",
    icon: MessageSquare,
  },
  {
    href: "/admin/products",
    label: "Products",
    icon: Package,
  },
  {
    href: "/admin/gallery",
    label: "Gallery",
    icon: ImageIcon,
  },
  {
    href: "/admin/faq",
    label: "FAQ",
    icon: CircleHelp,
  },
  {
    href: "/admin/enquiries",
    label: "Enquiries",
    icon: Mail,
  },
  {
    href: "/admin/settings",
    label: "Settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 flex h-screen w-72 flex-col border-r bg-[#0F172A] text-white">
      <div className="border-b border-white/10 p-8">
        <h2 className="text-2xl font-bold">
          DECCAN
        </h2>

        <p className="text-sm text-slate-400">
          Admin Panel
        </p>
      </div>

      <nav className="flex-1 p-5">
        {links.map((link) => {
          const Icon = link.icon;

          return (
            <Link
              key={link.href}
              href={link.href}
              className="mb-2 flex items-center gap-3 rounded-xl px-4 py-3 transition hover:bg-[#005EB8]"
            >
              <Icon size={20} />

              {link.label}
            </Link>
          );
        })}
      </nav>

      <button className="m-5 flex items-center gap-3 rounded-xl bg-red-600 px-4 py-3">
        <LogOut size={20} />
        Logout
      </button>
    </aside>
  );
}