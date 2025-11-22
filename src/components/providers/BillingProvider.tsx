// src/components/providers/BillingProvider.tsx
import { createContext } from 'react';

const BillingContext = createContext({});

const BillingProvider = ({ children }) => {
    // Mock provider - la lógica real vendría aquí
    return (
        <BillingContext.Provider value={{}}>
            {children}
        </BillingContext.Provider>
    );
};

export default BillingProvider;