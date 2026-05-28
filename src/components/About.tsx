'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const paragraphs = [
  "I'm Qazi Farhan Ahmad — an AI-focused Full Stack Web Developer based in Pakistan, specializing in building modern, scalable, and high-performance web applications.",
  'I work with React, TypeScript, Node.js, and MongoDB to create production-ready systems with clean architecture, strong security, and optimized performance.',
  "I don't just build websites — I build solutions that help businesses:",
  '▸ Generate leads and increase conversions',
  '▸ Automate workflows with AI integrations',
  '▸ Deliver fast, reliable user experiences',
  'Currently open to internships and freelance opportunities where I can contribute to real-world products and grow fast.',
]

function splitIntoChars(text: string) {
  return text.split('').map((char, i) => (
    <span key={i} className="inline-block" style={{ opacity: 0 }}>{char === ' ' ? '\u00A0' : char}</span>
  ))
}

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const charSpans = section.querySelectorAll('.about-text span')

    gsap.set(charSpans, { opacity: 0 })

    gsap.to(charSpans, {
      opacity: 1,
      duration: 0.005,
      stagger: 0.004,
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'top 75%',
        toggleActions: 'play none none none',
      },
    })
  }, [])

  return (
    <section ref={sectionRef} className="relative flex flex-col items-center max-w-screen-xl px-4 mx-auto md:flex-row sm:px-6 p-8 md:py-[60px] md:px-20" id="about">
      <div className="flex items-center py-5 md:w-5/12 md:pb-20 md:pt-10 md:pl-10 md:mr-8">
        <img src="/about.svg" alt="man with laptop" className="w-full" />
      </div>
      <div className="row items-center py-5 md:w-7/12 md:pb-20 md:pt-10">
        <div className="text-left">
          <h2 className="text-black text-5xl font-normal sm:text-4xl md:text-5xl leading-[56px]">
            Building Solutions,{' '}<span className="font-extrabold">Not Just Websites</span>
          </h2>
          <div className="about-text text-zinc-600 text-base font-normal leading-normal tracking-tight sm:text-1xl mt-5 text-justify" style={{ overflowWrap: 'break-word' }}>
            {paragraphs.map((text, i) => (
              <p key={i} className="about-line mb-4 last:mb-0">{splitIntoChars(text)}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
