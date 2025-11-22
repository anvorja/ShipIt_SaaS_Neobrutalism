import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const brutalButtonVariants = cva(
    "font-mono font-bold border-4 border-black transition-all duration-200 active:translate-x-[2px] active:translate-y-[2px] inline-flex items-center justify-center gap-2 whitespace-nowrap disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
            variant: {
                primary: "bg-black text-white hover:bg-[#FFD700] hover:text-black",
                secondary: "bg-white text-black hover:bg-[#00FFFF]",
                destructive: "bg-[#FF0000] text-white hover:bg-[#CC0000]",
                ghost: "bg-transparent border-0 hover:bg-gray-100 shadow-none"
            },
            size: {
                sm: "px-3 py-1 text-sm",
                md: "px-6 py-3 text-base",
                lg: "px-10 py-5 text-xl"
            }
        },
        defaultVariants: {
            variant: "primary",
            size: "md"
        }
    }
);

export interface BrutalButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof brutalButtonVariants> {
    asChild?: boolean;
}

const BrutalButton = React.forwardRef<HTMLButtonElement, BrutalButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button";

        const shadowStyle = variant !== 'ghost' ? {
            boxShadow: variant === 'primary' ? 'none' : '6px 6px 0px 0px #000000'
        } : { boxShadow: 'none' };

        return (
            <Comp
                className={cn(brutalButtonVariants({ variant, size, className }))}
                ref={ref}
                style={shadowStyle}
                {...props}
            />
        );
    }
);

BrutalButton.displayName = "BrutalButton";

export { BrutalButton, brutalButtonVariants };