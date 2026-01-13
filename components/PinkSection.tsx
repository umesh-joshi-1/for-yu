"use client";

import Image from "next/image";
import React from "react";

const PinkSection = () => {
    return (
        <section className="relative w-full py-[70px] lg:py-[100px] overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url(/bg-images/5172214.jpg)" }}
            />
            {/* Soft overlay */}
            <div className="absolute inset-0 bg-linear-to-b from-black/10 via-black/5 to-black/10" />

            <div className="relative z-10 flex flex-col gap-[50px]">
                {/* ===== TEXT AREA ===== */}
                <div className="flex-center flex-col gap-2.5 lg:gap-[15px] w-full relative px-4 lg:px-0">
                    <h2 className="text-[32px] lg:text-[52px] -tracking-[0.01em] leading-[1.2em] font-medium text-center text-white">
                        Rooted in Love, Built on Trust
                    </h2>

                    <p className="font-medium lg:w-[1050px] mx-auto text-[16px] lg:text-[20px] tracking-[-0.02em] leading-[1.1em] text-center text-white/80 p-4 lg:px-0">
                        With you, love feels calm and certain. You inspire me to grow, to
                        stay kind, and to believe in something deeper than words — a
                        connection that feels like home.
                    </p>
                </div>

                {/* ===== IMAGE LAYOUT WITH FLIP CENTER ===== */}
                <div className="w-full max-w-[984px] h-[400px] lg:h-[500px] mx-auto relative flex items-center justify-center">
                    <div className="flex items-center gap-6 lg:gap-4">
                        {/* Left */}
                        <div className="relative w-[190px] h-[130px] lg:w-[260px] lg:h-[210px] rounded-xl overflow-hidden shadow-lg self-end">
                            <Image
                                src="/1000137468.jpg"
                                alt="Left memory"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Center FLIP CARD */}
                        <div className="relative w-[260px] h-[378px] lg:w-[375px] lg:h-[500px] perspective group cursor-pointer">
                            {/* Card wrapper rotates */}
                            <div className="absolute inset-0 preserve-3d card-flip card-flip-delayed group-hover:rotate-x-180 transition-all duration-1000 ease-in-out">
                                {/* Front Side */}
                                <div className="absolute inset-0 backface-hidden rounded-xl overflow-hidden shadow-xl">
                                    <Image
                                        src="/1000137464.jpg"
                                        alt="Front"
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                {/* Back Side */}
                                <div className="absolute inset-0 rotate-x-180 backface-hidden rounded-xl overflow-hidden shadow-xl">
                                    <Image
                                        src="/1000137462.jpg"
                                        alt="Back"
                                        fill
                                        className="object-cover object-left"
                                    />
                                </div>

                            </div>
                        </div>

                        {/* Right */}
                        <div className="relative w-[190px] h-[170px] lg:w-[260px] lg:h-[280px] rounded-xl overflow-hidden shadow-lg self-start">
                            <Image
                                src="/1000137465.jpg"
                                alt="Right memory"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PinkSection;
