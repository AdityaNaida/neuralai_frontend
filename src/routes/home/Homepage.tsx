import Footer from "@/components/common/Footer";
import AboutMe from "@/components/home/AboutMe";
import Hero from "@/components/home/Hero";
import WhatDo from "@/components/home/WhatDo";
import { useRef } from "react";

export default function Homepage() {
  const aboutRef = useRef<HTMLDivElement | null>(null);

  const scrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="">
      <Hero viewAboutFnc={scrollToAbout} />
      <WhatDo />
      <AboutMe aboutRef={aboutRef} />
      <Footer />
    </div>
  );
}
