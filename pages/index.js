import Head from "next/head";
import Link from "next/link";
import { NextSeo } from "next-seo";
// Swiper Js Imports
import { Navigation, Pagination, Autoplay, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import Cards from "../components/Cards";

export default function Home() {
  const imgLinks = [
    "/img/slider/slider1.jpg",
    "/img/slider/slider2.jpg",
    "/img/slider/slider3.jpg",
    "/img/slider/slider4.jpg",
    "/img/slider/slider5.jpg",
  ];
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NextSeo
        title="Home"
        titleTemplate="SJC87INITIATIVE | %s"
        description="SJC87 INITIATIVE is not for profit Education Initiative was formed in 2009, mainly to improve the Education standard in the North and East of Sri Lanka. It operates with slightly different names in Australia, Canada, Sri Lanka, UK and USA."
        canonical="https://sjc87initiative.com"
      />

      <main className="w-full">
        {/* The Slider */}
        <div className="w-full mt-12 md:mt-0 -z-10 ">
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            loop
            autoplay={{ delay: 5000 }}
          >
            {imgLinks.map((l) => (
              <SwiperSlide key={l}>
                <img
                  src={l}
                  alt="Slider Image"
                  className="w-full h-[300px] md:h-[400px] 2xl:h-[600px] object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Info about the school after the banner */}
        <div className="info py-5 container">
          <p className="text-center text-xl font-semibold text-gray-500 w-full md:w-3/4 mx-auto">
            SJC87 INITIATIVE was formed in 2009, with the intention of improving
            the standard of Education in the under resourced areas of Sri Lanka
          </p>
        </div>

        {/* The main container of the contets */}
        <div className="container">
          {/* First section with donation button */}
          <div className="content mt-10 flex flex-col md:flex-row justify-center items-center w-full pb-10">
            <div className="img md:w-1/2">
              <img
                src="/img/index/index1.png"
                alt="Index 1"
                className="object-cover"
              />
            </div>
            <div className="text md:w-1/2">
              <h2 className="text-4xl text-center md:text-left md:text-4xl xl:text-6xl font-bold text-gray-600 mt-5 md:mt-0">
                Your <span className="text-orange-500">Support</span> Makes a
                Difference
              </h2>
              <p className="text-xl pt-5 pb-10 text-gray-500 text-center md:text-left md:w-2/3">
                Helping young people grow into healthy, educated and productive
                adults.
              </p>
              <Link href="/donation">
                <a className="text-xl py-2 px-4 border border-orange-500 text-orange-500 font-semibold rounded md:w-2/5 flex justify-center items-center">
                  Donations
                </a>
              </Link>
            </div>
          </div>

          {/* Our Mission Section */}
          <div className="content mt-10 flex flex-col md:flex-row-reverse justify-center items-center w-full pb-10">
            <div className="img md:w-1/2 flex justify-center items-center">
              <img
                src="/img/index/index2.JPG"
                alt="Index 2"
                className="object-cover h-[400px] w-4/5 rounded shadow-md"
              />
            </div>
            <div className="text md:w-1/2">
              <h2 className="text-4xl text-center md:text-left md:text-4xl xl:text-6xl font-bold text-gray-600 mt-5 md:mt-0">
                Our <span className="text-orange-500">Mission</span>
              </h2>
              <p className="text-xl pt-5 pb-10 text-gray-500 text-center md:text-left md:w-4/5">
                Our mission is to improve and create educational excellence
                together with character development for school students in the
                North and East of Sri Lanka.
              </p>
            </div>
          </div>

          {/* Our Focus Section */}
          <div className="content mt-10 flex flex-col md:flex-row justify-center items-center w-full py-10">
            <div className="img md:w-1/2 flex justify-center items-center">
              <img
                src="/img/slider/slider2.jpg"
                alt="Index 3"
                className="object-cover h-[400px] w-4/5 rounded shadow-md"
              />
            </div>
            <div className="text md:w-1/2">
              <h2 className="text-4xl text-center md:text-left md:text-4xl xl:text-6xl font-bold text-gray-600 mt-5 md:mt-0">
                Our <span className="text-orange-500">Focus</span>
              </h2>
              <p className="text-xl pt-5 pb-10 text-gray-500 text-center md:text-left md:w-4/5">
                We help children break the cycle of poverty by empowering them
                to dream, aspire and achieve through Education.
              </p>
            </div>
          </div>
        </div>

        {/* The Card Group */}
        <div className="container mt-10">
          <Cards />
        </div>
      </main>
    </div>
  );
}
