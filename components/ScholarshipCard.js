import React from 'react'

import {BiBookOpen, BiBusSchool} from 'react-icons/bi'
import {FaGraduationCap} from 'react-icons/fa'

const ScholarshipCard = () => {
  return (
    <>
      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        <div className="card p-5 bg-white shadow-md rounded border">
          <BiBookOpen className="text-3xl md:text-6xl text-orange-500/50" />
          <h3 className="text-2xl md:text-3xl font-bold text-gray-600 py-4">School Students up to GCE Ordinary Level</h3>
          <p className="text-justify text-gray-500">Sponsorships may start at any stage from Grade 1 to GCE O/L. The family situation is the main criteria for the selection. Annual Sponsorship amounts are AUD$400 / CAD$350 / GBP 200 / USD 275. Students from these sponsorships are automatically carried over to the GCE Advanced Level Scholarships.</p>
        </div>
        <div className="card p-5 bg-white shadow-md rounded border">
          <BiBusSchool className="text-3xl md:text-6xl text-orange-500/50" />
          <h3 className="text-2xl md:text-3xl font-bold text-gray-600 py-4">School students in GCE Advanced Level</h3>
          <p className="text-justify text-gray-500">Sponsorship is offered to the ones chosen from the pool of students who have just completed the GCE O/L and wishing to enroll in Science or Technology streams in the GCE A/L. The above streams are selected considering better job opportunities for these streams. Annual Sponsorship amounts are AUD$500 / CAD$450 /GBP 260 / USD 325. These start every July and will be for a period of Two years only</p>
        </div>
        <div className="card p-5 bg-white shadow-md rounded border">
          <FaGraduationCap className="text-3xl md:text-6xl text-orange-500/50" />
          <h3 className="text-2xl md:text-3xl font-bold text-gray-600 py-4">University students</h3>
          <p className="text-justify text-gray-500">The sponsorship is offered to the students from the  rural areas who are going to Universities located in the Urban areas. These scholarships generally cover living expenses away from home for these students. Annual Sponsorship amounts are AUD $600/CAD $550/GBP 320/ USD 425 . These sponsorships will be for the period of the Course chosen, majority of them are for 4 years.</p>
        </div>
      </div>
    </>
  )
}

export default ScholarshipCard