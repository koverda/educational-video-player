import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "LearnWell: Your Educational Video Platform",
    description: "LearnWell is a dynamic platform for creating, viewing, and engaging with educational videos. " +
        "Educators can easily share content, and students can effortlessly explore and comment on videos. " +
        "Transform your learning experience with LearnWell.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={inter.className}>{children}</body>
        </html>
    );
}
