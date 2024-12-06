import React from 'react'
import { NextSeo } from 'next-seo';

import ScholarshipCard from '../../../components/ScholarshipCard'
import Line from '../../../components/Line'


const schoolStudentsOrdinary = () => {
  const imgData = [
    '/img/activities/sponsorship/ordLvl/ol1.jpg',
    '/img/activities/sponsorship/ordLvl/ol2.jpg',
    '/img/activities/sponsorship/ordLvl/ol3.jpg',
    '/img/activities/sponsorship/ordLvl/ol4.jpg',
    '/img/activities/sponsorship/ordLvl/ol5.jpg',
    '/img/activities/sponsorship/ordLvl/ol6.jpg',
    '/img/activities/sponsorship/ordLvl/ol7.jpg',
    '/img/activities/sponsorship/ordLvl/ol8.jpg',
  ]
  return (
    <div>
      
      <NextSeo
        title="School Students Ordinary Level"
        titleTemplate='SJC87INITIATIVE | Sponsorship | %s'
        description="SJC87 INITIATIVE is not for profit Education Initiative was formed in 2009, mainly to improve the Education standard in the North and East of Sri Lanka. It operates with slightly different names in Australia, Canada, Sri Lanka, UK and USA."
        canonical='https://sjc87initiative.com'
      />

      {/* Banner */}
      <div className="banner relative h-96 w-full">
        <img src="/img/activities/banner.jpg" alt="Banner" className="h-full w-full object-cover brightness-50 rounded-b-3xl" />
      </div>

      <main>
        <div className="container">
          {/* Heading */}
          <div className="text-center my-16">
            <h2 className='text-2xl md:text-4xl xl:text-6xl font-extrabold text-orange-500 mb-5'>School Students up to GCE Ordinary Level</h2>
            <p className="text-xl md:text-2xl text-gray-500 font-light">Sponsorships may start at any stage from Grade 1 to GCE O/L. The family situation is the main criteria for the selection. </p>
            <p className="text-xl md:text-2xl text-gray-500 font-light">Annual Sponsorship amounts are AUD$400 / CAD$350 / GBP 200 / USD 275.</p>
            <p className="text-xl md:text-2xl text-gray-500 font-light">Students from these sponsorships are automatically carried over to the GCE Advanced Level Scholarships..</p>
          </div>

          {/* Image Gallery  */}
          <div className="my-16">
            <h2 className="text-md md:text-xl xl:text-2xl text-center mb-5 text-orange-500">Our Sponsors visiting their sponsored students AND Country Representatives visiting school students</h2>
            <div className="w-full flex justify-center items-center ">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 w-full">
                {
                  imgData.map(item => (
                    <div className="w-full h-full" key={item}>
                      <img src={item} alt="Ordinary level image" className="w-full md:h-[11.25rem] object-cover rounded-lg"/>
                    </div>

                  ))
                }
              </div>
            </div>
          </div>
          {/* Horizontal Line */}
          <Line />
          <ScholarshipCard />
        </div>
      </main>
    </div>
  )
}

export default schoolStudentsOrdinary