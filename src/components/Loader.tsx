'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Loader() {
  const [show, setShow] = useState(true)
  const [step, setStep] = useState(0)

  useEffect(() => {
    const t1 = setTimeout(() => setStep(1), 300)
    const t2 = setTimeout(() => setStep(2), 800)
    const t3 = setTimeout(() => setStep(3), 1300)
    const t4 = setTimeout(() => setStep(4), 1700)
    const done = setTimeout(() => {
      setShow(false)
      document.body.dataset.loaderDone = 'true'
      window.dispatchEvent(new CustomEvent('loaderDone'))
    }, 2400)

    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
      clearTimeout(t4)
      clearTimeout(done)
    }
  }, [])

  if (!show) return null

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black">
      <div className="flex flex-col items-center gap-6 mb-12">
        <Image src="/logo.png" width={80} height={80} alt="Logo" className={`transition-all duration-700 ${step >= 1 ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`} />
        <p className={`text-white text-2xl font-bold tracking-tight transition-all duration-500 ${step >= 1 ? 'opacity-100' : 'opacity-0'}`}>Qazi Farhan Ahmad</p>
      </div>

      <div className="w-56 flex flex-col gap-3">
        <div className="w-full h-[2px] bg-zinc-800">
          <div className={`h-full bg-white transition-all duration-[1200ms] ease-out ${step >= 2 ? 'w-full' : 'w-0'}`} />
        </div>
        <p className={`text-zinc-500 text-xs font-mono tracking-wider text-center transition-all duration-500 ${step >= 2 ? 'opacity-100' : 'opacity-0'}`}>LOADING</p>
        <p className={`text-zinc-600 text-xs font-mono tracking-wider text-center transition-all duration-500 ${step >= 3 ? 'opacity-100' : 'opacity-0'}`}>— ready —</p>
      </div>
    </div>
  )
}
