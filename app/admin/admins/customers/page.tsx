import Link from "next/link";
import CustomerTable from "@/components/customers/CustomerTable";

export default function CustomersPage() {
  return (
    <>
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-4xl font-bold">
          Customers
        </h1>

        <Link
          href="/admin/customers/new"
          className="rounded-xl bg-[#005EB8] px-6 py-3 font-semibold text-white"
        >
          + Add Customer
        </Link>
      </div>

      <CustomerTable />
    </>
  );
}