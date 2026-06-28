import CustomerForm from "@/components/customers/CustomerForm";

export default function AddCustomerPage() {
  return (
    <div className="mx-auto max-w-4xl">
      <h1 className="mb-8 text-4xl font-bold">
        Add Customer
      </h1>

      <CustomerForm />
    </div>
  );
}