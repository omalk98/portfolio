import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface BouncingListProps<T> {
  items: T[];
  renderComponent: (item: T) => JSX.Element;
  mode?: "forward" | "reverse" | "loopback";
  step?: number;
  duration?: number;
  delay?: number;
  className?: string;
}

export default function BouncingList<T>({
  items,
  renderComponent,
  mode = "forward",
  step = 1,
  duration = 1,
  delay = 2000,
  className,
}: BouncingListProps<T>) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [forward, setForward] = useState(true);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);

  useEffect(() => {
    if (!inView) return;
    const timer = setTimeout(() => {
      switch (mode) {
        case "forward":
          setActiveIndex((prev) => (prev + step) % items.length);
          break;
        case "reverse":
          setActiveIndex((prev) => (prev - step + items.length) % items.length);
          break;
        case "loopback":
          if (forward) {
            if (activeIndex < items.length - 1) {
              setActiveIndex((prev) => prev + step);
            } else {
              setForward(false);
              setActiveIndex((prev) => prev - step);
            }
          } else {
            if (activeIndex > 0) {
              setActiveIndex((prev) => prev - step);
            } else {
              setForward(true);
              setActiveIndex((prev) => prev + step);
            }
          }
          break;
      }
    }, delay); // Total animation time (bounce up and down)

    return () => clearTimeout(timer);
  }, [activeIndex, forward, items.length, mode, step, inView]);

  const bounceVariants = {
    initial: { y: 0, x: 0 },
    bounce: {
      y: [0, 10, -20, 5, 0],
      scale: [1, 1.1, 0.95, 1.02, 1],
      transition: {
        duration: duration,
        times: [0, 0.2, 0.4, 0.7, 1],
        type: "tween",
        ease: "easeInOut",
      },
    },
  };

  return (
    <div
      className={className}
      ref={ref}
    >
      {items.map((item, index) => (
        <motion.span
          key={`bounce-item-${index}`}
          initial='initial'
          variants={bounceVariants}
          animate={inView && index === activeIndex ? "bounce" : "initial"}
        >
          {renderComponent(item)}
        </motion.span>
      ))}
    </div>
  );
}
