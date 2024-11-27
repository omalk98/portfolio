import { ReactNode } from "react";
import { Card } from "./card";
import { cn } from "@/lib/utils";

export default function GlowCard({
  className,
  children,
  gradientStart = "from-yellow-700 dark:from-blue-500",
  gradientEnd = "to-green-200 dark:to-teal-500",
}: {
  className?: string;
  children?: ReactNode;
  gradientStart?: `from-${string}`;
  gradientEnd?: `to-${string}`;
}) {
  return (
      <div className={cn("w-full relative max-w-xs z-10", className)}>
        <div
          className={cn(
            "absolute inset-0 z-0 h-full w-full transform scale-[0.9] dark:scale-[0.78] rounded-full blur-3xl bg-gradient-to-r",
            gradientStart,
            gradientEnd
          )}
        />
        <Card className='relative z-1 shadow-xl bg-slate-100/90 dark:bg-gray-900/90 border border-gray-300 dark:border-gray-700  px-4 py-8 h-full overflow-hidden rounded-2xl'>
          {children}
        </Card>
      </div>
  );
}
