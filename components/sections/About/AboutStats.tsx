const stats = [
  {
    number: "1000+",
    label: "Products",
  },
  {
    number: "500+",
    label: "Happy Customers",
  },
  {
    number: "5.0★",
    label: "Google Rating",
  },
  {
    number: "100%",
    label: "Genuine Products",
  },
];

export default function AboutStats() {
  return (
    <div className="mt-10 grid grid-cols-2 gap-6 lg:grid-cols-4">
      {stats.map((item) => (
        <div
          key={item.label}
          className="rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
        >
          <h3 className="text-3xl font-bold text-[#005EB8]">
            {item.number}
          </h3>

          <p className="mt-2 text-sm text-slate-600">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}