import { Meteors } from '@/components/ui/meteors'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
const AdminNewsCard = () => {
  return (
    <figure className=" w-[300px] relative overflow-hidden rounded-md dark:bg-background/70  backdrop-saturate-150">
    <Image
      width={300}
      height={300}
      className="rounded-t-lg w-full"
      src="https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png"
      alt=""
    />
    <figcaption className="relative p-5">
      <Link href="/news/title">
        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          Noteworthy technology acquisitions 2021
        </h5>
      </Link>
      <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so
        far, in reverse chronological order.
      </p>
      <Link
        href="/news/title"
        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Read more
        <svg
          className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </Link>
      <Meteors number={20} />
    </figcaption>
  </figure>
  )
}

export default AdminNewsCard