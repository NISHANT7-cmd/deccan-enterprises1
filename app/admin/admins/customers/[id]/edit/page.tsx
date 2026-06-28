import CustomerForm from "@/components/customers/CustomerForm";
import { adminSupabase } from "@/lib/supabase/admin";

export default async function EditCustomer({

    params,

}: {

    params: {

        id: string;

    };

}) {

    const { data: customer } =
        await adminSupabase
            .from("customers")
            .select("*")
            .eq("id", params.id)
            .single();

    return (

        <div className="mx-auto max-w-5xl">

            <h1 className="mb-8 text-4xl font-bold">

                Edit Customer

            </h1>

            <CustomerForm
                customer={customer}
            />

        </div>

    );

}