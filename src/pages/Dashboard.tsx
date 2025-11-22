// src/pages/Dashboard.tsx
import { useNavigate } from 'react-router-dom';
import { Terminal, ChevronRight, Play } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { BrutalCard } from '@/components/ui/brutal-card';
import { BrutalButton } from '@/components/ui/brutal-button';
import { Badge } from '@/components/ui/badge';

const Dashboard = () => {
    const navigate = useNavigate();

    // Mock data - esto vendría del backend
    const projects = [
        {
            id: '1',
            name: 'my-api-project',
            language: 'Python',
            status: 'success' as const,
            lastDeploy: '2 hours ago',
            branch: 'main',
            environment: 'production',
            buildTime: '4m 12s',
            cost: '$0.04'
        },
        {
            id: '2',
            name: 'landing-page',
            language: 'React',
            status: 'progress' as const,
            lastDeploy: 'Deploying...',
            branch: 'main',
            environment: 'staging',
            buildTime: '2m 34s',
            cost: '$0.02'
        },
        {
            id: '3',
            name: 'backend-service',
            language: 'Node.js',
            status: 'failed' as const,
            lastDeploy: '1 hour ago',
            branch: 'develop',
            environment: 'development',
            buildTime: '3m 45s',
            cost: '$0.00'
        }
    ];

    const recentActivity = [
        { time: '5 min ago', project: 'my-api', action: 'deployed to production', status: 'success' as const },
        { time: '12 min ago', project: 'landing-page', action: 'building...', status: 'progress' as const },
        { time: '1h ago', project: 'backend-service', action: 'failed', status: 'failed' as const }
    ];

    return (
        <Layout showSidebar={true}>
            <div className="p-4 sm:p-6 md:p-10 font-mono space-y-8 bg-background min-h-screen">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                    <div>
                        <h1 className="text-3xl md:text-4xl font-black mb-2">Your Pipelines</h1>
                        <p className="text-sm md:text-base text-muted-foreground">
                            {projects.length} active projects · {projects.filter(p => p.status === 'success').length} deploys this month
                        </p>
                    </div>
                    <BrutalButton size="md" className="w-full sm:w-auto">
                        + New Project
                    </BrutalButton>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <BrutalCard
                            key={project.id}
                            status={project.status}
                            className="brutal-hover cursor-pointer"
                            onClick={() => navigate(`/app/projects/${project.id}`)}
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div className="flex items-center gap-3">
                                    <Terminal size={24} className="text-foreground" />
                                    <div>
                                        <h3 className="font-bold text-lg">{project.name}</h3>
                                        <p className="text-xs text-muted-foreground">{project.language}</p>
                                    </div>
                                </div>
                                <Badge status={project.status}>
                                    {project.status === 'success' && '✓'}
                                    {project.status === 'failed' && '✗'}
                                    {project.status === 'progress' && '→'}
                                </Badge>
                            </div>

                            <div className="space-y-2 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">Status:</span>
                                    <span className="font-bold">{project.lastDeploy}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">Branch:</span>
                                    <span className="font-mono">{project.branch} → {project.environment}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">Build time:</span>
                                    <span className="font-mono">{project.buildTime}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">Cost:</span>
                                    <span className="font-mono font-bold">{project.cost}</span>
                                </div>
                            </div>

                            <div className="flex gap-2 mt-4 pt-4 border-t-2 border-black">
                                <BrutalButton
                                    size="sm"
                                    variant="secondary"
                                    className="flex-1"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        navigate(`/app/projects/${project.id}/logs/142`);
                                    }}
                                >
                                    View Logs
                                </BrutalButton>
                                <BrutalButton
                                    size="sm"
                                    variant="ghost"
                                    className="flex-1 border-2 border-black hover:bg-brutal-green"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <Play size={16} />
                                    Deploy
                                </BrutalButton>
                            </div>
                        </BrutalCard>
                    ))}
                </div>

                {/* Recent Activity */}
                <div className="mt-12">
                    <h2 className="text-2xl md:text-3xl font-black mb-6 border-b-4 border-black pb-2 inline-block">
                        Recent Activity
                    </h2>

                    <BrutalCard>
                        <div className="space-y-4">
                            {recentActivity.map((activity, i) => (
                                <div
                                    key={i}
                                    className="flex items-start gap-4 pb-4 border-b-2 border-black last:border-0 last:pb-0"
                                >
                                    <Badge status={activity.status}>
                                        {activity.status === 'success' && '✓'}
                                        {activity.status === 'failed' && '✗'}
                                        {activity.status === 'progress' && '→'}
                                    </Badge>

                                    <div className="flex-1">
                                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                                            <div>
                                                <p className="font-bold">{activity.project}</p>
                                                <p className="text-sm">{activity.action}</p>
                                            </div>
                                            <span className="text-xs text-muted-foreground">{activity.time}</span>
                                        </div>
                                    </div>

                                    <button className="text-xs font-bold hover:underline flex items-center gap-1">
                                        Details <ChevronRight size={14} />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </BrutalCard>
                </div>
            </div>
        </Layout>
    );
};

export default Dashboard;