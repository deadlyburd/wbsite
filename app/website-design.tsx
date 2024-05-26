'use client'

import Image from "next/image";

const WebsiteDesign = () => {
    return (   
    <div className="text-white">
 <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2">
      <div className="text-5xl  md:text-7xl text-left bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-sky-200 bg-opacity-50">
              WEBSITE DESIGN <br /> THAT WORKS
      </div>
      <p className="mt-4 text-xl font-italiac  text-neutral-300 max-w-lg text-Left mx-auto px-4">
      Custom-designed websites that reflect the unique personality and values of your dental practice
        </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-10">
    <div className="grid gap-4">
        <div>
            <Image
            width={500}
            height={500}
            priority
            className="h-auto max-w-full rounded-lg" 
            src="https://i.pinimg.com/564x/65/2a/10/652a10ca91b076044dc062fece55fd7b.jpg" alt=""/>
        </div>
        <div>
            <Image
            width={500}
            height={500}
            priority
            className="h-auto max-w-full rounded-lg" 
            src="https://cdn.dribbble.com/userupload/14761600/file/original-3b7fbdb8e0680d9ef6acd21df53f6389.png?resize=600x393" alt=""/>
        </div>
        <div>
            <Image
            width={500}
            height={500}
            priority
            className="h-auto max-w-full rounded-lg" 
            src="https://i.pinimg.com/564x/02/64/d1/0264d16c6e171ec93dfde1da1d600a2a.jpg" alt=""/>
        </div>
    </div>
    <div className="grid gap-4">
        <div>
            <Image
            width={500}
            height={500}
            priority
            className="h-auto max-w-full rounded-lg" 
            src="https://i.pinimg.com/564x/88/95/39/8895393df6cd534e443ccb96f1994e05.jpg" alt=""/>
        </div>
        <div>
            <Image
            width={500}
            height={500}
            priority
            className="h-auto max-w-full rounded-lg" 
            src="https://i.pinimg.com/736x/0f/fd/01/0ffd01d5459649db9758123481da3cbf.jpg" alt=""/>
        </div>
        <div>
            <Image
            width={500}
            height={500}
            priority
            className="h-auto max-w-full rounded-lg" 
            src="https://i.pinimg.com/564x/f1/9e/3a/f19e3a6091a2f46c041eb55a1464321f.jpg" alt=""/>
        </div>
    </div>
    <div className="grid gap-4">
        <div>
            <Image
            width={500}
            height={500}
            priority
            className="h-auto max-w-full rounded-lg" 
            src="https://i.pinimg.com/736x/41/81/62/418162c56fefed2f68c7bcfc85a23d0b.jpg" alt=""/>
        </div>
        <div>
            <Image
            width={500}
            height={500}
            priority
            className="h-auto max-w-full rounded-lg" 
            src="https://i.pinimg.com/564x/c0/11/f8/c011f81da21919e058df2f22cfa46a7a.jpg" alt=""/>
        </div>
        <div>
            <Image
            width={500}
            height={500}
            priority
            className="h-auto max-w-full rounded-lg" 
            src="https://i.pinimg.com/564x/28/08/18/2808184f2f9a1d7a90802cc3660f6457.jpg" alt=""/>
        </div>
    </div>
    <div className="grid gap-4">
        <div>
            <Image
            width={500}
            height={500}
            priority
            className="h-auto max-w-full rounded-lg" 
            src="https://i.pinimg.com/564x/2d/19/ea/2d19ea120d7642709ababd51e03c698d.jpg" alt=""/>
        </div>
        <div>
            <Image
            width={500}
            height={500}
            priority
            className="h-auto max-w-full rounded-lg" 
            src="https://i.pinimg.com/564x/41/3a/47/413a47e60c463cc1aa3963c0acd091ad.jpg" alt=""/>
        </div>
        <div>
            <Image
            width={500}
            height={500}
            priority
            className="h-auto max-w-full rounded-lg" 
            src="https://i.pinimg.com/564x/85/09/e4/8509e4f6ac070f0f8b2de89b8b6c332a.jpg" alt=""/>
        </div>
    </div>
    </div>
    </div> );
}
 
export default WebsiteDesign;