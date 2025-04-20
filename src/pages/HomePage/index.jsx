import React from 'react';
import DashboardSlider from '@/component/DashboardSlider';
import WelcomeBoard from '@/component/WelcomeBoard';
import InfoSection from '@/component/InfoSection';
import OurPillars from '@/component/OurPillars';
import Product from '@/component/Product';
import Footer from '@/component/Footer';

const HomePage = () => {
  return (
    <>
      <DashboardSlider />
      <WelcomeBoard />
      <InfoSection />
      <OurPillars />
      <Product />
      <Footer />
    </>
  );
};

export default HomePage;
