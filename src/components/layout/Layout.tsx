// src/components/layout/Layout.tsx
import { useState } from 'react';
import { Header } from './Header';
import { Sidebar } from './Sidebar';
import * as React from "react";

interface LayoutProps {
    children: React.ReactNode;
    showSidebar?: boolean;
}

export const Layout = ({ children, showSidebar = true }: LayoutProps) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="min-h-screen bg-background">
            <Header
                onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
            />

            <div className="flex">
                {showSidebar && (
                    <Sidebar
                        isOpen={isSidebarOpen}
                        onClose={() => setIsSidebarOpen(false)}
                    />
                )}

                <main className="flex-1 min-h-[calc(100vh-70px)]">
                    {children}
                </main>
            </div>
        </div>
    );
};