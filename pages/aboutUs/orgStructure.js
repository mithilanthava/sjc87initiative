import React from 'react'
import {NextSeo} from 'next-seo'

import Cards from '../../components/Cards'

const orgStructure = () => {
  return (
    <div>
      <NextSeo
        title="Organizational Structure"
        titleTemplate='SJC87INITIATIVE | %s'
        description="SJC87 INITIATIVE is not for profit Education Initiative was formed in 2009, mainly to improve the Education standard in the North and East of Sri Lanka. It operates with slightly different names in Australia, Canada, Sri Lanka, UK and USA."
        canonical='https://sjc87initiative.com'
      />

      <div className="container py-10">
        {/* Heading */}
        <div className="text-center">
          <h2 className='text-2xl md:text-4xl xl:text-6xl font-extrabold text-orange-500'>Organisational Structure</h2>
          <h3 className="text-xl md:text-3xl text-gray-500 font-semibold">Country-Registered name of the entity</h3>
        </div>

        {/* Content */}
        <div className="content py-12">
          <div className="country grid place-content-center">
            <ul className="space-y-3">
              <li className="md:text-xl font-semibold text-gray-500"><span className="font-extrabold text-gray-600">AUSTRALIA</span> – SJC87 Scholarship Inc – Non-profit Organisation in NSW (INC 9892583)</li>
              <li className="md:text-xl font-semibold text-gray-500"><span className="font-extrabold text-gray-600">CANADA</span> – COMMUNITY HELP FOR SCHOOL KIDS INITIATIVE INC -Non-profit in Ontario (1987147)</li>
              <li className="md:text-xl font-semibold text-gray-500"><span className="font-extrabold text-gray-600">SRILANKA</span> – ST JOHN’S COLLEGE BATCH OF 1987 TRUST – Deed of Trust 6184</li>
              <li className="md:text-xl font-semibold text-gray-500"><span className="font-extrabold text-gray-600">UK</span> – SJC87 INITIATIVE UK – Registered Charity Number 1191947</li>
              <li className="md:text-xl font-semibold text-gray-500"><span className="font-extrabold text-gray-600">USA</span> – SJC87 INITIATIVE INC – Registered Charity under 501 (c) (3) EIN  46-4212141</li>
            </ul>
          </div>
        </div>
        {/* Cards */}
        <Cards />
      </div>
    </div>
  )
}

export default orgStructure