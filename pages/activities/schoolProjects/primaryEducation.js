import React from 'react'
import { NextSeo } from 'next-seo';

import Cards from '../../../components/Cards'
import Line from '../../../components/Line'

const primaryEducation = () => {
  return (
    <div>
      <NextSeo
        title="Primary Education"
        titleTemplate='SJC87INITIATIVE | School Projects | %s'
        description="SJC87 INITIATIVE is not for profit Education Initiative was formed in 2009, mainly to improve the Education standard in the North and East of Sri Lanka. It operates with slightly different names in Australia, Canada, Sri Lanka, UK and USA."
        canonical='https://sjc87initiative.com'
      />

      {/* Banner */}
      <div className="banner relative h-96 w-full">
        <img src="/img/activities/schoolProjects/priEdu/banner.JPG" alt="Banner" className="h-full w-full object-cover brightness-50 rounded-b-3xl" />
      </div>

      <main>
        <div className="container">
          {/* Heading */}
          <div className="text-center my-16">
            <h2 className='text-2xl md:text-4xl xl:text-6xl font-extrabold text-orange-500 mb-5'>Primary Education</h2>
            <p className="text-xl md:text-2xl text-gray-500 font-light">Many schools in rural areas don&apos;t have teachers in Primary classes. We provide temporary teacher assistance in these schools on a rotating semi-annual basis until the Zonal education office assigns a teacher.</p>
            <p className="text-xl md:text-2xl text-gray-500 font-light">If you are interested in sponsoring a project or part of a project, please contact your country representative. It costs around Rs 10,000 for a month to support a primary teacher.</p>
          </div>

          {/* Card */}
          <Cards />
        </div>
      </main>
    </div>
  )
}

export default primaryEducation