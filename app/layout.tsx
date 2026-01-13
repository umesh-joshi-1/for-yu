// app/layout.tsx
import type { Metadata } from "next";
import { rosaline, geistSans } from "./_fonts";
import "./globals.css";
import { LenisWrapper } from "@/components/LenisWrapper";
import ClientRoot from "./client-root";

export const metadata: Metadata = {
  title: "Yuvi ꨄ | For You",
  description: "A little romantic web experience made just for you.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${rosaline.variable} antialiased`}>
        {/* Sab client logic iske andar */}
        <LenisWrapper>
          <ClientRoot>{children}</ClientRoot>
        </LenisWrapper>
      </body>
    </html>
  );
}
