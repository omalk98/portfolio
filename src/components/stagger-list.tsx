import { motion } from "framer-motion";

export default function StaggerList<T>({
  className,
  items,
  renderComponent,
  duration = 0.8,
  delay = 0.2,
  ...props
}: {
  items: T[];
  renderComponent: (item: T) => JSX.Element;
  duration?: number;
  delay?: number;
  className?: string;
  props?: React.HTMLAttributes<HTMLDivElement>;
}) {
  return (
    <>
      {/* Desktop */}
      <div className='hidden md:block'>
        <div
          className={className}
          {...props}
        >
          {items.map((item, index) => (
            <motion.div
              key={`stagger-item-${index}`}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: duration, delay: delay * index },
              }}
              exit={{ opacity: 0, y: 100, transition: { delay: delay } }}
            >
              {renderComponent(item)}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mobile */}
      <div className='md:hidden'>
        <div
          className={className}
          {...props}
        >
          {items.map((item, index) => (
            <motion.div
              key={`stagger-item-m-${index}`}
              initial={{ opacity: 0, x: index % 2 ? 200 : -200 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { duration: duration, delay: delay },
              }}
              exit={{
                opacity: 0,
                x: index % 2 ? 200 : -200,
                transition: { delay: delay },
              }}
            >
              {renderComponent(item)}
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
