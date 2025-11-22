// src/dataMock/projects.ts
export interface Project {
    id: string;
    name: string;
    language: string;
    status: 'success' | 'failed' | 'deploying';
    lastDeploy: string;
    branch: string;
    environment: string;
    buildTime: string;
    cost: string;
    repository: string;
}

export interface Deploy {
    id: number;
    commit: string;
    message: string;
    branch: string;
    status: 'success' | 'failed' | 'deploying';
    time: string;
    cost: string;
    timestamp: string;
    author: string;
    steps?: DeployStep[];
}

export interface DeployStep {
    name: string;
    duration: string;
    status: 'success' | 'failed' | 'running';
}

export interface Activity {
    id: string;
    type: 'success' | 'failed' | 'deploying';
    message: string;
    project: string;
    timestamp: string;
    branch?: string;
    time?: string;
    cost?: string;
    error?: string;
}

export const mockProjects: Project[] = [
    {
        id: '1',
        name: 'my-api-project',
        language: 'Python',
        status: 'success',
        lastDeploy: '2 hours ago',
        branch: 'main',
        environment: 'production',
        buildTime: '4m 12s',
        cost: '$0.04',
        repository: 'github.com/user/my-api'
    },
    {
        id: '2',
        name: 'landing-page',
        language: 'React',
        status: 'deploying',
        lastDeploy: '12 min ago',
        branch: 'develop',
        environment: 'staging',
        buildTime: '2m 34s',
        cost: '$0.02',
        repository: 'github.com/user/landing-page'
    },
    {
        id: '3',
        name: 'backend-service',
        language: 'Node.js',
        status: 'failed',
        lastDeploy: '1 hour ago',
        branch: 'main',
        environment: 'production',
        buildTime: '3m 45s',
        cost: '$0.03',
        repository: 'github.com/user/backend-service'
    }
];

export const mockDeploys: Deploy[] = [
    {
        id: 142,
        commit: 'a3f4b2c',
        message: 'Fix auth bug',
        branch: 'main',
        status: 'success',
        time: '4m 12s',
        cost: '$0.04',
        timestamp: '2024-11-21 14:23:00',
        author: '@andresito',
        steps: [
            { name: 'Clone repo', duration: '12s', status: 'success' },
            { name: 'Install dependencies', duration: '1m 34s', status: 'success' },
            { name: 'Run tests', duration: '45s', status: 'success' },
            { name: 'Build Docker image', duration: '1m 28s', status: 'success' },
            { name: 'Push to registry', duration: '23s', status: 'success' },
            { name: 'Deploy to Render', duration: '10s', status: 'success' }
        ]
    },
    {
        id: 141,
        commit: 'b2c3d4e',
        message: 'Update dependencies',
        branch: 'main',
        status: 'success',
        time: '3m 45s',
        cost: '$0.03',
        timestamp: '2024-11-21 10:15:00',
        author: '@andresito'
    },
    {
        id: 140,
        commit: 'f7a3b1c',
        message: 'Previous stable version',
        branch: 'main',
        status: 'success',
        time: '4m 01s',
        cost: '$0.04',
        timestamp: '2024-11-21 09:00:00',
        author: '@andresito'
    }
];

export const mockActivity: Activity[] = [
    {
        id: '1',
        type: 'success',
        message: 'my-api deployed to production',
        project: 'my-api-project',
        timestamp: '5 min ago',
        branch: 'main',
        time: '3m 24s',
        cost: '$0.03'
    },
    {
        id: '2',
        type: 'deploying',
        message: 'landing-page building...',
        project: 'landing-page',
        timestamp: '12 min ago',
        branch: 'develop'
    },
    {
        id: '3',
        type: 'failed',
        message: 'backend-service failed',
        project: 'backend-service',
        timestamp: '1h ago',
        error: 'Tests failed on test_auth.py:47'
    }
];