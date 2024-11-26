import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface BouncingListProps<T> {
  items: T[];
  renderComponent: (item: T) => JSX.Element;
  mode?: "forward" | "reverse" | "loopback";
  step?: number;
}

export default function BouncingList<T>({
  items,
  renderComponent,
  mode = "forward",
  step = 1,
}: BouncingListProps<T>) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [forward, setForward] = useState(true);

  useEffect(() => {
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
    }, 2000); // Total animation time (bounce up and down)

    return () => clearTimeout(timer);
  }, [activeIndex, forward, items.length, mode, step]);

  const bounceVariants = {
    initial: { y: 0, x: 0 },
    bounce: {
      y: [0, 10, -20, 5, 0],
      scale: [1, 1.1, 0.95, 1.02, 1],
      transition: {
        duration: 1,
        times: [0, 0.2, 0.4, 0.7, 1],
        type: "tween",
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className='flex flex-wrap gap-4'>
      {items.map((item, index) => (
        <motion.span
          key={`bounce-item-${index}`}
          initial='initial'
          variants={bounceVariants}
          animate={index === activeIndex ? "bounce" : "initial"}
        >
          {renderComponent(item)}
        </motion.span>
      ))}
    </div>
  );
}
