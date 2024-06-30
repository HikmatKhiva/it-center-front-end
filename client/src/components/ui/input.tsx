import * as React from "react";
import { cn } from "@/utils/cn";
import { HoverBorder } from "./hoverBorder";
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <HoverBorder>
        <input
          type={type}
          className={cn(
            "w-full dark:bg-background/90 outline-none focus-visible:border-blue-500 border border-transparent py-2 px-3 rounded",
            className
          )}
          ref={ref}
          {...props}
        />
      </HoverBorder>
    );
  }
);
Input.displayName = "Input";
export { Input };
