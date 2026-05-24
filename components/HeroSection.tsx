/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import { FlipWords } from "./ui/flip-words";
import { ShineBorder } from "./ui/shine-border";

const HeroSection = () => {
    return (
        <section className="relative w-full min-h-screen pt-12">
            <Image
                src="/bg-images/soft-pink-bg.jpg"
                alt=""
                fill
                priority
                className="object-cover object-center"
            />
            {/* Soft warm overlay */}
            <div className="absolute inset-0 bg-linear-to-b from-black/10 via-black/5 to-black/10" />

            <div className="relative z-10 max-w-7xl mx-auto px-10 py-24 grid grid-cols-1 md:grid-cols-2 items-center gap-16 gap-y-8">

                {/* TEXT SIDE */}
                <div className="text-center md:text-left">
                    <h1 className="text-5xl md:text-6xl text-[#5A2E3A] mb-4 font-rosaline leading-tight">
                        For My <FlipWords words={["Beautiful", "Gorgeous", "Amazing", "Lovely", "Perfect"]} duration={3000} className="text-[#E08A9A]" /> <br /> Girlfriend
                    </h1>

                    <div className="w-24 h-0.5 bg-[#E08A9A] mx-auto md:mx-0 mb-6 rounded-full" />

                    <p className="text-lg md:text-xl text-[#6A4A45] max-w-xl leading-relaxed">
                        Every moment with you is a treasure.
                        Here’s a little gallery of our favorite memories —
                        moments I never want to forget.
                    </p>

                    <p className="mt-6 text-sm text-[#9A6B75] italic">
                        Made with love, just for you 🤍
                    </p>

                    <button className="mt-8 px-7 py-3 rounded-full bg-[#E08A9A] text-white font-medium shadow-lg hover:scale-105 hover:bg-[#cf7687] transition-all duration-300">
                        View Our Memories
                    </button>
                </div>

                {/* IMAGE SIDE */}
                <div className="flex justify-center md:justify-end mt-10 md:mt-0">
                    <div className="relative w-72 h-96 md:w-96 md:h-112 rounded-lg">

                        {/* MAIN IMAGE */}
                        <img
                            src="/1000137466.jpg"
                            alt="Our memory"
                            className="w-full h-full object-cover rounded-lg relative z-10"
                        />

                        {/* Glow behind image */}
                        <div className="absolute -inset-3 rounded-3xl bg-[#E08A9A]/25 blur-2xl z-0" />

                        {/* Shine border above glow but below flower */}
                        <ShineBorder
                            borderWidth={3}
                            duration={14}
                            shineColor={["#B95A6B", "#8B2F3C", "#B95A6B"]}

                            className="absolute inset-0 rounded-lg z-20 pointer-events-none"
                        />

                        {/* 🌸 FLOWER IMAGE OVERLAY */}
                        <img
                            src="/pink-flower.png"
                            alt="Pink flower"
                            className="
                                absolute
                                -top-12
                                -right-16
                                w-40
                                md:w-44
                                -rotate-12
                                opacity-90
                                z-50
                                pointer-events-none
                            "
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default HeroSection;
