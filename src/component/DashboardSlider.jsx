"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "/assets/SliderImage01.JPG",
  "/assets/SliderImage04.jpg",
  "/assets/SliderImage03.jpg",
];

const DashboardSlider = () => {
  const [current, setCurrent] = useState(0);
  // const [fade, setFade] = useState(false);
  // const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    // if (!isPaused) {
      timerRef.current = setInterval(() => {
        handleNext();
      }, 4000); // Change slide every 5 seconds
    // }
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [ current]);

  const handleNext = () => {
    // setFade(true);
    // setTimeout(() => {
      setCurrent((prev) => (prev + 1) % images.length);
      // setFade(false);
    // }, 600);
  };

  const handlePrev = () => {
    // setFade(true);
    // setTimeout(() => {
      setCurrent((prev) => (prev - 1 + images.length) % images.length);
      // setFade(false);
    // }, 500);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="w-full max-w-[1920px] mx-auto flex flex-col justify-center items-center md:pb-8 md:pt-4 md:px-4 p-2"
    >
      <motion.div
        whileInView={{ scale: [0.9, 1], opacity: [0, 1] }}
        transition={{ duration: 0.8 }}
        className="relative w-full h-[500px] sm:h-[560px] md:h-[650px] lg:h-[600px] md:rounded-3xl rounded-xl overflow-hidden shadow-b-xl bg-green-200"
        style={{ boxShadow: "0 20px 50px 0px rgba(0, 0, 0, 0.6)" }}
        // onMouseEnter={() => setIsPaused(true)}
        // onMouseLeave={() => setIsPaused(false)}
      >
        <AnimatePresence mode="popLayout">
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: .4, ease: "easeOut" }}
            className="w-full h-full"
          >
            <Image
              src={images[current]}
              alt={`slide-${current}`}
              fill
              className="object-cover"
              style={{ zIndex: 1 }}
              priority
            />
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="absolute bottom-0 left-0 w-full h-16 sm:h-20 md:h-24 bg-gradient-to-t from-green-600/80 to-transparent z-10 pointer-events-none"
        />

        <Button
          variant="secondary"
          size="icon"
          className="absolute top-1/2 left-2 sm:left-4 -translate-y-1/2 bg-green-100 hover:bg-green-200  z-20 shadow transition-transform duration-200 hover:scale-110 active:scale-90 rounded-full"
          onClick={handlePrev}
        >
          <ChevronLeft className="text-green-700 !h-6 !w-6" />
        </Button>

        <Button
          variant="secondary"
          size="icon"
          className="absolute top-1/2 right-2 sm:right-4 -translate-y-1/2 bg-green-100 hover:bg-green-200  z-20 shadow transition-transform duration-200 hover:scale-110 active:scale-90 rounded-full"
          onClick={handleNext}
        >
          <ChevronRight className="text-green-700 !h-6 !w-6" />
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default DashboardSlider;
