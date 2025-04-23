import React from "react";
import DashboardSlider from "@/component/DashboardSlider";
import WelcomeBoard from "@/component/WelcomeBoard";
import InfoSection from "@/component/InfoSection";
import OurPillars from "@/component/OurPillars";
import Product from "@/component/Product";
import Footer from "@/component/Footer";
import ClientsCarouselSection from "@/component/ClientsCarouselSection";
import CertificationsCarouselSection from "@/component/CertificationsCarouselSection";
import ProductsCarouselSection from "@/component/ProductsCarouselSection";

const HomePage = () => {
  return (
    <>
      <DashboardSlider />
      <WelcomeBoard />
      <InfoSection />
      <ClientsCarouselSection />
      <OurPillars />
      <Product />
      <CertificationsCarouselSection />
      <ProductsCarouselSection />
    </>
  );
};

export default HomePage;
