import StatCard from "./StatCard";
import { stats } from "./statsData";

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-linear-to-r from-[#005EB8] via-[#0077cc] to-[#00B4D8] py-32">
      {/* Background Glow */}

      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-white/10 blur-[120px]" />

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-300/20 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="font-semibold uppercase tracking-[0.35em] text-blue-100">
            OUR ACHIEVEMENTS
          </span>

          <h2 className="mt-5 text-5xl font-bold text-white">
            Trusted by Healthcare Professionals
          </h2>

          <p className="mt-6 text-xl leading-8 text-blue-100">
            Every number reflects our commitment to delivering
            premium healthcare products with trust and reliability.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((item) => (
            <StatCard
              key={item.title}
              icon={item.icon}
              number={item.number}
              suffix={item.suffix}
              decimals={item.decimals}
              title={item.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
}