import React from 'react'
import { NextSeo } from 'next-seo';


import Cards from '../components/Cards'

const activities = () => {
  return (
    <div>
      <NextSeo
        title="Activities"
        titleTemplate='SJC87INITIATIVE | %s'
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
            <h2 className='text-2xl md:text-4xl xl:text-6xl font-extrabold text-orange-500 mb-5'>Our Activities</h2>
            <p className="text-xl md:text-2xl text-gray-500 font-light">We help children break the cycle of poverty by empowering children to dream, aspire and achieve.</p>
          </div>

          {/* Cards */}
          <div className="my-16">
            <Cards />
          </div>
        </div>
      </main>
    </div>
  )
}

export default activities