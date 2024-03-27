import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import StoreProvider from "@/lib/redux/StoreProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Next-dex",
    description:
        "A clone of the official Pokémon web page Pokédex built in Next.js",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className="h-full bg-auto bg-center bg-repeat bg-dex-background font-roboto overscroll-contain">
                    <StoreProvider>{children}</StoreProvider>
                </div>
            </body>
        </html>
    );
}
