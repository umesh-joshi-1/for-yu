/* eslint-disable @next/next/no-img-element */
// components/PhotoGallery.tsx
"use client";

import { cn } from "@/lib/utils";
import React from "react";

type PhotoGalleryItem = {
    src: string;
    alt?: string;
};

interface PhotoGalleryProps {
    containerClassName?: string;
    className?: string;
    items: PhotoGalleryItem[];
}

const PhotoGallery: React.FC<PhotoGalleryProps> = ({
    containerClassName,
    className,
    items,
}) => {
    return (
        <div
            className={cn(
                "gallery mb-(--size) grid grid-cols-6 gap-0",
                containerClassName,
            )}
        >
            {items.map((image, index) => (
                <img
                    key={index}
                    src={image.src}
                    alt={image.alt ?? `image-${index}`}
                    className={cn(
                        "gallery-img size-[calc(var(--size)*2)] rounded object-cover transition-[clip-path,filter] duration-75",
                        className,
                    )}
                />
            ))}
        </div>
    );
};

export default PhotoGallery;
