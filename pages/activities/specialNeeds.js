import React from 'react'
import { NextSeo } from 'next-seo';


import Cards from '../../components/Cards'

const specialNeeds = () => {

  const imgData = [
    '/img/activities/specialNeeds/sn1.jpg',
    '/img/activities/specialNeeds/sn2.jpg',
    '/img/activities/specialNeeds/sn3.jpg',
    '/img/activities/specialNeeds/sn4.jpg',
    '/img/activities/specialNeeds/sn5.jpg',
    '/img/activities/specialNeeds/sn6.jpg',
    '/img/activities/specialNeeds/sn7.jpg',
    '/img/activities/specialNeeds/sn8.jpg',
    '/img/activities/specialNeeds/sn9.jpg',
  ]

  return (
    <div>
      <NextSeo
        title="Special Needs"
        titleTemplate='SJC87INITIATIVE | Activities | %s'
        description="SJC87 INITIATIVE is not for profit Education Initiative was formed in 2009, mainly to improve the Education standard in the North and East of Sri Lanka. It operates with slightly different names in Australia, Canada, Sri Lanka, UK and USA."
        canonical='https://sjc87initiative.com'
      />  
      <main>
        {/* Banner */}
        <div className="banner relative h-96 w-full">
          <img src="/img/activities/specialNeeds/banner.jpg" alt="Banner" className="h-full w-full object-cover brightness-50 rounded-b-3xl" />
        </div>

        {/* Contents */}
        <div className="container">
          {/* Heading */}
          <div className="text-center my-16">
            <h2 className='text-2xl md:text-4xl xl:text-6xl font-extrabold text-orange-500 mb-5'>Special Needs</h2>
            <p className="text-xl md:text-2xl text-gray-500 font-light">Special Needs Education Kilinochchi Education Zone has 21 special education units with more than 200 students with special needs. In 2019, SJC87 INITIATIVE sponsored Five autism experts from South Asian Autism Awareness Centre (SAAAC) in Toronto, Canada to do an initial assessment and to come up with a comprehensive plan for special needs education. The next step would be to implement the recommendations set by SAAAC.</p>
          </div>

          {/* Horizontal Line */}
          <div className="relative my-10">
            <hr className=" bg-gray-500" />
            <div className="absolute h-5 w-5 bg-orange-500 rotate-45 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
          </div>
          
          {/* Information */}
          <div className="info space-y-10">
            <div className="first grid grid-cols-1 md:grid-cols-2">
              <div className="head text-left md:text-right mr-10 font-extrabold text-orange text-2xl md:text-4xl text-gray-600 mb-5 md:mb-0">
                <h2>Challenges in <span className="text-orange-500">Special Need Education</span></h2>
              </div>
              <div className="text">
                <p className="text-gray-600 font-semibold text-xl">Following are some of the challenges in Special Needs Education in the Kilinochchi District identified by the SAAAC team</p>
                <p className="text-gray-500 text-lg font-light">1. Inadequate Teacher Training</p>
                <p className="text-gray-500 text-lg font-light">2. Lack of standardization / Uniformity</p>
                <p className="text-gray-500 text-lg font-light">3. Teaching with narrow conceptualization of intelligence</p>
                <p className="text-gray-500 text-lg font-light">4. Other challenges</p>
                <p className="text-gray-500 text-lg font-light">- Transportation challenges</p>
                <p className="text-gray-500 text-lg font-light">- Poverty and unemployment</p>
                <p className="text-gray-500 text-lg font-light">- Multiple children with disabilities</p>
                <p className="text-gray-500 text-lg font-light">- Comorbidities</p>
                <p className="text-gray-500 text-lg font-light">- Females with special needs</p>
              </div>
            </div>
            <div className="second grid grid-cols-1 md:grid-cols-2">
              <div className="head text-left md:text-right mr-10 font-extrabold text-orange text-2xl md:text-4xl text-gray-600 mb-5 md:mb-0">
                <h2><span className="text-orange-500">Recommendations</span> <br /> by  SAAAC</h2>
              </div>
              <div className="text">
                <p className="text-gray-600 font-semibold text-xl">Following are some of the recommendations by the SAAAC team:</p>
                <p className="text-gray-500 text-lg font-light">1. Curriculum development for special education teachers</p>
                <p className="text-gray-500 text-lg font-light">2. Educational Assistant Development</p>
                <p className="text-gray-500 text-lg font-light">3. Special Education policy development for the Kilinochchi District</p>
                <p className="text-gray-600 font-semibold text-xl">Currently we are doing the following:</p>
                <p className="text-gray-500 text-lg font-light">Providing teaching assistants to Special Needs Education classes where the student/ teacher ratio is high. Providing nutritious meals to the 200+ special needs students 3 times per week.</p>
              </div>
            </div>
          </div>

          {/* Image Gallery  */}
          <div className="w-full flex justify-center items-center my-16">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 w-full">
              {
                imgData.map(item => (
                  <div className="w-full h-full" key={item}>
                    <img src={item} alt="Special Need images" className="w-full md:h-[180px] object-cover rounded-lg"/>
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

export default specialNeeds