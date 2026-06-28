"use server";

import { revalidatePath } from "next/cache";
import { adminSupabase } from "@/lib/supabase/admin";

export async function approveReview(id: string) {
  const { error } = await adminSupabase
    .from("reviews")
    .update({
      status: "approved",
    })
    .eq("id", id);

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath("/admin");
  revalidatePath("/");
}

export async function rejectReview(id: string) {
  const { error } = await adminSupabase
    .from("reviews")
    .update({
      status: "rejected",
    })
    .eq("id", id);

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath("/admin");
  revalidatePath("/");
}

export async function deleteReview(id: string) {
  const { error } = await adminSupabase
    .from("reviews")
    .delete()
    .eq("id", id);

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath("/admin");
  revalidatePath("/");
}