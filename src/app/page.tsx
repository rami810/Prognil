"use client";

import { useRef } from "react";
import Aboutus from "./components/aboutus";
import FAQ from "./components/FAQ";
import Footer from "./components/footer";
import Order from "./components/order";
import Home from "./components/home";

export default function LandingPage() {
  const faqRef = useRef<HTMLDivElement>(null);
  const scrollToFaq = () => {
    faqRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Home />
      <Aboutus onFaqClick={scrollToFaq} mode="scrol"/>
      <Order />
      <div ref={faqRef}>
        <FAQ />
      </div>
      <Footer />
    </>
  );
}
