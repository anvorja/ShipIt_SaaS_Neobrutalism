// src/dataMock/billing.ts
export interface UsageData {
    month: string;
    minutesUsed: number;
    freeMinutes: number;
    cost: number;
    nextBillingDate: string;
}

export interface ProjectUsage {
    project: string;
    minutes: number;
    cost: number;
    percentage: number;
}

export interface Invoice {
    month: string;
    amount: number;
    date: string;
    status: 'paid' | 'pending';
}

export interface CostOverTime {
    day: number;
    cost: number;
}

export const mockCurrentUsage: UsageData = {
    month: 'November 2024',
    minutesUsed: 432,
    freeMinutes: 100,
    cost: 3.32,
    nextBillingDate: 'Dec 1, 2024'
};

export const mockProjectUsage: ProjectUsage[] = [
    {
        project: 'my-api-project',
        minutes: 234,
        cost: 2.34,
        percentage: 70
    },
    {
        project: 'landing-page',
        minutes: 98,
        cost: 0.98,
        percentage: 30
    },
    {
        project: 'backend-service',
        minutes: 100,
        cost: 0.00,
        percentage: 0
    }
];

export const mockInvoices: Invoice[] = [
    {
        month: 'November 2024',
        amount: 3.32,
        date: '2024-11-01',
        status: 'pending'
    },
    {
        month: 'October 2024',
        amount: 5.21,
        date: '2024-10-01',
        status: 'paid'
    },
    {
        month: 'September 2024',
        amount: 1.89,
        date: '2024-09-01',
        status: 'paid'
    }
];

export const mockCostOverTime: CostOverTime[] = [
    { day: 1, cost: 0.12 },
    { day: 5, cost: 0.45 },
    { day: 10, cost: 0.98 },
    { day: 15, cost: 1.56 },
    { day: 20, cost: 2.89 },
    { day: 21, cost: 3.32 }
];