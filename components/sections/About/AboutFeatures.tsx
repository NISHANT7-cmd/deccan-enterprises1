import {
  ShieldCheck,
  Truck,
  BadgeCheck,
  Handshake,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Premium Quality",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
  },
  {
    icon: BadgeCheck,
    title: "Trusted Supplier",
  },
  {
    icon: Handshake,
    title: "Excellent Support",
  },
];

export default function AboutFeatures() {
  return (
    <div className="mt-10 grid gap-5 sm:grid-cols-2">
      {features.map((feature) => {
        const Icon = feature.icon;

        return (
          <div
            key={feature.title}
            className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm transition hover:shadow-lg"
          >
            <div className="rounded-xl bg-sky-100 p-3 text-[#005EB8]">
              <Icon size={22} />
            </div>

            <span className="font-semibold text-slate-700">
              {feature.title}
            </span>
          </div>
        );
      })}
    </div>
  );
}