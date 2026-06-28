import AboutFeatures from "./AboutFeatures";
import AboutStats from "./AboutStats";

export default function AboutContent() {
  return (
    <>
      <span className="font-semibold uppercase tracking-[0.35em] text-[#005EB8]">
        ABOUT US
      </span>

      <h2 className="mt-5 text-5xl font-bold leading-tight text-slate-900">
        Delivering Trusted Healthcare Solutions
      </h2>

      <p className="mt-8 text-lg leading-8 text-slate-600">
        Deccan Enterprises is one of Maharashtras trusted
        surgical product wholesalers supplying hospitals,
        clinics, healthcare professionals and distributors
        with premium medical products at competitive
        wholesale prices.
      </p>

      <p className="mt-6 text-lg leading-8 text-slate-600">
        We are committed to providing genuine products,
        exceptional customer service, fast delivery and
        long-term business relationships built on trust.
      </p>

      <AboutFeatures />

      <AboutStats />
    </>
  );
}