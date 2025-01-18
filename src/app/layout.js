"use client";

import React, { useState, useEffect } from "react";
import Loading from "./components/Loading"; // Impor komponen Loading
import Menu from "./components/Menu"; // Impor Menu komponen
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const Metadata = {
  title: "Nyss Portofolio",
  description: "return Nyss;",
};

export default function Layout({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Setelah 3 detik, set loading menjadi false
    }, 3000); // Waktu loading screen, 3 detik

    return () => clearTimeout(timer); // Bersihkan timer ketika komponen unmount
  }, []);

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {isLoading ? (
          <Loading /> // Tampilkan loading screen selama isLoading true
        ) : (
          <>
            <Menu />
            {children}
          </>
        )}
      </body>
    </html>
  );
}
