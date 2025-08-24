import "./globals.css";
import ThemeToggle from "./components/ThemeToggle";

export const metadata = {
  title: "Ian Dunn",
  description: "Ian Dunn's personal website.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ThemeToggle />
        {children}
      </body>
    </html>
  );
}
