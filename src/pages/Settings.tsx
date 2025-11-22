// src/pages/Settings.tsx
import { useState } from 'react';
import { User, Lock, Link2, Users, Github, Upload } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { BrutalCard } from '@/components/ui/brutal-card';
import { BrutalButton } from '@/components/ui/brutal-button';
import { Badge } from '@/components/ui/badge';

const Settings = () => {
    const [activeTab, setActiveTab] = useState('profile');

    const tabs = [
        { id: 'profile', label: 'Profile', icon: User },
        { id: 'security', label: 'Security', icon: Lock },
        { id: 'integrations', label: 'Integrations', icon: Link2 },
        { id: 'team', label: 'Team', icon: Users }
    ];

    return (
        <Layout showSidebar={false}>
            <div className="p-4 sm:p-6 md:p-10 font-mono space-y-6 bg-background min-h-screen">
                <h1 className="text-3xl md:text-4xl font-black mb-8">Settings</h1>

                {/* Tabs */}
                <div className="border-b-4 border-black overflow-x-auto">
                    <div className="flex gap-0 min-w-max">
                        {tabs.map((tab) => {
                            const Icon = tab.icon;
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`px-4 sm:px-6 py-3 font-bold text-sm sm:text-base transition-all border-black flex items-center gap-2 ${
                                        activeTab === tab.id
                                            ? 'bg-brutal-yellow border-x-4 border-t-4'
                                            : 'bg-white hover:bg-gray-100'
                                    }`}
                                >
                                    <Icon size={18} />
                                    {tab.label}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Profile Tab */}
                {activeTab === 'profile' && (
                    <div className="space-y-6">
                        <BrutalCard>
                            <h2 className="text-xl font-bold mb-6 border-b-2 border-black pb-2">
                                Personal Information
                            </h2>
                            <div className="space-y-6">
                                <div className="flex flex-col sm:flex-row gap-6">
                                    <div className="flex flex-col items-center gap-3">
                                        <div className="w-24 h-24 brutal-border bg-muted flex items-center justify-center">
                                            <User size={48} className="text-gray-400" />
                                        </div>
                                        <BrutalButton size="sm" variant="secondary">
                                            <Upload size={16} />
                                            Upload
                                        </BrutalButton>
                                    </div>

                                    <div className="flex-1 space-y-4">
                                        <div>
                                            <label className="block font-bold mb-2 text-sm">Full Name</label>
                                            <input
                                                type="text"
                                                defaultValue="Andres Lopez"
                                                className="w-full px-4 py-2 brutal-border bg-white font-mono focus:outline-none focus:ring-4 focus:ring-brutal-yellow"
                                            />
                                        </div>

                                        <div>
                                            <label className="block font-bold mb-2 text-sm">
                                                Email
                                                <Badge status="success" className="ml-2">✓ Verified</Badge>
                                            </label>
                                            <input
                                                type="email"
                                                defaultValue="andres@email.com"
                                                className="w-full px-4 py-2 brutal-border bg-white font-mono focus:outline-none focus:ring-4 focus:ring-brutal-yellow"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <BrutalButton size="md">Save Changes</BrutalButton>
                            </div>
                        </BrutalCard>

                        <BrutalCard>
                            <h2 className="text-xl font-bold mb-6 border-b-2 border-black pb-2">
                                Preferences
                            </h2>
                            <div className="space-y-4">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block font-bold mb-2 text-sm">Timezone</label>
                                        <select className="w-full px-4 py-2 brutal-border bg-white font-mono focus:outline-none focus:ring-4 focus:ring-brutal-yellow">
                                            <option>UTC-5 (Colombia)</option>
                                            <option>UTC-6 (Mexico City)</option>
                                            <option>UTC-4 (New York)</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block font-bold mb-2 text-sm">Date Format</label>
                                        <select className="w-full px-4 py-2 brutal-border bg-white font-mono focus:outline-none focus:ring-4 focus:ring-brutal-yellow">
                                            <option>YYYY-MM-DD</option>
                                            <option>DD/MM/YYYY</option>
                                            <option>MM/DD/YYYY</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="space-y-2 pt-4 border-t-2 border-black">
                                    <p className="font-bold text-sm mb-3">Notifications</p>
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input type="checkbox" defaultChecked className="w-4 h-4" />
                                        <span className="text-sm">Email on deploy success</span>
                                    </label>
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input type="checkbox" defaultChecked className="w-4 h-4" />
                                        <span className="text-sm">Email on deploy failure</span>
                                    </label>
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input type="checkbox" defaultChecked className="w-4 h-4" />
                                        <span className="text-sm">Weekly usage summary</span>
                                    </label>
                                </div>

                                <BrutalButton size="md">Save Preferences</BrutalButton>
                            </div>
                        </BrutalCard>
                    </div>
                )}

                {/* Security Tab */}
                {activeTab === 'security' && (
                    <div className="space-y-6">
                        <BrutalCard>
                            <h2 className="text-xl font-bold mb-6 border-b-2 border-black pb-2">
                                Change Password
                            </h2>
                            <div className="space-y-4 max-w-md">
                                <div>
                                    <label className="block font-bold mb-2 text-sm">Current Password</label>
                                    <input
                                        type="password"
                                        className="w-full px-4 py-2 brutal-border bg-white font-mono focus:outline-none focus:ring-4 focus:ring-brutal-yellow"
                                    />
                                </div>
                                <div>
                                    <label className="block font-bold mb-2 text-sm">New Password</label>
                                    <input
                                        type="password"
                                        className="w-full px-4 py-2 brutal-border bg-white font-mono focus:outline-none focus:ring-4 focus:ring-brutal-yellow"
                                    />
                                </div>
                                <div>
                                    <label className="block font-bold mb-2 text-sm">Confirm New Password</label>
                                    <input
                                        type="password"
                                        className="w-full px-4 py-2 brutal-border bg-white font-mono focus:outline-none focus:ring-4 focus:ring-brutal-yellow"
                                    />
                                </div>
                                <BrutalButton size="md">Change Password</BrutalButton>
                            </div>
                        </BrutalCard>

                        <BrutalCard>
                            <h2 className="text-xl font-bold mb-6 border-b-2 border-black pb-2">
                                Two-Factor Authentication
                            </h2>
                            <div className="flex items-center gap-4 mb-4">
                                <Badge status="failed">❌ Disabled</Badge>
                                <p className="text-sm">Add an extra layer of security to your account.</p>
                            </div>
                            <BrutalButton size="md">Enable 2FA</BrutalButton>
                        </BrutalCard>

                        <BrutalCard>
                            <h2 className="text-xl font-bold mb-6 border-b-2 border-black pb-2">
                                API Keys
                            </h2>
                            <p className="text-sm mb-4">Manage API keys for programmatic access.</p>
                            <div className="space-y-3 mb-4">
                                <div className="flex flex-col sm:flex-row sm:items-center gap-3 p-3 bg-muted brutal-border">
                                    <code className="font-mono text-sm flex-1 break-all">sk_live_abc123...xyz</code>
                                    <div className="flex gap-2">
                                        <BrutalButton size="sm" variant="ghost" className="text-xs border-2 border-black">
                                            Reveal
                                        </BrutalButton>
                                        <BrutalButton size="sm" variant="ghost" className="text-xs border-2 border-black">
                                            Copy
                                        </BrutalButton>
                                        <BrutalButton size="sm" variant="destructive" className="text-xs">
                                            Revoke
                                        </BrutalButton>
                                    </div>
                                </div>
                            </div>
                            <BrutalButton size="md" variant="secondary">+ Create New Key</BrutalButton>
                        </BrutalCard>
                    </div>
                )}

                {/* Integrations Tab */}
                {activeTab === 'integrations' && (
                    <div className="space-y-6">
                        <BrutalCard>
                            <h2 className="text-xl font-bold mb-6 border-b-2 border-black pb-2">
                                Connected Accounts
                            </h2>
                            <div className="space-y-4">
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-4 bg-muted brutal-border">
                                    <div className="flex items-center gap-4">
                                        <Github size={32} />
                                        <div>
                                            <p className="font-bold">GitHub</p>
                                            <div className="flex items-center gap-2">
                                                <Badge status="success">✓ Connected</Badge>
                                                <span className="text-xs">as @andresito</span>
                                            </div>
                                            <p className="text-xs text-muted-foreground">12 repositories accessible</p>
                                        </div>
                                    </div>
                                    <BrutalButton size="sm" variant="destructive">
                                        Disconnect
                                    </BrutalButton>
                                </div>
                            </div>
                        </BrutalCard>

                        <BrutalCard>
                            <h2 className="text-xl font-bold mb-6 border-b-2 border-black pb-2">
                                Deployment Targets
                            </h2>
                            <div className="space-y-4">
                                {[
                                    { name: 'Render', connected: true },
                                    { name: 'Railway', connected: false },
                                    { name: 'Vercel', connected: false }
                                ].map((target) => (
                                    <div key={target.name} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-4 brutal-border">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 brutal-border bg-white flex items-center justify-center font-bold">
                                                {target.name[0]}
                                            </div>
                                            <div>
                                                <p className="font-bold">{target.name}</p>
                                                {target.connected ? (
                                                    <Badge status="success">✓ Connected</Badge>
                                                ) : (
                                                    <Badge status="neutral">Not connected</Badge>
                                                )}
                                            </div>
                                        </div>
                                        {target.connected ? (
                                            <div className="flex gap-2">
                                                <BrutalButton size="sm" variant="secondary">
                                                    Configure
                                                </BrutalButton>
                                                <BrutalButton size="sm" variant="ghost" className="border-2 border-black">
                                                    Disconnect
                                                </BrutalButton>
                                            </div>
                                        ) : (
                                            <BrutalButton size="sm">
                                                Connect {target.name}
                                            </BrutalButton>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </BrutalCard>
                    </div>
                )}

                {/* Team Tab */}
                {activeTab === 'team' && (
                    <div className="space-y-6">
                        <BrutalCard>
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
                                <h2 className="text-xl font-bold border-b-2 sm:border-b-0 border-black pb-2 sm:pb-0">
                                    Team Members <span className="text-muted-foreground text-base">(3/unlimited)</span>
                                </h2>
                                <BrutalButton size="md">+ Invite Member</BrutalButton>
                            </div>

                            <div className="space-y-3">
                                {[
                                    { name: 'Andres Lopez', email: 'andres@email.com', role: 'Owner', isYou: true },
                                    { name: 'María García', email: 'maria@email.com', role: 'Admin', isYou: false },
                                    { name: 'Carlos Ruiz', email: 'carlos@email.com', role: 'Developer', isYou: false }
                                ].map((member, i) => (
                                    <div key={i} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-4 brutal-border hover:bg-muted transition-colors">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 brutal-border bg-muted flex items-center justify-center">
                                                <User size={24} />
                                            </div>
                                            <div>
                                                <div className="flex items-center gap-2">
                                                    <p className="font-bold">{member.name}</p>
                                                    {member.isYou && <Badge status="neutral">You</Badge>}
                                                </div>
                                                <p className="text-sm text-muted-foreground">{member.email}</p>
                                                <Badge status="neutral" className="mt-1">{member.role}</Badge>
                                            </div>
                                        </div>
                                        {!member.isYou && (
                                            <div className="flex gap-2">
                                                <BrutalButton size="sm" variant="secondary">
                                                    Change Role
                                                </BrutalButton>
                                                <BrutalButton size="sm" variant="destructive">
                                                    Remove
                                                </BrutalButton>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </BrutalCard>

                        <BrutalCard className="bg-muted">
                            <h3 className="font-bold mb-4 text-sm uppercase">Role Permissions</h3>
                            <div className="space-y-3 text-sm">
                                <div>
                                    <p className="font-bold">Owner:</p>
                                    <p className="text-muted-foreground">Full access, billing, delete projects</p>
                                </div>
                                <div>
                                    <p className="font-bold">Admin:</p>
                                    <p className="text-muted-foreground">Full access except billing</p>
                                </div>
                                <div>
                                    <p className="font-bold">Developer:</p>
                                    <p className="text-muted-foreground">Deploy, view logs, no settings</p>
                                </div>
                                <div>
                                    <p className="font-bold">Viewer:</p>
                                    <p className="text-muted-foreground">Read-only access</p>
                                </div>
                            </div>
                        </BrutalCard>
                    </div>
                )}
            </div>
        </Layout>
    );
};

export default Settings;