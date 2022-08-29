import React from 'react'
import Head from 'next/head'
import Cards from '../../../components/Cards'
import Line from '../../../components/Line'

const grade5ScholarshipRevisionClasses = () => {
  const imgData = [
    '/img/activities/schoolProjects/revCls/rc1.jpg',
    '/img/activities/schoolProjects/revCls/rc2.jpg',
    '/img/activities/schoolProjects/revCls/rc3.jpg',
    '/img/activities/schoolProjects/revCls/rc4.jpg',
    '/img/activities/schoolProjects/revCls/rc5.jpg',
    '/img/activities/schoolProjects/revCls/rc6.jpg',
    '/img/activities/schoolProjects/revCls/rc7.jpg',
    '/img/activities/schoolProjects/revCls/rc8.jpg',
    '/img/activities/schoolProjects/revCls/rc9.jpg',
    '/img/activities/schoolProjects/revCls/rc10.jpg',
  ]
  return (
    <div>
      <Head>
        <title>Grade 5 Scholarship Revision Classes</title>
      </Head>

      {/* Banner */}
      <div className="banner relative h-96 w-full">
        <img src="/img/activities/schoolProjects/engLangPro/banner.JPG" alt="Banner" className="h-full w-full object-cover brightness-50 rounded-b-3xl" />
      </div>

      <main>
        <div className="container">
          {/* Heading */}
          <div className="text-center my-16">
            <h2 className='text-2xl md:text-4xl xl:text-6xl font-extrabold text-orange-500 mb-5'>Grade 5 Scholarship Revision Classes</h2>
            <p className="text-xl md:text-2xl text-gray-500 font-light">The revision classes are conducted to coach students to do well in the grade 5 Scholarship exam– our aim is to get every student above the 35% pass level and also encourage students to get above the “Cut-Off” Marks which will qualify them for a monthly educational assistance from the Government until they complete their A/L.</p>
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

          
          {/* Card */}
          <Cards />
        </div>
      </main>
    </div>
  )
}

export default grade5ScholarshipRevisionClasses