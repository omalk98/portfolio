import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export default function BouncingText({
  text,
  className,
  height = 50,
  stagger = 0,
  duration = 0.8,
}: {
  text: string;
  className?: string;
  height?: number;
  stagger?: number;
  duration?: number;
}) {
  // Animation variants for the bouncing effect
  const bounceTransition = {
    y: {
      duration: duration,
      repeat: Infinity,
      ease: "easeOut",
      repeatType: "reverse",
    },
    scaleY: {
      duration: 0.4,
      repeat: Infinity,
      ease: "easeOut",
      repeatType: "reverse",
    },
  };

  // Container variants for staggered children
  const containerVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: stagger,
      },
    },
  };

  // Letter variants
  const letterVariants = {
    initial: { y: -height },
    animate: {
      y: [height * -0.2, height * 0.2],
      scaleY: [0.9, 1.1],
      transition: bounceTransition,
    },
  };

  // Shadow variants
  const shadowVariants = {
    initial: { scale: 1 },
    animate: {
      scale: [1, 0.5],
      opacity: [0.4, 0.2],
      transition: {
        duration: duration,
        repeat: Infinity,
        repeatType: "reverse" as const,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className='flex flex-col items-center'>
      <motion.div
        className='flex'
        variants={containerVariants}
        initial='initial'
        animate='animate'
      >
        {text.split("").map((char, index) => (
          <div
            key={index}
            className='relative inline-block'
          >
            <motion.span
              className={cn('inline-block', className)}
              variants={letterVariants}
            >
              {char}
            </motion.span>

            {/* Shadow for each letter */}
            <motion.div
              className='absolute bottom-0 left-1/2 w-3 h-1 bg-black/20 rounded-full -translate-x-1/2 blur-sm'
              variants={shadowVariants}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
