import React from 'react'
import Link from 'next/link'
import {client, urlFor} from '../../lib/client'
import {NextSeo} from 'next-seo'

const NewsDetail = ({news, newsData}) => {
  return (
    <div>
      <NextSeo
        title={news.title}
        titleTemplate='SJC87INITIATIVE | %s'
        description="SJC87 INITIATIVE is not for profit Education Initiative was formed in 2009, mainly to improve the Education standard in the North and East of Sri Lanka. It operates with slightly different names in Australia, Canada, Sri Lanka, UK and USA."
        canonical='https://sjc87initiative.com'
      />
      <main>
        {/* Banner */}
        <div className="banner relative h-96 w-full">
          <img src={urlFor(news.bannerImage)} alt="Banner" className="h-full w-full object-cover brightness-50 rounded-b" />
          <div className="content absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            <h2 className="text-3xl md:text-6xl text-white font-extrabold mb-5">{news.title}</h2>
            <p className="text-white w-full md:text-2xl md:font-semibold">{new Date(news._createdAt).toLocaleString()}</p>
          </div>
        </div>

        <div className="px-5 md:px-10 lg:px-22 xl:px-36 2xl:px-96 my-12">
          <div className="w-full h-[600px] mb-5">
            <img src={urlFor(news.mainImage)} alt="Main Image" className="w-full h-full object-cover rounded" />
          </div>
          <p className="w-full text-md md:text-xl font-light text-gray-600 mb-5">{news.text}</p>
          {/* Gallery */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {news.image &&
            news.image.map((i,index) => (
              <div key={index} className="w-full h-[200px] md:w-92">
                <img src={urlFor(i)} alt="image" className="w-full h-full object-cover rounded"/>
              </div>
            ))
          }
          </div>
        </div>
        <div className="btn flex justify-center items-center">
          <Link href='/news'>
            <a className="px-6 py-3 bg-orange-500 text-white font-semibold border border-orange-500 rounded hover:text-orange-500 hover:bg-white transition duration-300">Go Back to News</a>
          </Link>
        </div>
      </main>
    </div>
  )
}

export default NewsDetail

export const getStaticPaths = async () => { 
  const query = `*[_type == "news" ]{
      slug{
          current
      }
  }`
  const news = await client.fetch(query)
  const paths = news.map(n => ({
      params: {
          slug: n.slug.current
      }
  }))

  return {
      paths,
      fallback: 'blocking'
  }
}

export const getStaticProps = async ({params: {slug}}) => {
  const query = `*[_type == "news" && slug.current == "${slug}"][0]{
    _id,
    _createdAt,
    title,
    text,
    bannerImage,
    mainImage,
    image
  }`
  const news = await client.fetch(query)

  const newsQuery = `*[_type == "news"]`
  const newsData = await client.fetch(newsQuery)

  return {
      props: {
        news, 
        newsData
      },
      revalidate: 60,
  }
}