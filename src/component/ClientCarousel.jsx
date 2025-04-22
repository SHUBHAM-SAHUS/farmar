"use client";
import React, { useEffect, useState, useRef } from "react";
// import { type CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";

const ClientCarousel = ({
  items,
  title = "Our Clients",
  showLabels = false,
}) => {
  const [api, setApi] = useState(null);
  const autoplayRef = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  return (
    <section className="w-full py-8 px-4 bg-gradient-to-b from-white via-green-50/40 to-white">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-700 text-center mb-3">
          {title}
        </h2>
        <div className="w-16 sm:w-20 h-1 rounded-full bg-gradient-to-r from-green-600 to-green-400 mb-12" />

        <div className="w-full relative px-12 md:px-16">
          {/* Left Arrow - Outside the carousel */}
          <Button
            variant="secondary"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2  bg-gray-50 hover:bg-green-100 shadow-lg rounded-full border border-green-300 z-20 w-10 h-10 transition-all duration-300 hover:scale-110"
            onClick={() => api?.scrollPrev()}
          >
            <ChevronLeft className="text-green-700 w-5 h-5" />
          </Button>

          <Carousel
            setApi={setApi}
            className="w-full"
            plugins={[autoplayRef.current]}
            opts={{
              align: "start",
              loop: true,
              skipSnaps: false,
            }}
          >
            <CarouselContent className="-ml-4">
              {items.map((item, idx) => (
                <CarouselItem
                  key={item.alt || idx}
                  className="pl-4 lg:basis-1/4 md:basis-1/3 sm:basis-1/2 basis-full py-4"
                >
                  <div
                    className={`bg-gradient-to-b from-white to-green-50/30 rounded-2xl shadow-md hover:shadow-xl flex flex-col ${
                      showLabels ? "h-52 md:h-56" : "h-44 md:h-48"
                    } transition-all duration-300 hover:scale-105 border border-green-200 mx-auto overflow-hidden group`}
                  >
                    <div className="flex-1 flex items-center justify-center p-4 md:p-6 group-hover:bg-white/80 transition-colors duration-300">
                      <img
                        src={item.src}
                        alt={item.alt}
                        className="object-contain max-h-28 md:max-h-32 w-auto max-w-[85%] transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    {showLabels && (
                      <div className="px-3 py-2.5 md:py-3 bg-gradient-to-r from-green-50 to-green-100/50 w-full border-t border-green-200">
                        <span className="text-xs md:text-sm text-green-700 font-semibold text-center block line-clamp-1">
                          {item.alt}
                        </span>
                      </div>
                    )}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Right Arrow - Outside the carousel */}
          <Button
            variant="secondary"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-50 hover:bg-green-100 shadow-lg rounded-full border border-green-300 z-20 w-10 h-10 transition-all duration-300 hover:scale-110"
            onClick={() => api?.scrollNext()}
          >
            <ChevronRight className="text-green-700 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ClientCarousel;
