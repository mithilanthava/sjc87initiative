import React from 'react'
import Head from 'next/head'
import Cards from '../../../components/Cards'
import Line from '../../../components/Line'


const gceExamPreparationClasses = () => {
  const imgData = [
    '/img/activities/schoolProjects/prepCls/pc1.jpg',
    '/img/activities/schoolProjects/prepCls/pc2.jpg',
    '/img/activities/schoolProjects/prepCls/pc3.jpg',
    '/img/activities/schoolProjects/prepCls/pc4.jpg',
  ]
  return (
    <div>
      <Head>
        <title>GCE Exam Preparation Classes</title>
      </Head>

      <main>
        {/* Banner */}
        <div className="banner relative h-96 w-full">
          <img src="/img/activities/schoolProjects/engLangPro/banner.JPG" alt="Banner" className="h-full w-full object-cover brightness-50 rounded-b-3xl" />
        </div>

        <div className="container">
          {/* Heading */}
          <div className="text-center my-16">
            <h2 className='text-2xl md:text-4xl xl:text-6xl font-extrabold text-orange-500 mb-5'>GCE O/L Exam Preparation Classes</h2>
            <p className="text-xl md:text-2xl text-gray-500 font-light">Overall performance in the GCE O/L examination has improved over the last 10 years in the Vanni area, yet work needs to be done to bring them up to the National level. We are focusing on giving a better foundation in Mathematics and Science from Grade 6 and special attention is given to  the students who are struggling  in Grade 10 as they begin to prepare for the O/L exams.</p>
          </div>

          {/* Image Gallery  */}
          <div className="my-16">
            <div className="w-full flex justify-center items-center ">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 w-full">
                {
                  imgData.map(item => (
                    <div className="w-full h-full" key={item}>
                      <img src={item} alt="GCE Exam image" className="w-full md:h-[180px] object-cover rounded-lg"/>
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

export default gceExamPreparationClasses