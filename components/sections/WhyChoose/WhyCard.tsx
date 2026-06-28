import { LucideIcon } from "lucide-react";

interface WhyCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export default function WhyCard({
  title,
  description,
  icon: Icon,
}: WhyCardProps) {
  return (
    <div className="group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:bg-white/10">
      <div className="mb-5 inline-flex rounded-2xl bg-[#005EB8] p-4 text-white">
        <Icon size={28} />
      </div>

      <h3 className="text-xl font-bold text-white">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-slate-300">
        {description}
      </p>
    </div>
  );
}