"use client";

import React, { useState, useEffect } from "react";
import { useInView } from "framer-motion";
import {
  Users,
  Tractor,
  Mountain,
  Globe,
  Smile,
  CalendarCheck,
} from "lucide-react";

const statsData = [
  { icon: Users, number: "7,000+", label: "Registered Farmers" },
  { icon: Tractor, number: "15,000+", label: "Acres of Land" },
  { icon: Mountain, number: "180+", label: "Villages Covered" },
  { icon: Globe, number: "15+", label: "Countries Served" },
  { icon: Smile, number: "100+", label: "Customers Worldwide" },
  { icon: CalendarCheck, number: "3+", label: "Years in Industry" },
];

const useCounter = (end, duration = 2000) => {
  const [count, setCount] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (!isAnimating) return;

    const startTime = Date.now();
    const endValue = parseInt(end.replace(/\D/g, ""));

    const timer = setInterval(() => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);

      if (progress === 1) {
        setCount(endValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(endValue * progress));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration, isAnimating]);

  return [count, setIsAnimating];
};

const WelcomeBoard = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.32, // This means 20% of the element must be in view
  });

  return (
    <section className="w-full py-8 px-2 bg-gradient-to-b from-white via-green-50 to-white">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-700 text-center mb-2">
          Welcome to our Website
        </h2>
        <div className="w-12 sm:w-16 h-1 rounded-full bg-gradient-to-r from-green-600 to-green-400 mb-8 sm:mb-12" />

        {/* Stats Grid */}
        <div
          ref={ref}
          className="flex flex-wrap justify-center gap-4 md:gap-8 lg:gap-12 w-full"
        >
          {statsData.map((item, idx) => {
            const [count, setIsAnimating] = useCounter(item.number);

            React.useEffect(() => {
              if (isInView) {
                setIsAnimating(true);
              }
            }, [isInView, setIsAnimating]);

            return (
              <div
                key={item.label}
                className="flex flex-col items-center justify-center bg-white/70 backdrop-blur-md rounded-2xl shadow-lg border border-green-100 p-5 sm:p-6 hover:scale-105 transition-transform w-56 sm:w-48 md:w-56 lg:w-64 xl:w-72"
              >
                <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br from-green-600 to-green-400 shadow text-white mb-3 sm:mb-4">
                  {React.createElement(item.icon, {
                    size: 32,
                    className: "sm:size-36",
                  })}
                </div>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-green-700 mb-1">
                  {count}
                  {item.number.includes("+") ? "+" : ""}
                </div>
                <div className="text-sm sm:text-base md:text-lg font-semibold text-gray-700 text-center">
                  {item.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WelcomeBoard;
