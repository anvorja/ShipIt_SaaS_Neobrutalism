// src/components/Problems.tsx
const Problems = () => {
  const problems = [
    {
      emoji: "😵",
      title: "Complex Setup",
      description: "YAML hell. Marketplace chaos. 2 hours reading docs just to run tests.",
      color: "brutal-shadow-red",
    },
    {
      emoji: "🔥",
      title: "Painful Debugging",
      description: "Build failed on line 847 of your workflow. Good luck finding why.",
      color: "brutal-shadow-yellow",
    },
    {
      emoji: "💸",
      title: "Hidden Costs",
      description: "2,000 minutes free! Then... wait, how much did we spend?",
      color: "brutal-shadow-magenta",
    },
  ];

  return (
    <section className="py-20 px-6 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center">
          The problem with current CI/CD
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className={`bg-background p-8 brutal-border ${problem.color} brutal-hover cursor-default`}
            >
              <div className="text-6xl mb-4">{problem.emoji}</div>
              <h3 className="text-2xl font-bold mb-4">{problem.title}</h3>
              <p className="text-lg">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problems;
