"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 right-0 left-0 z-50 flex w-full items-center justify-between border-b p-4">
      <div className="flex flex-1 justify-start">{pathname !== "/" && <Link href="/">← Home</Link>}</div>

      <div className="flex items-center justify-center">
        <ThemeToggle />
      </div>

      <div className="flex flex-1 justify-end">
        {pathname === "/resume" && <Link href="/resume/text">View Text</Link>}

        {pathname === "/resume/text" && <Link href="/resume">View PDF</Link>}
      </div>
    </nav>
  );
}
