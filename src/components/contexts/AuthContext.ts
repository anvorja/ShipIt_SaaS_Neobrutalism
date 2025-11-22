// src/components/contexts/AuthContext.ts
import { createContext } from 'react';

export interface AuthContextType {
    isLoggedIn: boolean;
    user: {
        name: string;
        email: string;
    } | null;
    login: () => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
    isLoggedIn: false,
    user: null,
    login: () => {},
    logout: () => {}
});

export { AuthContext };