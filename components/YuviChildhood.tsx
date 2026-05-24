/* eslint-disable @next/next/no-img-element */
"use client";

import { useMemo } from "react";
import Image from "next/image";
import {
    DraggableCardBody,
    DraggableCardContainer,
} from "./ui/draggable-card";

/* ------------------ Images ------------------ */
const childhoodImages = [
    { src: "/childhood-pics/1000137405.jpg" },
    { src: "/childhood-pics/1000137435.jpg" },
    { src: "/childhood-pics/1000137415.jpg" },
    { src: "/childhood-pics/1000137443.jpg" },
    { src: "/childhood-pics/1000137483.jpg" },
    { src: "/childhood-pics/1000137484.jpg" },
];

/* ------------------ Helpers ------------------ */
const randomBetween = (min: number, max: number) =>
    Math.random() * (max - min) + min;

const generateRandomTransform = () => ({
    x: randomBetween(-70, 70),
    y: randomBetween(-70, 70),
    rotate: randomBetween(-18, 18),
});

/* ------------------ Component ------------------ */
const YuviChildhood = () => {
    /* Random values are frozen using useMemo */
    const randomizedImages = useMemo(
        () =>
            childhoodImages.map((img) => ({
                ...img,
                transform: generateRandomTransform(),
            })),
        []
    );

    return (
        <section className="relative w-full min-h-screen overflow-hidden">
            {/* Background */}
            <Image
                src="/bg-images/white-texture.jpg"
                alt="Childhood grass background"
                fill
                className="object-cover"
            />

            {/* Heading Section */}
            <div className="relative z-20 pt-36 text-center">
                <h1 className="text-5xl font-bold text-[#FF447E] drop-shadow-lg mb-2">
                    Yuvi&apos;s Childhood
                </h1>
                <p className="text-xl text-gray-700 drop-shadow-md italic">
                    Little moments, forever memories 💛
                </p>
            </div>

            {/* Card Stack */}
            <div className="relative z-10 flex min-h-screen items-center justify-center px-4">
                {/* Hidden Message Behind Cards */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="text-center max-w-2xl px-8">
                        <p className="text-sm font-bold text-[#e184a2] italic leading-relaxed">
                            Love you my cutu ♥︎
                        </p>
                    </div>
                </div>

                <DraggableCardContainer className="relative z-20 w-[420px] h-[420px]">
                    {randomizedImages.map((image, index) => (
                        <DraggableCardBody
                            key={index}
                            className="absolute h-80 w-80 p-0 cursor-grab active:cursor-grabbing"
                            initial={{
                                x: image.transform.x,
                                y: image.transform.y,
                                rotate: image.transform.rotate,
                            }}
                            style={{
                                zIndex: 100 - index,
                            }}
                        >
                            <img
                                src={image.src}
                                alt={`Childhood memory ${index + 1}`}
                                className="w-full h-full object-cover rounded-xl shadow-2xl pointer-events-none"
                            />
                        </DraggableCardBody>
                    ))}
                </DraggableCardContainer>
            </div>
        </section>
    );
};

export default YuviChildhood;
