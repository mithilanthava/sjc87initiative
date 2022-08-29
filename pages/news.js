import React from 'react'
import Head from 'next/head'
import Line from '../components/Line'


const news = () => {
  return (
    <div>
      <Head>
        <title>News</title>
      </Head>
      {/* Banner */}
      <div className="banner relative h-96 w-full">
        <img src="/img/news/banner.jpg" alt="Banner" className="h-full w-full object-cover brightness-50 rounded-b-3xl" />
        <div className="content absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <h2 className="text-3xl md:text-6xl text-white font-extrabold mb-5">News Update</h2>
        </div>
      </div>
    </div>
  )
}

export default news