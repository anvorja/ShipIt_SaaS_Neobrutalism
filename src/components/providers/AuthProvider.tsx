// src/components/providers/AuthProvider.tsx
import { useState, useEffect } from 'react';
import { AuthContext } from '../contexts/AuthContext';

const AuthProvider = ({ children }) => {
    // En modo demo, permitimos acceso sin login real
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Verificar si hay sesión demo activa
        const demoMode = localStorage.getItem('shipit_demo_mode');
        if (demoMode === 'true') {
            setIsLoggedIn(true);
            setUser({
                name: 'Demo User',
                email: 'demo@shipit.dev',
                isDemo: true
            });
        }
    }, []);

    const login = () => {
        // Activar modo demo
        localStorage.setItem('shipit_demo_mode', 'true');
        setIsLoggedIn(true);
        setUser({
            name: 'Demo User',
            email: 'demo@shipit.dev',
            isDemo: true
        });
    };

    const logout = () => {
        // Desactivar modo demo
        localStorage.removeItem('shipit_demo_mode');
        setIsLoggedIn(false);
        setUser(null);
    };

    const value = {
        isLoggedIn,
        user,
        login,
        logout
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;