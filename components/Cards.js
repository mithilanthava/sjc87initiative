import React from 'react'

import {BiBookOpen, BiBusSchool, BiLaptop} from 'react-icons/bi'
import {MdOutlineNordicWalking} from 'react-icons/md'

const Cards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
      <div className="card p-5 bg-white shadow-md rounded border">
        <BiBookOpen className="text-3xl md:text-6xl text-orange-500/50" />
        <h3 className="text-2xl md:text-3xl font-bold text-gray-600 py-4">Scholarship</h3>
        <p className="text-justify text-gray-500">We provide sponsorship for three categories of students. Namely, school students up to GCE Ordinary Level, school students in GCE Advanced Level and University students. </p>
      </div>
      <div className="card p-5 bg-white shadow-md rounded border">
        <BiBusSchool className="text-3xl md:text-6xl text-orange-500/50" />
        <h3 className="text-2xl md:text-3xl font-bold text-gray-600 py-4">School Projects</h3>
        <p className="text-justify text-gray-500">We work with schools and Education Zones to get basic infrastructure and educational facilities in place so that student learning can happen in a better environment.</p>
      </div>
      <div className="card p-5 bg-white shadow-md rounded border">
        <MdOutlineNordicWalking className="text-3xl md:text-6xl text-orange-500/50" />
        <h3 className="text-2xl md:text-3xl font-bold text-gray-600 py-4">Special Needs</h3>
        <p className="text-justify text-gray-500">Kilinochchi district  in SriLanka  has 21 Special Education units taking care of more than 200 Special needs children. We provide assistance to these children and the schools.</p>
      </div>
      <div className="card p-5 bg-white shadow-md rounded border">
        <BiLaptop className="text-3xl md:text-6xl text-orange-500/50" />
        <h3 className="text-2xl md:text-3xl font-bold text-gray-600 py-4">ICT Projects</h3>
        <p className="text-justify text-gray-500">Purpose of ICT projects is to provide ICT facilities to schools so that they can use them as a tool to engage students in leaning and to extend the learning beyond classroom walls</p>
      </div>
    </div>
  )
}

export default Cards