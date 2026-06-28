import { LucideIcon } from "lucide-react";

interface TrustCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function TrustCard({
  icon: Icon,
  title,
  description,
}: TrustCardProps) {
  return (
    <div className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="mb-5 inline-flex rounded-2xl bg-sky-100 p-4 text-[#005EB8] transition-colors group-hover:bg-[#005EB8] group-hover:text-white">
        <Icon size={28} />
      </div>

      <h3 className="text-lg font-bold text-slate-900">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-7 text-slate-600">
        {description}
      </p>
    </div>
  );
}