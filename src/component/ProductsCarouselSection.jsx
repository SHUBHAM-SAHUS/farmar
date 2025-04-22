import React from "react";
import ClientCarousel from "./ClientCarousel";

const productLogos = [
  {
    src: "/assets/product-images/Bhima-kiran-768x768.webp",
    alt: "Bhima Kiran",
  },
  { src: "/assets/product-images/Corinader-1.webp", alt: "Coriander" },
  { src: "/assets/product-images/Garma-Masala-1.webp", alt: "Garam Masala" },
  {
    src: "/assets/product-images/Green-Chilli-Powder-1.webp",
    alt: "Green Chilli Powder",
  },
  { src: "/assets/product-images/Red-Chilli-1.webp", alt: "Red Chilli" },
  { src: "/assets/product-images/Roger-768x768.webp", alt: "Roger" },
  {
    src: "/assets/product-images/TG-Dark-Red-768x768.webp",
    alt: "TG Dark Red",
  },
  { src: "/assets/product-images/TG-Pushpa-768x768.webp", alt: "TG Pushpa" },
  { src: "/assets/product-images/TG-Super-1-768x768.webp", alt: "TG Super 1" },
  { src: "/assets/product-images/TG-Super-768x768.webp", alt: "TG Super" },
  { src: "/assets/product-images/Turmuric-6.webp", alt: "Turmeric" },
];

const ProductsCarouselSection = () => {
  return (
    <ClientCarousel
      items={productLogos}
      showLabels={false}
      title="Our Products"
    />
  );
};

export default ProductsCarouselSection;
