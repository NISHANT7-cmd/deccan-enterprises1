"use client";

import { motion } from "framer-motion";

import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";
import GoogleMap from "./GoogleMap";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-100 py-24"
    >
      {/* ============================= */}
      {/* Background Decorative Elements */}
      {/* ============================= */}

      <div className="absolute inset-0 -z-10 overflow-hidden">

        {/* Top Left */}
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-blue-200/20 blur-3xl" />

        {/* Bottom Right */}
        <div className="absolute -bottom-32 -right-32 h-[30rem] w-[30rem] rounded-full bg-cyan-300/20 blur-3xl" />

        {/* Center Glow */}
        <div className="absolute left-1/2 top-1/3 h-80 w-80 -translate-x-1/2 rounded-full bg-sky-100/30 blur-3xl" />

      </div>

      <div className="container mx-auto px-6 lg:px-8">

        {/* ============================= */}
        {/* Section Header */}
        {/* ============================= */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto mb-20 max-w-4xl text-center"
        >
          <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold uppercase tracking-wider text-[#005EB8]">
            Contact Us
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl lg:text-6xl">
            We're Ready To Help
            <span className="block bg-gradient-to-r from-[#005EB8] to-[#00B4D8] bg-clip-text text-transparent">
              Your Healthcare Business
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-600">
            Looking for reliable surgical products, medical consumables,
            diagnostic equipment, or hospital supplies?
            Our experienced team is here to provide premium products,
            competitive wholesale pricing, and fast delivery across Maharashtra.
          </p>
        </motion.div>

        {/* ============================= */}
        {/* Contact Grid */}
        {/* ============================= */}

        <div className="grid gap-14 xl:grid-cols-2">

          {/* Left Side */}

          <ContactInfo />

          {/* Right Side */}

          <ContactForm />

        </div>

        {/* ============================= */}
        {/* Google Map */}
        {/* ============================= */}

        <div className="mt-24">

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <GoogleMap />
          </motion.div>

        </div>

      </div>

      {/* ============================= */}
      {/* Floating Medical Decorative Elements */}
      {/* ============================= */}

      <motion.div
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 6,
          ease: "easeInOut",
        }}
        className="absolute left-16 top-40 hidden h-8 w-8 rounded-full bg-[#00B4D8]/20 lg:block"
      />

      <motion.div
        animate={{
          y: [0, 20, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 8,
          ease: "easeInOut",
        }}
        className="absolute right-24 top-60 hidden h-6 w-6 rounded-full bg-[#005EB8]/20 lg:block"
      />

      <motion.div
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          repeat: Infinity,
          duration: 25,
          ease: "linear",
        }}
        className="absolute bottom-40 left-20 hidden h-16 w-16 rounded-full border border-blue-300/30 lg:block"
      />

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 5,
        }}
        className="absolute bottom-32 right-20 hidden h-10 w-10 rounded-full bg-cyan-300/20 lg:block"
      />
    </section>
  );
}