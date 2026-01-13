import localFont from "next/font/local";
import { Geist } from "next/font/google";

export const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

export const rosaline = localFont({
    src: [
        {
            path: "./Rosaline/Rosaline-Regular.woff2",
            weight: "400",
            style: "normal",
        },
    ],
    variable: "--font-rosaline",
    display: "swap",
});
