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
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            <Image className="w-auto h-12" src="/logo.png" width={48} height={48} alt="Logo" />
            <div className="flex flex-col">
              <p className="text-white text-3xl md:text-4xl font-bold leading-none">Qazi Farhan</p>
              <p className="text-zinc-400 text-sm md:text-base font-medium tracking-wider leading-tight mt-1">AHMAD</p>
            </div>
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
