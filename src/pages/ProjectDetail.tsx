// src/pages/ProjectDetail.tsx
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Github, Play, RotateCcw, Settings, CheckCircle2 } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { BrutalCard } from '@/components/ui/brutal-card';
import { BrutalButton } from '@/components/ui/brutal-button';
import { Badge } from '@/components/ui/badge';

const ProjectDetail = () => {
    const navigate = useNavigate();
    const { projectId } = useParams();
    const [activeTab, setActiveTab] = useState('overview');

    const tabs = [
        { id: 'overview', label: 'Overview' },
        { id: 'pipelines', label: 'Pipelines' },
        { id: 'deploys', label: 'Deploys' },
        { id: 'settings', label: 'Settings' }
    ];

    const recentDeploys = [
        {
            id: '#142',
            commit: 'a3f4b2c',
            message: 'Fix auth bug',
            branch: 'main',
            status: 'success' as const,
            time: '4m 12s',
            cost: '$0.04',
            ago: '2h ago'
        },
        {
            id: '#141',
            commit: 'f7a3b1c',
            message: 'Update dependencies',
            branch: 'main',
            status: 'success' as const,
            time: '3m 45s',
            cost: '$0.03',
            ago: '5h ago'
        },
        {
            id: '#140',
            commit: 'b2c8a9f',
            message: 'Add new feature',
            branch: 'develop',
            status: 'failed' as const,
            time: '2m 10s',
            cost: '$0.02',
            ago: '1d ago'
        }
    ];

    return (
        <Layout showSidebar={true}>
            <div className="p-4 sm:p-6 md:p-10 font-mono space-y-6 bg-background min-h-screen">
                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-sm">
                    <button
                        onClick={() => navigate('/app/dashboard')}
                        className="flex items-center gap-2 font-bold hover:text-brutal-yellow transition-colors"
                    >
                        <ArrowLeft size={16} />
                        Projects
                    </button>
                    <span>/</span>
                    <span className="font-bold">my-api-project</span>
                </div>

                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4">
                    <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-2">
                            <h1 className="text-3xl md:text-4xl font-black">my-api-project</h1>
                            <Badge status="success"> ✓ Live</Badge>
                        </div>
                        <a
                            href="https://github.com/user/my-api"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm hover:underline text-muted-foreground"
                        >
                            <Github size={16} />
                            github.com/anvorja/my-api
                        </a>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                        <BrutalButton size="md" variant="secondary">
                            <Settings size={18} />
                            Settings
                        </BrutalButton>
                        <BrutalButton size="md">
                            <Play size={18} />
                            Deploy Now
                        </BrutalButton>
                    </div>
                </div>

                {/* Tabs */}
                <div className="border-b-4 border-black overflow-x-auto">
                    <div className="flex gap-0 min-w-max">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`px-6 py-3 font-bold text-sm sm:text-base transition-all border-black ${
                                    activeTab === tab.id
                                        ? 'bg-brutal-yellow border-x-4 border-t-4'
                                        : 'bg-white hover:bg-gray-100'
                                }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Tab Content */}
                {activeTab === 'overview' && (
                    <div className="space-y-6">
                        {/* Current Status */}
                        <BrutalCard status="success">
                            <h2 className="text-xl font-bold mb-4 border-b-2 border-black pb-2">Current Deployment</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                                <div>
                                    <p className="text-muted-foreground">Environment:</p>
                                    <p className="font-bold text-lg">Production</p>
                                </div>
                                <div>
                                    <p className="text-muted-foreground">Branch:</p>
                                    <p className="font-bold font-mono text-lg">main</p>
                                </div>
                                <div>
                                    <p className="text-muted-foreground">Commit:</p>
                                    <p className="font-mono">a3f4b2c "Fix auth bug"</p>
                                </div>
                                <div>
                                    <p className="text-muted-foreground">Deployed:</p>
                                    <p className="font-bold">2 hours ago by @andresito</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 mt-4 pt-4 border-t-2 border-black">
                                <CheckCircle2 className="text-brutal-green" size={24} />
                                <span className="font-bold text-lg">Live and healthy</span>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-3 mt-6">
                                <BrutalButton size="md" variant="secondary" className="flex-1">
                                    View Live Site &rarr;
                                </BrutalButton>
                                <BrutalButton size="md" variant="destructive" className="flex-1">
                                    <RotateCcw size={18} />
                                    Rollback
                                </BrutalButton>
                            </div>
                        </BrutalCard>

                        {/* Quick Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {[
                                { label: 'Deploys this month', value: '42' },
                                { label: 'Avg Build Time', value: '3m 24s' },
                                { label: 'Success Rate', value: '98.5%' },
                                { label: 'Cost this month', value: '$4.32' }
                            ].map((stat, i) => (
                                <BrutalCard key={i} className="text-center">
                                    <p className="text-3xl md:text-4xl font-black mb-2">{stat.value}</p>
                                    <p className="text-xs md:text-sm font-bold uppercase">{stat.label}</p>
                                </BrutalCard>
                            ))}
                        </div>

                        {/* Recent Deploys */}
                        <div>
                            <h2 className="text-2xl font-black mb-4 border-b-4 border-black pb-2 inline-block">
                                Recent Deploys
                            </h2>
                            <div className="overflow-x-auto">
                                <table className="w-full brutal-border bg-white min-w-[640px]">
                                    <thead>
                                    <tr className="border-b-4 border-black bg-muted">
                                        <th className="p-3 text-left font-bold text-sm">Deploy</th>
                                        <th className="p-3 text-left font-bold text-sm">Commit</th>
                                        <th className="p-3 text-left font-bold text-sm">Branch</th>
                                        <th className="p-3 text-left font-bold text-sm">Status</th>
                                        <th className="p-3 text-left font-bold text-sm">Time</th>
                                        <th className="p-3 text-left font-bold text-sm">Cost</th>
                                        <th className="p-3 text-left font-bold text-sm">Actions</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {recentDeploys.map((deploy) => (
                                        <tr key={deploy.id} className="border-b-2 border-black hover:bg-gray-50">
                                            <td className="p-3 font-mono font-bold">{deploy.id}</td>
                                            <td className="p-3">
                                                <div className="font-mono text-sm">{deploy.commit}</div>
                                                <div className="text-xs text-muted-foreground">{deploy.message}</div>
                                                <div className="text-xs text-muted-foreground">{deploy.ago}</div>
                                            </td>
                                            <td className="p-3 font-mono text-sm">{deploy.branch}</td>
                                            <td className="p-3">
                                                <Badge status={deploy.status}>
                                                    {deploy.status === 'success' ? '✓' : '✗'}
                                                </Badge>
                                            </td>
                                            <td className="p-3 font-mono text-sm">{deploy.time}</td>
                                            <td className="p-3 font-mono font-bold">{deploy.cost}</td>
                                            <td className="p-3">
                                                <div className="flex gap-2">
                                                    <button
                                                        onClick={() => navigate(`/projects/${projectId}/logs/142`)}
                                                        className="text-xs font-bold hover:underline"
                                                    >
                                                        Logs
                                                    </button>
                                                    <button className="text-xs font-bold hover:underline">
                                                        Rollback
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'pipelines' && (
                    <BrutalCard>
                        <h2 className="text-2xl font-bold mb-6">Pipeline Configuration</h2>
                        <div className="space-y-6">
                            <div className="flex items-center justify-between gap-4 flex-wrap">
                                <div className="flex items-center gap-4">
                                    <div className="w-16 h-16 brutal-border bg-brutal-blue flex items-center justify-center font-black text-2xl">
                                        1
                                    </div>
                                    <div>
                                        <p className="font-bold text-lg">Source</p>
                                        <p className="text-sm text-muted-foreground">GitHub</p>
                                    </div>
                                </div>
                                <div className="text-2xl font-black">&rarr;</div>
                                <div className="flex items-center gap-4">
                                    <div className="w-16 h-16 brutal-border bg-brutal-green flex items-center justify-center font-black text-2xl">
                                        2
                                    </div>
                                    <div>
                                        <p className="font-bold text-lg">Test</p>
                                        <p className="text-sm text-muted-foreground">pytest</p>
                                    </div>
                                </div>
                                <div className="text-2xl font-black">&rarr;</div>
                                <div className="flex items-center gap-4">
                                    <div className="w-16 h-16 brutal-border bg-brutal-yellow flex items-center justify-center font-black text-2xl">
                                        3
                                    </div>
                                    <div>
                                        <p className="font-bold text-lg">Build</p>
                                        <p className="text-sm text-muted-foreground">Docker</p>
                                    </div>
                                </div>
                                <div className="text-2xl font-black">&rarr;</div>
                                <div className="flex items-center gap-4">
                                    <div className="w-16 h-16 brutal-border bg-brutal-red flex items-center justify-center font-black text-2xl">
                                        4
                                    </div>
                                    <div>
                                        <p className="font-bold text-lg">Deploy</p>
                                        <p className="text-sm text-muted-foreground">Render</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 p-4 bg-muted brutal-border">
                                <h3 className="font-bold mb-2">Detected Configuration</h3>
                                <div className="space-y-2 text-sm">
                                    <p><span className="font-bold">Stack:</span> Python (FastAPI detected)</p>
                                    <p><span className="font-bold">Test command:</span> <code className="font-mono bg-black text-brutal-green px-2 py-1">pytest</code></p>
                                    <p><span className="font-bold">Build:</span> Docker image</p>
                                    <p><span className="font-bold">Deploy target:</span> Render</p>
                                </div>
                                <div className="flex gap-3 mt-4">
                                    <BrutalButton size="sm" variant="secondary">Edit Manually</BrutalButton>
                                    <BrutalButton size="sm" variant="ghost" className="border-2 border-black">Re-detect</BrutalButton>
                                </div>
                            </div>
                        </div>
                    </BrutalCard>
                )}

                {activeTab === 'deploys' && (
                    <BrutalCard>
                        <h2 className="text-2xl font-bold mb-6">Deploy History</h2>
                        <p className="text-muted-foreground">Full deploy history with filters coming soon...</p>
                    </BrutalCard>
                )}

                {activeTab === 'settings' && (
                    <BrutalCard>
                        <h2 className="text-2xl font-bold mb-6">Project Settings</h2>
                        <p className="text-muted-foreground">Configuration options coming soon...</p>
                    </BrutalCard>
                )}
            </div>
        </Layout>
    );
};

export default ProjectDetail;