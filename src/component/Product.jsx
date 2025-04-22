"use client";
import React from "react";
// If you have shadcn/ui Card, Button, etc. import them here
// import { Card, CardContent } from "@/components/ui/card";
import SpaIcon from "@mui/icons-material/Spa"; // You can replace with Lucide or Heroicons if desired

const cardData = [
  {
    title: "Card 1 Title",
    content: "This is the content for card 1.",
    backgroundImage: "/assets/Product01.webp",
  },
  {
    title: "Card 2 Title",
    content: "This is the content for card 2.",
    backgroundImage: "/assets/Product02.webp",
  },
  {
    title: "Card 3 Title",
    content: "This is the content for card 3.",
    backgroundImage: "/assets/Product03.webp",
  },
  {
    title: "Card 4 Title",
    content: "This is the content for card 4.",
    backgroundImage: "/assets/Product04.webp",
  },
];

const Product = () => {
  return (
    <section className="w-full py-12 mb-8 px-2 bg-gradient-to-b from-white via-green-50 to-white">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-700 text-center mb-2">
          Our Products
        </h2>
        <div className="w-12 sm:w-16 h-1 rounded-full bg-gradient-to-r from-green-600 to-green-400 mb-8 sm:mb-12" />

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
          {cardData.map((card, idx) => (
            <div
              key={idx}
              className="relative rounded-2xl shadow-lg border border-green-100 bg-white overflow-hidden flex flex-col group transition-transform hover:scale-[1.03] hover:shadow-2xl"
            >
              {/* Image with overlay */}
              <div className="relative w-full h-48 sm:h-56 md:h-64">
                <img
                  src={card.backgroundImage}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent flex flex-col justify-end items-center p-4">
                  <SpaIcon
                    className="text-white mb-2"
                    style={{ fontSize: 36 }}
                  />
                  <div className="text-lg sm:text-xl font-bold text-white drop-shadow mb-1">
                    {card.title}
                  </div>
                  <div className="text-xs sm:text-sm text-white/90">
                    {card.content}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Product;
