// src/components/ProjectCard.tsx
import { Link } from "react-router-dom";
import { Project } from "@/dataMock/projects";

interface ProjectCardProps {
    project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
    const shadowColor =
        project.status === 'success' ? 'brutal-shadow-green' :
            project.status === 'failed' ? 'brutal-shadow-red' :
                'brutal-shadow-yellow';

    const statusIcon =
        project.status === 'success' ? '✓' :
            project.status === 'failed' ? '✗' :
                '→';

    const statusText =
        project.status === 'success' ? 'Deployed' :
            project.status === 'failed' ? 'Failed' :
                'Deploying';

    const getLanguageEmoji = (lang: string) => {
        const emojis: Record<string, string> = {
            'Python': '🐍',
            'React': '⚛️',
            'Node.js': '🟢',
            'Go': '🔵',
            'Ruby': '💎'
        };
        return emojis[lang] || '📦';
    };

    return (
        <Link to={`/app/projects/${project.id}`}>
            <div className={`bg-white brutal-border ${shadowColor} brutal-hover p-6 cursor-pointer`}>
                <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                        <span className="text-3xl">{getLanguageEmoji(project.language)}</span>
                        <div>
                            <h3 className="text-xl font-bold">{project.name}</h3>
                            <p className="text-sm text-muted-foreground">{project.language}</p>
                        </div>
                    </div>
                    <span className={`text-2xl ${
                        project.status === 'success' ? 'text-brutal-green' :
                            project.status === 'failed' ? 'text-brutal-red' :
                                'text-brutal-yellow'
                    }`}>
            {statusIcon}
          </span>
                </div>

                <div className="space-y-2 text-sm font-mono">
                    <p className="flex justify-between">
                        <span className="text-muted-foreground">Status:</span>
                        <span className="font-bold">{statusText} {project.lastDeploy}</span>
                    </p>
                    <p className="flex justify-between">
                        <span className="text-muted-foreground">Branch:</span>
                        <span className="font-bold">{project.branch} → {project.environment}</span>
                    </p>
                    <p className="flex justify-between">
                        <span className="text-muted-foreground">Build time:</span>
                        <span className="font-bold">{project.buildTime}</span>
                    </p>
                    <p className="flex justify-between">
                        <span className="text-muted-foreground">Cost:</span>
                        <span className="font-bold">{project.cost}</span>
                    </p>
                </div>

                <div className="mt-6 flex gap-2">
                    <button
                        className="flex-1 brutal-border bg-background hover:bg-brutal-yellow transition-colors py-2 px-4 font-bold text-sm"
                        onClick={(e) => {
                            e.preventDefault();
                            // View logs logic
                        }}
                    >
                        View Logs
                    </button>
                    <button
                        className="flex-1 brutal-border bg-primary text-primary-foreground hover:bg-primary/90 transition-colors py-2 px-4 font-bold text-sm"
                        onClick={(e) => {
                            e.preventDefault();
                            // Deploy again logic
                        }}
                    >
                        Deploy Again
                    </button>
                </div>
            </div>
        </Link>
    );
};