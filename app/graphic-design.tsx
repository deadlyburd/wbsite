'use client'

import { motion } from "framer-motion";
import { ThreeDCardExample } from "./snippets/3d-card-snippet";


const GraphicDesign = () => {
    return ( <div>
       <div className=" p-4   mx-auto relative z-10  w-full pt-20 md:pt-32">
      <div className="text-5xl md:pb-8 md:text-7xl text-left bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-sky-200 bg-opacity-50">
      From Appointment Booking to Blockchain, We Have You Covered <br />
      </div>
      <p className="mt-4 text-xl font-normal  text-neutral-300 max-w-lg text-left mx-auto">
      Embrace the Future of Dentistry with Blockchain and NFTs, Blockchain technology offers unparalleled security and transparency for managing patient records. Our blockchain integration ensures that your patient data is immutable and securely stored. 
      </p>
      <div className="items-center md:flex justify-center md:mx-auto ">
      <motion.div
            initial={{ y: 100, opacity: 1 }}
            animate={{ y: 0, opacity: 1 }}
            className="px-10 md:px-0"
          >
           <ThreeDCardExample />
            </motion.div>
      </div>
        </div>
    </div>  );
}
 
export default GraphicDesign;