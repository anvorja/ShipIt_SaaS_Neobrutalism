// src/components/layout/Sidebar.tsx
import { Terminal, Plus, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';

interface SidebarProps {
    isOpen?: boolean;
    onClose?: () => void;
}

export const Sidebar = ({ isOpen = true, onClose }: SidebarProps) => {
    const location = useLocation();

    const projects = [
        { id: '1', name: 'my-api-project', language: 'Python', status: 'success' as const },
        { id: '2', name: 'landing-page', language: 'React', status: 'progress' as const },
        { id: '3', name: 'backend-service', language: 'Node.js', status: 'failed' as const }
    ];

    return (
        <>
            {/* Overlay for mobile */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
                    onClick={onClose}
                />
            )}

            {/* Sidebar */}
            <aside
                className={`
          fixed md:sticky top-0 left-0 h-screen w-72 bg-muted border-r-4 border-black font-mono
          transform transition-transform duration-300 z-50
          ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        `}
            >
                <div className="h-full flex flex-col">
                    {/* Mobile Close Button */}
                    <div className="md:hidden p-4 border-b-4 border-black flex justify-between items-center">
                        <span className="font-black text-xl">Projects</span>
                        <button onClick={onClose}>
                            <X size={24} />
                        </button>
                    </div>

                    {/* Projects List */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-2">
                        <div className="mb-4">
                            <h3 className="font-bold text-sm uppercase mb-3 text-muted-foreground">
                                Your Projects
                            </h3>

                            {projects.map((project) => {
                                const isActive = location.pathname.includes(`/app/projects/${project.id}`);

                                return (
                                    <Link
                                        key={project.id}
                                        to={`/app/projects/${project.id}`}
                                        className={`
                      block p-3 mb-2 border-2 border-black transition-all
                      ${isActive
                                            ? 'bg-brutal-yellow brutal-shadow-blue'
                                            : 'bg-white hover:bg-brutal-cyan hover:brutal-shadow-blue'
                                        }
                    `}
                                        onClick={onClose}
                                    >
                                        <div className="flex items-start justify-between gap-2">
                                            <div className="flex items-center gap-2 flex-1 min-w-0">
                                                <Terminal size={16} className="shrink-0" />
                                                <div className="min-w-0">
                                                    <p className="font-bold text-sm truncate">{project.name}</p>
                                                    <p className="text-xs text-muted-foreground">{project.language}</p>
                                                </div>
                                            </div>
                                            <Badge status={project.status}>
                                                {project.status === 'success' && '✓'}
                                                {project.status === 'failed' && '✗'}
                                                {project.status === 'progress' && '→'}
                                            </Badge>
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>

                        <button className="w-full p-3 bg-black text-white border-2 border-black hover:bg-brutal-yellow hover:text-black font-bold flex items-center justify-center gap-2 transition-all">
                            <Plus size={18} />
                            Add Project
                        </button>
                    </div>

                    {/* Stats Footer */}
                    <div className="p-4 border-t-4 border-black bg-white">
                        <div className="text-xs space-y-2">
                            <div className="flex justify-between">
                                <span className="text-muted-foreground">Last deploy:</span>
                                <span className="font-bold">2 hours ago</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-muted-foreground">Status:</span>
                                <Badge status="success">✓ Passing</Badge>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-muted-foreground">Avg build:</span>
                                <span className="font-mono font-bold">3m 24s</span>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
        </>
    );
};