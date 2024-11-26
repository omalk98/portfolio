import { useState } from "react";
import { motion } from "framer-motion";
import { Switch } from "@/components/ui/switch";
import { Sun, Moon } from "lucide-react";
import { cn, themeToggle } from "@/lib/utils";

export default function ThemeToggle({ className }: { className?: string }) {
  const [isDark, setIsDark] = useState(
    document.body.classList.contains("dark")
  );

  const toggleTheme = (dark?: boolean) => {
    themeToggle(dark ?? !isDark);
    setIsDark((prev) => dark ?? !prev);
  };

  return (
    <div className={cn("flex items-center gap-4 p-4", className)}>
      <motion.div
        animate={{
          rotate: !isDark ? 360 : 0,
        }}
        transition={{
          duration: !isDark ? 0.5 : 0,
          ease: "easeInOut",
        }}
      >
        <Sun
          size={24}
          className={cn(
            "text-yellow-500",
            isDark ? "opacity-50" : "opacity-100"
          )}
          onClick={() => toggleTheme(false)}
        />
      </motion.div>

      <Switch
        checked={isDark}
        onCheckedChange={() => toggleTheme()}
        className='data-[state=checked]:bg-blue-400 data-[state=unchecked]:bg-yellow-500'
      />

      <motion.div
        animate={{
          rotateY: isDark ? 360 : 0,
        }}
        transition={{
          duration: isDark ? 0.5 : 0,
          ease: "easeInOut",
        }}
      >
        <Moon
          size={24}
          className={cn("text-primary", isDark ? "opacity-100" : "opacity-50")}
          onClick={() => toggleTheme(true)}
        />
      </motion.div>
    </div>
  );
}
