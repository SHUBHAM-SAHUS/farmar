"use client";
import ProductCard from "@/components/ProductCard";
import { motion } from "framer-motion";
import React from "react";

const cardData = [
  {
    title: "Whole Spices",
    content: "Premium quality whole spices sourced directly from farmers",
    backgroundImage: "/assets/Product01.webp",
    link: "/products/whole-spices",
  },
  {
    title: "FMCG",
    content: "Fast-moving consumer goods for your daily needs",
    backgroundImage: "/assets/Product02.webp",
    link: "/products/fmcg",
  },
  {
    title: "Cereals & Pulses",
    content: "Nutritious grains and pulses for your healthy lifestyle",
    backgroundImage: "/assets/Product03.webp",
    link: "/products/cereals-pulses",
  },
  {
    title: "Seeds",
    content: "High-quality seeds for cooking and agriculture",
    backgroundImage: "/assets/Product04.webp",
    link: "/products/seeds",
  },
];

const page = () => {
  return (
    <div className="pb-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-green-50 to-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-green-800 text-center mb-4"
          >
            Our Product Categories
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-gray-600 text-center max-w-2xl mx-auto mb-8"
          >
            Discover our extensive range of premium quality seeds and spices,
            cultivated with care and processed to maintain their natural
            properties.
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="w-24 h-1 bg-gradient-to-r from-green-600 to-green-400 mx-auto rounded-full"
          />
        </div>
      </div>

      {/* Cards Grid */}
      <section className="w-full pb-16 px-4 bg-gradient-to-b from-white via-green-50 to-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-3xl font-semibold text-green-700 mb-8 text-center"
          >
            Explore Our Categories
          </motion.h2>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {cardData.map((card, idx) => (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5 }}
              >
                <ProductCard {...card} />
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="mt-16 text-center"
          >
            <p className="text-gray-600 max-w-2xl mx-auto">
              Each category represents our commitment to quality and
              sustainability. Select a category to explore our complete product
              range.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default page;
