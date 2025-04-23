"use client";

import Footer from "@/component/Footer";
import Header from "@/component/Header";

const AppLayout = ({children}) => {
  return (
    <>
      <Header />
      <div style={{ marginTop: "64px" }}>
        {children}
        <Footer />
      </div>
    </>
  );
};

export default AppLayout;
