import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

// Variants for flexibility
const labelVariants = cva(
  "font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
  {
    variants: {
      size: {
        sm: "text-sm",
        md: "text-base",
        lg: "text-lg",
      },
      weight: {
        normal: "font-normal",
        medium: "font-medium",
        bold: "font-bold",
      },
    },
    defaultVariants: {
      size: "sm",
      weight: "medium",
    },
  }
);

const Label = React.forwardRef(({ className, size, weight, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(labelVariants({ size, weight }), className)}
    {...props}
  />
));

Label.displayName = "Label";

export { Label };
