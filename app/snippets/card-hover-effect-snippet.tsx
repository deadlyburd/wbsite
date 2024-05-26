import { HoverEffect } from "@/components/ui/card-hover-effect";
import { PiAppStoreLogo, PiHeadsetFill, PiLock, PiMegaphone, PiMonitor, PiStorefront } from "react-icons/pi";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
    {
        icon : <div className="bg-blue-100 p-4 rounded-full"><PiMonitor className="w-8 h-8 text-blue-600" /></div>,
        title: "Website Design",
        description:
          "We build fully responsive websites that look great on all devices. Our websites are designed to convert visitors into customers.",
      
      },
      {
        icon : <div className="bg-blue-100 p-4 rounded-full"><PiStorefront className="w-8 h-8 text-blue-600" /></div>,
        title: "E-commerce Store",
        description:
          "Expand your services by selling dental products directly from your website. Our e-commerce solutions make it easy for your patients to find and purchase the products they need.",
       
      },
      {
        icon : <div className="bg-blue-100 p-4 rounded-full"><PiLock className="w-8 h-8 text-blue-600" /></div>,
        title: "Appointment Booking System",
        description:
          "Simplify your appointment scheduling with our integrated booking system. Allow patients to book their appointments online at their convenience.",
      
      },
      {
        icon : <div className="bg-blue-100 p-4 rounded-full"><PiMegaphone className="w-8 h-8 text-blue-600" /></div>,
        title: "Social Media",
        description:
          "We offer social media management and ad creation services. We can help you grow your social media presence and reach new customers.",
      
      },
      {
        icon : <div className="bg-blue-100 p-4 rounded-full"><PiAppStoreLogo className="w-8 h-8 text-blue-600" /></div>,
        title: "App Development",
        description:
          "Our experienced team is working on mainting a ecosystem for all the dentists out there.",
      
      },
      {
        icon : <div className="bg-blue-100 p-4 rounded-full"><PiHeadsetFill className="w-8 h-8 text-blue-600" /></div>,
        title: "Patient Data Management",
        description:
          "Keep your patient information organized and secure with our patient data management system. Available under different plans to suit your practice’s needs.",
     
      },
];
