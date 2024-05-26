"use client";

import Slider from "react-slick";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderOne = () => {
  const isMediumScreen = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isSmallScreen = useMediaQuery({ maxWidth: 767 });

  const settings = {
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 1000,
    className: "w-full mx-auto cursor-pointer center-mode",
  };

  if (isMediumScreen) {
    settings.slidesToShow = 1.67;
  } else if (isSmallScreen) {
    settings.slidesToShow = 1;
  }

  return (
    <div>
      <Slider {...settings}>
        <>
          <div className="rounded-md px-2 md:p-10">
            <Image
              priority
              src="/images/original-93576bfe2466d690a512e875717a4db0.jpg"
              alt="logo"
              width={1000}
              height={500}
              className="
                  rounded-2xl
                      "
            />
          </div>
        </>
              <>
          <div className="rounded-md px-2 md:p-10">
            <Image
              priority
              src="/images/original-9e467188d6a26c20217cd04f2c205564.png"
              alt="logo"
              width={1000}
              height={500}
              className="
                  rounded-2xl
                      "
            />
          </div>
        </>

        <>
          <div className="rounded-md px-2 md:p-10">
            <Image
              priority
              src="/images/original-3f9ab1a0e3353e566de8a34d42e9de58.jpg"
              alt="logo"
              width={1000}
              height={500}
              className="
                  rounded-2xl 
                      "
            />
          </div>
        </>

        <>
          <div className="rounded-md px-2 md:p-10">
            <Image
              priority
              src="/images/original-1933a261b087e7cef473b150a44045ee.png"
              alt="logo"
              width={1000}
              height={500}
              className="
                  rounded-2xl 
                      "
            />
          </div>
        </>

        <>
          <div className="rounded-md px-2 md:p-10">
            <Image
              priority
              src="/images/original-9c4c88e96b6b95c7e10d4dbb95f7b1ed.png"
              alt="logo"
              width={1000}
              height={500}
              className="
                  rounded-2xl 
                      "
            />
          </div>
        </>

        <>
          <div className="rounded-md px-2 md:p-10">
            <Image
              priority
              src="/images/original-12fc978d58231c00f76a99a0f2b2930a.jpg"
              alt="logo"
              width={1000}
              height={500}
              className="
                  rounded-2xl 
                      "
            />
          </div>
        </>
      </Slider>
    </div>
  );
};

export default SliderOne;
