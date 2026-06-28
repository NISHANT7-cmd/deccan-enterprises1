import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/button";
import Card from "@/components/ui/Card";
import Container from "@/components/shared/Container";
import Heading from "@/components/ui/Heading";
import Section from "@/components/shared/Section";
import Text from "@/components/ui/Text";
import Hero from "@/components/sections/Hero/Hero";
import TrustSection from "@/components/sections/TrustBar/TrustSection";
import About from "@/components/sections/About/About";
import Products from "@/components/sections/Products/Products";
import WhyChoose from "@/components/sections/WhyChoose/WhyChoose";
import Stats from "@/components/sections/stats/Stats";
import Testimonials from "@/components/sections/Testimonials/Testimonials";
import Contact from "@/components/sections/Contact/Contact";
import FAQ from "@/components/sections/FAQ/FAQ";


export default function Home() {
  return (
    <>
      <Hero />
      <TrustSection />
      <About />
      <Products />
      <Testimonials />
      <WhyChoose />
      <FAQ />
      <Contact />
      <Stats />
    </>
  );
}
