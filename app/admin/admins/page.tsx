import ReviewTable from "@/components/admin/ReviewTable";
import LogoutButton from "@/components/admin/LogoutButton";

import DashboardCard from "@/components/admin/DashboardCard";

import {
  MessageSquare,
  Package,
  Image,
  Mail,
} from "lucide-react";

export default function Dashboard() {
  return (
    <>
      
      <h1 className="mb-10 text-4xl font-bold">
        Dashboard
      </h1>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
        <DashboardCard
          title="Reviews"
          value="0"
          icon={MessageSquare}
        />

        <DashboardCard
          title="Products"
          value="18"
          icon={Package}
        />

        <DashboardCard
          title="Gallery"
          value="0"
          icon={Image}
        />

        <DashboardCard
          title="Enquiries"
          value="0"
          icon={Mail}
        />
      </div>
      <div className="flex items-center justify-between mt-10">
        <LogoutButton />
      </div>
    </>
  );
}
