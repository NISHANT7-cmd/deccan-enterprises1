import { adminSupabase } from "@/lib/supabase/admin";
import Link from "next/link";

export default async function CustomerProfile({
    params,
}: {
    params: {
        id: string;
    };
}) {

    const { data: customer } = await adminSupabase
        .from("customers")
        .select("*")
        .eq("id", params.id)
        .single();

    if (!customer) {

        return (
            <h1>
                Customer not found.
            </h1>
        );

    }

    return (

        <div className="space-y-8">

            <div className="flex items-center justify-between">

                <div>

                    <h1 className="text-4xl font-bold">

                        {customer.business_name}

                    </h1>

                    <p className="text-slate-500">

                        {customer.customer_code}

                    </p>

                </div>

                <Link
                    href={`/admin/customers/${customer.id}/edit`}
                    className="rounded-xl bg-[#005EB8] px-6 py-3 text-white"
                >
                    Edit Customer
                </Link>

            </div>

            <div className="grid gap-6 md:grid-cols-2">

                <div className="rounded-3xl bg-white p-8 shadow">

                    <h2 className="mb-5 text-xl font-semibold">
                        Contact Details
                    </h2>

                    <p>
                        <strong>Contact:</strong>{" "}
                        {customer.contact_person}
                    </p>

                    <p>
                        <strong>Phone:</strong>{" "}
                        {customer.phone}
                    </p>

                    <p>
                        <strong>Email:</strong>{" "}
                        {customer.email}
                    </p>

                    <p>
                        <strong>GST:</strong>{" "}
                        {customer.gstin}
                    </p>

                </div>

                <div className="rounded-3xl bg-white p-8 shadow">

                    <h2 className="mb-5 text-xl font-semibold">
                        Address
                    </h2>

                    <p>
                        {customer.billing_address}
                    </p>

                    <p>
                        {customer.city}
                    </p>

                    <p>
                        {customer.state}
                    </p>

                    <p>
                        {customer.pincode}
                    </p>

                </div>

            </div>

        </div>

    );

}