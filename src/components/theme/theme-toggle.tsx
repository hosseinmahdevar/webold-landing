"use client";

import * as React from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const [theme, setTheme] = React.useState<"light" | "dark">("dark");
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    // Read active theme from DOM or localStorage
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    if (savedTheme === "light" || savedTheme === "dark") {
      setTheme(savedTheme);
      applyTheme(savedTheme);
    } else {
      const isDark = document.documentElement.classList.contains("dark");
      const currentTheme = isDark ? "dark" : "light";
      setTheme(currentTheme);
      applyTheme(currentTheme);
    }

    const handleThemeChange = (e: Event) => {
      const customEvent = e as CustomEvent<"light" | "dark">;
      if (customEvent.detail) {
        setTheme(customEvent.detail);
      } else {
        const isDark = document.documentElement.classList.contains("dark");
        setTheme(isDark ? "dark" : "light");
      }
    };

    const handleStorage = (e: StorageEvent) => {
      if (e.key === "theme" && (e.newValue === "light" || e.newValue === "dark")) {
        setTheme(e.newValue);
        applyTheme(e.newValue);
      }
    };

    window.addEventListener("theme-change", handleThemeChange);
    window.addEventListener("storage", handleStorage);

    return () => {
      window.removeEventListener("theme-change", handleThemeChange);
      window.removeEventListener("storage", handleStorage);
    };
  }, []);

  const applyTheme = (newTheme: "light" | "dark") => {
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.setAttribute("data-theme", "light");
    }
  };

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    applyTheme(nextTheme);

    // Notify all ThemeToggle instances on page
    window.dispatchEvent(
      new CustomEvent<"light" | "dark">("theme-change", { detail: nextTheme })
    );
  };

  if (!mounted) {
    return (
      <div className="h-9 w-9 rounded-lg border border-lime-600/20 dark:border-lime-400/20 bg-lime-50/50 dark:bg-[#121B15] opacity-50" />
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-lime-600/20 dark:border-lime-400/20 bg-lime-50/50 dark:bg-[#121B15] text-lime-900 dark:text-lime-300 hover:text-lime-700 dark:hover:text-white hover:border-lime-500/50 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-500 cursor-pointer shadow-xs"
      aria-label={theme === "dark" ? "تغییر به حالت روز (روشن)" : "تغییر به حالت شب (تاریک)"}
      title={theme === "dark" ? "تغییر به حالت روز (روشن)" : "تغییر به حالت شب (تاریک)"}
    >
      {theme === "dark" ? (
        <Sun className="h-4 w-4 transition-transform duration-300 hover:rotate-45 text-[#A3E635]" />
      ) : (
        <Moon className="h-4 w-4 transition-transform duration-300 hover:-rotate-12 text-lime-700" />
      )}
    </button>
  );
}
