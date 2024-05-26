"use client";

import { useState } from "react";

import Link from "next/link";

import { PiCheckCircleFill } from "react-icons/pi";

import Navbar from "@/components/navbar";

const plans = [
  {
    index: 0,
    name: "Basic",
    price: " EUR 39 + Base",
    features: [
      "Custom Website Design",
      "Design + Development",
      "Basic Appointment Booking System",
      "1-3 days turnaround time",
    ],
    style:
      " rounded-3xl  py-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-50",
    description:
      "Perfect for smaller practices or those just getting started.",
    button: "Buy Now",
  },
  {
    index: 1,
    name: "Premium",
    price: "EUR 69 + Base",
    features: [
      "All features of the Basic Plan",
      "Full eCommerce Integration for Dental Products",
      "Comprehensive Analytics and Reporting",
      "24-hour support response time",
    ],
    style:
      " rounded-3xl  py-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-50",
    description:
      "Ideal for growing practices that need more advanced features.",
    button: "Buy Now",
  },
  {
    index: 2,
    name: "Professional",
    feature: "Contact Us",
    price: "Let's Talk!",
    features: [
      "All Professional Plan Features",
      "Custom E-commerce Solutions",
      "Full-featured Appointment Booking System",
      "Comprehensive Patient Data Management",
      "Blokchain Integration",
      "Advanced Backend Dashboard",
      "View Updates with our App ",
    ],
    style:
      " h-full rounded-3xl py-10 flex flex-col  bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-50  ",
    description:
      "Best for larger practices that require comprehensive solutions.",
    button: "Contact Us",
  },
];

const Pricing = () => {
  return ( 
    <div className="w-full  md:items-center md:justify-center
     bg-black/[0.96] antialiased 
     bg-grid-white/[0.02] relative overflow-hidden">

<Navbar
             scrollToWebsiteDesign={() => {}}
             scrollToGraphicDesign={() => {}}
             scrollToBrands={() => {}}
              scrollToServices={() => {}}
      />

<div className="flex items-center justify-center flex-col   ">
          <div className="text-5xl pb-10 md:pb-20 text-slate-300 px-6 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-500 bg-opacity-50">
            Simple Pricing <br /> Choose your plan
          </div>
          <div className="grid md:grid-cols-3 gap-6 px-6 md:w-4/5 2xl:w-3/4 cursor-pointer pb-20  items-start ">
            {plans.map((plan, index) => (
              <div
                key={plan.name}
                className="h-full flex flex-col justify-between border rounded-3xl px-6  "
              >
                <div className={plan.style}>
                  <div className="text-4xl flex  items-center font-medium">
                    {plan.name}
                    {/* render feature tag only for enterprise tab*/}
                    {plan.feature === "Contact Us" }
                  </div>
                  <div className="text-3xl pt-6 ">{plan.price}</div>
                  <div className="py-6">{plan.description}</div>

                  <ul>
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="text-lg  py-2 flex space-x-2 items-center"
                      >
                        {/* render checkmark only for enterprise tab*/}
                        {plan.feature === "Contact Us" ? (
                          <PiCheckCircleFill className="text-green-700 mr-2 text-xl" />
                        ) : (
                          <PiCheckCircleFill className="text-green-700 mr-2 text-xl" />
                        )}

                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={plan.button}>
                  {index === 0 && (
                    <Link
                      href="https://buy.stripe.com/aEUg0Jdktf8vbyUfYY"
                      className="rounded-3xl my-4  py-2 text-white w-full mx-auto items-center flex justify-center bg-gradient-to-r"
                    >
                      Buy Now
                    </Link>
                  )}
                    {index === 1 && (
                      <Link
                        
                        href="https://buy.stripe.com/aEU01L94d6BZ8mI9AB"  
                        className="rounded-3xl my-4  py-2 text-white w-full mx-auto items-center flex justify-center bg-gradient-to-r" 
                      >
                        Buy Now
                        </Link>
                    )}
                    {index === 2 && (

                          <Link
                          href="/contact"
                          className="rounded-3xl my-4  py-2 text-white w-full mx-auto items-center flex justify-center bg-gradient-to-r "
                        >
                          Contact Us
                        </Link>
                    )}  
                </div>
              </div>
            ))}
          </div>
        </div>

  </div>
  )
};

export default Pricing;
