"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { Phone, Pencil, Trash2, MessageCircle } from "lucide-react";
import { supabase } from "@/lib/supabase/client";
import { deleteCustomer } from "@/app//admin/admins/customers/actions";
import type { Customer } from "@/types/customer";

export default function CustomerTable() {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadCustomers();
  }, []);

  async function loadCustomers() {
  setLoading(true);

  const { data, error } = await supabase
    .from("customers")
    .select("*")
    .order("created_at", { ascending: false });

  console.log("DATA:", data);
  console.log("ERROR:", error);

  if (error) {
    console.error(error);
  } else if (data) {
    setCustomers(data);
  }

  setLoading(false);
}

  const filteredCustomers = useMemo(() => {
    const query = search.toLowerCase();

    return customers.filter((customer) =>
      customer.business_name.toLowerCase().includes(query) ||
      customer.phone.includes(query) ||
      (customer.customer_code ?? "").toLowerCase().includes(query)
    );
  }, [customers, search]);

  async function handleDelete(id: string) {
    if (!confirm("Delete this customer?")) return;

    await deleteCustomer(id);

    loadCustomers();
  }

  return (
    <>
      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search customer..."
          className="w-full rounded-xl border p-3 md:max-w-sm"
        />

        <div className="rounded-xl bg-[#005EB8] px-5 py-3 text-white">
          Total Customers: <strong>{filteredCustomers.length}</strong>
        </div>
      </div>

      <div className="overflow-x-auto rounded-2xl bg-white shadow">
        <table className="min-w-full">
          <thead className="bg-slate-100">
            <tr>
              <th className="p-4 text-left">Code</th>
              <th className="text-left">Business</th>
              <th className="text-left">Phone</th>
              <th className="text-left">City</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {loading && (
              <tr>
                <td colSpan={5} className="p-10 text-center">
                  Loading customers...
                </td>
              </tr>
            )}

            {!loading && filteredCustomers.length === 0 && (
              <tr>
                <td colSpan={5} className="p-10 text-center text-slate-500">
                  No customers found.
                </td>
              </tr>
            )}

            {!loading &&
              filteredCustomers.map((customer) => (
                <tr key={customer.id} className="border-t">
                  <td className="p-4 font-medium">
                    {customer.customer_code}
                  </td>

                  <td>
    <Link
        href={`/admin/customers/${customer.id}`}
        className="font-semibold text-[#005EB8] hover:underline"
    >
        {customer.business_name}
    </Link>
</td>

                  <td>{customer.phone}</td>

                  <td>{customer.city}</td>

                  <td>
                    <div className="flex justify-center gap-2">
                      <a
                        href={`tel:${customer.phone}`}
                        className="rounded-lg bg-green-600 p-2 text-white"
                        title="Call"
                      >
                        <Phone size={18} />
                      </a>

                      <a
                        href={`https://wa.me/91${customer.phone}`}
                        target="_blank"
                        className="rounded-lg bg-green-500 p-2 text-white"
                        title="WhatsApp"
                      >
                        <MessageCircle size={18} />
                      </a>

                      <Link
                        href={`/admin/customers/${customer.id}/edit`}
                        className="rounded-lg bg-blue-600 p-2 text-white"
                        title="Edit"
                      >
                        <Pencil size={18} />
                      </Link>

                      <button
                        onClick={() => handleDelete(customer.id!)}
                        className="rounded-lg bg-red-600 p-2 text-white"
                        title="Delete"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}