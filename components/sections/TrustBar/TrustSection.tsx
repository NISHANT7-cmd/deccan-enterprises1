import {
  ShieldCheck,
  Truck,
  PackageCheck,
  Users,
  BadgeCheck,
  Clock3,
} from "lucide-react";

import TrustCard from "./TrustCard";

const features = [
  {
    icon: ShieldCheck,
    title: "Premium Quality",
    description:
      "Only genuine and trusted medical products from reliable manufacturers.",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description:
      "Quick order processing and dependable delivery across Maharashtra.",
  },
  {
    icon: PackageCheck,
    title: "1000+ Products",
    description:
      "A wide range of surgical products and medical consumables in stock.",
  },
  {
    icon: Users,
    title: "Trusted by Professionals",
    description:
      "Supplying hospitals, clinics, pharmacies, and healthcare institutions.",
  },
  {
    icon: BadgeCheck,
    title: "5.0 Google Rating",
    description:
      "Recognized for excellent customer service and competitive pricing.",
  },
  {
    icon: Clock3,
    title: "Reliable Support",
    description:
      "Responsive assistance before, during, and after every order.",
  },
];

export default function TrustSection() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="font-semibold uppercase tracking-[0.3em] text-[#005EB8]">
            WHY DECCAN ENTERPRISES
          </p>

          <h2 className="mt-4 text-4xl font-bold text-slate-900 lg:text-5xl">
            Trusted by Healthcare Professionals
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
            We deliver premium-quality surgical and medical products with
            dependable service, competitive pricing, and a commitment to
            supporting hospitals, clinics, and distributors across Maharashtra.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => (
            <TrustCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}