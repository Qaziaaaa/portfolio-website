'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Loader() {
  const [show, setShow] = useState(true)
  const [step, setStep] = useState(0)

  useEffect(() => {
    const t1 = setTimeout(() => setStep(1), 400)
    const t2 = setTimeout(() => setStep(2), 900)
    const t3 = setTimeout(() => setStep(3), 1400)
    const t4 = setTimeout(() => setStep(4), 1800)
    const done = setTimeout(() => setShow(false), 2500)

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
      <div className="flex flex-col items-center gap-3 mb-8">
        <Image src="/logo.png" width={72} height={72} alt="Logo" className={`transition-all duration-700 ${step >= 1 ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`} />
        <p className={`text-white text-3xl font-bold tracking-tight transition-all duration-500 ${step >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>Qazi Farhan</p>
      </div>

      <div className="w-64 flex flex-col gap-2">
        <div className="flex items-center gap-2 font-mono text-sm">
          <span className="text-green-400">{'>'}</span>
          <span className={`text-zinc-300 transition-all duration-500 ${step >= 2 ? 'opacity-100' : 'opacity-0'}`}>Initializing modules...</span>
          <span className={`w-1.5 h-4 bg-green-400 animate-pulse transition-opacity ${step >= 2 ? 'opacity-100' : 'opacity-0'}`} />
        </div>

        <div className="w-full h-1 bg-zinc-800 rounded-full overflow-hidden">
          <div
            className={`h-full bg-green-400 rounded-full transition-all duration-[1200ms] ease-out ${step >= 2 ? 'w-full' : 'w-0'}`}
          />
        </div>

        <div className={`flex items-center gap-2 font-mono text-sm transition-all duration-500 ${step >= 3 ? 'opacity-100' : 'opacity-0'}`}>
          <span className="text-green-400">{'>'}</span>
          <span className="text-zinc-500">Ready.</span>
        </div>
      </div>
    </div>
  )
}
