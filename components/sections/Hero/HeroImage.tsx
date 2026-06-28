"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroImage() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.9,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 0.8,
      }}
      className="relative"
    >
      

      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
      >
        <Image
          src="/hero/hero.jpg"
          alt="Medical"
          width={650}
          height={650}
          priority
          className="rounded-4xl shadow-[0_30px_80px_rgba(0,94,184,0.25)]"
        />
      </motion.div>
    </motion.div>
  );
}