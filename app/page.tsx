'use client'

import { useState, useRef } from "react";
import Navbar from "@/components/navbar";
import SliderOne from "@/components/ui/slider";
import { Spotlight } from "@/components/ui/spotlight";
import Image from "next/image";
import Link from "next/link";

import WebsiteDesign from "./website-design";
import GraphicDesign from "./graphic-design";
import Brands from "./brands";
import Services from "./services";
import FAQS from "./faq";
import { InfiniteMovingCardsDemo } from "./snippets/infinite-moving-card-snippet";

export default function Home() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };
  const closeDropdown = () => {
    setDropdownVisible(false);
  };

  const websiteDesignRef = useRef<HTMLDivElement>(null);
  const graphicDesignRef = useRef<HTMLDivElement>(null);
  const shopifyStoresRef = useRef<HTMLDivElement>(null);
  const brandsRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  const scrollToWebsiteDesign = () => {
    websiteDesignRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  const scrollToGraphicDesign = () => {
    graphicDesignRef.current?.scrollIntoView({ behavior: "smooth" });
  };


  const scrollToBrands = () => {
    brandsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Function to scroll to Services section
  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Navbar
        scrollToWebsiteDesign={scrollToWebsiteDesign}
        scrollToGraphicDesign={scrollToGraphicDesign}
        scrollToBrands={scrollToBrands}
        scrollToServices={scrollToServices}
      />

      <Spotlight className="hidden md:flex md:-top-40 left-80  " fill="neutral-50" />
      <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2">
        <div className="text-7xl pb-5 md:text-7xl px-6 text-left justify-left bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-100 bg-opacity-70">
        PREMIUM WEBSITES FOR <br className="text-red underline-offset-1"/> DENTISTS AND DENTAL PRACTIONERS
        </div>
        <p className="mt-4 text-2xl font-normal  text-neutral-300 max-w-lg text-left mx-auto px-4">
        Your practice deserves the best online presence. At Premier Dental Websites, we specialize in designing premium, custom websites tailored specifically for dentists. 
        Elevate your practice with a professional, user-friendly website that sets you apart from the competition.
        </p>

        <Link
          href={"/book"}
          className="cursor-pointer flex items-center justify-center border rounded-full w-48 p-2  mx-auto my-6 text-white "
        >
          Book a call
        </Link>

        <div className="w-full pt-20">
          <SliderOne />
        </div>
        <div ref={websiteDesignRef}>
          <WebsiteDesign />
        </div>
        <div ref={graphicDesignRef}>
          <GraphicDesign />
        </div>
        <div id ='services'>
        <Services />
        </div>
        <div ref={brandsRef}>
          <Brands />
        </div>
        <InfiniteMovingCardsDemo />
        <FAQS />
      </div>
    </div>
  );
}