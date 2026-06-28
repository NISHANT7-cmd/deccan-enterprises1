export default function HeroStats() {
  const stats = [
    {
      number: "1000+",
      title: "Products",
    },
    {
      number: "500+",
      title: "Customers",
    },
    {
      number: "5.0★",
      title: "Google Rating",
    },
  ];

  return (
    <div className="mt-14 grid grid-cols-3 gap-6">
      {stats.map((item) => (
        <div key={item.title}>
          <h3 className="text-3xl font-bold text-[#005EB8]">
            {item.number}
          </h3>

          <p className="mt-2 text-slate-500">
            {item.title}
          </p>
        </div>
      ))}
    </div>
  );
}