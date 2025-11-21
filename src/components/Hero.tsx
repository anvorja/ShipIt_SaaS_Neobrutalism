import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20">
      <div className="max-w-5xl w-full">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
          GitHub Actions is overly complex.
          <br />
          <span className="inline-block mt-2">We're not.</span>
        </h1>
        
        <h2 className="text-3xl md:text-5xl font-bold mb-12">
          Ship code in 2 minutes, not 2 hours.
        </h2>
        
        <Button 
          size="lg" 
          className="brutal-border bg-primary text-primary-foreground hover:bg-primary/90 brutal-shadow-yellow brutal-hover text-xl px-12 py-8 h-auto font-bold rounded-none"
        >
          Connect GitHub →
        </Button>
        
        <p className="mt-6 text-lg text-muted-foreground">
          5 minutes to first deploy. No credit card.
        </p>
        
        <div className="mt-16 bg-black text-white p-8 brutal-border brutal-shadow-green font-mono text-sm md:text-base">
          <div className="space-y-2">
            <p>$ shipit deploy</p>
            <p className="text-brutal-green">✓ Tests passed (23s)</p>
            <p className="text-brutal-green">✓ Build completed (1m 4s)</p>
            <p className="text-brutal-green">✓ Deployed to production</p>
            <p>→ https://yourapp.com</p>
            <p className="text-brutal-yellow mt-4">Cost: $0.08</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
