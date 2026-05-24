import dynamic from "next/dynamic";
import HeroSection from "@/components/HeroSection";

const PinkSection = dynamic(() => import("@/components/PinkSection"));
const CandleRomance = dynamic(() => import("@/components/CandleRomance"));
const LavenderSection = dynamic(() => import("@/components/LavenderSection"));
const YuviChildhood = dynamic(() => import("@/components/YuviChildhood"));

export default function page() {
    return (
        <div>
            <HeroSection />
            <PinkSection />
            <CandleRomance />
            <LavenderSection />
            <YuviChildhood />
        </div>
    )
}
