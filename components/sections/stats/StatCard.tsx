"use client";

import CountUp from "react-countup";
import { motion } from "framer-motion";
import {
  Package,
  Users,
  Star,
  BadgeCheck,
} from "lucide-react";

interface Props {
  icon: string;
  number: number;
  suffix: string;
  title: string;
  decimals?: number;
}

const icons = {
  package: Package,
  users: Users,
  star: Star,
  badge: BadgeCheck,
};

export default function StatCard({
  icon,
  number,
  suffix,
  title,
  decimals = 0,
}: Props) {
  const Icon = icons[icon as keyof typeof icons];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="rounded-[32px] border border-white/10 bg-white/10 p-8 backdrop-blur-xl"
    >
      <div className="mb-6 inline-flex rounded-2xl bg-white/20 p-4 text-white">
        {Icon && <Icon size={34} />}
      </div>

      <h3 className="text-5xl font-bold text-white">
        <CountUp
          end={number}
          duration={2.5}
          decimals={decimals}
        />
        {suffix}
      </h3>

      <p className="mt-4 text-lg text-blue-100">
        {title}
      </p>
    </motion.div>
  );
}