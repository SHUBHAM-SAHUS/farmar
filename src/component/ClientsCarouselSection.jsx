import React from "react";
import ClientCarousel from "./ClientCarousel";

const clientLogos = [
  { src: "/assets/client-images/256px-DeHaat.webp", alt: "DeHaat" },
  { src: "/assets/client-images/avtlogo.webp", alt: "AVT" },
  { src: "/assets/client-images/big-haat.webp", alt: "BigHaat" },
  { src: "/assets/client-images/ju.webp", alt: "JU" },
  { src: "/assets/client-images/mahindra-summit.webp", alt: "Mahindra Summit" },
  { src: "/assets/client-images/NABARD-Color-1.webp", alt: "NABARD" },
  { src: "/assets/client-images/nanobee.webp", alt: "Nanobee" },
  { src: "/assets/client-images/pngwing.com-2.webp", alt: "Pngwing" },
  { src: "/assets/client-images/rupiya_official_logo.webp", alt: "Rupiya" },
  {
    src: "/assets/client-images/s-m-j-spices-exporters.webp",
    alt: "SMJ Spices Exporters",
  },
  { src: "/assets/client-images/synthe.webp", alt: "Synthite" },
  // Add more as needed
];

const ClientsCarouselSection = () => {
  return (
    <ClientCarousel
      items={clientLogos}
      showLabels={false}
      title="Our Clients"
    />
  );
};

export default ClientsCarouselSection;
