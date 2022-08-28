import React from 'react'
import Head from 'next/head'


const workshopAndSeminar = () => {
  const imgData = [
    '/img/activities/ict/g1.jpg',
    '/img/activities/ict/g2.jpg',
    '/img/activities/ict/g3.jpg',
    '/img/activities/ict/g4.jpg',
    '/img/activities/ict/g5.jpg',
    '/img/activities/ict/g6.jpg',
    '/img/activities/ict/g7.jpg',
    '/img/activities/ict/g8.jpg',
    '/img/activities/ict/g9.jpg',
    '/img/activities/ict/g10.jpg',
    '/img/activities/ict/g11.jpg',
  ]
  return (
    <div>
      <Head>
        <title>ICT Workshop and Seminar</title>
      </Head>

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
          <h2 className='text-2xl md:text-4xl xl:text-6xl font-extrabold text-orange-500 mb-5'>ICT Workshops and Seminars</h2>
          <p className="text-xl md:text-2xl text-gray-500 font-light">We have been facilitating ICT workshops and seminars for Teachers in Sri Lanka, focusing on the following three main areas.</p>
        </div>

        {/* Horizontal Line */}
        <div className="relative my-10">
          <hr className=" bg-gray-500" />
          <div className="absolute h-5 w-5 bg-orange-500 rotate-45 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        </div>

        {/* Mid List */}
        <div className="w-3/4 mx-auto">
          <ul className='space-y-3 list-decimal'>
            <li className="text-md md:text-lg text-gray-500 font-light">Conducting workshops facilitated by five Universities and  four Department of Education Zones.</li>
            <li className="text-md md:text-lg text-gray-500 font-light">Helping students build the skills they&apos;ll need for the future, including coding, problem solving, creativity, and teamwork We will run programs and activities that show students—from all backgrounds and interests— what computer science is and inspire them to use the power of computing to solve real world problems. We will run workshops for students and Educators using Google CS first. </li>
            <li className="text-md md:text-lg text-gray-500 font-light">Assistive Technology for visually imparted students</li>
          </ul>
        </div>

        {/* Image Gallery  */}
        <div className="my-16">
          <h2 className="text-xl md:text-2xl xl:text-4xl text-center font-extrabold mb-5 text-orange-500">Workshops and bootcamps</h2>
          <div className="w-full flex justify-center items-center ">
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
      </div>
    </div>
  )
}

export default workshopAndSeminar