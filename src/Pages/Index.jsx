import React from "react";
import Header from "../ui/Header";
import Footer from "../ui/Footer";

import HeroSection from "../Home/HeroSection";
import Categery from "../Home/Catogery";
import WhyChooseUs from "../Home/WhyChooseUs";
import CTASection from "../Home/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        <HeroSection />
        <Categery />
        <WhyChooseUs />
        <CTASection />
      </main>

     
    </div>
  );
};

export default Index;
