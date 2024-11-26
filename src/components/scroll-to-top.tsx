import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpFromDot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function ScrollToTopButton({
  className,
}: {
  className?: string;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleVisibility = () => {
    const pos = window.scrollY;
    if (pos < lastScrollY && pos > 500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
    setLastScrollY(pos);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, [lastScrollY]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className='fixed bottom-[10px] md:bottom-[50px] right-[10px] md:right-[50px] z-50'
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{
            duration: 0.2,
            type: "spring",
            stiffness: 300,
            damping: 20,
          }}
        >
          <TooltipProvider delayDuration={300}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  title='Scroll to Top'
                  variant='ghost'
                  onClick={scrollToTop}
                  className={cn(
                    "rounded-full bg-black dark:bg-white text-white dark:text-black p-3",
                    className
                  )}
                >
                  <ArrowUpFromDot size={30} />
                </Button>
              </TooltipTrigger>
              <TooltipContent sideOffset={12}>
                <p>Scroll to Top</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
