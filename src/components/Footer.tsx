'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Footer() {
  const [year, setYear] = useState('')

  useEffect(() => {
    setYear(String(new Date().getFullYear()))
  }, [])

  return (
    <footer className="flex justify-center px-4 bg-black bg-fixed bg-bottom">
      <div className="container px-6 py-6 max-w-screen-xl mx-auto">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <Image className="w-auto h-10" src="/w-logo.png" width={40} height={40} alt="Logo" />
            <p className="text-white text-xl font-bold">PORTFOLIO</p>
          </div>
          <div className="flex mt-4 md:m-0">
            <div className="-mx-4">
              <div className="text-white">&copy; {year} Qazi Farhan. All rights reserved.</div>
              <div className="text-white text-sm mt-1">Qazi Farhan Ahmad — AI Web Developer &amp; MERN Stack Expert · Peshawar, Pakistan</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
