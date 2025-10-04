"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NotFound() {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="text-center">
        <h1>404</h1>
        <p className="mb-2"> The page {pathname} does not exist</p>
        <Link href="/">Go Home</Link>
      </div>
    </div>
  );
}
