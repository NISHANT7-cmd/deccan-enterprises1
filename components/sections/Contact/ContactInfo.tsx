"use client";

import { motion } from "framer-motion";
import { MessageCircle, PhoneCall } from "lucide-react";
import Link from "next/link";

import ContactCard from "./ContactCard";
import { contactInfo } from "./contactData";

export default function ContactInfo() {
  return (
    <div className="space-y-10">

      {/* Section Heading */}

      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold uppercase tracking-wider text-[#005EB8]">
          Contact Information
        </span>

        <h2 className="mt-5 text-5xl font-bold leading-tight text-slate-900">
          Let's Build Better
          <br />
          Healthcare Together.
        </h2>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
          Whether you're a hospital, clinic, distributor, or healthcare
          professional, our team is ready to provide premium surgical
          products with reliable delivery and competitive wholesale pricing.
        </p>
      </motion.div>

      {/* Cards */}

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          staggerChildren: 0.1,
        }}
        viewport={{ once: true }}
        className="grid gap-6 sm:grid-cols-2"
      >
        {contactInfo.map((item) => (
          <ContactCard
            key={item.id}
            title={item.title}
            value={item.value}
            icon={item.icon}
            color={item.color}
            href={item.href}
          />
        ))}
      </motion.div>

      {/* CTA Buttons */}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="flex flex-col gap-5 sm:flex-row"
      >
        {/* Call Button */}

        <Link
          href="tel:+919175359798"
          className="group flex flex-1 items-center justify-center gap-3 rounded-2xl bg-[#005EB8] px-8 py-5 font-semibold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-[#004a91]"
        >
          <PhoneCall
            size={22}
            className="transition-transform duration-300 group-hover:rotate-12"
          />

          Call Now
        </Link>

        {/* WhatsApp */}

        <Link
          href="https://wa.me/919175359798"
          target="_blank"
          className="group flex flex-1 items-center justify-center gap-3 rounded-2xl bg-green-600 px-8 py-5 font-semibold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-green-700"
        >
          <MessageCircle
            size={22}
            className="transition-transform duration-300 group-hover:scale-110"
          />

          WhatsApp Us
        </Link>
      </motion.div>
    </div>
  );
}