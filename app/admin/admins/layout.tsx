import Sidebar from "@/components/admin/Sidebar";


export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  return (
   
    <div className="min-h-screen bg-slate-100">
      
      <Sidebar />

      <main className="ml-72 p-10">{children}</main>
    </div>
  );
}