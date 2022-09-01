import React from 'react'
import Link from 'next/link'
import { NextSeo } from 'next-seo';


import {client, urlFor} from '../lib/client'


const news = ({posts}) => {
  return (
    <div>
      <NextSeo
        title="News"
        titleTemplate='SJC87INITIATIVE | %s'
        description="SJC87 INITIATIVE is not for profit Education Initiative was formed in 2009, mainly to improve the Education standard in the North and East of Sri Lanka. It operates with slightly different names in Australia, Canada, Sri Lanka, UK and USA."
        canonical='https://sjc87initiative.com'
      />
      {/* Banner */}
      <div className="banner relative h-96 w-full">
        <img src="/img/news/banner.jpg" alt="Banner" className="h-full w-full object-cover brightness-50 rounded-b-3xl" />
        <div className="content absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <h2 className="text-3xl md:text-6xl text-white font-extrabold mb-5">News Update</h2>
        </div>
      </div>

      <main>
        <div className="container">
          <div className="newsCards grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 my-12">
            {
              posts.map((n) =>(
                <div key={n._id}>
                  <Link href={`/news/${n.slug.current}`}>
                    <div className="newsCard w-full  p-5 border rounded cursor-pointer" >
                      <div className="w-full h-[250px]">
                        <img src={urlFor(n.mainImage)} alt={n.title} className="w-full h-full rounded-t object-cover" />
                      </div>
                      <div>
                        <h2 className="text-lg md:text-xl font-semibold text-gray-600 rounded-b pt-3">{n.title}</h2>
                      </div>
                    </div>
                  </Link>
                </div>

              ))
            }

          </div>
        </div>
      </main>
    </div>
  )
}

export default news

export const getServerSideProps = async () => {
  const newsQuery = `
  *[_type=='news'] | order(_createdAt desc)
  `
  const posts = await client.fetch(newsQuery)
  console.log(posts)
  return {
    props : {posts}
  }
}
