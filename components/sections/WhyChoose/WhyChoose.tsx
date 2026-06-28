import WhyCard from "./WhyCard";
import { whyChooseData } from "./WhyData";

export default function WhyChoose() {
  return (
    <section
      id="why-choose"
      className="relative overflow-hidden bg-[#0F172A] py-28"
    >
      {/* Background Glow */}
      <div className="absolute -top-32 left-1/2 h-450px w-450px -translate-x-1/2 rounded-full bg-[#005EB8]/20 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="font-semibold uppercase tracking-[0.35em] text-sky-400">
            WHY CHOOSE US
          </span>

          <h2 className="mt-5 text-5xl font-bold text-white">
            Trusted Healthcare Supply Partner
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            We combine premium-quality products, dependable
            service, and competitive pricing to help hospitals,
            clinics, and healthcare professionals source medical
            supplies with confidence.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-5">
          {whyChooseData.map((item) => (
            <WhyCard
              key={item.title}
              title={item.title}
              description={item.description}
              icon={item.icon}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 rounded-32px border border-white/10 bg-linear-to-r from-[#005EB8] to-[#00B4D8] p-10 text-center shadow-2xl">
          <h3 className="text-3xl font-bold text-white">
            Looking for a Reliable Surgical Product Supplier?
          </h3>

          <p className="mt-4 text-lg text-blue-100">
            Get in touch today for competitive pricing, bulk orders,
            and expert assistance.
          </p>

          <a
            href="#contact"
            className="mt-8 inline-flex rounded-2xl bg-white px-8 py-4 font-semibold text-[#005EB8] transition hover:scale-105"
          >
            Request Free Quote
          </a>
        </div>
      </div>
    </section>
  );
}