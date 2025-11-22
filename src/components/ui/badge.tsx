// src/components/ui/badge.tsx
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
    "inline-flex items-center border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 font-mono uppercase",
    {
        variants: {
            variant: {
                default:
                    "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
                secondary:
                    "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
                destructive:
                    "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
                outline: "text-foreground",
                success: "bg-[#00FF00] text-black border-2 border-black",
                failed: "bg-[#FF0000] text-white border-2 border-black",
                progress: "bg-[#FFD700] text-black border-2 border-black animate-pulse",
                neutral: "bg-white text-black border-2 border-black"
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
)

export interface BadgeProps
    extends React.HTMLAttributes<HTMLDivElement>,
        VariantProps<typeof badgeVariants> {
    status?: 'success' | 'failed' | 'progress' | 'neutral';
}

function Badge({ className, variant, status, ...props }: BadgeProps) {
    const finalVariant = (status || variant) as NonNullable<typeof variant>;
    return (
        <div className={cn(badgeVariants({ variant: finalVariant }), className)} {...props} />
    )
}

export { Badge, badgeVariants }