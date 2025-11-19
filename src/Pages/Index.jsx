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
      
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-1 w-full overflow-hidden">
        <section className="w-full">
          <HeroSection />
        </section>

        <section className="w-full    ">
          <Categery />
        </section>

        <section className="w-full    ">
          <WhyChooseUs />
        </section>

        <section className="w-full   ">
          <CTASection />
        </section>
      </main>

      {/* Footer */}
      
    </div>
  );
};

export default Index;
