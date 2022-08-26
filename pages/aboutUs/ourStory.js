import React from 'react'
import Head from 'next/head'

const ourStory = () => {
  return (
    <div>
      <Head>
        <title>Our Story</title>
      </Head>

      <div className="container">
        {/* Contents */}
        <div className="content container grid grid-cols-1 md:grid-cols-3 py-10 gap-5">
          {/* Heading */}
          <div className="heading">
            <h2 className="text-3xl mb-5 md:mb-0 md:text-4xl xl:text-6xl font-extrabold text-gray-600 text-center md:text-left">Our <span className="text-orange-500">Story</span></h2>
          </div>
          {/* Contents */}
          <div className="text col-span-2 text-center md:text-left md:ml-10">
            <p className="md:text-xl text-gray-500 mb-5">Our organisation was formed in 2009 by a group of old boys from the graduating (GCE Advanced Level) class of 1987 at St John&apos;s College, Jaffna with the sole purpose of helping the most vulnerable in our community affected by the civil war. This explains the name SJC87 initiative!</p>
            <p className="md:text-xl text-gray-500 mb-5">The work of SJC87initiative is not confined to an area or to an institution. Our work is spread across several districts. We work in all needy areas of the North and East of Sri Lanka.</p>
            <p className="md:text-xl text-gray-500 mb-5">We started our first educational excellence project at Tharmapuram Central College, formerly known as Tharmapuram Maha Vidyalayam, In Kilinochchi.</p>
          </div>

          
        </div>
        <div className="map container grid grid-cols-1 md:grid-cols-3 items-center gap-5">
            <div className="col-span-2">
              <p className="md:text-xl text-gray-500 text-center md:text-left">Following our successful first program at Tharmapuram Central College, we further expanded our activities to cover five more schools in Kilinochchi Education Zone. Soon after that, we were working in schools in the entire Kilinochchi Education Zone. By early 2020, we have reached out even further and currently working in Eleven of the Twelve Edcuation Zones in the Northern Province and One zone in the Eastern Province.</p>
            </div>
            <div className="mapImg">
              <img src="/img/aboutUs/map.jpg" alt="map" />
            </div>
          </div>
      </div>
    </div>
  )
}

export default ourStory