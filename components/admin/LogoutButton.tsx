"use client";

import { supabase } from "@/lib/supabase/client";

export default function LogoutButton() {
  async function logout() {
    await supabase.auth.signOut();
    window.location.href = "/admin/login";
  }

  return (
    <button
      onClick={logout}
      className="rounded-xl bg-red-600 px-4 py-2 text-white"
    >
      Logout
    </button>
  );
}