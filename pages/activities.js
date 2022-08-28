import React from 'react'
import Head from 'next/head'

import Cards from '../components/Cards'

const activities = () => {
  return (
    <div>
      <Head>
        <title>Our Activities</title>
      </Head>

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