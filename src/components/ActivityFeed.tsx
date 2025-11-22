// src/components/ActivityFeed.tsx
import { Activity } from "@/dataMock/projects";
import { Link } from "react-router-dom";

interface ActivityFeedProps {
    activities: Activity[];
}

export const ActivityFeed = ({ activities }: ActivityFeedProps) => {
    return (
        <div className="bg-white brutal-border brutal-shadow-cyan p-6">
            <h2 className="text-2xl font-bold mb-6">Recent Activity</h2>

            <div className="space-y-4">
                {activities.map((activity) => (
                    <div
                        key={activity.id}
                        className="brutal-border p-4 hover:bg-secondary/50 transition-colors"
                    >
                        <div className="flex items-start gap-4">
              <span className={`text-2xl mt-1 ${
                  activity.type === 'success' ? 'text-brutal-green' :
                      activity.type === 'failed' ? 'text-brutal-red' :
                          'text-brutal-yellow animate-pulse'
              }`}>
                {activity.type === 'success' ? '✓' :
                    activity.type === 'failed' ? '✗' :
                        '→'}
              </span>

                            <div className="flex-1 min-w-0">
                                <p className="font-bold text-sm">{activity.timestamp}</p>
                                <p className="text-base mt-1">{activity.message}</p>

                                {activity.branch && (
                                    <p className="text-sm text-muted-foreground mt-1">
                                        Branch: {activity.branch} | Time: {activity.time} | Cost: {activity.cost}
                                    </p>
                                )}

                                {activity.error && (
                                    <p className="text-sm text-brutal-red mt-1">
                                        Error: {activity.error}
                                    </p>
                                )}

                                <Link
                                    to={`/app/projects/${activity.project}/logs`}
                                    className="text-sm font-bold hover:underline mt-2 inline-block"
                                >
                                    View logs →
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};