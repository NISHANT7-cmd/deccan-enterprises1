export default function HeroFloatingCards() {
  return (
    <>
      <div className="absolute -left-6 top-12 rounded-3xl bg-white/80 p-5 shadow-2xl backdrop-blur-xl">
        <h4 className="text-2xl font-bold text-[#005EB8]">
          1000+
        </h4>

        <p className="text-sm text-slate-500">
          Surgical Products
        </p>
      </div>

      <div className="absolute -right-8 bottom-10 rounded-3xl bg-white/80 p-5 shadow-2xl backdrop-blur-xl">
        <h4 className="text-2xl font-bold text-green-600">
          500+
        </h4>

        <p className="text-sm text-slate-500">
          Happy Customers
        </p>
      </div>
    </>
  );
}