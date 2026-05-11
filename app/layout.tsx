import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tom Lever — Full-Stack Developer",
  description: "Full-stack web developer based in Manchester, UK. Building fast, modern web products.",
  openGraph: {
    title: "Tom Lever — Full-Stack Developer",
    description: "Full-stack web developer based in Manchester, UK.",
    url: "https://tomlever.dev",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
