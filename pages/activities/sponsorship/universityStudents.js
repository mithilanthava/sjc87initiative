import React from 'react'
import Head from 'next/head'
import ScholarshipCard from '../../../components/ScholarshipCard'
import Line from '../../../components/Line'

const universityStudents = () => {
  const imgData = [
    '/img/activities/sponsorship/unistu/us1.jpg',
    '/img/activities/sponsorship/unistu/us2.jpg',
    '/img/activities/sponsorship/unistu/us3.jpg',
    '/img/activities/sponsorship/unistu/us4.jpg',
    '/img/activities/sponsorship/unistu/us5.jpg',
    '/img/activities/sponsorship/unistu/us6.jpg',
    '/img/activities/sponsorship/unistu/us7.jpg',
    '/img/activities/sponsorship/unistu/us8.jpg',
  ]
  return (
    <div>
      <Head>
        <title>University Students</title>
      </Head>

      {/* Banner */}
      <div className="banner relative h-96 w-full">
        <img src="/img/activities/sponsorship/unistu/banner.jpg" alt="Banner" className="h-full w-full object-cover brightness-50 rounded-b-3xl" />
      </div>

      <main>
        <div className="container">
          {/* Heading */}
          <div className="text-center my-16">
            <h2 className='text-2xl md:text-4xl xl:text-6xl font-extrabold text-orange-500 mb-5'>University Students</h2>
            <p className="text-xl md:text-2xl text-gray-500 font-light">This sponsorship is offered to the students from rural areas who are  going to Universities located in the Urban areas. These scholarships generally cover living expenses away from home for these students.</p>
            <p className="text-xl md:text-2xl text-gray-500 font-light">Annual Sponsorship amounts are AUD$500/CAD$500/GBP 300/ USD 400. These sponsorships will be for the period of the Course chosen, majority of them are for 4 years.</p>
          </div>

          {/* Image Gallery  */}
          <div className="my-16">
            
            <div className="w-full flex justify-center items-center ">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 w-full">
                {
                  imgData.map(item => (
                    <div className="w-full h-full" key={item}>
                      <img src={item} alt="Ordinary level image" className="w-full md:h-[180px] object-cover rounded-lg"/>
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

export default universityStudents