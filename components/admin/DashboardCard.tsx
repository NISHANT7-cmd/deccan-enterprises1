import { LucideIcon } from "lucide-react";

interface Props {
  title: string;
  value: string;
  icon: LucideIcon;
}

export default function DashboardCard({
  title,
  value,
  icon: Icon,
}: Props) {
  return (
    <div className="rounded-3xl bg-white p-8 shadow">
      <div className="mb-5 flex justify-between">
        <h3 className="font-semibold">
          {title}
        </h3>

        <Icon
          className="text-[#005EB8]"
          size={26}
        />
      </div>

      <p className="text-4xl font-bold">
        {value}
      </p>
    </div>
  );
}