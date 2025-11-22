// src/pages/Index.tsx
import Hero from "@/components/Hero";
import Problems from "@/components/Problems";
import Comparison from "@/components/Comparison";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FinalCTA from "@/components/FinalCTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Problems />
      <Comparison />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <FinalCTA />
    </div>
  );
};

export default Index;
