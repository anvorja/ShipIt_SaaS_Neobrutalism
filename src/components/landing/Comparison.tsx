// src/components/landing/Comparison.tsx
const Comparison = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center">
          How ShipIt fixes this
        </h2>
        
        <div className="overflow-x-auto">
          <table className="w-full brutal-border bg-background brutal-shadow-cyan">
            <thead>
              <tr className="border-b-4 border-black">
                <th className="p-6 text-left text-xl font-bold">Feature</th>
                <th className="p-6 text-left text-xl font-bold">GitHub Actions</th>
                <th className="p-6 text-left text-xl font-bold bg-brutal-yellow">ShipIt</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b-4 border-black">
                <td className="p-6 font-bold">Setup time</td>
                <td className="p-6">2+ hours</td>
                <td className="p-6 bg-brutal-yellow font-bold">2 minutes</td>
              </tr>
              <tr className="border-b-4 border-black">
                <td className="p-6 font-bold">Config files</td>
                <td className="p-6">YAML hell</td>
                <td className="p-6 bg-brutal-yellow font-bold">Visual UI</td>
              </tr>
              <tr className="border-b-4 border-black">
                <td className="p-6 font-bold">Debugging</td>
                <td className="p-6">🤷</td>
                <td className="p-6 bg-brutal-yellow font-bold">Line-by-line</td>
              </tr>
              <tr>
                <td className="p-6 font-bold">Pricing</td>
                <td className="p-6">Hidden</td>
                <td className="p-6 bg-brutal-yellow font-bold">$0.01/min</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="mt-12 grid md:grid-cols-2 gap-4 text-lg">
          <div className="space-y-3">
            <p className="flex items-center gap-3">
              <span className="text-brutal-green text-2xl">✓</span>
              Auto-detect your stack
            </p>
            <p className="flex items-center gap-3">
              <span className="text-brutal-green text-2xl">✓</span>
              Generate pipeline in 3 clicks
            </p>
            <p className="flex items-center gap-3">
              <span className="text-brutal-green text-2xl">✓</span>
              Deploy to Render, Railway, Vercel
            </p>
          </div>
          <div className="space-y-3">
            <p className="flex items-center gap-3">
              <span className="text-brutal-green text-2xl">✓</span>
              Rollback in 1 click
            </p>
            <p className="flex items-center gap-3">
              <span className="text-brutal-green text-2xl">✓</span>
              Real-time cost tracking
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
