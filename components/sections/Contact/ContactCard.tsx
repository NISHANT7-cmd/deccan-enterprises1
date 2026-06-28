"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface ContactCardProps {
  title: string;
  value: string;
  icon: React.ElementType;
  color: string;
  href?: string;
}

export default function ContactCard({
  title,
  value,
  icon: Icon,
  color,
  href,
}: ContactCardProps) {
  const content = (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{
        duration: 0.3,
      }}
      className="group relative overflow-hidden rounded-3xl border border-white/20 bg-white/70 p-6 shadow-xl backdrop-blur-xl"
    >
      {/* Background Gradient */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 transition-opacity duration-500 group-hover:opacity-10`}
      />

      {/* Icon */}
      <div
        className={`mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${color} text-white shadow-lg`}
      >
        <Icon size={30} />
      </div>

      {/* Title */}
      <h3 className="mb-2 text-lg font-bold text-slate-900">
        {title}
      </h3>

      {/* Value */}
      <p className="whitespace-pre-line text-sm leading-7 text-slate-600">
        {value}
      </p>

      {/* Hover Line */}
      <div
        className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${color} transition-all duration-500 group-hover:w-full`}
      />
    </motion.div>
  );

  if (href) {
    return (
      <Link
        href={href}
        target={
          href.startsWith("http") ||
          href.startsWith("mailto") ||
          href.startsWith("tel")
            ? "_self"
            : "_blank"
        }
      >
        {content}
      </Link>
    );
  }

  return content;
}