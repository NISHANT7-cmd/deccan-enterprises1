import { ArrowRight, LucideIcon } from "lucide-react";

interface ProductCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export default function ProductCard({
  title,
  description,
  icon: Icon,
}: ProductCardProps) {
  return (
    <div className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-3 hover:border-[#005EB8] hover:shadow-2xl">
      <div className="mb-6 inline-flex rounded-2xl bg-sky-100 p-4 text-[#005EB8] transition group-hover:bg-[#005EB8] group-hover:text-white">
        <Icon size={32} />
      </div>

      <h3 className="text-xl font-bold text-slate-900">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-slate-600">
        {description}
      </p>

      <button className="mt-8 flex items-center gap-2 font-semibold text-[#005EB8] transition group-hover:gap-3">
        Quick Enquiry

        <ArrowRight size={18} />
      </button>
    </div>
  );
}