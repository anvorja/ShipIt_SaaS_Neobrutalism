// src/dataMock/settings.ts
export interface UserProfile {
    name: string;
    email: string;
    avatar?: string;
    timezone: string;
    dateFormat: string;
    timeFormat: string;
}

export interface Integration {
    name: string;
    connected: boolean;
    details?: string;
    icon: string;
}

export interface TeamMember {
    id: string;
    name: string;
    email: string;
    role: 'owner' | 'admin' | 'developer' | 'viewer';
    avatar?: string;
}

export interface Session {
    id: string;
    device: string;
    browser: string;
    lastActive: string;
    current: boolean;
}

export const mockUserProfile: UserProfile = {
    name: 'Andres Lopez',
    email: 'andres@email.com',
    timezone: 'UTC-5 (Colombia)',
    dateFormat: 'YYYY-MM-DD',
    timeFormat: '24-hour'
};

export const mockIntegrations: Integration[] = [
    {
        name: 'GitHub',
        connected: true,
        details: 'Connected as @andresito - 12 repositories accessible',
        icon: '🐙'
    },
    {
        name: 'GitLab',
        connected: false,
        icon: '🦊'
    },
    {
        name: 'Render',
        connected: true,
        details: 'API key: rnd_abc...xyz',
        icon: '🚀'
    },
    {
        name: 'Railway',
        connected: false,
        icon: '🚂'
    },
    {
        name: 'Vercel',
        connected: false,
        icon: '▲'
    },
    {
        name: 'Slack',
        connected: true,
        details: 'Connected to #deployments channel',
        icon: '💬'
    },
    {
        name: 'Discord',
        connected: false,
        icon: '🎮'
    }
];

export const mockTeamMembers: TeamMember[] = [
    {
        id: '1',
        name: 'Andres Lopez',
        email: 'andres@email.com',
        role: 'owner'
    },
    {
        id: '2',
        name: 'María García',
        email: 'maria@email.com',
        role: 'admin'
    },
    {
        id: '3',
        name: 'Carlos Ruiz',
        email: 'carlos@email.com',
        role: 'developer'
    }
];

export const mockSessions: Session[] = [
    {
        id: '1',
        device: 'MacOS',
        browser: 'Chrome',
        lastActive: 'now',
        current: true
    },
    {
        id: '2',
        device: 'Windows',
        browser: 'Firefox',
        lastActive: '2 days ago',
        current: false
    }
];

export const roleDescriptions = {
    owner: 'Full access, billing, delete projects',
    admin: 'Full access except billing',
    developer: 'Deploy, view logs, no settings',
    viewer: 'Read-only access'
};