import React from "react";
import { Routes, Route } from "react-router-dom";

/* Layout components */
import Header from "./ui/Header";
import Footer from "./ui/Footer";

/* Pages */
import Index from "./Pages";
import About from "./Pages/About";
import Service from "./Pages/Service";
import Product from "./Pages/Product";
import Project from "./Pages/Project";
import HireLabour from "./Pages/HireLAbour";
import Contact from "./Pages/Context";
import Quote from "./Pages/Qutoe";

/* Simple scroll-to-top on route change (optional improvement) */
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Context from "./Pages/Context";
import Qutoe from "./Pages/Qutoe";

const ScrollTop = () => {
  const { pathname } = useLocation();
  useEffect(() => window.scrollTo(0, 0), [pathname]);
  return null;
};

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <ScrollTop />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/Service" element={<Service />} />
          <Route path="/product" element={<Product />} />
          <Route path="/project" element={<Project />} />
          <Route path="/hire-labour" element={<HireLabour />} />
          <Route path="/contact" element={<Context />} />
        
          {/* 404 fallback */}
          <Route path="*" element={<Index />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;
