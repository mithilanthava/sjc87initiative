import React from 'react'
import Head from 'next/head'

const facilitiesToSchools = () => {
  
  const imgData = [
    '/img/activities/ict/g21.jpg',
    '/img/activities/ict/g22.jpg',
    '/img/activities/ict/g23.jpg',
    '/img/activities/ict/g24.jpg',
    '/img/activities/ict/g25.jpg',
    '/img/activities/ict/g26.jpg',
    '/img/activities/ict/g27.jpg',
    '/img/activities/ict/g28.jpg',
  ]
  return (
    <div>
      <Head>
        <title>ICT Facilities to Schools</title>
      </Head>

      <main>
        {/* Banner */}
        <div className="banner relative h-96 w-full">
          <img src="/img/activities/ict/banner.jpg" alt="Banner" className="h-full w-full object-cover brightness-50 rounded-b-3xl" />
          <div className="content absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            <h2 className="text-3xl md:text-6xl text-white font-extrabold mb-5">ICT Projects</h2>
          </div>
        </div>


        <div className="container">
          {/* Heading */}
          <div className="text-center my-16">
            <h2 className='text-2xl md:text-4xl xl:text-6xl font-extrabold text-orange-500 mb-5'>ICT Facilities to Schools and Universities </h2>
            <p className="text-xl md:text-2xl text-gray-500 font-light">We provide ICT facilities to schools and Zonal Education offices to enhance ICT capabilities.</p>
          </div>

          {/* Horizontal Line */}
          <div className="relative my-10">
            <hr className=" bg-gray-500" />
            <div className="absolute h-5 w-5 bg-orange-500 rotate-45 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
          </div>

          {/* Image Gallery  */}
          <div className="w-full flex justify-center items-center my-16">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 w-full">
              {
                imgData.map(item => (
                  <div className="w-full h-full" key={item}>
                    <img src={item} alt="Ict Projects image" className="w-full md:h-[180px] object-cover rounded-lg"/>
                  </div>

                ))
              }
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default facilitiesToSchools