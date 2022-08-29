import React from 'react'
import Head from 'next/head'
import ScholarshipCard from '../../../components/ScholarshipCard'
import Line from '../../../components/Line'

const schoolStudentsAdvance = () => {
  const imgData = [
    '/img/activities/sponsorship/ordLvl/ol1.jpg',
    '/img/activities/sponsorship/ordLvl/ol2.jpg',
    '/img/activities/sponsorship/ordLvl/ol3.jpg',
    '/img/activities/sponsorship/ordLvl/ol4.jpg',
    '/img/activities/sponsorship/ordLvl/ol5.jpg',
    '/img/activities/sponsorship/ordLvl/ol6.jpg',
    '/img/activities/sponsorship/ordLvl/ol7.jpg',
    '/img/activities/sponsorship/ordLvl/ol8.jpg',
  ]
  return (
    <div>
      <Head>
        <title>School Students up to GCE Ordinary Level</title>
      </Head>

      {/* Banner */}
      <div className="banner relative h-96 w-full">
        <img src="/img/activities/banner.jpg" alt="Banner" className="h-full w-full object-cover brightness-50 rounded-b-3xl" />
      </div>

      <main>
        <div className="container">
          {/* Heading */}
          <div className="text-center my-16">
            <h2 className='text-2xl md:text-4xl xl:text-6xl font-extrabold text-orange-500 mb-5'>School students in GCE Advanced Level</h2>
            <p className="text-xl md:text-2xl text-gray-500 font-light">Sponsorship is offered to the ones chosen from the pool of students who have  just completed the GCE O/L and wishing to enroll in Science or Technology streams in the GCE A/L. The above streams are selected considering better job opportunities for these streams. </p>
            <p className="text-xl md:text-2xl text-gray-500 font-light">Annual Sponsorship amounts are AUD$400 / CAD$400  /GBP 220 / USD 300. These start every July and will be for a period of Two years only</p>
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

export default schoolStudentsAdvance