import "./globals.css";
import Navbar from "./components/Navbar";

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
        <Navbar />
        {children}
      </body>
    </html>
  );
}
