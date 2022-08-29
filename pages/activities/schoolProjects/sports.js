import React from 'react'
import Head from 'next/head'
import Cards from '../../../components/Cards'
import Line from '../../../components/Line'


const sports = () => {
  const imgData = [
    '/img/activities/schoolProjects/sports/s1.jpg',
    '/img/activities/schoolProjects/sports/s2.jpg',
    '/img/activities/schoolProjects/sports/s3.jpg',
    '/img/activities/schoolProjects/sports/s4.jpg',
  ]
  return (
    <div>
      <Head>
        <title>Co-Curricular Activities - Sports</title>
      </Head>

      <main>
        {/* Banner */}
        <div className="banner relative h-96 w-full">
          <img src="/img/activities/schoolProjects/engLangPro/banner.JPG" alt="Banner" className="h-full w-full object-cover brightness-50 rounded-b-3xl" />
        </div>

        <div className="container">
          {/* Heading */}
          <div className="text-center my-16">
            <h2 className='text-2xl md:text-4xl xl:text-6xl font-extrabold text-orange-500 mb-5'>Co-Curricular Activities - Sports</h2>
            <p className="text-xl md:text-2xl text-gray-500 font-light">We promote various extra-curricular activities among students as we believe leadership skills are developed through these activities. Assistance for Sports Meets, Jerseys, Sports Equipment and trips to the Provincial and National championships are provided to schools in the Kilinochchi and Thunukkaai Zones on a request basis.</p>
          </div>

          {/* Image Gallery  */}
          <div className="my-16">
            <div className="w-full flex justify-center items-center ">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 w-full">
                {
                  imgData.map(item => (
                    <div className="w-full h-full" key={item}>
                      <img src={item} alt="Sports image" className="w-full md:h-[180px] object-cover rounded-lg"/>
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

export default sports