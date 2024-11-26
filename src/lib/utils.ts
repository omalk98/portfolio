import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function themeToggle(isDark: boolean, save = true) {
  if (isDark) {
    document.body.classList.add("dark");
    if (save)
      localStorage.setItem("theme", "dark");
  } else {
    document.body.classList.remove("dark");
    if (save)
      localStorage.setItem("theme", "light");
  }
}
