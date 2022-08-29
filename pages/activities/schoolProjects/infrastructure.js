import React from 'react'
import Head from 'next/head'
import Cards from '../../../components/Cards'
import Line from '../../../components/Line'


const infrastructure = () => {
  const imgData = [
    '/img/activities/schoolProjects/infrastructure/i1.jpg',
    '/img/activities/schoolProjects/infrastructure/i2.jpg',
    '/img/activities/schoolProjects/infrastructure/i3.jpg',
    '/img/activities/schoolProjects/infrastructure/i4.jpg',
    '/img/activities/schoolProjects/infrastructure/i5.jpeg',
    '/img/activities/schoolProjects/infrastructure/i6.jpg',
    '/img/activities/schoolProjects/infrastructure/i7.jpg',
  ]
  return (
    <div>
      <Head>
        <title>Infrastructure</title>
      </Head>

      <main>
        {/* Banner */}
        <div className="banner relative h-96 w-full">
          <img src="/img/activities/schoolProjects/engLangPro/banner.JPG" alt="Banner" className="h-full w-full object-cover brightness-50 rounded-b-3xl" />
        </div>

        <div className="container">
          {/* Heading */}
          <div className="text-center my-16">
            <h2 className='text-2xl md:text-4xl xl:text-6xl font-extrabold text-orange-500 mb-5'>Infrastructure</h2>
            <p className="text-xl md:text-2xl text-gray-500 font-light">Better facilities at schools make student learning a better experience. Following are examples of some of the infrastructure facilities that we provided on a request basis:</p>
          </div>

          <div className="list">
            <ul className='list-disc ml-8'>
              <li className="text-xl md:text-2xl text-gray-500 font-light">Installation of Smart Class Rooms - <span className="italic">Uruthirapuram Maha Vidyalayam, Konavil Maha Vidyalayam, Konavil Gandhi Primary, Tharmapuram No 1 GTMS</span></li>

              <li className="text-xl md:text-2xl text-gray-500 font-light">Installation environmentally friendly solar systems, which also reduces electricity costs - <span className="italic">Vaddakkachchi Central College</span></li>

              <li className="text-xl md:text-2xl text-gray-500 font-light">Laboratory Materials to school which increases practical experience - <span className="italic">Kilinochchi Hindu College, Konavil Maha Vidyalayam, Uruthirapuram Maha Vidyalayam</span></li>

              <li className="text-xl md:text-2xl text-gray-500 font-light">Furniture and building maintenance - <span className="italic">St Theresa Girls College, Paandiyankulam Maha Vidyalayam</span></li>

              <li className="text-xl md:text-2xl text-gray-500 font-light">Installation of tube wells, motor pumps and water filters - <span className="italic">Kallaaru Tamil Vidyalayam, Tharmapuram Central College</span></li>

              <li className="text-xl md:text-2xl text-gray-500 font-light">Sports facilities like cricket pitches, basketball court night lights - <span className="italic">Vaddakkachchi Central College</span></li>
            </ul>
          </div>

          {/* Image Gallery  */}
          <div className="my-16">
            <div className="w-full flex justify-center items-center ">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 w-full">
                {
                  imgData.map(item => (
                    <div className="w-full h-full" key={item}>
                      <img src={item} alt="Infrastructure image" className="w-full md:h-[180px] object-cover rounded-lg"/>
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

export default infrastructure