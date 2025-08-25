"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function ResumeNavigation() {
    const pathname = usePathname();

    // Only show navigation on resume pages
    if (!pathname.startsWith("/resume")) {
        return null;
    }

    return (
        <div className="resume-navigation">
            <Link href="/" className="navLink">← Home</Link>
            {pathname === "/resume" && (
                <Link href="/resume/pdf" className="navLink">View PDF →</Link>
            )}
            {pathname === "/resume/pdf" && (
                <Link href="/resume" className="navLink">View Resume →</Link>
            )}
        </div>
    );
}
