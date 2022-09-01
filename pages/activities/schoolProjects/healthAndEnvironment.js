import React from 'react'
import { NextSeo } from 'next-seo';

import Cards from '../../../components/Cards'
import Line from '../../../components/Line'


const healthAndEnvironment = () => {
  const healthImg = [
    '/img/activities/schoolProjects/healthEnvironment/h1.jpg',
    '/img/activities/schoolProjects/healthEnvironment/h2.jpg',
    '/img/activities/schoolProjects/healthEnvironment/h3.jpg',
    '/img/activities/schoolProjects/healthEnvironment/h4.jpg',
    '/img/activities/schoolProjects/healthEnvironment/h5.jpg',
    '/img/activities/schoolProjects/healthEnvironment/h6.jpg',
    '/img/activities/schoolProjects/healthEnvironment/h7.jpg',
    '/img/activities/schoolProjects/healthEnvironment/h8.jpg',
    '/img/activities/schoolProjects/healthEnvironment/h9.jpg',
    '/img/activities/schoolProjects/healthEnvironment/h10.jpg',
    '/img/activities/schoolProjects/healthEnvironment/h11.jpg',
    '/img/activities/schoolProjects/healthEnvironment/h12.jpg',
    '/img/activities/schoolProjects/healthEnvironment/h13.jpg',
  ]
  const envImg = [
    '/img/activities/schoolProjects/healthEnvironment/e1.jpg',
    '/img/activities/schoolProjects/healthEnvironment/e2.jpg',
    '/img/activities/schoolProjects/healthEnvironment/e3.jpg',
    '/img/activities/schoolProjects/healthEnvironment/e4.jpg',
    '/img/activities/schoolProjects/healthEnvironment/e5.jpg',
    '/img/activities/schoolProjects/healthEnvironment/e6.jpg',
  ]
  return (
    <div>
      <NextSeo
        title="Health and Environment"
        titleTemplate='SJC87INITIATIVE | School Projects | %s'
        description="SJC87 INITIATIVE is not for profit Education Initiative was formed in 2009, mainly to improve the Education standard in the North and East of Sri Lanka. It operates with slightly different names in Australia, Canada, Sri Lanka, UK and USA."
        canonical='https://sjc87initiative.com'
      />
      <main>
        {/* Banner */}
        <div className="banner relative h-96 w-full">
          <img src="/img/activities/schoolProjects/engLangPro/banner.JPG" alt="Banner" className="h-full w-full object-cover brightness-50 rounded-b-3xl" />
        </div>

        <div className="container">
          {/* Heading */}
          <div className="text-center my-16">
            <h2 className='text-2xl md:text-4xl xl:text-6xl font-extrabold text-orange-500 mb-5'>Health and Environment</h2>
            <p className="text-xl md:text-2xl text-gray-500 font-light">We have worked with the Red Cross in getting schools proper First Aid Kits. Also, in collaboration with Environmental NGOs, we work with schools to plant tall mature trees, which would have long term benefits.</p>
          </div>

          {/* Image Gallery  */}
          <div className="my-16">
            <h2 className='text-xl md:text-2xl xl:text-4xl font-extrabold text-orange-500 mb-5'>Health</h2>
            <div className="w-full flex justify-center items-center ">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 w-full">
                {
                  healthImg.map(item => (
                    <div className="w-full h-full" key={item}>
                      <img src={item} alt="Health image" className="w-full md:h-[180px] object-cover rounded-lg"/>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>

          {/* Image Gallery  */}
          <div className="my-16">
            <h2 className='text-xl md:text-2xl xl:text-4xl font-extrabold text-orange-500 mb-5'>Environment</h2>
            <div className="w-full flex justify-center items-center ">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 w-full">
                {
                  envImg.map(item => (
                    <div className="w-full h-full" key={item}>
                      <img src={item} alt="Environment image" className="w-full md:h-[180px] object-cover rounded-lg"/>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>

          {/* Horizontal Line */}
          <Line />

          {/* Card */}
          <Cards />
        </div>
      </main>
    </div>
  )
}

export default healthAndEnvironment