"use client";

import { useState, useEffect, JSX } from "react";

type Theme = "light" | "dark" | null;

export default function ThemeToggle(): JSX.Element {
  const [theme, setTheme] = useState<Theme>(null);

  const applyTheme = (newTheme: Exclude<Theme, null>): void => {
    const root: HTMLElement = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(newTheme);
  };

  useEffect(() => {
    const savedTheme: Theme =
      (localStorage.getItem("theme") as Theme) || "dark";
    setTheme(savedTheme);
    if (savedTheme) applyTheme(savedTheme);
  }, []);

  const handleThemeChange = (newTheme: Exclude<Theme, null>): void => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    applyTheme(newTheme);
  };

  return (
    <div className="flex gap-4 py-1">
      <button
        onClick={() => handleThemeChange("light")}
        className={`cursor-pointer opacity-60 hover:opacity-100 hover:underline transition-all duration-200 ease-in ${
          theme === "light" ? "opacity-100 underline" : ""
        }`}
        aria-label="Toggle Light Mode"
      >
        Light
      </button>
      <button
        onClick={() => handleThemeChange("dark")}
        className={`cursor-pointer opacity-60 hover:opacity-100 hover:underline transition-all duration-200 ease-in ${
          theme === "dark" ? "opacity-100 underline" : ""
        }`}
        aria-label="Toggle Dark Mode"
      >
        Dark
      </button>
    </div>
  );
}
