"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import Button from "@/components/ui/Button";

export default function HeroButtons() {
  return (
    <div className="mt-10 flex flex-wrap gap-5">
      <motion.div whileHover={{ scale: 1.05 }}>
        <Button href="#contact">
          Request Quote
        </Button>
      </motion.div>

      <motion.a
        whileHover={{
          scale: 1.05,
        }}
        href="tel:+919175359798"
        className="flex items-center gap-3 rounded-xl border bg-white px-7 py-4 font-semibold shadow-lg"
      >
        <Phone size={18} />

        Call Now
      </motion.a>
    </div>
  );
}