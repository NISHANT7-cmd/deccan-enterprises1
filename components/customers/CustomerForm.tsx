"use client";

import { useState } from "react";
import {
  createCustomer,
  updateCustomer,
} from "@/app/admin/admins/customers/actions";
import type { Customer } from "@/types/customer";

interface CustomerFormProps {
  customer?: Customer;
}

export default function CustomerForm({
  customer,
}: CustomerFormProps) {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(formData: FormData) {
    setLoading(true);

    try {
      const data = {
        business_name: formData.get("business_name")?.toString() || "",
        contact_person: formData.get("contact_person")?.toString() || "",
        phone: formData.get("phone")?.toString() || "",
        email: formData.get("email")?.toString() || "",
        gstin: formData.get("gstin")?.toString() || "",
        billing_address:
          formData.get("billing_address")?.toString() || "",
        shipping_address:
          formData.get("shipping_address")?.toString() || "",
        city: formData.get("city")?.toString() || "",
        state: formData.get("state")?.toString() || "",
        pincode: formData.get("pincode")?.toString() || "",
      };

      if (customer?.id) {
        await updateCustomer(customer.id, data);

        alert("Customer updated successfully!");
      } else {
        await createCustomer(data);

        alert("Customer added successfully!");
      }

      window.location.href = "/admin/admins/customers";
    } catch (error) {
      console.error(error);

      alert("Something went wrong.");
    }

    setLoading(false);
  }

  return (
    <form
      action={handleSubmit}
      className="space-y-6 rounded-3xl bg-white p-8 shadow-xl"
    >
      {/* Business Name */}
      <div>
        <label className="mb-2 block font-medium">
          Business Name *
        </label>

        <input
          name="business_name"
          required
          defaultValue={customer?.business_name}
          className="w-full rounded-xl border border-slate-300 p-4 focus:border-[#005EB8] focus:outline-none"
        />
      </div>

      {/* Contact Person */}
      <div>
        <label className="mb-2 block font-medium">
          Contact Person
        </label>

        <input
          name="contact_person"
          defaultValue={customer?.contact_person}
          className="w-full rounded-xl border border-slate-300 p-4 focus:border-[#005EB8] focus:outline-none"
        />
      </div>

      {/* Phone */}
      <div>
        <label className="mb-2 block font-medium">
          Phone Number *
        </label>

        <input
          name="phone"
          required
          defaultValue={customer?.phone}
          className="w-full rounded-xl border border-slate-300 p-4 focus:border-[#005EB8] focus:outline-none"
        />
      </div>

      {/* Email */}
      <div>
        <label className="mb-2 block font-medium">
          Email
        </label>

        <input
          type="email"
          name="email"
          defaultValue={customer?.email}
          className="w-full rounded-xl border border-slate-300 p-4 focus:border-[#005EB8] focus:outline-none"
        />
      </div>

      {/* GST */}
      <div>
        <label className="mb-2 block font-medium">
          GST Number
        </label>

        <input
          name="gstin"
          defaultValue={customer?.gstin}
          className="w-full rounded-xl border border-slate-300 p-4 focus:border-[#005EB8] focus:outline-none"
        />
      </div>

      {/* Billing Address */}
      <div>
        <label className="mb-2 block font-medium">
          Billing Address
        </label>

        <textarea
          name="billing_address"
          rows={3}
          defaultValue={customer?.billing_address}
          className="w-full rounded-xl border border-slate-300 p-4 focus:border-[#005EB8] focus:outline-none"
        />
      </div>

      {/* Shipping Address */}
      <div>
        <label className="mb-2 block font-medium">
          Shipping Address
        </label>

        <textarea
          name="shipping_address"
          rows={3}
          defaultValue={customer?.shipping_address}
          className="w-full rounded-xl border border-slate-300 p-4 focus:border-[#005EB8] focus:outline-none"
        />
      </div>

      {/* City / State / Pincode */}
      <div className="grid gap-4 md:grid-cols-3">
        <div>
          <label className="mb-2 block font-medium">
            City
          </label>

          <input
            name="city"
            defaultValue={customer?.city}
            className="w-full rounded-xl border border-slate-300 p-4 focus:border-[#005EB8] focus:outline-none"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            State
          </label>

          <input
            name="state"
            defaultValue={customer?.state}
            className="w-full rounded-xl border border-slate-300 p-4 focus:border-[#005EB8] focus:outline-none"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Pincode
          </label>

          <input
            name="pincode"
            defaultValue={customer?.pincode}
            className="w-full rounded-xl border border-slate-300 p-4 focus:border-[#005EB8] focus:outline-none"
          />
        </div>
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-xl bg-[#005EB8] py-4 font-semibold text-white transition hover:bg-[#004c96] disabled:cursor-not-allowed disabled:opacity-50"
      >
        {loading
          ? "Saving..."
          : customer?.id
          ? "Update Customer"
          : "Add Customer"}
      </button>
    </form>
  );
}
