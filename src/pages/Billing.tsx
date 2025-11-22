//src/pages/Billing.tsx
import { CreditCard, FileText } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { BrutalCard } from '@/components/ui/brutal-card';
import { BrutalButton } from '@/components/ui/brutal-button';

const Billing = () => {
    const projectsUsage = [
        { name: 'my-api-project', minutes: 234, cost: 2.34, percentage: 54 },
        { name: 'landing-page', minutes: 98, cost: 0.98, percentage: 23 },
        { name: 'backend-service', minutes: 100, cost: 0.00, percentage: 23 }
    ];

    const invoices = [
        { month: 'November 2024', amount: '$3.32' },
        { month: 'October 2024', amount: '$5.21' },
        { month: 'September 2024', amount: '$1.89' }
    ];

    return (
        <Layout showSidebar={false}>
            <div className="p-4 sm:p-6 md:p-10 font-mono space-y-8 bg-background min-h-screen">
                <h1 className="text-3xl md:text-4xl font-black mb-8">Billing</h1>

                {/* Current Usage */}
                <BrutalCard status="warning">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-4 mb-6">
                        <div>
                            <p className="font-bold text-muted-foreground uppercase text-sm mb-2">
                                November 2024 Usage
                            </p>
                            <p className="text-4xl md:text-5xl font-black">
                                432 <span className="text-xl text-muted-foreground font-normal">/ 100 free min</span>
                            </p>
                        </div>
                        <div className="text-left md:text-right">
                            <p className="text-3xl md:text-4xl font-bold text-brutal-red">$3.32</p>
                            <p className="text-xs md:text-sm">Est. charge Dec 1</p>
                        </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="relative">
                        <div className="h-10 md:h-12 w-full brutal-border bg-gray-200 relative overflow-hidden">
                            {/* Free tier */}
                            <div
                                className="h-full bg-black absolute left-0 top-0 flex items-center justify-center text-white text-xs font-bold z-10"
                                style={{ width: '23%' }}
                            >
                                FREE (100 min)
                            </div>
                            {/* Overage */}
                            <div
                                className="h-full bg-brutal-red absolute top-0 flex items-center justify-center text-white text-xs font-bold border-l-4 border-black"
                                style={{ left: '23%', width: '77%' }}
                            >
                                OVERAGE (332 min)
                            </div>
                        </div>
                    </div>
                </BrutalCard>

                {/* Usage Breakdown */}
                <div>
                    <h2 className="text-2xl font-black mb-4 border-b-4 border-black pb-2 inline-block">
                        Usage Breakdown
                    </h2>

                    <div className="overflow-x-auto">
                        <table className="w-full brutal-border bg-white min-w-[600px]">
                            <thead>
                            <tr className="border-b-4 border-black bg-muted">
                                <th className="p-3 md:p-4 text-left font-bold">Project</th>
                                <th className="p-3 md:p-4 text-left font-bold">Minutes</th>
                                <th className="p-3 md:p-4 text-left font-bold">Cost</th>
                                <th className="p-3 md:p-4 text-left font-bold">% of Total</th>
                            </tr>
                            </thead>
                            <tbody>
                            {projectsUsage.map((project, i) => (
                                <tr key={i} className="border-b-2 border-black hover:bg-gray-50">
                                    <td className="p-3 md:p-4 font-bold">{project.name}</td>
                                    <td className="p-3 md:p-4 font-mono">{project.minutes} min</td>
                                    <td className="p-3 md:p-4 font-mono font-bold">
                                        {project.cost === 0 ? '$0.00 (free)' : `$${project.cost.toFixed(2)}`}
                                    </td>
                                    <td className="p-3 md:p-4">
                                        <div className="flex items-center gap-2">
                                            <div className="h-4 w-24 brutal-border bg-gray-200 overflow-hidden">
                                                <div
                                                    className="h-full bg-brutal-yellow"
                                                    style={{ width: `${project.percentage}%` }}
                                                />
                                            </div>
                                            <span className="font-bold text-sm">{project.percentage}%</span>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                            <tr className="border-t-4 border-black bg-muted font-bold">
                                <td className="p-3 md:p-4">Total</td>
                                <td className="p-3 md:p-4 font-mono">432 min</td>
                                <td className="p-3 md:p-4 font-mono text-lg">$3.32</td>
                                <td className="p-3 md:p-4">100%</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Payment Method & Invoices */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Payment Method */}
                    <BrutalCard>
                        <h3 className="font-bold mb-4 uppercase border-b-2 border-black pb-2">
                            Payment Method
                        </h3>
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 brutal-border bg-muted flex items-center justify-center">
                                <CreditCard size={24} />
                            </div>
                            <div>
                                <p className="font-bold">Visa ending in 4242</p>
                                <p className="text-sm text-muted-foreground">Expires 12/2025</p>
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-2">
                            <BrutalButton size="sm" variant="secondary" className="flex-1">
                                Update Card
                            </BrutalButton>
                            <BrutalButton
                                size="sm"
                                variant="ghost"
                                className="flex-1 text-brutal-red hover:bg-brutal-red hover:text-white border-2 border-black"
                            >
                                Remove
                            </BrutalButton>
                        </div>
                    </BrutalCard>

                    {/* Invoices */}
                    <BrutalCard>
                        <h3 className="font-bold mb-4 uppercase border-b-2 border-black pb-2">
                            Invoices
                        </h3>
                        <ul className="space-y-2">
                            {invoices.map((invoice, i) => (
                                <li
                                    key={i}
                                    className="flex justify-between items-center p-3 hover:bg-muted cursor-pointer border-2 border-transparent hover:border-black transition-all"
                                >
                                    <span className="font-bold">{invoice.month}</span>
                                    <div className="flex items-center gap-3">
                                        <span className="font-mono font-bold">{invoice.amount}</span>
                                        <FileText size={18} />
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <BrutalButton size="sm" variant="secondary" className="w-full mt-4">
                            View All Invoices
                        </BrutalButton>
                    </BrutalCard>
                </div>

                {/* Spending Limit */}
                <BrutalCard>
                    <h3 className="font-bold mb-4 uppercase border-b-2 border-black pb-2">
                        Spending Limits
                    </h3>
                    <div className="space-y-4">
                        <div>
                            <label className="block font-bold mb-2 text-sm">
                                Set a monthly spending limit (optional)
                            </label>
                            <input
                                type="number"
                                placeholder="0"
                                className="w-full md:w-64 px-4 py-2 brutal-border bg-white font-mono focus:outline-none focus:ring-4 focus:ring-brutal-yellow"
                            />
                            <p className="text-xs text-muted-foreground mt-1">Leave empty for no limit</p>
                        </div>

                        <div className="space-y-2">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input type="checkbox" className="w-4 h-4" />
                                <span className="text-sm font-bold">Pause deployments when limit reached</span>
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input type="checkbox" defaultChecked className="w-4 h-4" />
                                <span className="text-sm font-bold">Send email alert at 80% of limit</span>
                            </label>
                        </div>

                        <BrutalButton size="md" variant="secondary">
                            Save Spending Limit
                        </BrutalButton>
                    </div>
                </BrutalCard>
            </div>
        </Layout>
    );
};

export default Billing;