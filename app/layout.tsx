import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Flavor Factory",
  description: "Premium custom flavor manufacturing and formulation support."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
