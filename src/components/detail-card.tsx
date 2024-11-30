import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

export default function DetailCard({
  title,
  description,
  content,
  date,
  className,
  variant = "light",
  children,
  ...props
}: {
  title?: React.ReactNode;
  content?: React.ReactNode;
  description?: React.ReactNode;
  date?: React.ReactNode;
  className?: string;
  variant?: "light" | "dark";
  children?: React.ReactNode;
  props?: typeof Card;
}) {
  return (
    <Card
      className={cn(
        "border-none h-full relative overflow-hidden",
        variant === "light"
          ? "bg-slate-200/50 dark:bg-gray-700/40"
          : "bg-slate-400/50 dark:bg-gray-800/50",
        className
      )}
      {...props}
    >
      <div className='relative z-10'>
        <CardHeader>
          <div className='flex justify-between items-start'>
            <div className='w-full'>
              {title && (
                <CardTitle className='text-2xl font-semibold'>
                  {title}
                </CardTitle>
              )}
              {description && (
                <CardDescription className='text-gray-900 dark:text-gray-400'>
                  {description}
                </CardDescription>
              )}
            </div>
            {date && (
              <span className='text-gray-800 dark:text-gray-300 ml-3'>
                {date}
              </span>
            )}
          </div>
        </CardHeader>
        {content && (
          <CardContent className='text-gray-800 dark:text-gray-300'>
            {content}
          </CardContent>
        )}
      </div>
      {children}
    </Card>
  );
}
