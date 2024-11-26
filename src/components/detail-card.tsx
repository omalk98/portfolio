import { ReactNode } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function DetailCard({
  title,
  description,
  content,
  date,
  motionProps,
  className,
  variant = "light",
  children,
  ...props
}: {
  title?: string | ReactNode;
  content?: string | ReactNode;
  description?: string | ReactNode;
  motionProps?: typeof motion.div;
  date?: string | ReactNode;
  className?: string;
  variant?: "light" | "dark";
  children?: ReactNode;
  props?: typeof Card;
}) {
  return (
    <motion.div {...(motionProps || {})}>
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
            <div className='flex justify-between items-start font-semibold'>
              <div>
                {title && (
                  <CardTitle className='text-xl mb-1'>{title}</CardTitle>
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
    </motion.div>
  );
}
