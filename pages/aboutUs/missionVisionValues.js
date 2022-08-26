import React from 'react'
import Head from 'next/head'

import Cards from '../../components/Cards'

const missionVisionValues = () => {
  return (
    <div>
      <Head>
        <title>Our Mission Vision & Values</title>
      </Head>
      {/* Banner Image */}
      <div className="h-96 w-full">
        <img src="/img/aboutUs/banner.jpg" alt="Banner Image." className="h-full w-full object-cover" />
      </div>

      {/* Contents */}
      <div className="content container grid grid-cols-1 md:grid-cols-3 py-10 gap-5">
        {/* Heading */}
        <div className="heading">
          <h2 className="text-3xl mb-5 md:mb-0 md:text-4xl xl:text-6xl font-extrabold text-gray-600 text-center md:text-left">Our <span className="text-orange-500">Mission</span>  <span className="text-orange-500">Vision</span> & <span className="text-orange-500">Values</span></h2>
        </div>
        {/* Contents */}
        <div className="text col-span-2 text-center md:text-left md:ml-10">
          <p className="md:text-xl text-gray-500 mb-5">Our mission is to improve and create educational excellence together with character development for school students in the North and East of Sri Lanka.</p>
          <p className="md:text-xl text-gray-500 mb-5">Our vision is to make every student who enrolls in a school to stay at the school as long as possible, at least until the end of their GCE Advanced Level. Through our vision, we aim to reduce child labour, child marriages and substance addictions, all associated with lower level of education and school drop out.</p>
          <p className="md:text-xl text-gray-500 mb-5">Our values are working together for excellence, compassion and commitment.</p>
        </div>
      </div>

      <div className="container">
        {/* Cards */}
        <Cards />
      </div>
      
    </div>
  )
}

export default missionVisionValues