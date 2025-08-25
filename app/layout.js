import "./globals.css";
import ThemeToggle from "./components/ThemeToggle";
import ResumeNavigation from "./components/ResumeNavigation";

export const metadata = {
  title: "Ian Dunn",
  description: "Ian Dunn's personal website.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      { /* TODO suppressing the hydration warning, while technically correct, is a very wonky fix */}
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const savedTheme = localStorage.getItem('theme') || 'dark';
                document.documentElement.className = savedTheme;
              })();
            `,
          }}
        />
      </head>
      <body className="antialiased">
        <nav className="navbar">
          <div className="navbar-left">
            <ResumeNavigation />
          </div>
          <div className="navbar-right">
            <ThemeToggle />
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
