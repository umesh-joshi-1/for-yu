// components/LavenderSection.tsx
"use client";

import Image from "next/image";

const LavenderSection = () => {
    return (
        <section className="relative w-full min-h-screen overflow-hidden">
            {/* Background image */}
            <Image
                src="/bg-images/lavender-flowers.jpg"
                alt="Lavender background"
                fill
                priority
                className="object-cover"
            />

            {/* Light overlay so cards stand out */}
            <div className="absolute inset-0 bg-linear-to-b from-black/10 via-black/5 to-black/10" />

            {/* 3‑image strip on top of bg */}
            <div className="relative z-10 flex min-h-screen items-center justify-center md:justify-end md:mr-16">
                <div className="w-full max-w-5xl px-4">
                    {/* Frame */}
                    <div
                        className="
              ml-auto
              flex flex-col md:flex-row
              gap-4 md:gap-4
              bg-[#DCDEE0]
              shadow-2xl rounded-xl
              p-2 md:p-3
              max-w-full md:max-w-3xl
            "
                    >
                        {/* Image 1 */}
                        <div className="relative w-full h-64 md:h-[260px] lg:h-[360px] overflow-hidden">
                            <Image
                                src="/1000137457.jpg"
                                alt=""
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Image 2 */}
                        <div className="relative w-full h-64 md:h-[260px] lg:h-[360px] overflow-hidden">
                            <Image
                                src="/1000137461.jpg"
                                alt=""
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Image 3 */}
                        <div className="relative w-full h-64 md:h-[260px] lg:h-[360px] overflow-hidden">
                            <Image
                                src="/1000137459.jpg"
                                alt=""
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

export default LavenderSection;
