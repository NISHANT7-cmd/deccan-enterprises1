import { ChevronDown } from "lucide-react";

export default function HeroScrollIndicator() {
  return (
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
      <ChevronDown
        size={34}
        className="text-[#005EB8]"
      />
    </div>
  );
}