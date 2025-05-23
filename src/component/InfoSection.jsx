"use client";
import React from "react";
import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

const features = [
  "Enhancing the income and livelihoods of our member farmers.",
  "Promoting sustainable and residue-free farming practices.",
  "Facilitating direct market access, including domestic and export.",
  "Providing vital support: technical guidance, inputs, and marketing.",
];

const FPOSection = () => {
  const firstRowRef = React.useRef(null);
  const secondRowRef = React.useRef(null);
  const isFirstRowInView = useInView(firstRowRef, { once: true, amount: 0.2 });
  const isSecondRowInView = useInView(secondRowRef, {
    once: true,
    amount: 0.2,
  });

  return (
    <section className="w-full py-8 px-2 bg-gradient-to-b from-white via-green-50 to-white">
      <div className="w-full max-w-md sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto">
        {/* Heading */}
        <div className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-700 text-center mb-2">
            About Us
          </h2>
          <div className="w-12 sm:w-16 h-1 rounded-full bg-gradient-to-r from-green-600 to-green-400 mx-auto mb-6 sm:mb-8" />
        </div>

        <div className="flex flex-col gap-6 md:gap-8">
          {/* First Row */}
          <div
            ref={firstRowRef}
            className="flex flex-col md:flex-row gap-8 md:gap-16 lg:items-center items-start mb-4"
          >
            <motion.div
              className="w-full md:w-1/2"
              initial={{ x: -100, opacity: 0 }}
              animate={
                isFirstRowInView
                  ? { x: 0, opacity: 1 }
                  : { x: -100, opacity: 0 }
              }
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div className="relative w-full h-40 xs:h-48 sm:h-56 md:h-72 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/assets/SliderImage01.JPG"
                  alt="FPO"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
            <motion.div
              className="w-full md:w-1/2 flex flex-col justify-center mt-6 md:mt-0"
              initial={{ x: 100, opacity: 0 }}
              animate={
                isFirstRowInView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }
              }
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            >
              <h3 className="text-xl sm:text-2xl font-semibold text-green-700 mb-3">
                RamRahim Pragati Producer Company Limited{" "}
              </h3>
              <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
                Based in Madhya Pradesh, RamRahim Pragati Producer Company
                Limited{" "}
                <span className="text-green-700 font-semibold">
                  is a farmer-owned organization{" "}
                </span>{" "}
                focused on empowering our members. We work collectively across
                dairy, diverse crops (horticulture, vegetables, etc.), animal
                husbandry, and agro-inputs, managing activities from production
                to marketing to boost farmer livelihoods.
              </p>
            </motion.div>
          </div>
          {/* Second Row */}
          <div
            ref={secondRowRef}
            className="flex flex-col md:flex-row gap-8 lg:items-center items-start"
          >
            <motion.div
              className="w-full md:w-1/2 order-1 md:order-0"
              initial={{ x: -100, opacity: 0 }}
              animate={
                isSecondRowInView
                  ? { x: 0, opacity: 1 }
                  : { x: -100, opacity: 0 }
              }
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <ul className="space-y-4">
                {features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="mt-1 text-green-600">
                      <CheckCircle size={22} />
                    </span>
                    <span className="text-gray-800 text-sm sm:text-base md:text-lg font-medium">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              className="w-full md:w-1/2 mt-6 md:mt-0 order-0 md:order-1"
              initial={{ x: 100, opacity: 0 }}
              animate={
                isSecondRowInView
                  ? { x: 0, opacity: 1 }
                  : { x: 100, opacity: 0 }
              }
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            >
              <div className="relative w-full h-40 xs:h-48 sm:h-56 md:h-72 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/assets/SliderImage02.JPG"
                  alt="Farmers Group"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FPOSection;
