import { useRef, useState, useEffect } from "react";

import ThemeToggle from "@/components/toggle-theme";
import ScrollToTopButton from "@/components/scroll-to-top";
import { cn } from "@/lib/utils";
import { navItems } from "@/lib/constants";
import DesktopNav from "./navigation";
import MobileNav from "./mobile-nav";

const HeaderNav = ({ className }: { className?: string }) => {
  const [activeTab, setActiveTab] = useState(-1);
  const [dimensions, setDimensions] = useState({ width: 0, left: 0 });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const itemsRef = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) =>
        document.querySelector(item.path)
      );

      const scrollPosition = window.scrollY + 100;

      sections.forEach((section, index) => {
        if (section) {
          if (scrollPosition < 500) {
            setActiveTab(-1);
            updatePillDimensions(null, { width: 0, left: 0 });
          }
          const sectionTop = (section as HTMLElement).offsetTop - 300;
          const sectionBottom =
            sectionTop + (section as HTMLElement).offsetHeight - 300;

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveTab(index);
            updatePillDimensions(itemsRef.current[index]);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const updatePillDimensions = (
    element: HTMLAnchorElement | null,
    dimensions?: { width: number; left: number }
  ): void => {
    if (element) {
      setDimensions({
        width: dimensions?.width ?? element.offsetWidth,
        left: dimensions?.left ?? element.offsetLeft - 12,
      });
    } else {
      setDimensions({ width: 0, left: 0 });
    }
  };

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    index: number
  ) => {
    e.preventDefault();
    const section = document.querySelector(navItems[index].path);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={cn("fixed top-0 left-0 right-0 z-50", className)}>
      <div className='mx-auto md:p-4'>
        <div className='relative flex justify-center'>
          <ThemeToggle className='absolute right-0 hidden md:flex' />
          <ScrollToTopButton />
          <DesktopNav
            navItems={navItems}
            dimensions={dimensions}
            itemsRef={itemsRef}
            handleClick={handleClick}
            activeTab={activeTab}
          />
          <MobileNav
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
            handleClick={handleClick}
            activeTab={activeTab}
            navItems={navItems}
          />
        </div>
      </div>
    </header>
  );
};

export default HeaderNav;
