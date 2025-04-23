"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { AspectRatio } from "./ui/aspect-ratio";

const ProductListingPage = ({ category, products }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="pb-16">
      <div className="bg-gradient-to-b from-green-50 via-green-100/50 to-white py-16 relative overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1 }}
          style={{
            backgroundImage: "url('/assets/pattern-bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <motion.div
          className="max-w-6xl mx-auto px-4 relative"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center"
          >
            {/* <span className="inline-block px-4 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-4">
              Explore Our Range
            </span> */}
            <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
              {category}
            </h1>
            <p className="text-green-600/80 text-lg mb-6 max-w-2xl mx-auto">
              Discover our premium selection of {category.toLowerCase()},
              sourced directly from farmers
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-green-400 mx-auto rounded-full" />
          </motion.div>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          className="absolute left-0 top-1/2 -translate-y-1/2"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 0.1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-green-500/10" />
        </motion.div>
        <motion.div
          className="absolute right-0 top-1/4"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 0.1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-green-500/10" />
        </motion.div>
      </div>

      <section className="max-w-6xl mx-auto px-4 py-12">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {products.map((product, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border border-green-100"
            >
              <AspectRatio ratio={4 / 3} className="relative bg-slate-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-4 hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={idx < 6}
                />
              </AspectRatio>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-green-700 mb-2">
                  {product.name}
                </h3>
                <p className="text-green-600 font-medium mb-4 text-sm">
                  {product.category}
                </p>
                <p className="text-gray-600 text-sm md:text-base">
                  {product.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default ProductListingPage;
