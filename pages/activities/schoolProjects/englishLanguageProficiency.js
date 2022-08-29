import React from 'react'
import Head from 'next/head'
import Cards from '../../../components/Cards'
import Line from '../../../components/Line'

const englishLanguageProficiency = () => {
  const imgData = [
    '/img/activities/schoolProjects/engLangPro/el1.jpg',
    '/img/activities/schoolProjects/engLangPro/el2.jpg',
    '/img/activities/schoolProjects/engLangPro/el3.jpg',
    '/img/activities/schoolProjects/engLangPro/el4.jpg',
    '/img/activities/schoolProjects/engLangPro/el5.jpg',
    '/img/activities/schoolProjects/engLangPro/el6.jpg',
    '/img/activities/schoolProjects/engLangPro/el7.jpg',
    '/img/activities/schoolProjects/engLangPro/el8.jpg',
    '/img/activities/schoolProjects/engLangPro/el9.jpg',
  ]
  return (
    <div>
      <Head>
        <title>English Language Proficiency</title>
      </Head>

      {/* Banner */}
      <div className="banner relative h-96 w-full">
        <img src="/img/activities/schoolProjects/engLangPro/banner.JPG" alt="Banner" className="h-full w-full object-cover brightness-50 rounded-b-3xl" />
      </div>

      <main>
        <div className="container">
          {/* Heading */}
          <div className="text-center my-16">
            <h2 className='text-2xl md:text-4xl xl:text-6xl font-extrabold text-orange-500 mb-5'>English Language Proficiency</h2>
            <p className="text-xl md:text-2xl text-gray-500 font-light">This area is so important that one of our committee members work solely on this project. Statistics show that only about 30% of the students obtain a Pass grade in English at the GCE O/L exams in Kilinochchi Zone.</p>
            <p className="text-xl md:text-2xl text-gray-500 font-bold mt-8 text-left">Two main issues affect English Language Proficiency in the Northern Province:</p>
            <p className="text-xl md:text-2xl text-gray-500 font-light mt-3 text-justify md:text-left"><span className="font-semibold">Teacher Training:</span> Thirty years of civil war has prohibited the system from creating quality English teachers. The current English teachers, although well knowledgeable, have limited student – teacher interactive language skills. We have organized a number of teacher training conferences conducted by leading experts in the field of teaching English to Speakers of Other Languages. We also work with other organizations such as OPEnE (Organization of People for Engagement and Enterprise) in the same field to improve efficiencies.</p>

            <p className="text-xl md:text-2xl text-gray-500 font-light mt-3 text-left"><span className="font-semibold">Fundamentals at Early Ages</span> We are trying to introduce and stress the importance of READING, COMPREHENSION and WRITING skills at early ages. Apart from reading books, we have worked with OPEnE in providing pen drives containing self learning exercises to students so that they can learn English on their own from early ages to GCE O/L. These self-learning techniques help each student according to their level of ability.</p>
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

export default englishLanguageProficiency