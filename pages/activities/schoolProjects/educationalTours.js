import React from 'react'
import Head from 'next/head'
import Cards from '../../../components/Cards'
import Line from '../../../components/Line'


const educationalTours = () => {
  const imgData = [
    '/img/activities/schoolProjects/educationalTours/et1.jpg',
    '/img/activities/schoolProjects/educationalTours/et2.jpg',
    '/img/activities/schoolProjects/educationalTours/et3.jpg',
    '/img/activities/schoolProjects/educationalTours/et4.jpg',
    '/img/activities/schoolProjects/educationalTours/et5.jpg',
    '/img/activities/schoolProjects/educationalTours/et6.jpg',
    '/img/activities/schoolProjects/educationalTours/et7.jpg',
    '/img/activities/schoolProjects/educationalTours/et7.jpg',
  ]
  return (
    <div>
      <Head>
        <title>Educational Tours</title>
      </Head>

      <main>
        {/* Banner */}
        <div className="banner relative h-96 w-full">
          <img src="/img/activities/schoolProjects/engLangPro/banner.JPG" alt="Banner" className="h-full w-full object-cover brightness-50 rounded-b-3xl" />
        </div>

        <div className="container">
          {/* Heading */}
          <div className="text-center my-16">
            <h2 className='text-2xl md:text-4xl xl:text-6xl font-extrabold text-orange-500 mb-5'>Educational Tours</h2>
            <p className="text-xl md:text-2xl text-gray-500 font-light">We believe students should get out of the school environment and see the outside world, which would increase their interactive thinking and face the ever-changing universe. We assist schools with these trips when it is requested by them.</p>
          </div>

          {/* Image Gallery  */}
          <div className="my-16">
            <div className="w-full flex justify-center items-center ">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 w-full">
                {
                  imgData.map(item => (
                    <div className="w-full h-full" key={item}>
                      <img src={item} alt="Tour image" className="w-full md:h-[180px] object-cover rounded-lg"/>
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

export default educationalTours