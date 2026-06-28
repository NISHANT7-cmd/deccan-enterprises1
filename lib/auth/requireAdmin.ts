import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export async function requireAdmin() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/admin/login");
  }

  const { data: admin } = await supabase
    .from("admin_users")
    .select("*")
    .eq("auth_user_id", user.id)
    .single();

  if (!admin) {
    redirect("/admin/login");
  }

  if (!admin.active) {
    redirect("/admin/login");
  }

  return {
    user,
    admin,
  };
}