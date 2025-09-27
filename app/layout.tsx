import type { Metadata } from "next";
import { inter } from "@/components/blog/fonts";
import "./globals.css";
import { AuthProvider } from "./AuthProvider";
import Navbar from "@/components/blog/Navbar";
import { ThemeProvider } from "@/components/theme-provider"


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
        <html lang="en" suppressHydrationWarning>
            <body
                className={`min-h-screen px-[10px] md:px-[5vw] ${inter.className}`}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="light"
                    enableSystem
                    disableTransitionOnChange
                >
                    <AuthProvider>
                        <Navbar />
                        {children}
                    </AuthProvider>
                </ThemeProvider>

            </body>
        </html>
    );
}