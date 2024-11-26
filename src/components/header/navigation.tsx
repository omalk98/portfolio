import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface DesktopNavProps {
  navItems: { name: string; path: string }[];
  dimensions: { width: number; left: number };
  itemsRef: React.MutableRefObject<(HTMLAnchorElement | null)[]>;
  handleClick: (e: React.MouseEvent<HTMLAnchorElement>, index: number) => void;
  activeTab: number;
}

export default function DesktopNav({
  navItems,
  dimensions,
  itemsRef,
  handleClick,
  activeTab,
}: DesktopNavProps) {
  return (
    <>
      {/* Navigation Container */}
      <div className='relative hidden md:block'>
        {/* Background Pill */}
        <div className='absolute inset-0 bg-muted/50 rounded-full -z-10 backdrop-blur-sm border border-gray-400/50 my-1 shadow-inner' />

        {/* Navigation Items */}
        <nav className='relative flex items-center px-3 py-2 space-x-2'>
          {/* Sliding Pill Indicator */}
          <motion.div
            className={cn(
              "absolute bg-yellow-400/50 dark:bg-green-600/50 border-yellow-400 dark:border-green-600 rounded-full z-0 shadow-md",
              activeTab === -1 ? "border-none" : "border-[1.5px]"
            )}
            animate={{
              width: dimensions.width,
              x: dimensions.left,
            }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 30,
            }}
            style={{
              height: "60%",
            }}
          />

          {/* Nav Links */}
          {navItems.map((item, index) => (
            <a
              key={item.path}
              href={item.path}
              ref={(el) => (itemsRef.current[index] = el)}
              className={cn(
                "group relative px-4 py-1 text-sm transition-all font-semibold duration-200 rounded-full ease-in-out",
                activeTab === index ? "scale-110" : ""
              )}
              onClick={(e) => handleClick(e, index)}
            >
              {/* Underline on hover */}
              <span
                className={cn(
                  "bg-left-bottom bg-gradient-to-r from-primary to-primary bg-[length:0%_0.5px] bg-no-repeat duration-300 ease-out group-hover:bg-[length:100%_0.5px]",
                  activeTab === index ? "bg-[length:100%_1px]" : ""
                )}
              >
                {item.name}
              </span>
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}
