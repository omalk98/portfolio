import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const GlowBar = ({
  children,
  className,
}: {
  children?: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative flex min-h-screen flex-col items-center justify-center overflow-hidden w-full rounded-md z-0 mx-auto",
        className
      )}
    >
      <div className='relative flex w-full flex-1 scale-y-125 justify-center isolate z-0 translate-y-[75px] md:translate-y-[100px]'>
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className='absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-yellow-500 dark:from-cyan-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]'
        >
          <div className='absolute w-[100%] left-0 bg-white dark:bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]' />
          <div className='absolute w-40 h-[100%] left-0 bg-white dark:bg-slate-950  bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]' />
        </motion.div>
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className='absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-yellow-500 dark:to-cyan-500 text-white [--conic-position:from_290deg_at_center_top]'
        >
          <div className='absolute w-40 h-[100%] right-0 bg-white dark:bg-slate-950  bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]' />
          <div className='absolute w-[100%] right-0 bg-white dark:bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]' />
        </motion.div>
        <motion.div
          initial={{ width: "15rem" }}
          whileInView={{ width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className='absolute inset-auto z-50 h-0.5 w-[30rem] bg-cyan-400 '
        />
      </div>

      <div className='relative z-50 flex -translate-y-80 flex-col items-center px-5'>
        {children ?? children}
      </div>
    </div>
  );
};
