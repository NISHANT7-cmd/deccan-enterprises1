"use server";

import { revalidatePath } from "next/cache";
import { adminSupabase } from "@/lib/supabase/admin";

export async function createCustomer(data: any) {
  const customerCode =
    "CUS-" + Date.now().toString().slice(-6);

  const { error } = await adminSupabase
    .from("customers")
    .insert([
      {
        customer_code: customerCode,
        ...data,
      },
    ]);

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath("/admin/customers");
}
export async function deleteCustomer(id: string) {
  const { error } = await adminSupabase
    .from("customers")
    .delete()
    .eq("id", id);

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath("/admin/customers");
}
export async function updateCustomer(
    id: string,
    data: any
) {

    const { error } = await adminSupabase
        .from("customers")
        .update(data)
        .eq("id", id);

    if (error)
        throw new Error(error.message);

    revalidatePath("/admin/customers");
    revalidatePath(`/admin/customers/${id}`);

}