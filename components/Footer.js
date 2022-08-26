import React from 'react'
import Link from 'next/link'

import {
  AiFillFacebook, 
  AiFillTwitterSquare, 
  AiOutlineMail,
  AiFillInstagram
} from 'react-icons/ai'

const Footer = () => {
  return (
    <div className="footer bg-white border-t mt-10 py-10">
      <div className="container grid grid-cols-1 md:grid-cols-4 space-x-5">
        {/* Logo */}
        <div className="logo flex justify-center items-center md:block">
          <img src="/img/logo.png" alt="Logo" className="w-3/4" />
        </div>
        
        {/* Links */}
        <div className="col-span-2">
          <div className="flex flex-col md:flex-row text-center md:text-left justify-between space-y-6 md:space-y-0">
            {/* Main Links */}
            <div className="Links">
              <ul className="space-y-3">
                <li className="hover:text-orange-500 text-gray-500">
                  <Link href="/">
                    <a>Home</a>
                  </Link>
                </li>
                <li className="hover:text-orange-500 text-gray-500">
                  <Link href="/ourImpact">
                    <a>Our Impact</a>
                  </Link>
                </li>
                <li className="hover:text-orange-500 text-gray-500">
                  <Link href="/donation">
                    <a>Donation</a>
                  </Link>
                </li>
                <li className="hover:text-orange-500 text-gray-500">
                  <Link href="/news">
                    <a>News</a>
                  </Link>
                </li>
                <li className="hover:text-orange-500 text-gray-500">
                  <Link href="/contact">
                    <a>Contact</a>
                  </Link>
                </li>
              </ul>
            </div>

            {/* About Us Links */}
            <div className="Links">
              <ul className="space-y-3">
                <li className="hover:text-orange-500 text-gray-500">
                  <Link href="/aboutUs/ourStory">
                    <a>Our Story</a>
                  </Link>
                </li>
                <li className="hover:text-orange-500 text-gray-500">
                  <Link href="/aboutUs/missionVisionValues">
                    <a className="clear-both inline-block">Mission Vision and Values</a>
                  </Link>
                </li>
                <li className="hover:text-orange-500 text-gray-500">
                  <Link href="/aboutUs/orgStructure">
                    <a>Organsational Structure</a>
                  </Link>
                </li>
              </ul>
            </div>
            {/* Activities Links */}
            <div className="Links">
              <ul className="space-y-3">
                <li className="hover:text-orange-500 text-gray-500">
                  <Link href="/activities/sponsorship">
                    <a>Sponsorship</a>
                  </Link>
                </li>
                <li className="hover:text-orange-500 text-gray-500">
                  <Link href="/activities/specialNeeds">
                    <a>Special Needs</a>
                  </Link>
                </li>
                <li className="hover:text-orange-500 text-gray-500">
                  <Link href="/activities/covid10Relief">
                    <a>Covid 19 Relief</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Social */}
        <div className="social flex flex-col ml-10 md:justify-self-end">
          
          <ul className="flex justify-center space-x-5 mt-5 md:mt-0">
            <li className="text-3xl text-gray-500 hover:text-orange-500">
              <Link href="#">
                <a><AiFillFacebook /></a>
              </Link>
            </li>
            <li className="text-3xl text-gray-500 hover:text-orange-500">
              <Link href="#">
                <a><AiFillTwitterSquare /></a>
              </Link>
            </li>
            <li className="text-3xl text-gray-500 hover:text-orange-500">
              <Link href="#">
                <a href="mailto:"><AiOutlineMail /></a>
              </Link>
            </li>
            <li className="text-3xl text-gray-500 hover:text-orange-500">
              <Link href="#">
                <a><AiFillInstagram /></a>
              </Link>
            </li>
          </ul>
          <Link href="/donation">
            <a className="py-2 px-4 border border-orange-500 text-center mt-5 text-orange-500 font-bold w-full md:w-2/3 rounded">Donate</a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Footer