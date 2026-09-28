import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest/40 disabled:pointer-events-none disabled:opacity-50",
 {
 variants: {
 variant: {
 default: "bg-forest text-cream hover:bg-forest-deep",
 outline: "border border-border bg-surface text-fg hover:bg-panel",
 ghost: "text-fg hover:bg-panel",
 link: "text-forest underline-offset-4 hover:underline",
 },
 size: {
 default: "h-11 px-4 text-sm",
 sm: "h-9 px-3 text-sm",
 lg: "h-12 px-5 text-base",
 },
 },
 defaultVariants: { variant: "default", size: "default" },
 },);

export function Button({
 className,
 variant,
 size,
 asChild = false,
  ...props
}: React.ComponentProps<"button"> &
 VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
 const Comp = asChild ? Slot: "button";
 return <Comp className={cn(buttonVariants({ variant, size, className }))} {...props} />;
}
