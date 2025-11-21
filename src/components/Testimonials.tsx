const Testimonials = () => {
  const testimonials = [
    {
      quote: "Setup my API deployment in 4 minutes. GitHub Actions took me 3 days.",
      author: "@devuser123",
      role: "Indie Hacker",
      color: "brutal-shadow-cyan",
    },
    {
      quote: "Finally, CI/CD that doesn't require a DevOps degree.",
      author: "@startupfounder",
      role: "YC W24",
      color: "brutal-shadow-magenta",
    },
    {
      quote: "The pricing is so simple my accountant actually understood it.",
      author: "@agencyowner",
      role: "Agency with 15 clients",
      color: "brutal-shadow-yellow",
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center">
          Developers who stopped fighting YAML
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-background p-8 brutal-border ${testimonial.color} brutal-hover`}
            >
              <p className="text-xl mb-6 leading-relaxed">"{testimonial.quote}"</p>
              <div className="font-bold">
                <p className="text-lg">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
