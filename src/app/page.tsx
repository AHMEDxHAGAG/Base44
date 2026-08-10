import { BuildSection } from "@/components/sites/base44-com-cf167063/root-8a5edab2/BuildSection";
import { DesignSection } from "@/components/sites/base44-com-cf167063/root-8a5edab2/DesignSection";
import { FaqSection } from "@/components/sites/base44-com-cf167063/root-8a5edab2/FaqSection";
import { Footer } from "@/components/sites/base44-com-cf167063/root-8a5edab2/Footer";
import { GrowSection } from "@/components/sites/base44-com-cf167063/root-8a5edab2/GrowSection";
import { Header } from "@/components/sites/base44-com-cf167063/root-8a5edab2/Header";
import { HeroSection } from "@/components/sites/base44-com-cf167063/root-8a5edab2/HeroSection";
import { PricingSection } from "@/components/sites/base44-com-cf167063/root-8a5edab2/PricingSection";
import { SendoffSection } from "@/components/sites/base44-com-cf167063/root-8a5edab2/SendoffSection";
import { StackSection } from "@/components/sites/base44-com-cf167063/root-8a5edab2/StackSection";
import { TestimonialSection } from "@/components/sites/base44-com-cf167063/root-8a5edab2/TestimonialSection";

export default function Home() {
  return (
    <div className="base44-page">
      <Header />
      <main>
        <HeroSection />
        <StackSection />
        <BuildSection />
        <DesignSection />
        <GrowSection />
        <TestimonialSection />
        <PricingSection />
        <FaqSection />
        <SendoffSection />
      </main>
      <Footer />
    </div>
  );
}
