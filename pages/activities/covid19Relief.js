import React from 'react'
import { NextSeo } from 'next-seo';


import Cards from '../../components/Cards'

const covid19Relief = () => {

  const imgData = [
    '/img/activities/covid19/c1.jpg',
    '/img/activities/covid19/c2.jpg',
    '/img/activities/covid19/c3.jpg',
    '/img/activities/covid19/c4.jpg',
    '/img/activities/covid19/c5.jpg',
    '/img/activities/covid19/c6.jpg',
    '/img/activities/covid19/c7.jpg',
    '/img/activities/covid19/c8.jpg',
    '/img/activities/covid19/c9.jpg',
    '/img/activities/covid19/c10.jpg',
    '/img/activities/covid19/c11.jpg',
    '/img/activities/covid19/c12.jpg',
    '/img/activities/covid19/c13.jpg',
  ]
  return (
    <div>
      <NextSeo
        title="Covid 19 Relief"
        titleTemplate='SJC87INITIATIVE | Activities | %s'
        description="SJC87 INITIATIVE is not for profit Education Initiative was formed in 2009, mainly to improve the Education standard in the North and East of Sri Lanka. It operates with slightly different names in Australia, Canada, Sri Lanka, UK and USA."
        canonical='https://sjc87initiative.com'
      />

      <main>
        {/* Banner */}
        <div className="banner relative h-96 w-full">
          <img src="/img/activities/covid19/banner.jpg" alt="Banner" className="h-full w-full object-cover brightness-50 rounded-b-3xl" />
          <div className="content absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            <h2 className="text-3xl md:text-6xl text-white font-extrabold mb-5">Covid 19 Relief</h2>
          </div>
        </div>
        
        {/* Main Data */}
        <div className="container">
          <div className="my-20">
            <h2 className="heading mt-5 text-center text-6xl font-bold relative text-orange-500">Covid 19 Relief</h2>
            <h3 className="text-3xl text-center text-gray-600 font-semibold">Our Covid-19 relief efforts can be divided into 3 areas:</h3>
          </div>

          <div className="content w-full md:w-2/3 mx-auto text-justify md:text-left space-y-10">
            <div className="one">
              <p className="text-xl text-gray-500 font-light mb-3">1. Emergency food relief to our sponsored students and their neighbourhoods.</p>
              <p className="text-xl text-gray-500 font-light ">We didn&apos;t actively collect funds, these were provided by our sponsors voluntarily We provided food packages to 1000 families in 5 education zones at a cost of Rs 1.7 million</p>
            </div>
            <div className="two">
              <p className="text-xl text-gray-500 font-light mb-3">2. Continuing Education while the institutions are shut. </p>
              <p className="text-xl text-gray-500 font-light">We worked with Zonal education departments of Kilinochchi, Vavuniya North, Mannaar, Madhu and Thenmaradchy to print subject materials and worksheets to all students in the Zone. This way students would have somewhat covered their syllabus when they get back to school after the lockdown</p>
            </div>
            <div className="three">
              <p className="text-xl text-gray-500 font-light">3. Preparing the schools for post covid environment</p>
              <p className="text-xl text-gray-500 font-light">(a) We worked with the Kilinochchi Education Zone to install 100 hand washing units at 35 schools so that students can keep up with the new hand sanitation rules brought into effect after the lockdown.</p>
              <p className="text-xl text-gray-500 font-light">(b) We worked with Mullaitivu Education Zone to make and distribute washable clothed Masks to all the students in the Zone.</p>
            </div>
          </div>

          {/* Horizontal Line */}
          <div className="relative my-10">
            <hr className=" bg-gray-500" />
            <div className="absolute h-5 w-5 bg-orange-500 rotate-45 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
          </div>

          {/* Image Gallery  */}
          <div className="w-full flex justify-center items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 w-full">
              {
                imgData.map(item => (
                  <div className="w-full h-full" key={item}>
                    <img src={item} alt="Image" className="w-full md:h-[180px] object-cover rounded-lg"/>
                  </div>

                ))
              }
            </div>
          </div>

          {/* Cards */}
          <div className="mt-24">
            <Cards />
          </div>
        </div>
      </main>
    </div>
  )
}

export default covid19Relief