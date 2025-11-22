// src/components/FinalCTA.tsx
import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  return (
    <section className="py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl md:text-7xl font-bold mb-12">
          Stop fighting YAML.
          <br />
          Start shipping.
        </h2>
        
        <Button 
          size="lg" 
          className="brutal-border bg-background text-foreground hover:bg-muted brutal-shadow-green brutal-hover text-2xl px-16 py-10 h-auto font-bold rounded-none"
        >
          Connect GitHub →
        </Button>
        
        <p className="mt-8 text-xl text-muted-foreground">
          5 min setup · No credit card · 100 min free
        </p>
      </div>
    </section>
  );
};

export default FinalCTA;
