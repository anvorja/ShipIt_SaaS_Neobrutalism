// src/components/ui/brutal-card.tsx
import * as React from "react";
import { cn } from "@/lib/utils";

export interface BrutalCardProps extends React.HTMLAttributes<HTMLDivElement> {
    status?: 'success' | 'failed' | 'progress' | 'warning' | 'neutral' | 'default';
}

const BrutalCard = React.forwardRef<HTMLDivElement, BrutalCardProps>(
    ({ className, status = 'default', ...props }, ref) => {
        let shadowColor = '#000000';
        if (status === 'success') shadowColor = '#00FF00';
        if (status === 'failed') shadowColor = '#FF0000';
        if (status === 'progress') shadowColor = '#FFD700';
        if (status === 'warning') shadowColor = '#FFD700';

        return (
            <div
                ref={ref}
                className={cn("bg-white border-4 border-black p-6", className)}
                style={{ boxShadow: `8px 8px 0px 0px ${shadowColor}` }}
                {...props}
            />
        );
    }
);

BrutalCard.displayName = "BrutalCard";

export { BrutalCard };