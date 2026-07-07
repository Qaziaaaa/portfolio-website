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
    <section
      ref={sectionRef}
      className="flex flex-col items-center max-w-screen-xl mx-auto px-4 sm:px-6 md:px-20 py-12 sm:py-16 md:py-20 md:flex-row md:gap-12 lg:gap-20"
      id="about"
    >
      <div className="flex items-center justify-center md:w-5/12 py-5 md:py-10">
        <img src="/about.svg" alt="man with laptop" className="w-full max-w-sm md:max-w-full" />
      </div>
      <div className="md:w-7/12 py-5 md:py-10">
        <h2 className="text-black text-3xl sm:text-4xl md:text-5xl font-normal leading-tight md:leading-[56px]">
          Building Solutions,{' '}<span className="font-extrabold">Not Just Websites</span>
        </h2>
        <div className="about-text text-zinc-600 text-sm sm:text-base leading-relaxed tracking-tight mt-5 md:mt-6 text-justify" style={{ overflowWrap: 'break-word' }}>
          {paragraphs.map((text, i) => (
            <p key={i} className="about-line mb-4 last:mb-0">{splitIntoChars(text)}</p>
          ))}
        </div>
      </div>
    </section>
  )
}
