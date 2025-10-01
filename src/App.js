import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import Main from "./components/main";
import CustomNavbar from "./components/navbar";
import FooterComponent from "./components/footer";
import FunctionalMain from "./components/functional Ing/functionalMain";
import Lenis from "@studio-freight/lenis";
import ProductMain from "./components/product/productMain";
import ProductViewHero from "./components/product/productsView/productViewMain";
import FaqsMain from "./components/faqs/faqsMain";
import AboutMain from "./components/about/aboutMain";
import Error from "./components/404";
import PrivacyPolicy from "./components/privacyPolicy/PrivacyPolicyMain";

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  return null;
}

function AppContent() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (location.pathname == "/") {
      const interval = setTimeout(() => {
        setIsLoading(false);
      }, 5000);
      return () => clearTimeout(interval);
    } else {
      setIsLoading(false);
    }
  }, [location.pathname]);

  useEffect(() => {
    if (!isLoading) {
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        smoothTouch: false,
      });

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);

      return () => {
        lenis.destroy();
      };
    }
  }, [isLoading]);

  return (
    <>
      <ScrollToTop />
      <CustomNavbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/functional-ingredients" element={<FunctionalMain />} />
        <Route path="/products" element={<ProductMain />} />
        <Route path="/products/:id" element={<ProductViewHero />} />
        <Route path="/faqs" element={<FaqsMain />} />
        <Route path="/about" element={<AboutMain />} />

        <Route path="/policy" element={<PrivacyPolicy />} />
        <Route path="*" element={<Error />} />
      </Routes>
      {!isLoading && <FooterComponent />}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
