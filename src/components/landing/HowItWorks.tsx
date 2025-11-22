// src/components/landing/HowItWorks.tsx
const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      title: "Connect",
      description: "Connect your GitHub repo. OAuth in 30 seconds.",
      color: "brutal-shadow-blue",
      borderColor: "border-brutal-blue",
    },
    {
      number: "2",
      title: "Configure",
      description: "We detect your stack. You click 3 buttons.",
      detail: "Detected: FastAPI app",
      color: "brutal-shadow-green",
      borderColor: "border-brutal-green",
    },
    {
      number: "3",
      title: "Ship",
      description: "Watch it deploy. See costs in real-time. Roll back if needed.",
      color: "brutal-shadow-red",
      borderColor: "border-brutal-red",
    },
  ];

  return (
    <section className="py-20 px-6 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold mb-4 text-center">
          3 steps. That's it.
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`bg-background p-8 brutal-border ${step.color} brutal-hover`}
            >
              <div className={`w-20 h-20 rounded-full brutal-border ${step.borderColor} bg-background flex items-center justify-center mb-6`}>
                <span className="text-4xl font-bold">{step.number}</span>
              </div>
              
              <h3 className="text-3xl font-bold mb-4">{step.title}</h3>
              <p className="text-lg mb-4">{step.description}</p>
              
              {step.detail && (
                <div className="bg-muted p-4 brutal-border mt-4">
                  <p className="font-mono text-sm">{step.detail}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
