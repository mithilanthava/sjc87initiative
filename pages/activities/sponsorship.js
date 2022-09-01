import React from 'react'
import ScholarshipCard from '../../components/ScholarshipCard'
import Line from '../../components/Line'
import { NextSeo } from 'next-seo';



const sponsorship = () => {
  const imgData = [
    '/img/activities/sponsorship/s1.jpg',
    '/img/activities/sponsorship/s2.jpg',
    '/img/activities/sponsorship/s3.jpg',
  ]
  return (
    <div>
      <NextSeo
        title="Sponsorship"
        titleTemplate='SJC87INITIATIVE | Activities | %s'
        description="SJC87 INITIATIVE is not for profit Education Initiative was formed in 2009, mainly to improve the Education standard in the North and East of Sri Lanka. It operates with slightly different names in Australia, Canada, Sri Lanka, UK and USA."
        canonical='https://sjc87initiative.com'
      />

      <main>
        {/* Banner */}
        <div className="banner relative h-96 w-full">
          <img src="/img/activities/banner.jpg" alt="Banner" className="h-full w-full object-cover brightness-50 rounded-b-3xl" />
        </div>

        <div className="container">
          {/* Heading */}
          <div className="text-center my-16">
            <h2 className='text-2xl md:text-4xl xl:text-6xl font-extrabold text-orange-500 mb-5'>Sponsorship</h2>
            <p className="text-xl md:text-2xl text-gray-500 font-light">The primary purpose of the school level sponsorship program is to prevent students from dropping out of the school due to poverty. This program is designed to encourage the students to come to school regularly and to make them to be in school until they finish the high school. The students are supervised by our field officers who ensure the sponsored students attend the schools regularly. The student&apos;s performance is monitored closely and their progress reports are sent to the sponsors end of each term.</p>
            <p className="text-xl md:text-2xl text-gray-500 font-light">Currently (2022) we have 570 students under our sponsorship program, out of which 370 are school students attending 76 different schools in 14 Education Zones in the Northern and Eastern Provinces and 200 are University students attending 18 different higher education institutions. All category of Sponsorships start either in January or in July.</p>
          </div>

          {/* Table */}
          <div className="my-10">
            <table className="table-auto w-3/4 mx-auto p-5">
              <thead className="bg-orange-600 text-white">
                <tr className="h-12">
                  <th className="text-left pl-4">Catagory</th>
                  <th className="text-left">Number of Students</th>
                </tr>
              </thead>
              <tbody>
                <tr className="h-14 border-b">
                  <td className="w-3/5 ">Single Mother</td>
                  <td className="w-4/5">130</td>
                </tr>
                <tr className="h-14 border-b bg-orange-100">
                  <td className="w-3/5 ">Single Father</td>
                  <td className="w-4/5">6</td>
                </tr>
                <tr className="h-14 border-b">
                  <td className="w-3/5 ">Neither Parent / Living with other family</td>
                  <td className="w-4/5">12</td>
                </tr>
                <tr className="h-14 border-b bg-orange-100">
                  <td className="w-3/5 ">Both Parents- one with some challenge</td>
                  <td className="w-4/5">27</td>
                </tr>
                <tr className="h-14 border-b">
                  <td className="w-3/5 ">Both Parents</td>
                  <td className="w-4/5">195</td>
                </tr>
                <tr className="h-14 border-b bg-orange-100">
                  <td className="w-3/5 ">Total School Students</td>
                  <td className="w-4/5">370</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Horizontal Line */}
          <Line />

          {/*  Scholarship Card*/}
          <div className="mt-10">
            <ScholarshipCard />
          </div>

          {/* The Feature Stories */}
          {/* <div className="mt-10">
            <h2 className="text-center text-4xl text-gray-500 font-semibold mb-5">Featured Stories</h2>
            <div className="imgGroup grid grid-cols-1 items-center md:grid-cols-3 space-y-5 md:space-y-0">
              <div className="feature w-full h-[500px] xl:w-[300px] xl:h-[300px] 2xl:w-[400px] 2xl:h-[400px] relative rounded border">
                <img src="/img/index/f1.jpg" alt="Feature Image 1" className=" object-cover h-full w-full rounded"/>
                <div className="featureText absolute left-0 bottom-0 bg-white/90 w-full py-2 px-5 rounded-b">
                  <p className="text-gray-600/80 text-xl font-semibold">Featured Story</p>
                  <p className="text-orange-500 text-xl font-semibold">Kisushanty Sellathurai</p>
                </div>
              </div>
              <div className="feature w-full h-[500px] xl:w-[300px] xl:h-[300px] 2xl:w-[400px] 2xl:h-[400px] relative rounded border">
                <img src="/img/index/f2.jpg" alt="Feature Image 1" className=" object-cover h-full w-full rounded"/>
                <div className="featureText absolute left-0 bottom-0 bg-white/90 w-full py-2 px-5 rounded-b">
                  <p className="text-gray-600/80 text-xl font-semibold">Featured Story</p>
                  <p className="text-orange-500 text-xl font-semibold">Kisushanty Sellathurai</p>
                </div>
              </div>
              <div className="feature w-full h-[500px] xl:w-[300px] xl:h-[300px] 2xl:w-[400px] 2xl:h-[400px] relative rounded border">
                <img src="/img/index/f3.jpg" alt="Feature Image 1" className=" object-cover h-full w-full rounded"/>
                <div className="featureText absolute left-0 bottom-0 bg-white/90 w-full py-2 px-5 rounded-b">
                  <p className="text-gray-600/80 text-xl font-semibold">Featured Story</p>
                  <p className="text-orange-500 text-xl font-semibold">Kisushanty Sellathurai</p>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </main>
    </div>
  )
}

export default sponsorship