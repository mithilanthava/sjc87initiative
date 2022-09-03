import React, {useState} from 'react'
import Link from 'next/link'

import { MenuIcon, XIcon } from '@heroicons/react/outline'

import '../styles/Home.module.css'

const Header = () => {
  const [isOpen, setOpen] = useState(false)
  const [isAboutOpen, setAboutOpen] = useState(false)
  const [isActOpen, setActOpen] = useState(false)
  const [isSponsorOpen, setSponsorOpen] = useState(false)
  const [isProjectOpen, setProjectOpen] = useState(false)
  const [isIctOpen, setIctOpen] = useState(false)

  function toggleIct(){
    setIctOpen(!isIctOpen)
  }

  function toggleProject(){
    setProjectOpen(!isProjectOpen)
  }

  function toggleSponsor(){
    setSponsorOpen(!isSponsorOpen)
  }

  function toggleAct(){
    setActOpen(!isActOpen)
  }

  function toggleAbout() {
    setAboutOpen(!isAboutOpen)
  }
  function toggleHam(){
    setOpen(!isOpen)
  }
  
  return (
    <>
      <div className="hidden desktop px-5 sm:px-7 md:px-12 2xl:px-20 lg:flex justify-between items-center py-3">
        <div className="logo h-14 w-auto">
          <Link href="/">
            <a>
              <img src="/img/logo.png" alt="logo" className="h-full" />
            </a>
          </Link>
        </div>

        <div className="links flex justify-center items-center space-x-4">
          <Link href="/">
            <a className="py-2 px-4 block whitespace-no-wrap">Home</a>
          </Link>
          <div className="dropdown inline-block relative">
            <button className="text-gray-700 py-2 px-4 inline-flex items-center">
              <a>About Us &darr;</a>
            </button>
            <ul className='dropdown-content absolute hidden text-gray-700 pt-1 w-64'>
              <Link href="/aboutUs">
                <li>
                  <a className="rounded-t bg-gray-100 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">About Us</a>
                </li>
              </Link>
              <Link href="/aboutUs/ourStory">
                <li>
                  <a className="bg-gray-100 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">Our Story</a>
                </li>
              </Link>
              <Link href="/aboutUs/missionVisionValues">
                <li>
                  <a className="bg-gray-100 hover:bg-gray-400 py-2 px-4 block   whitespace-no-wrap">Our Mission Vision and Values</a>
                </li>
              </Link>
              <Link href="/aboutUs/orgStructure">
                <li> 
                  <a className="rounded-b bg-gray-100 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">Organsational Structure</a>
                </li>
              </Link>
            </ul>
          </div>

          <div className="dropdown inline-block relative">
            <button className="text-gray-700 py-2 px-4 inline-flex items-center">
              <a>Activities &darr;</a>
            </button>
            
            <ul className='dropdown-content absolute hidden text-gray-700 pt-1 w-64'>
              <li>
                <Link href="/activities">
                  <a className="rounded-t bg-gray-100 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">Activities</a>
                </Link>
              </li>
              <li className="dropdown relative">
                <Link href="/activities/sponsorship">
                  <a className="bg-gray-100 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">Sponsorship &rarr;</a>
                </Link>
                <ul className="dropdown-content absolute hidden text-gray-700 top-0 left-[100%] w-64">
                  <li>
                    <Link href="/activities/sponsorship/schoolStudentsOrdinary">
                      <a className="bg-gray-100 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap rounded-t">School Students up to GCE Ordinary Level</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/activities/sponsorship/schoolStudentsAdvance">
                      <a className="bg-gray-100 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" >School Students in GCE Advance Level</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/activities/sponsorship/universityStudents">
                      <a className="bg-gray-100 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap rounded-b" >University Students</a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="dropdown relative">
                <Link href="/activities/schoolProjects/primaryEducation">
                  <a className="bg-gray-100 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">School / Zonal Projects &rarr;</a>
                </Link>
                <ul className="dropdown-content absolute hidden text-gray-700 top-0 left-[100%] w-64">
                  <li>
                    <Link href="/activities/schoolProjects/primaryEducation">
                      <a className="bg-gray-100 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap rounded-t">Primary Education</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/activities/schoolProjects/englishLanguageProficiency">
                      <a className="bg-gray-100 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">English Language Proficiency</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/activities/schoolProjects/grade5ScholarshipRevisionClasses">
                      <a className="bg-gray-100 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap " >Grade 5 Scholarship Revision classes</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/activities/schoolProjects/gceExamPreparationClasses">
                      <a className="bg-gray-100 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap " >GCE L/O Exam Preparation Classes</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/activities/schoolProjects/sports">
                      <a className="bg-gray-100 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap " >Co-Curricular Activities - Sports</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/activities/schoolProjects/musicDramaDance">
                      <a className="bg-gray-100 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap " >Co-Curricular Activities - Music / Drama / Dance</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/activities/schoolProjects/educationalTours">
                      <a className="bg-gray-100 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap " >Educational Tours</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/activities/schoolProjects/prizeDay">
                      <a className="bg-gray-100 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap " >Prize Day</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/activities/schoolProjects/infrastructure">
                      <a className="bg-gray-100 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap " >Infrastructure</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/activities/schoolProjects/healthAndEnvironment">
                      <a className="bg-gray-100 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap rounded-b" >Health and Environment</a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/activities/specialNeeds">
                  <a className=" bg-gray-100 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">Special Needs</a>
                </Link>
              </li>
              <li className="dropdown relative">
                <Link href="/activities/sponsorship">
                  <a className="bg-gray-100 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">ICT Projects &rarr;</a>
                </Link>
                <ul className="dropdown-content absolute hidden text-gray-700 top-0 left-[100%] w-64">
                  <li>
                    <Link href="/activities/ictProjects/facilitiesToSchools">
                      <a className="bg-gray-100 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap rounded-t">ICT Facilities to Schools</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/activities/ictProjects/workshopAndSeminar">
                      <a className="bg-gray-100 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap rounded-b" >Workshop and Seminar</a>
                    </Link>
                  </li>
                </ul>
              </li>
              
              <li>
                <Link href="/activities/covid19Relief">
                  <a className="rounded-b bg-gray-100 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">Covid 19 Relief</a>
                </Link>
              </li>

            </ul>
          </div>
          <div className="relative">
            <ul className="flex justify-center items-center space-x-4">
              <li>
                <Link href="/ourImpact">
                  <a className="whitespace-no-wrap text-gray-700 py-2 px-4 inline-flex items-center">Our Impact</a>
                </Link>
              </li>
              <li>
                <Link href="/donation">
                  <a className="text-gray-700 py-2 px-4 inline-flex items-center whitespace-no-wrap">Donation</a>
                </Link>
              </li>
              <li>
                <Link href="/news">
                  <a className="text-gray-700 py-2 px-4 inline-flex items-center whitespace-no-wrap">News</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="text-gray-700 py-2 px-4 inline-flex items-center whitespace-no-wrap">Contact</a>
                </Link>
              </li>

            </ul>
          </div>
        </div>
        <div className="callUs text-white bg-orange-600 px-5 py-2 rounded border border-orange-600 hover:bg-white hover:text-orange-600 transition duration-300">
          <a href="tel:+">Call Us</a>
        </div>
      </div>

      <div className="fixed w-full px-5 top-0 left-0 lg:hidden bg-white z-10">
        <div className="flex justify-between items-center">
          <div className="logo h-12 w-auto">
            <img src="/img/logo.png" alt="logo" className="h-full" />
          </div>
          <div className="ham h-6 w-auto cursor-pointer" onClick={toggleHam}>
            {isOpen ? 
              <XIcon className="h-full text-gray-500" /> : 
              <MenuIcon className="h-full text-gray-500" />
            }
          </div>
        </div>
        <div className={isOpen ? "py-10 min-h-96 bg-white shadow-2xl transition-all duration-500 rounded overflow-auto " : " hidden -left-[100%] transition-all duration-500"}>
          <div className="mobileLinks ml-5">
            <ul className="">
              <li className="py-3">
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>

              {/* About Us */}
              <li className="py-3 bg-white transition duration-500" >
                <a onClick={toggleAbout}>About Us &darr;</a>
                <ul className={isAboutOpen ? "ml-5 mt-3 transition duration-200" : "hidden"}>
                  <li className="py-3">
                    <Link href="/aboutUs">About Us</Link>
                  </li>
                  <li className="py-3">
                    <Link href="/aboutUs/ourStory">Our Story</Link>
                  </li>
                  <li className="py-3">
                    <Link href="/aboutUs/missionVisionValues">Mission Vision and Values</Link>
                  </li>
                  <li className="py-3">
                    <Link href="/aboutUs/orgStructure">Organizational Structure</Link>
                  </li>
                </ul>
              </li>
              
              {/* Activities */}
              <li className="py-3 bg-white overflow-auto" >
                <a onClick={toggleAct}>Activities &darr;</a>
                <ul className={isActOpen ? "ml-5 mt-3 transition duration-200" : "hidden"}>
                  <li className="py-3">
                    <Link href="/Activities">Activities</Link>
                  </li>

                  {/* Sponsorship */}
                  <li className="py-3 bg-white" >
                    <Link href="/aboutUs/ourStory">
                      <a onClick={toggleSponsor}>Sponsorship &darr;</a>
                    </Link>
                    <ul className={isSponsorOpen ? "ml-5 mt-3" : "hidden"}>
                      <li className="py-3">
                        <Link href="/activities/sponsorship/schoolStudentsOrdinary">School Students up to GCE Ordinary Level</Link>
                      </li>
                      <li className="py-3">
                        <Link href="/activities/sponsorship/schoolStudentsAdvance">School Students in GCE Advance Level</Link>
                      </li>
                      <li className="py-3">
                        <Link href="/activities/sponsorship/universityStudents">University Students</Link>
                      </li>
                    </ul>
                  </li>

                  {/* School / Zonal Projects */}
                  <li className="py-3 bg-white" >
                    <Link href="/aboutUs/ourStory">
                      <a onClick={toggleProject}>School/Zonal Projects &darr;</a>
                    </Link>
                    <ul className={isProjectOpen ? "ml-5 mt-3" : "hidden"}>
                      <li className="py-3">
                        <Link href="/activities/schoolProjects/primaryEducation">
                          <a>Primary Education</a>
                        </Link>
                      </li>
                      <li className="py-3">
                        <Link href="/activities/schoolProjects/englishLanguageProficiency">
                          <a>English Language Proficienty</a>
                        </Link>
                      </li>
                      <li className="py-3">
                        <Link href="/activities/schoolProjects/grade5ScholarshipRevisionClasses">
                          <a>Grade 5 Scholarship Revisions Classes</a>
                        </Link>
                      </li>
                      <li className="py-3">
                        <Link href="/activities/schoolProjects/gceExamPreparationClasses">
                          <a>GCE O/L Exam Preparation Classes</a>
                        </Link>
                      </li>
                      <li className="py-3">
                        <Link href="/activities/schoolProjects/sports">
                          <a>Co Curricular Activities - Sports</a>
                        </Link>
                      </li>
                      <li className="py-3">
                        <Link href="/activities/schoolProjects/musicDramaDance">
                          <a>Co-Curricular Activities – Music / Drama / Dance</a>
                        </Link>
                      </li>
                      <li className="py-3">
                        <Link href="/activities/schoolProjects/educationalTours">
                          <a>Educational Tours</a>
                        </Link>
                      </li>
                      <li className="py-3">
                        <Link href="/activities/schoolProjects/prizeDay">
                          <a>Prize Day</a>
                        </Link>
                      </li>
                      <li className="py-3">
                        <Link href="/activities/schoolProjects/infrastructure">
                          <a>Infrastructure</a>
                        </Link>
                      </li>
                      <li className="py-3">
                        <Link href="/activities/schoolProjects/healthAndEnvironment">
                          <a>Health and Environment</a>
                        </Link>
                      </li>
                      
                    </ul>
                  </li>

                  {/* Ict Projects */}
                  <li className="py-3 bg-white" >
                    <Link href="/aboutUs/ourStory">
                      <a onClick={toggleIct}>Ict Projects &darr;</a>
                    </Link>
                    <ul className={isIctOpen ? "ml-5 mt-3" : "hidden"}>
                      <li className="py-3">
                        <Link href="/activities/ictProjects/facilitiesToSchools">
                          <a>Ict Facilities to Schools</a>
                        </Link>
                      </li>
                      <li className="py-3">
                        <Link href="/activities/ictProjects/workshopAndSeminar">
                          <a>Workshop and Seminar</a>
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="py-3 bg-white">
                    <Link href="/activities/specialNeeds">Special Needs</Link>
                  </li>
                  <li className="py-3 bg-white">
                    <Link href="/activities/covid19Relief">Covid 19 Relief</Link>
                  </li>
                </ul>
              </li>

              <li className="py-3 ">
                <Link href="/ourImpact">
                  <a>Our Impact</a>
                </Link>
              </li>
              <li className="py-3 ">
                <Link href="/donation">
                  <a>Donation</a>
                </Link>
              </li>
              <li className="py-3 ">
                <Link href="/news">
                  <a>News</a>
                </Link>
              </li>
              <li className="py-3 ">
                <Link href="/contact">
                  <a>Contact</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header