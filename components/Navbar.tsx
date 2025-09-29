"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between w-full border-b p-4">
      <div className="flex flex-1 justify-start">
        {pathname !== "/" && <Link href="/">← Home</Link>}
      </div>

      <div className="flex justify-center items-center">
        <ThemeToggle />
      </div>

      <div className="flex flex-1 justify-end">
        {pathname === "/resume" && <Link href="/resume/text">View Text</Link>}

        {pathname === "/resume/text" && <Link href="/resume">View PDF</Link>}
      </div>
    </nav>
  );
}
