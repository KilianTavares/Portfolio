"use client";

import React from "react";
import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/react-splide/css";

interface ImageCarouselProps {
  images: { name: string; image: string | React.ReactNode }[];
  perPage?: number;
}

export default function ImageCarousel({
  images,
  perPage = 1,
}: ImageCarouselProps) {
  return (
    <Splide
      options={{
        type: "loop",
        drag: "free",
        focus: "center",
        perPage: perPage,
        autoScroll: {
          speed: 0.8,
        },
        arrows: false,
        pagination: false,
      }}
      extensions={{ AutoScroll }}
    >
      {images.map((item, index) => (
        <SplideSlide key={index}>
          <div className="flex flex-col items-center  justify-center p-4">
            {item.image}
            <span className="mt-2 text-sm">{item.name}</span>
          </div>
        </SplideSlide>
      ))}
    </Splide>
  );
}