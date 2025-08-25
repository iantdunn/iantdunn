"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import "./ThemeToggle.css";

export default function ThemeToggle() {
    const [theme, setTheme] = useState(null);
    const pathname = usePathname();

    const applyTheme = (newTheme) => {
        const root = document.documentElement;
        root.classList.remove("light", "dark");
        root.classList.add(newTheme);
    };

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") || "dark";
        setTheme(savedTheme);
        applyTheme(savedTheme);
    }, []);

    const handleThemeChange = (newTheme) => {
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
        applyTheme(newTheme);
    };

    return (
        <div className="theme-toggle">
            <button
                onClick={() => handleThemeChange("light")}
                className={`theme-button ${theme === "light" ? "active" : ""}`}
                aria-label="Switch to light mode"
            >
                Light
            </button>
            <button
                onClick={() => handleThemeChange("dark")}
                className={`theme-button ${theme === "dark" ? "active" : ""}`}
                aria-label="Switch to dark mode"
            >
                Dark
            </button>
        </div>
    );
}
