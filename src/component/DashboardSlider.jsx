'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = ['/assets/SliderImage01.JPG', '/assets/SliderImage02.JPG', '/assets/SliderImage03.JPG'];

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
    <div className="w-full flex justify-center items-center py-8">
      <div className="relative w-full max-w-md sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl h-[200px] sm:h-[260px] md:h-[320px] lg:h-[500px] rounded-3xl overflow-hidden shadow-xl">
        {/* Sliding Image */}
        <div className={`w-full h-full transition-opacity duration-500 ${fade ? 'opacity-60' : 'opacity-100'}`}>
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
    </div>
  );
};

export default DashboardSlider;
