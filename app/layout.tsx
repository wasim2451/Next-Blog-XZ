import type { Metadata } from "next";
import { inter } from "@/components/blog/fonts";
import "./globals.css";
import { AuthProvider } from "./AuthProvider";
import Navbar from "@/components/blog/Navbar";

export const metadata: Metadata = {
  title: "My Blog App",
  description: "Blog powered by Next.js, Supabase, and Kinde",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-white text-black min-h-screen px-[10px] md:px-[5vw] ${inter.className}`}
      >
        <AuthProvider>
          <Navbar />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}