import "./globals.css";
import type { Metadata } from "next";
import React from "react";
import localFont from 'next/font/local'

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
      <body>{children}</body>
    </html>
  );
}
