import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function SectionWrapper({
  id,
  muted = false,
  gradient = false,
  delay = 0.2,
  title,
  className,
  children,
}: {
  id?: string;
  children?: ReactNode;
  muted?: boolean;
  gradient?: boolean;
  delay?: number;
  title?: string;
  className?: string;
}) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: delay }}
      className={cn(
        "py-20 px-4 relative",
        !gradient && muted ? "bg-neutral-150 dark:bg-muted" : "",
        gradient
          ? muted
            ? "bg-gradient-to-b from-transparent dark:to-muted to-neutral-150"
            : "bg-gradient-to-b dark:from-muted from-neutral-150 to-transparent"
          : "",
        className
      )}
    >
      <div className='container max-w-[1200px] mx-auto px-4'>
        <h2 className='text-4xl font-bold mb-12 text-center'>{title}</h2>
        {children}
      </div>
    </motion.section>
  );
}
