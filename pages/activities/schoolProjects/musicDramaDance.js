import React from 'react'
import { NextSeo } from 'next-seo';

import Cards from '../../../components/Cards'
import Line from '../../../components/Line'


const musicDramaDance = () => {
  const imgData = [
    '/img/activities/schoolProjects/music/m1.jpg',
    '/img/activities/schoolProjects/music/m2.jpg',
    '/img/activities/schoolProjects/music/m3.jpg',
  ]
  return (
    <div>
      <NextSeo
        title="Music Drama and Dance"
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
            <h2 className='text-2xl md:text-4xl xl:text-6xl font-extrabold text-orange-500 mb-5'>Co-Curricular Activities – Music / Drama / Dance</h2>
            <p className="text-xl md:text-2xl text-gray-500 font-light">We also on a request basis,  assist schools with musical instruments, dance costumes and jewelry and support cultural festivals.</p>
          </div>

          {/* Image Gallery  */}
          <div className="my-16">
            <div className="w-full flex justify-center items-center ">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 w-full">
                {
                  imgData.map(item => (
                    <div className="w-full h-full" key={item}>
                      <img src={item} alt="Music/Drama/Dance image" className="w-full md:h-[180px] object-cover rounded-lg"/>
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

export default musicDramaDance