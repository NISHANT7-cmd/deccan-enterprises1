"use client";

import { motion } from "framer-motion";
import { MapPinned, Navigation } from "lucide-react";
import Link from "next/link";

export default function GoogleMap() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-2xl"
    >
      {/* Google Map */}

      <iframe
        title="Deccan Enterprises Location"
        src="https://www.google.com/maps?q=Gut+No+137+Kasturi+Park+Shop+No+3+Plot+No+42+Vijayant+Nagar+Satara+Deolai+Parisar+Chhatrapati+Sambhajinagar+431001&output=embed"
        className="h-[650px] w-full border-0"
        loading="lazy"
        allowFullScreen
      />

      {/* Floating Information Card */}

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.4,
          duration: 0.6,
        }}
        viewport={{ once: true }}
        className="absolute bottom-8 left-8 right-8 rounded-3xl border border-white/30 bg-white/90 p-6 shadow-2xl backdrop-blur-xl"
      >
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

          {/* Left */}

          <div className="flex items-start gap-5">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#005EB8] to-[#00B4D8] text-white shadow-lg">
              <MapPinned size={30} />
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-900">
                Visit Our Office
              </h3>

              <p className="mt-2 whitespace-pre-line text-slate-600 leading-7">
                Gut No.137,
                {"\n"}Kasturi Park,
                {"\n"}Shop No.3,
                {"\n"}Plot No.42,
                {"\n"}Vijayant Nagar,
                {"\n"}Satara Deolai Parisar,
                {"\n"}Chhatrapati Sambhajinagar,
                {"\n"}Maharashtra – 431001
              </p>
            </div>
          </div>

          {/* Right */}

          <Link
            href="https://maps.google.com/?q=Gut+No+137+Kasturi+Park+Shop+No+3+Plot+No+42+Vijayant+Nagar+Satara+Deolai+Parisar+Chhatrapati+Sambhajinagar+431001"
            target="_blank"
            className="group flex items-center justify-center gap-3 rounded-2xl bg-[#005EB8] px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#004A91]"
          >
            <Navigation
              size={22}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />

            Get Directions
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
}