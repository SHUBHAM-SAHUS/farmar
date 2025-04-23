"use client";
import React from "react";
import ProductCard from "@/components/ProductCard";

const cardData = [
  {
    title: "Card 1 Title",
    content: "This is the content for card 1.",
    backgroundImage: "/assets/Product01.webp",
    // link: "/products/1", // optional link
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
            <ProductCard key={idx} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Product;
