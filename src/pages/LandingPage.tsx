// src/pages/LandingPage.tsx
import Hero from "@/components/landing/Hero.tsx";
import Problems from "@/components/landing/Problems.tsx";
import Comparison from "@/components/landing/Comparison.tsx";
import HowItWorks from "@/components/landing/HowItWorks.tsx";
import Testimonials from "@/components/landing/Testimonials.tsx";
import Pricing from "@/components/landing/Pricing.tsx";
import FinalCTA from "@/components/landing/FinalCTA.tsx";
import { Footer } from "@/components/layout/Footer";

const LandingPage = () => {
    return (
        <div className="min-h-screen">
            <Hero />
            <Problems />
            <Comparison />
            <HowItWorks />
            <Testimonials />
            <Pricing />
            <FinalCTA />
            <Footer />
        </div>
    );
};

export default LandingPage;