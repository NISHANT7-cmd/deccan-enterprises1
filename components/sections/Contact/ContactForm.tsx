"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Loader2, CheckCircle2 } from "lucide-react";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { supabase } from "@/lib/supabase/client";

const enquirySchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  phone: z.string().min(10, "Enter a valid phone number"),
  email: z.string().email("Enter a valid email"),
  company: z.string().optional(),
  requirement: z.string().min(3, "Please select a requirement"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type EnquiryForm = z.infer<typeof enquirySchema>;

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EnquiryForm>({
    resolver: zodResolver(enquirySchema),
  });

  async function onSubmit(data: EnquiryForm) {
    try {
      setLoading(true);

      const { error } = await supabase.from("enquiries").insert([
        {
          name: data.name,
          phone: data.phone,
          email: data.email,
          company: data.company,
          requirement: data.requirement,
          message: data.message,
        },
      ]);

      if (error) throw error;

      setSubmitted(true);
      reset();

      setTimeout(() => {
        setSubmitted(false);
      }, 4000);
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  const inputClass =
    "w-full rounded-2xl border border-slate-300 bg-white px-5 py-4 outline-none transition-all duration-300 focus:border-[#005EB8] focus:ring-4 focus:ring-blue-100";

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="rounded-[32px] border border-white/30 bg-white/80 p-8 shadow-2xl backdrop-blur-xl"
    >
      <div className="mb-8">
        <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-[#005EB8]">
          Request a Quote
        </span>

        <h2 className="mt-4 text-4xl font-bold text-slate-900">
          Send Us Your Requirement
        </h2>

        <p className="mt-3 text-slate-600">
          Fill in the details below and our team will contact you shortly with
          the best quotation.
        </p>
      </div>

      {submitted && (
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 flex items-center gap-3 rounded-2xl border border-green-200 bg-green-50 p-4 text-green-700"
        >
          <CheckCircle2 size={22} />
          Thank you! Your enquiry has been submitted successfully.
        </motion.div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Name */}
        <div>
          <input
            {...register("name")}
            placeholder="Full Name"
            className={inputClass}
          />
          {errors.name && (
            <p className="mt-2 text-sm text-red-600">
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Phone */}
        <div>
          <input
            {...register("phone")}
            placeholder="Phone Number"
            className={inputClass}
          />
          {errors.phone && (
            <p className="mt-2 text-sm text-red-600">
              {errors.phone.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <input
            {...register("email")}
            type="email"
            placeholder="Email Address"
            className={inputClass}
          />
          {errors.email && (
            <p className="mt-2 text-sm text-red-600">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Company */}
        <div>
          <input
            {...register("company")}
            placeholder="Hospital / Clinic / Company"
            className={inputClass}
          />
        </div>

        {/* Requirement */}
        <div>
          <select
            {...register("requirement")}
            className={inputClass}
            defaultValue=""
          >
            <option value="" disabled>
              Select Requirement
            </option>
            <option>Bulk Purchase</option>
            <option>Surgical Products</option>
            <option>Hospital Equipment</option>
            <option>Laboratory Equipment</option>
            <option>Operation Theatre Supplies</option>
            <option>Diagnostic Equipment</option>
            <option>General Enquiry</option>
          </select>

          {errors.requirement && (
            <p className="mt-2 text-sm text-red-600">
              {errors.requirement.message}
            </p>
          )}
        </div>

        {/* Message */}
        <div>
          <textarea
            {...register("message")}
            rows={6}
            placeholder="Tell us about your requirement..."
            className={`${inputClass} resize-none`}
          />
          {errors.message && (
            <p className="mt-2 text-sm text-red-600">
              {errors.message.message}
            </p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="flex w-full items-center justify-center gap-3 rounded-2xl bg-[#005EB8] px-8 py-5 font-semibold text-white transition-all duration-300 hover:bg-[#004A91] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {loading ? (
            <>
              <Loader2 className="animate-spin" size={20} />
              Sending...
            </>
          ) : (
            <>
              <Send size={20} />
              Submit Enquiry
            </>
          )}
        </button>
      </form>
    </motion.div>
  );
}