// src/App.tsx
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Providers
import AuthProvider from "./components/providers/AuthProvider";
import ProjectsProvider from "./components/providers/ProjectsProvider";
import BillingProvider from "./components/providers/BillingProvider";

// Pages
import LandingPage from "./pages/LandingPage.tsx";
import Dashboard from "./pages/Dashboard";
import ProjectDetail from "./pages/ProjectDetail";
import LogsViewer from "./pages/LogsViewer";
import Billing from "./pages/Billing";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

// Hooks
import { useAuth } from "./hooks/useAuth";
import * as React from "react";

const queryClient = new QueryClient();

// Protected Route Component
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    const { isLoggedIn } = useAuth();

    if (!isLoggedIn) {
        return <Navigate to="/" replace />;
    }

    return <>{children}</>;
};

const AppRoutes = () => {
    return (
        <Routes>
            {/* Public Routes */}
            <Route path="/" element={<LandingPage />} />

            {/* Protected App Routes */}
            <Route path="/app/*" element={
                <ProtectedRoute>
                    <Routes>
                        <Route path="dashboard" element={<Dashboard />} />
                        <Route path="projects/:projectId" element={<ProjectDetail />} />
                        <Route path="projects/:projectId/logs/:deployId" element={<LogsViewer />} />
                        <Route path="billing" element={<Billing />} />
                        <Route path="settings" element={<Settings />} />
                        <Route path="*" element={<Navigate to="/app/dashboard" replace />} />
                    </Routes>
                </ProtectedRoute>
            } />

            {/* Legacy routes redirect to /app/* */}
            <Route path="/dashboard" element={<Navigate to="/app/dashboard" replace />} />
            <Route path="/projects/:projectId" element={<Navigate to="/app/projects/:projectId" replace />} />
            <Route path="/billing" element={<Navigate to="/app/billing" replace />} />
            <Route path="/settings" element={<Navigate to="/app/settings" replace />} />

            {/* Catch-all 404 */}
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

const App = () => (
    <QueryClientProvider client={queryClient}>
        <TooltipProvider>
            <Toaster />
            <Sonner />
            <AuthProvider>
                <ProjectsProvider>
                    <BillingProvider>
                        <BrowserRouter>
                            <AppRoutes />
                        </BrowserRouter>
                    </BillingProvider>
                </ProjectsProvider>
            </AuthProvider>
        </TooltipProvider>
    </QueryClientProvider>
);

export default App;