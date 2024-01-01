import React from 'react'
import { NextSeo } from 'next-seo';


import {
  AiOutlineDollar,
  AiOutlineFlag,
} from 'react-icons/ai'
import {HiBadgeCheck} from 'react-icons/hi'
import {CgTrees} from 'react-icons/cg'

const ourImpact = () => {
  return (
    <div>
     <NextSeo
        title="Our Impact"
        titleTemplate='SJC87INITIATIVE | %s'
        description="SJC87 INITIATIVE is not for profit Education Initiative was formed in 2009, mainly to improve the Education standard in the North and East of Sri Lanka. It operates with slightly different names in Australia, Canada, Sri Lanka, UK and USA."
        canonical='https://sjc87initiative.com'
      />
      <div>

        {/* Banner */}
        <div className="banner relative h-96 w-full">
          <img src="/img/ourImpact/banner.JPG" alt="Banner" className="h-full w-full object-cover brightness-50 rounded-b-3xl" />
        </div>

        {/* Main Container */}
        <div className="container">
          <h2 className="text-2xl md:text-4xl xl:text-6xl font-extrabold text-orange-500 text-center my-10">Our Impact since inception</h2>

          {/* Top card groups */}
          <div className="top_impact grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
            <div className="icon_group border rounded py-6 px-3 flex justify-center items-center flex-col text-center">
              <div className="icon bg-gray-100 text-orange-500 h-16 w-16 grid place-items-center text-4xl rounded-full border">
                <AiOutlineDollar />
              </div>
              <div className="desc mt-5">
                <p className="text-xl md:text-2xl font-semibold text-gray-600">LKR 420 Million</p>
                <span className="font-extrabold text-orange-500 text-xl">Money Raised</span>
                <p className="text-2xl md:text-6xl font-extrabold text-gray-600">&#60;2%</p>
                <p className="font-extrabold text-orange-500 text-xl">Admin Charges</p>
              </div>
            </div>
            <div className="icon_group border rounded py-6 px-3 flex justify-center items-center flex-col text-center">
              <div className="icon bg-gray-100 text-orange-500 h-16 w-16 grid place-items-center text-4xl rounded-full border">
                <AiOutlineFlag />
              </div>
              <div className="desc mt-5">
                <p className="text-xl md:text-2xl font-semibold text-gray-600">15</p>
                <span className="font-extrabold text-orange-500 text-xl">Years on Ground</span>
                <p className="text-2xl md:text-6xl font-extrabold text-gray-600">300+</p>
                <p className="font-extrabold text-orange-500 text-xl">Projects Funded</p>
              </div>
            </div>
            <div className="icon_group border rounded py-6 px-3 flex justify-center items-center flex-col text-center">
              <div className="icon bg-gray-100 text-orange-500 h-16 w-16 grid place-items-center text-4xl rounded-full border">
                <HiBadgeCheck />
              </div>
              <div className="desc mt-5">
                <p className="text-xl md:text-2xl font-semibold text-gray-600">50,000+</p>
                <span className="font-extrabold text-orange-500 text-xl">Benefited</span>
                <p className="text-2xl md:text-6xl font-extrabold text-gray-600">2000+</p>
                <p className="font-extrabold text-orange-500 text-xl">Students Sponsorship</p>
              </div>
            </div>
            <div className="icon_group border rounded py-6 px-3 flex justify-center items-center flex-col text-center">
              <div className="icon bg-gray-100 text-orange-500 h-16 w-16 grid place-items-center text-4xl rounded-full border">
                <CgTrees />
              </div>
              <div className="desc mt-5">
                <p className="text-xl md:text-2xl font-semibold text-gray-600">17+</p>
                <span className="text-xl md:text-2xl font-extrabold text-orange-500">13 North | 2 East | 2 Central</span>
                <p className="text-2xl md:text-6xl font-extrabold text-gray-600">Zones</p>
                <p className="font-extrabold text-orange-500 text-xl">Community Served</p>
              </div>
            </div>
          </div>

          {/* Horizontal Line */}
          <div className="relative my-10">
            <hr className=" bg-gray-500" />
            <div className="absolute h-5 w-5 bg-orange-500 rotate-45 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "></div>
          </div>

          <div className="container ">
            {/* Stories Header */}
            <div className="text-center mb-16">
              <h2 className="head text-2xl md:text-4xl font-extrabold text-orange-500">Stories</h2>
              <p className="font-light text-xl text-gray-600 w-3/4 mx-auto">We measure our success in actual lives changed. These stories are a testament to the difference that communities can make when we come together to create lasting change.</p>
            </div>

            {/* Stories */}
            <div className="stories space-y-10">
              {/* Story 1 */}
              <div className="story grid grid-cols-1 md:grid-cols-2 md:gap-5 xl:gap-8 place-items-center ">
                <div className="story_content text-center md:text-right mb-5 md:mb-0">
                  <h3 className="text-2xl md:text-4xl font-extrabold text-orange-500 mb-5">KAJALINY THEVARAJAN</h3>
                  <p className="text-xl md:text-2xl font-light text-gray-500">She has been in our sponsorship program since 2011. She is very talented in Art and Handicrafts. Her recent artwork has gotten into the magazine called &quot;Ullam&quot;. </p>
                </div>
                <div className="story_img w-full sm:w-[350px] h-[450px]">
                  <img src="/img/ourImpact/s1.jpg" alt="KAJALINY THEVARAJAN"  className="w-full h-full object-cover/top rounded-xl"/>
                </div>
              </div>

              {/* Story 2 */}
              <div className="story grid grid-cols-1 md:grid-cols-2 md:gap-5 xl:gap-8 place-items-center ">
                <div className="story_img w-full h-full grid grid-cols-1 md:grid-cols-2 gap-3">
                  <img src="/img/ourImpact/slider/s21.jpg" alt="Student 1"  className="w-full h-96 object-cover rounded-xl"/>
                  <img src="/img/ourImpact/slider/s22.jpg" alt="Student 2"  className="w-full h-96 object-cover rounded-xl"/>
                  <img src="/img/ourImpact/slider/s23.jpg" alt="Student 3"  className="w-full h-96 object-cover rounded-xl md:col-span-2"/>
                </div>
                <div className="story_content text-center md:text-left mt-5 md:mt-0">
                  <h3 className="text-2xl md:text-4xl font-extrabold text-orange-500 mb-5">VADDAKKACHCHI CENTRAL COLLEGE 2019 A/L STUDENTS</h3>
                  <p className="text-base font-light text-gray-500 mb-3">The year was 2017,  Vije and Senthil Ratnam of Toronto, Canada had just completed 25 years of marriage, for which  their children threw them a surprise Anniversary party. A few days later, SJC87 initiative got a call from the family saying they wanted to donate the  gift money to a worthy cause. We introduced our Special Science scholarships for 2019 A/L students and the family agreed to sponsor ten of these students, all from Vaddakkachchi Central College.</p>
                  <p className="text-base font-light text-gray-500 mb-3">Fast forward to 2020, four of these ten students have gained admission to University already and two more are probable at the later stages of the admission process.  Following are the names of the students and the program/University that they got admitted to: Kumarathasan Dineshkaran-Nursing, Eastern University Tilakshika Atputharasa-Siddha Mediciine and Surgery, Jaffna University Thayuritlipra Thevabalan-Bio Science, Southeastern Uni Kirustela Jochjeyaseelan-Aqua Resource Tech-Uva Wellassa</p>
                  <p className="text-base font-light text-gray-500 mb-3">Many thanks to the Ratnam family for making a big difference in the lives of these four young students, who now have a chance for a bright future Story created Nov 2020</p>
                  <p className="text-base font-light text-gray-500">March 2021...One other student Salini Tharsan has gained admission to Export Agriculture at Uva Wellassa University. So 5 out of the 10 students sponsored by Ratnam Family have now gained admission to University.</p>
                </div>
              </div>

              {/* Story 3 */}
              <div className="story grid grid-cols-1 md:grid-cols-2 md:gap-5 xl:gap-8 place-items-center ">
                <div className="story_content text-center md:text-right mb-5 md:mb-0">
                  <h3 className="text-2xl md:text-4xl font-extrabold text-orange-500 mb-5">LAKSANA RASENTHIRAM</h3>
                  <p className="text-md md:text-xl font-light text-gray-500">She is the youngest of three children, her father a labourer and mother a housewife. She comes from a village called Paandiyankulam, west of Maankulam close to Mallaavi in the Mullaitivu District, attending Paandiyankulam Maha Vidyalayam. Sponsorship helps her to stay in school and focus on studies. She has passed her GCE O/L in December 2019 and now studying GCE A/L, scheduled to sit for the exams in 2022...Story created July 2020.</p>
                </div>
                <div className="story_img w-full sm:w-[350px] h-[450px]">
                  <img src="/img/ourImpact/s3.jpg" alt="LAKSANA RASENTHIRAM"  className="w-full h-full object-cover rounded-xl"/>
                </div>
              </div>

              {/* Story 4 */}
              <div className="story grid grid-cols-1 md:grid-cols-2 md:gap-5 xl:gap-8 place-items-center ">
                <div className="story_img w-full sm:w-[350px] h-[450px]">
                  <img src="/img/ourImpact/s4.jpg" alt="RAVEENDRAN JANUJAN"  className="w-full h-full object-cover rounded-xl"/>
                </div>
                <div className="story_content text-center md:text-left mb-5 md:mb-0">
                  <h3 className="text-2xl md:text-4xl font-extrabold text-orange-500 mb-5">RAVEENDRAN JANUJAN </h3>
                  <p className="text-md md:text-xl font-light text-gray-500">His mother had passed away during war and the father was finding it tough to raise four boys, Janujan being the youngest.  His sponsorship started in Jan 2013 and he attends Mannaar Sithi Vinayagar Hindu College. He is scheduled to sit for the A/L exams this year, Commerce stream.</p>
                  <p className="text-md md:text-xl font-light text-gray-500">It is worth to note that Janujan&apos;s older brother, Sharmilan also got our sponsorship from a different sponsor , entered University from same school. He is now following Surveying Science at Sapragamuwa University....Story created July 2020</p>
                </div>
              </div>

              {/* Story 5 */}
              <div className="story grid grid-cols-1 md:grid-cols-2 md:gap-5 xl:gap-8 place-items-center ">
                <div className="story_content text-center md:text-right mb-5 md:mb-0">
                  <h3 className="text-2xl md:text-4xl font-extrabold text-orange-500 mb-5">SUGAJINY KARUNANITHI</h3>
                  <p className="text-md md:text-xl font-light text-gray-500">She is the youngest of four children. Her father is a farmer and mother a housewife. She lost two of her brothers in the war. She is now studying Siddha Medicine - 3rd Year at Jaffna University, Kaithady Campus. Originally from Kilinochchi, the sponsorship helps her to stay close to the Campus and continue her studies....Story created July 2020</p>
                </div>
                <div className="story_img w-full sm:w-[350px] h-[450px]">
                  <img src="/img/ourImpact/s5.jpg" alt="SUGAJINY KARUNANITHI"  className="w-full h-full object-cover rounded-xl"/>
                </div>
              </div>

              {/* Story 6 */}
              <div className="story grid grid-cols-1 md:grid-cols-2 md:gap-5 xl:gap-8 place-items-center ">
                <div className="story_img w-full sm:w-[350px] h-[450px]">
                  <img src="/img/ourImpact/s6.jpg" alt="KIRUSANTHY SELLATHURAI"  className="w-full h-full object-cover rounded-xl"/>
                </div>
                <div className="story_content text-center md:text-left mb-5 md:mb-0">
                  <h3 className="text-2xl md:text-4xl font-extrabold text-orange-500 mb-5">KIRUSANTHY SELLATHURAI</h3>
                  <p className="text-md md:text-xl font-light text-gray-500">Her father had died and her mother had a tough time raising three kids, So she was put in an orphanage, Mahadeva Ashramam. She moved from Piramanthanaaru Maha Vidyalayam to Kilinochchi Hindu College for her GCE Advanced Level. She obtained 3 passes in the Mathematics stream in the 2017 A/L exams and has now gained admission to College of Education, Kopay with hopes of becoming a teacher...Story created July 2020</p>
                </div>
              </div>

              {/* Story 7 */}
              <div className="story grid grid-cols-1 md:grid-cols-2 md:gap-5 xl:gap-8 place-items-center ">
                
                <div className="story_content text-center md:text-right mb-5 md:mb-0">
                  <h3 className="text-2xl md:text-4xl font-extrabold text-orange-500 mb-5">THAMIZHINY NANTHAKUMAR</h3>
                  <p className="text-md md:text-xl font-light text-gray-500">She is the second of seven children in her family. Her father was a labourer and mother a housewife, the family was struggling to feed the kids. Our sponsor&apos;s assistance was a great help to Thamizhiny&apos;s studies. With about 8 months left for the A/L exams in 2019, our sponsor identified that Thamizhiny and her siblings were not getting proper food and this was affecting her studies.  He provided extra assistance, with which SJC87 arranged nutritious food (Milk and Eggs) for the whole family. Thamizhiny&apos;s performance improved significantly and she scored A,2Bs in the Arts Stream with a district rank of 8 in the exams. She is now awaiting to hear about her University Admission, she missed the cut off for Law school as she doesn&apos;t have a &apos;C&apos; in her O/L English but hoping to get into Geographical Information Science at University of Peradeniya...Story created July 2020</p>
                  <p className="text-md md:text-xl font-light text-gray-500">Oct 2020:  Thamizhiny has gained Admission into the Bachelor of Arts Program at University of Peradeniya</p>
                </div>
                <div className="story_img w-full sm:w-[350px] h-[450px]">
                  <img src="/img/ourImpact/s7.jpg" alt="KIRUSANTHY SELLATHURAI"  className="w-full h-full object-cover rounded-xl"/>
                </div>
              </div>

              {/* Story 8 */}
              <div className="story grid grid-cols-1 md:grid-cols-2 md:gap-5 xl:gap-8 place-items-center ">
                <div className="story_img w-full sm:w-[350px] h-[450px]">
                  <img src="/img/ourImpact/s8.jpg" alt="DILAKSHA SENTHAMARAISELVAN"  className="w-full h-full object-cover rounded-xl"/>
                </div>
                <div className="story_content text-center md:text-left mb-5 md:mb-0">
                  <h3 className="text-2xl md:text-4xl font-extrabold text-orange-500 mb-5">DILAKSHA SENTHAMARAISELVAN</h3>
                  <p className="text-md md:text-xl font-light text-gray-500">She was part of our Special Science scholarships, selected from a pool of students who did well in the 2017 GCE O/L exams (8A, C) and enrolled in the Science stream. Her father is a labourer and mother a housewife. She is studying at Tharmapuram Central College and scheduled to sit for her GCE A/L Biology stream this year. She has a younger brother studying at the same school....Story created July 2020</p>
                </div>
                
              </div>

              {/* Story 9 */}
              <div className="story grid grid-cols-1 md:grid-cols-2 md:gap-5 xl:gap-8 place-items-center ">
                <div className="story_content text-center md:text-right mb-5 md:mb-0">
                  <h3 className="text-2xl md:text-4xl font-extrabold text-orange-500 mb-5">KAJALAKSHIKA SABARATNAM</h3>
                  <p className="text-md md:text-xl font-light text-gray-500">Her mother had died and father re-married and was not willing to raise her. She lives with her maternal grandparents  attending Uruthirapuram  Maha Vidyalayam. Her elderly grandparents are unable to go to work and struggle to raise her. Our sponsorship helps her with her studies. She is now in Grade 10, scheduled to sit for her GCE O/L in December 2021....Story created July 2020</p>
                </div>
                <div className="story_img w-full sm:w-[350px] h-[450px]">
                  <img src="/img/ourImpact/s9.jpg" alt="KAJALAKSHIKA SABARATNAM"  className="w-full h-full object-cover rounded-xl"/>
                </div>
              </div>

              {/* Story 10 */}
              <div className="story grid grid-cols-1 md:grid-cols-2 md:gap-5 xl:gap-8 place-items-center ">
                <div className="story_img w-full sm:w-[350px] h-[450px]">
                  <img src="/img/ourImpact/s10.jpg" alt="KALAINILA ALAKETHISWARAN"  className="w-full h-full object-cover rounded-xl"/>
                </div>
                <div className="story_content text-center md:text-left mb-5 md:mb-0">
                  <h3 className="text-2xl md:text-4xl font-extrabold text-orange-500 mb-5">KALAINILA ALAKETHISWARAN</h3>
                  <p className="text-md md:text-xl font-light text-gray-500">She lost an eye during the war time. She started her education at Konavil Maha Vidyalayam and obtained 162 out of 200 and placed 76th in the District in the Grade 5 Scholarship exams in 2016. Her father is a labourer and mother a housewife. With no steady income, the family of four was struggling to make ends meet. Assistance from our sponsor helps her with her studies and also takes care of any issues with her eyes like prescription glasses and eye drops. Due to transportation issues, Kalainila has moved to St Theresa Girls College at the beginning of 2020. She consistently tops her class in studies....Story created July 2020</p>
                </div>
              </div>

              {/* Story 11 */}
              <div className="story grid grid-cols-1 md:grid-cols-2 md:gap-5 xl:gap-8 place-items-center ">
                <div className="story_content text-center md:text-right mb-5 md:mb-0">
                  <h3 className="text-2xl md:text-4xl font-extrabold text-orange-500 mb-5">PUVANSA SELVARAJAH</h3>
                  <p className="text-md md:text-xl font-light text-gray-500 mb-5">Her mother had died in 2010 and her father re-married her mother&apos;s sister. She was the oldest of four children, whom the father was finding tough to support with a labourer&apos;s income. She studied at Uruthirapuram Maha Vidyalayam and obtained 3B&apos;s in the 2019 GCE A/L examinations Commerce stream with a District rank of 33. She is now waiting to hear about her University admission...Story created July 2020</p>
                  <p className="text-md md:text-xl font-light text-gray-500">Oct 2020: Puvansa has gained admission into the Facilities Management program at University of Moratuwa</p>
                </div>
                <div className="story_img w-full sm:w-[350px] h-[450px]">
                  <img src="/img/ourImpact/s11.jpg" alt="PUVANSA SELVARAJAH"  className="w-full h-full object-cover rounded-xl"/>
                </div>
              </div>

              {/* Story 12 */}
              <div className="story grid grid-cols-1 md:grid-cols-2 md:gap-5 xl:gap-8 place-items-center ">
                <div className="story_img w-full sm:w-[350px] h-[450px]">
                  <img src="/img/ourImpact/s12.jpg" alt="THEVARASA RAVEESVAN"  className="w-full h-full object-cover rounded-xl"/>
                </div>
                <div className="story_content text-center md:text-left mb-5 md:mb-0">
                  <h3 className="text-2xl md:text-4xl font-extrabold text-orange-500 mb-5">KALAINILA ALAKETHISWARAN</h3>
                  <p className="text-md md:text-xl font-light text-gray-500">He was part of our Special Science scholarships, selected from a pool of students who did well -obtaining 5A, 3B, C - in the 2014 GCE O/L exams, and enrolled in the Mathematics stream in the A/L at Kilinochchi Hindu College. His father was a farmer and mother a housewife. He was the second of three boys in the family. He didn&apos;t do well in his first sitting of the A/L exams in 2017, obtaining C,S, F. But our keen sponsor made sure he supported Raveesvan staying in Jaffna and taking extra tuitions for his second sitting of the A/L in 2018. He obtained 3Cs with a District Rank of 38, getting admission to Sapragamuwa University following Computer and Information sytems, which started in January 2020....Story created July2020</p>
                </div>
              </div>

              {/* Story 13 */}
              <div className="story grid grid-cols-1 md:grid-cols-2 md:gap-5 xl:gap-8 place-items-center ">
                <div className="story_content text-center md:text-right mb-5 md:mb-0">
                  <h3 className="text-2xl md:text-4xl font-extrabold text-orange-500 mb-5">THILAKSHA YUVARASA</h3>
                  <p className="text-md md:text-xl font-light text-gray-500 mb-5">Her sponsorship started in July 2015 when her father was diagnosed with cancer and the mother had to do labour work to raise 5 kids, Thilaksha being the fourth. Her father has passed away in November 2018 and the sponsorship helps her with her studies. She is a student at Uruthirapuram  Maha Vidyalayam and she is scheduled to sit for the GCE O/L exam in Dec 2020....Story created July 2020</p>
                </div>
                <div className="story_img w-full sm:w-[350px] h-[450px]">
                  <img src="/img/ourImpact/s13.jpg" alt="THILAKSHA YUVARASA"  className="w-full h-full object-cover rounded-xl"/>
                </div>
              </div>

              {/* Story 14 */}
              <div className="story grid grid-cols-1 md:grid-cols-2 md:gap-5 xl:gap-8 place-items-center ">
                <div className="story_img w-full sm:w-[350px] h-[450px]">
                  <img src="/img/ourImpact/s14.jpg" alt="RUSANTHY KIRUPANANTHAN"  className="w-full h-full object-cover rounded-xl"/>
                </div>
                <div className="story_content text-center md:text-left mb-5 md:mb-0">
                  <h3 className="text-2xl md:text-4xl font-extrabold text-orange-500 mb-5">RUSANTHY KIRUPANANTHAN</h3>
                  <p className="text-md md:text-xl font-light text-gray-500">She was part of our Special Science scholarships, selected from a pool of students who did well in the 2016 GCE O/L exams and enrolled in the Science stream.  Her father is a labourer and mother a housewife. She is the second of three children. She did very well in GCE A/L exams in 2019, obtaining 2B, C in the Biology stream, ranking 6th in the District. She is now awaiting to hear about her University Admission...Story created July 2020</p>
                  <p className="text-md md:text-xl font-light text-gray-500 mt-5">Oct 2020:  Rusanthy has gained admission to the Veterinary Science program at University of Peradeniya.</p>
                </div>
              </div>

              {/* Story 15 */}
              <div className="story grid grid-cols-1 md:grid-cols-2 md:gap-5 xl:gap-8 place-items-center ">
                <div className="story_content text-center md:text-right mb-5 md:mb-0">
                  <h3 className="text-2xl md:text-4xl font-extrabold text-orange-500 mb-5">THARSA SIVASANGAR</h3>
                  <p className="text-md md:text-xl font-light text-gray-500 mb-5">Her father died during the war time and the mother re-married but not willing to raise her. She lives with her paternal grandmother, attending Piramanthanaaru Maha Vidyalayam. She is scheduled to sit for her GCE O/L exams in December 2020....Stroy created July 2020</p>
                </div>
                <div className="story_img w-full sm:w-[350px] h-[450px]">
                  <img src="/img/ourImpact/s15.jpg" alt="THARSA SIVASANGAR"  className="w-full h-full object-cover rounded-xl"/>
                </div>
              </div>

              {/* Story 16 */}
              <div className="story grid grid-cols-1 md:grid-cols-2 md:gap-5 xl:gap-8 place-items-center ">
                <div className="story_img w-full sm:w-[350px] h-[450px]">
                  <img src="/img/ourImpact/s16.jpg" alt="PRAGASH DILAKSAN"  className="w-full h-full object-cover rounded-xl"/>
                </div>
                <div className="story_content text-center md:text-left mb-5 md:mb-0">
                  <h3 className="text-2xl md:text-4xl font-extrabold text-orange-500 mb-5">PRAGASH DILAKSAN</h3>
                  <p className="text-md md:text-xl font-light text-gray-500">Both his parents died in the war and he lives with his maternal grandmother. His sponsorship started in 2011. We believe the sponsorship has kept him in school, Uruthirapuram Maha Vidyalayam. He passed his GCE O/L in Dec 2019 and now following the Arts stream in the A/L 2022...Story created July 2020</p>
                </div>
              </div>

              {/* Story 17 */}
              <div className="story grid grid-cols-1 md:grid-cols-2 md:gap-5 xl:gap-8 place-items-center ">
                <div className="story_content text-center md:text-right mb-5 md:mb-0">
                  <h3 className="text-2xl md:text-4xl font-extrabold text-orange-500 mb-5">PIRIYANTHI KARUNAKARAN</h3>
                  <p className="text-md md:text-xl font-light text-gray-500 mb-5">Her father died in early 2018 and the mother has to fight mental health issues while raising Piriyanthi. The sponsorship helps her stay in school. She is in Grade 10 now at Piramanthanaaru Maha Vidyalaym, scheduled to sit for her GCE O/L exams in Dec 2021....Story created July 2020</p>
                </div>
                <div className="story_img w-full sm:w-[350px] h-[450px]">
                  <img src="/img/ourImpact/s17.jpg" alt="PIRIYANTHI KARUNAKARAN"  className="w-full h-full object-cover rounded-xl"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ourImpact