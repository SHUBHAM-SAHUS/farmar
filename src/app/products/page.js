import ProductCard from "@/components/ProductCard";
import React from "react";

const cardData = [
  {
    title: "Organic Spices",
    content: "Premium quality whole and ground spices",
    backgroundImage: "/assets/Product01.webp",
  },
  {
    title: "Specialty Seeds",
    content: "High-yield agricultural & vegetable seeds",
    backgroundImage: "/assets/Product02.webp",
  },
  {
    title: "Hybrid Seeds",
    content: "Disease-resistant hybrid varieties",
    backgroundImage: "/assets/Product03.webp",
  },
  {
    title: "Aromatic Spices",
    content: "Rare and exotic spice collections",
    backgroundImage: "/assets/Product04.webp",
  },
];

const page = () => {
  return (
    <div className="pb-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-green-50 to-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-green-800 text-center mb-4">
            Our Product Categories
          </h1>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8">
            Discover our extensive range of premium quality seeds and spices,
            cultivated with care and processed to maintain their natural
            properties.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-green-400 mx-auto rounded-full" />
        </div>
      </div>

      {/* Cards Grid */}
      <section className="w-full pb-16 px-4 bg-gradient-to-b from-white via-green-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-green-700 mb-8 text-center">
            Explore Our Categories
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {cardData.map((card, idx) => (
              <ProductCard key={idx} {...card} />
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <p className="text-gray-600 max-w-2xl mx-auto">
              Each category represents our commitment to quality and
              sustainability. Select a category to explore our complete product
              range.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
