// src/components/providers/BillingProvider.tsx
import { createContext, ReactNode } from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface BillingContextType {}

const BillingContext = createContext<BillingContextType>({});

interface BillingProviderProps {
    children: ReactNode;
}

const BillingProvider = ({ children }: BillingProviderProps) => {
    // Mock provider - la lógica real vendría aquí
    return (
        <BillingContext.Provider value={{}}>
            {children}
        </BillingContext.Provider>
    );
};

export default BillingProvider;