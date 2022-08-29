import React from 'react'
import Head from 'next/head'
import Cards from '../../../components/Cards'
import Line from '../../../components/Line'


const prizeDay = () => {
  const imgData = [
    '/img/activities/schoolProjects/prizeDay/p1.jpg',
    '/img/activities/schoolProjects/prizeDay/p2.jpg',
    '/img/activities/schoolProjects/prizeDay/p3.jpg',
    '/img/activities/schoolProjects/prizeDay/p4.jpg',
  ]
  return (
    <div>
      <Head>
        <title>Prize Day</title>
      </Head>

      <main>
        {/* Banner */}
        <div className="banner relative h-96 w-full">
          <img src="/img/activities/schoolProjects/engLangPro/banner.JPG" alt="Banner" className="h-full w-full object-cover brightness-50 rounded-b-3xl" />
        </div>

        <div className="container">
          {/* Heading */}
          <div className="text-center my-16">
            <h2 className='text-2xl md:text-4xl xl:text-6xl font-extrabold text-orange-500 mb-5'>Prize Day</h2>
            <p className="text-xl md:text-2xl text-gray-500 font-light">We provide assistance to schools when they want to organize annual prize days to encourage students to do better in their studies and other activities.</p>
          </div>

          {/* Image Gallery  */}
          <div className="my-16">
            <div className="w-full flex justify-center items-center ">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 w-full">
                {
                  imgData.map(item => (
                    <div className="w-full h-full" key={item}>
                      <img src={item} alt="Prize day image" className="w-full md:h-[180px] object-cover rounded-lg"/>
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

export default prizeDay