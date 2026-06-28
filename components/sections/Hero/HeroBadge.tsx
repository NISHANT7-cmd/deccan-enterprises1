import { Star } from "lucide-react";

export default function HeroBadge() {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-5 py-2 shadow-md">
      <Star className="fill-yellow-400 text-yellow-400" size={18} />

      <span className="text-sm font-semibold text-slate-700">
        5.0 Google Rated Surgical Products Supplier
      </span>
    </div>
  );
}