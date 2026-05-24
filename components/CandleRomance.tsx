/* eslint-disable @next/next/no-img-element */
// components/CandleRomance.tsx
"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const CandleRomance = () => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            video.play().catch((error) => {
                console.log("Autoplay was prevented:", error);
            });
        }
    }, []);

    return (
        <section className="relative w-full h-[720px] overflow-hidden">
            {/* Background video */}
            <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                preload="none"
                className="absolute inset-0 w-full h-full object-cover"
            >
                <source src="/bg-videos/candle-romance.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Content overlay */}
            <div className="relative z-10 flex h-full items-center justify-between px-6 lg:px-32 mt-6">
                <div className="relative w-[260px] lg:w-[340px] h-[420px] lg:h-[540px]">
                    {/* Pehle chhoti waali image – ab upar aur badi */}
                    <div className="absolute w-[220px] h-60 lg:w-[380px] lg:h-[400px] rounded-3xl overflow-hidden shadow-xl">
                        <Image
                            src="/1000137476.jpg"
                            alt="Side memory"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Badi portrait image – thoda neeche, center aligned */}
                    <div className="absolute -right-56 -bottom-18 h-[360px] lg:h-[480px] rounded-3xl overflow-hidden shadow-xl -rotate-90">
                        <img
                            src="/1000137474.jpg"
                            alt="Main memory"
                            className="h-full w-auto object-cover"
                        />
                    </div>
                </div>

                {/* RIGHT: text/content */}
                {/* <div className="flex-1 flex justify-center lg:justify-start">
                    <div className="max-w-xl text-right lg:text-left text-white space-y-4">
                        <h2 className="text-3xl lg:text-5xl font-semibold leading-tight">
                            Romantic Candlelight
                        </h2>
                        <p className="text-sm lg:text-base text-white/80">
                            Jo bhi likhna hai yahan likh sakta hai, thoda emotional / romantic
                            text for her.
                        </p>
                    </div>
                </div> */}
            </div>
        </section>
    );
};

export default CandleRomance;
