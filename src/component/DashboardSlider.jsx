"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/assets/SliderImage01.JPG",
  "/assets/SliderImage02.JPG",
  "/assets/SliderImage03.JPG",
];

const DashboardSlider = () => {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(false);

  const handleNext = () => {
    setFade(true);
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % images.length);
      setFade(false);
    }, 600);
  };

  const handlePrev = () => {
    setFade(true);
    setTimeout(() => {
      setCurrent((prev) => (prev - 1 + images.length) % images.length);
      setFade(false);
    }, 500);
  };

  return (
    <div className="w-full flex flex-col justify-center items-center md:pb-8 md:pt-4 md:px-4 p-2">
      <div
        className="relative w-full xl:w-full h-[500px] sm:h-[560px] md:h-[650px] lg:h-[500px] md:rounded-3xl rounded-xl overflow-hidden shadow-b-xl bg-green-200"
        style={{ boxShadow: "0 20px 50px 0px rgba(0, 0, 0, 0.6)" }}
      >
        {/* Sliding Image */}
        <div
          className={`w-full h-full transition-opacity duration-500 ${
            fade ? "opacity-60" : "opacity-100"
          }`}
        >
          <Image
            src={images[current]}
            alt={`slide-${current}`}
            fill
            className="object-cover"
            style={{ zIndex: 1 }}
            priority
          />
        </div>
        {/* Green Gradient Overlay at Bottom */}
        <div className="absolute bottom-0 left-0 w-full h-16 sm:h-20 md:h-24 bg-gradient-to-t from-green-600/80 to-transparent z-10 pointer-events-none" />
        {/* Left Arrow */}
        <Button
          variant="secondary"
          size="icon"
          className="absolute top-1/2 left-2 sm:left-4 -translate-y-1/2 bg-white/80 hover:bg-white z-20 shadow"
          onClick={handlePrev}
        >
          <ChevronLeft className="text-green-700" />
        </Button>
        {/* Right Arrow */}
        <Button
          variant="secondary"
          size="icon"
          className="absolute top-1/2 right-2 sm:right-4 -translate-y-1/2 bg-white/80 hover:bg-white z-20 shadow"
          onClick={handleNext}
        >
          <ChevronRight className="text-green-700" />
        </Button>
      </div>
      {/* shadow bottom */}
      {/* <div
        className=" bottom-0 left-0 w-full h-6 pointer-events-none z-10"
        style={{ boxShadow: "0 16px 32px 0 rgba(0,0,0,0.13)" }}
      /> */}
    </div>
  );
};

export default DashboardSlider;
