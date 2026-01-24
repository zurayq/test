import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Use Inter, not Geist
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// ... keep your metadata ...

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      {/* Use inter.className here */}
      <body className={`${inter.className} antialiased min-h-screen bg-background text-foreground`}>
        {children}
      </body>
    </html>
  );
}
