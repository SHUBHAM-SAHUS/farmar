import React from "react";
import ClientCarousel from "./ClientCarousel";

const licenceLogo = [
  { src: "/assets/licences-images/alpine.webp", alt: "Alpine" },
  { src: "/assets/licences-images/apeda-seexlogo.com.webp", alt: "APEDA" },
  { src: "/assets/licences-images/covestro1-1.webp", alt: "Covestro" },
  { src: "/assets/licences-images/dgft.webp", alt: "DGFT" },
  { src: "/assets/licences-images/ecgc.webp", alt: "ECGC" },
  { src: "/assets/licences-images/fir.webp", alt: "FIR" },
  { src: "/assets/licences-images/fssai-logo.webp", alt: "FSSAI" },
  {
    src: "/assets/licences-images/iso-9001-iso-22000.webp",
    alt: "ISO 9001 & 22000",
  },
  { src: "/assets/licences-images/ondc.webp", alt: "ONDC" },
  { src: "/assets/licences-images/pngwing.com-3.webp", alt: "Certificate 1" },
  { src: "/assets/licences-images/pngwing.com-4.webp", alt: "Certificate 2" },
  {
    src: "/assets/licences-images/Spices_Board_of_India_Logo.webp",
    alt: "Spices Board of India",
  },
  { src: "/assets/licences-images/Trademark.webp", alt: "Trademark" },
];

const CertificationsCarouselSection = () => {
  return (
    <ClientCarousel
      items={licenceLogo}
      showLabels={false}
      title="Our Certifications"
    />
  );
};

export default CertificationsCarouselSection;
