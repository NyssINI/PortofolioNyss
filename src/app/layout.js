"use client";

import React, { useState, useEffect } from "react";
import Loading from "./components/Loading"; // Impor komponen Loading
import Menu from "./components/Menu"; // Impor komponen Menu
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
      setIsLoading(false); 
    }, 3000); // Durasi loading (3 detik)

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {isLoading ? (
          <Loading /> 
        ) : (
          <>
            <Menu showMenu={!isLoading} />
            {children}
          </>
        )}
      </body>
    </html>
  );
}
