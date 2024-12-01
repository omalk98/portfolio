import React from "react";
import { Card } from "./card";
import { cn } from "@/lib/utils";

export default function GlowCard({
  className,
  children,
  gradientStart = "from-yellow-300 dark:from-blue-500",
  gradientEnd = "to-amber-400 dark:to-teal-500",
  ...props
}: {
  className?: string;
  children?: React.ReactNode;
  gradientStart?: `from-${string}`;
  gradientEnd?: `to-${string}`;
  props?: React.HTMLAttributes<HTMLDivElement>;
}) {
  return (
    <div
      className='w-full relative max-w-xs z-10'
      {...props}
    >
      <div
        className={cn(
          "absolute inset-0 z-0 h-full w-full transform scale-[0.9] dark:scale-[0.78] rounded-full blur-3xl bg-gradient-to-r",
          gradientStart,
          gradientEnd
        )}
      />
      <Card className={cn("h-full relative z-1 overflow-hidden", className)}>
        {children}
      </Card>
    </div>
  );
}
