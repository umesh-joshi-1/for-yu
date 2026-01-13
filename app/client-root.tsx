// app/client-root.tsx
"use client";

import { SmoothCursor } from "@/components/ui/smooth-cursor";
import Navbar from "@/components/Navbar";
import { useIsDesktop } from "./hooks/useisDesktop";

export default function ClientRoot({
    children,
}: {
    children: React.ReactNode;
}) {
    const isDesktop = useIsDesktop();

    return (
        <>
            {isDesktop && <SmoothCursor />}
            <Navbar />
            {children}
        </>
    );
}
