import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

import { Plus_Jakarta_Sans } from "next/font/google";
import { LayoutTransition } from "@/components/providers/layout-transition";

const jakarta = Plus_Jakarta_Sans({
  weight: ["400", "300", "500", "600", "700", "800"],
  variable: "--font-jarkarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Devroots Alpha",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jakarta.className}>
        <LayoutTransition
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {children}
          <Analytics />
        </LayoutTransition>
      </body>
    </html>
  );
}
