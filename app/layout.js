import "./globals.css";

export const metadata = {
  title: "Ian Dunn",
  description: "Ian Dunn's personal website.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
