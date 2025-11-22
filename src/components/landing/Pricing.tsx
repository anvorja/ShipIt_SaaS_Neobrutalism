// src/components/landing/Pricing.tsx
import { useState } from "react";
import { Button } from "@/components/ui/button.tsx";
import { Slider } from "@/components/ui/slider.tsx";

const Pricing = () => {
  const [buildTime, setBuildTime] = useState([5]);
  const [deploys, setDeploys] = useState([20]);
  
  const totalMinutes = buildTime[0] * deploys[0];
  const cost = Math.max(0, (totalMinutes - 100) * 0.01).toFixed(2);

  return (
    <section className="py-20 px-6 bg-secondary">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold mb-8 text-center">
          Stupid simple pricing
        </h2>
        
        <div className="text-center mb-16">
          <div className="text-8xl font-bold mb-4">$0.01</div>
          <p className="text-2xl">per minute</p>
          <p className="text-xl mt-4 text-muted-foreground">100 minutes free every month</p>
        </div>
        
        <div className="bg-background p-12 brutal-border brutal-shadow-blue">
          <h3 className="text-2xl font-bold mb-8">Calculate your costs:</h3>
          
          <div className="space-y-8">
            <div>
              <label className="block text-lg font-bold mb-4">
                Your app builds in: {buildTime[0]} minutes
              </label>
              <Slider
                value={buildTime}
                onValueChange={setBuildTime}
                min={1}
                max={15}
                step={1}
                className="brutal-slider"
              />
            </div>
            
            <div>
              <label className="block text-lg font-bold mb-4">
                You deploy: {deploys[0]} times/month
              </label>
              <Slider
                value={deploys}
                onValueChange={setDeploys}
                min={1}
                max={100}
                step={1}
                className="brutal-slider"
              />
            </div>
            
            <div className="pt-8 border-t-4 border-black">
              <div className="flex items-baseline justify-between">
                <span className="text-2xl font-bold">Your monthly cost:</span>
                <span className="text-6xl font-bold">${cost}</span>
              </div>
              <p className="text-muted-foreground mt-4">
                Total minutes: {totalMinutes} ({totalMinutes > 100 ? `${totalMinutes - 100} paid` : 'all free'})
              </p>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            className="brutal-border bg-primary text-primary-foreground hover:bg-primary/90 brutal-shadow-yellow brutal-hover text-2xl px-16 py-10 h-auto font-bold rounded-none"
          >
            Start Free
          </Button>
          
          <p className="mt-6 text-lg text-muted-foreground">
            No tiers. No sales calls. Just pay for what you use.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
