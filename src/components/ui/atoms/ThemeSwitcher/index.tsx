"use client";

import DynamicIcon from "@/components/DynamicIcon";
import { useTheme } from "@/context/ThemeContext";

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="fixed bottom-20 lg:bottom-5 right-5 dark:border p-2 rounded-full hover:scale-110 transition-all bg-gray-900 dark:bg-white"
      onClick={toggleTheme}
    >
      {theme === "light" ? (
        <DynamicIcon icon="MoonIcon" solid className="w-6 h-6 text-white" />
      ) : (
        <DynamicIcon icon="SunIcon" solid className="w-6 h-6 text-black" />
      )}
    </button>
  );
}
