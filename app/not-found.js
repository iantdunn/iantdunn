"use client";
import { usePathname } from "next/navigation";

export default function NotFound() {
    const pathname = usePathname();

    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <div className="text-center">
                <h1>404</h1>
                <p className="mb-2"> The page {pathname} does not exist</p>
                <a href="/">Go Home</a>
            </div>
        </div>
    );
}
