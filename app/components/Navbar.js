"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import "./Navbar.css";

export default function Navbar() {
    const pathname = usePathname();

    return (
        <nav className="navbar">
            <div className="navbar-left">
                {pathname !== '/' && (
                    <Link href="/" className="navLink">← Home</Link>
                )}
            </div>

            <div className="navbar-center">
                <ThemeToggle />
            </div>

            <div className="navbar-right">
                {pathname === "/resume" && (
                    <Link href="/resume/text" className="navLink">View Text</Link>
                )}

                {pathname === "/resume/text" && (
                    <Link href="/resume" className="navLink">View PDF</Link>
                )}
            </div>
        </nav>
    );
}
