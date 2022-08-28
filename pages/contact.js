import React from 'react'
import Head from 'next/head'

const contact = () => {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <div className="container">
        <div className="contact">
          <h2 className="heading mt-5 text-center text-6xl font-bold relative text-orange-500">Contact</h2>

          <h3 className="text-3xl text-center text-gray-600 font-semibold">Our Country Representative</h3>
          <div className="mt-10">
            <table className="table-auto w-3/4 mx-auto p-5">
              <thead className="bg-orange-600 text-white">
                <tr className="h-12">
                  <th className="text-left pl-4">Country</th>
                  <th className="text-left">Name</th>
                  <th className="text-left">Email</th>
                </tr>
              </thead>
              <tbody>
                <tr className="h-14 border-b">
                  <td className="w-1/5 pl-4">Australia</td>
                  <td className="w-2/5">Srithar Nagarajah</td>
                  <td className="w-2/5">srithar.nagarajah69@gmail.com</td>
                </tr>
                <tr className="h-14 border-b">
                  <td className="w-1/5 "></td>
                  <td className="w-2/5">Vijendra Vijayaratnam</td>
                  <td className="w-2/5">vijendra@sjc87scholarship.org</td>
                </tr>
                <tr className="h-14 border-b">
                  <td className="w-1/5 pl-4">Canada</td>
                  <td className="w-2/5">Mithilan Thavarasalingam</td>
                  <td className="w-2/5">m.thava@sjc87scholarship.org</td>
                </tr>
                <tr className="h-14 border-b">
                  <td className="w-1/5 pl-4"></td>
                  <td className="w-2/5">Dhanushan Balarajah</td>
                  <td className="w-2/5">d.balarajah@sjc87scholarship.org</td>
                </tr>
                <tr className="h-14 border-b">
                  <td className="w-1/5 pl-4">Sri Lanka</td>
                  <td className="w-2/5">Brain Thamboo</td>
                  <td className="w-2/5">thambo@sjc87scholarship.org</td>
                </tr>
                <tr className="h-14 border-b">
                  <td className="w-1/5 pl-4"></td>
                  <td className="w-2/5">Rajan Niles</td>
                  <td className="w-2/5">r.niles@sjc87scholarship.org</td>
                </tr>
                <tr className="h-14 border-b">
                  <td className="w-1/5 pl-4"></td>
                  <td className="w-2/5">Vageesan Alalasundaram</td>
                  <td className="w-2/5">vageesan@sjc87scholarship.org</td>
                </tr>
                <tr className="h-14 border-b">
                  <td className="w-1/5 pl-4"></td>
                  <td className="w-2/5">Dekala Murugesu</td>
                  <td className="w-2/5"></td>
                </tr>
                <tr className="h-14 border-b">
                  <td className="w-1/5 pl-4">UK</td>
                  <td className="w-2/5">Sudarshan Thurairatnam</td>
                  <td className="w-2/5">Suda@sjc87scholarship.org</td>
                </tr>
                <tr className="h-14 border-b">
                  <td className="w-1/5 pl-4">USA</td>
                  <td className="w-2/5">Ananda Kumar</td>
                  <td className="w-2/5">s.ananthakumar@sjc87scholarship.org</td>
                </tr>
                <tr className="h-14 border-b">
                  <td className="w-1/5 pl-4"></td>
                  <td className="w-2/5">Jehan Canagarajah</td>
                  <td className="w-2/5">j.canagarajah@sjc87scholarship.org</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-14 border-t border-orange-400">
          </div>

          <div className="contact-form mt-14 grid grid-cols-5">
            <div className="bg-orange-600 col-span-2 w-full h-full flex justify-center items-center relative rounded after:absolute after:h-5 after:w-5 after:bg-orange-600 after:top-1/2 after:-right-0 after:translate-x-1/2 after:rotate-45">
              <p className="text-center font-semibold text-xl p-5 text-white w-1/2 ">We&apos;d love to hear from you. Just choose the most convenient method and we&apos;ll get back to you as soon as we can.</p>
            </div>

            <div className="ml-5 col-span-3">
              <form className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="Your Name" className="placeholder:text-gray-600 text-orange-600 p-2 text-md border outline-none rounded"/>
                <input type="text" placeholder="Your Mobile Number" className="placeholder:text-gray-600 text-orange-600 p-2 text-md border outline-none rounded" />
                <input type="email" placeholder="Email" className="col-span-2 placeholder:text-gray-600 text-orange-600 p-2 text-md border outline-none rounded" />
                <textarea cols="30" rows="6" placeholder="Your Message" className="col-span-2 placeholder:text-gray-600 text-orange-600 p-2 text-md border outline-none rounded"></textarea>
                <button className="bg-orange-600 text-white py-2 rounded col-span-2">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default contact