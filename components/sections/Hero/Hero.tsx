import Container from "@/components/shared/Container";
import HeroBadge from "./HeroBadge";
import HeroButtons from "./herobuttons";
import HeroImage from "./HeroImage";
import HeroStats from "./HeroStats";
import HeroBackground from "./HeroBackground";
import HeroScrollIndicator from "./HeroScrollIndicator";
import HeroTrust from "./HeroTrust";
import FadeUp from "@/components/animations/FadeUp";

export default function Hero() {
  return (
   <section
  id="home"
  className="relative overflow-hidden bg-linear-to-top from-sky-50 via-white to-cyan-50 py-24 lg:py-36"
 
 ><div className="absolute left-1/2 top-0 z-100 flex items-center gap-3 px-6 py-4 lg:px-12 -translate-x-1/2">
        <h1 className="font-[var(--font-poppins)] text-5xl font-bold text-[#005EB8]">
          DECCAN
        </h1>
</div><div className="absolute left-1/2 top-15 z-100 flex items-center gap-3 px-6 py-4 lg:px-12 -translate-x-1/2">
        <h2 className="text-3xl tracking-[0.35em] text-sky-500">
          ENTERPRISES
        </h2>
        
      </div>
      <Container>
        <div className="grid items-center gap-0 lg:grid-cols-2">
         <div>
  <FadeUp>
    <HeroBadge />
  </FadeUp>

  <FadeUp delay={0.1}>
    <h1 className="mt-8 text-5xl font-extrabold leading-tight text-slate-900 lg:text-7xl">
      Trusted Surgical Products Supplier

      <span className="block bg-linear-to-r from-[#005EB8] to-[#00B4D8] bg-clip-text text-transparent">
        for Hospitals & Clinics
      </span>
    
    </h1>
  </FadeUp>


  <FadeUp delay={0.2}>
    <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600">
      Delivering premium surgical and medical products
      with competitive pricing, genuine brands and
      reliable delivery across Maharashtra.
    </p>
  </FadeUp>
  

  <FadeUp delay={0.3}>
    <HeroButtons />
  </FadeUp>

  <FadeUp delay={0.4}>
    <HeroStats  />
  </FadeUp>

  <FadeUp delay={0.5}>
    <HeroTrust/>
  </FadeUp>
</div>

          <HeroBackground />
          <HeroImage />
          

          <HeroScrollIndicator />
        </div>
      </Container>
    </section>
  );
}
