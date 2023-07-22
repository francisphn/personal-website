import "./globals.css";
import type { Metadata } from "next";
import { Barlow } from "next/font/google";

const barlow = Barlow({ weight: ["400", "600"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Francis Phan",
  description: "UC student, software engineer, and cycling enthusiast.",
}; 

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={barlow.className}>{children}</body>
    </html>
  );
}
