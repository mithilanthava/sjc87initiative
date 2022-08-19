import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import {AiFillEdit} from 'react-icons/ai'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next Starter</title>
        <meta name="description" content="Organized by psylab" />
        {/* Change your Icon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-[100vh] w-full flex justify-center items-center">
        <h1 className="">Welcome to sjc87</h1>
      </main>
    </div>
  )
}
