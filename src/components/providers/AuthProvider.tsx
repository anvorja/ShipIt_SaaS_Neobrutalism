// src/components/providers/AuthProvider.tsx
import { useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';

const AuthProvider = ({ children }) => {
    // Mock: asumimos que el usuario está siempre logueado para desarrollo
    const [isLoggedIn] = useState(true);
    const [user] = useState({
        name: 'Andresx Lopez',
        email: 'andres@email.com'
    });

    const login = () => {
        // Lógica de login (mock)
        console.log('Login');
    };

    const logout = () => {
        // Lógica de logout (mock)
        console.log('Logout');
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