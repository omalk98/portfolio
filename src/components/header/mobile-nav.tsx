import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "../toggle-theme";
import { cn } from "@/lib/utils";

interface MobileNavProps {
  navItems: { name: string; path: string }[];
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleClick: (e: React.MouseEvent<HTMLAnchorElement>, index: number) => void;
  activeTab: number;
}

export default function MobileNav({
  navItems,
  isMenuOpen,
  setIsMenuOpen,
  handleClick,
  activeTab,
}: MobileNavProps) {
  return (
    <div className='md:hidden w-full'>
      <button
        onClick={() => setIsMenuOpen((prev) => !prev)}
        className='relative p-2 hover:bg-gray-600/50 transition-background duration-150 rounded-full float-end backdrop-blur-md z-10'
        aria-label='Toggle menu'
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className='absolute top-0 left-0 right-0 mt-2 mx-4 bg-gray-200/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-lg border border-gray-700/50 shadow-lg'
          >
            <ThemeToggle />
            <nav className='py-2'>
              {navItems.map((item, index) => (
                <a
                  key={item.path}
                  href={item.path}
                  className={cn(
                    "block px-4 py-3 text-sm transition-colors duration-200",
                    activeTab === index
                      ? "bg-yellow-400/40 dark:bg-green-600/20 font-bold"
                      : "text-gray-600 dark:text-gray-400 hover:bg-gray-700/50 hover:text-white font-medium"
                  )}
                  onClick={(e) => handleClick(e, index)}
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
