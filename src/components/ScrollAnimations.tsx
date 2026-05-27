'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function ScrollAnimations() {
  const initRef = useRef(false)

  useEffect(() => {
    if (initRef.current) return
    initRef.current = true

    const isDesktop = window.innerWidth >= 768
    if (!isDesktop) return

    const mm = gsap.matchMedia()
    mm.add('(min-width: 768px)', () => {
      const sections = document.querySelectorAll('section')

      const animate = (el: Element, vars: gsap.TweenVars, trigger?: string) => {
        gsap.fromTo(
          el,
          { ...vars.from },
          {
            ...vars.to,
            scrollTrigger: {
              trigger: trigger || el,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      }

      sections.forEach((section) => {
        const id = section.id

        if (id === 'hero') {
          const lines = section.querySelectorAll('h2')
          const p = section.querySelector('p')
          const social = section.querySelector('.row > div:last-child')
          const img = section.querySelector('img')

          gsap.fromTo(
            lines,
            { y: 60, opacity: 0 },
            {
              y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out',
              scrollTrigger: { trigger: section, start: 'top 80%' },
            }
          )
          if (p) {
            gsap.fromTo(p,
              { y: 40, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.8, delay: 0.5, ease: 'power3.out',
                scrollTrigger: { trigger: section, start: 'top 80%' },
              }
            )
          }
          if (social) {
            gsap.fromTo(social,
              { y: 30, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.6, delay: 0.7, ease: 'power3.out',
                scrollTrigger: { trigger: section, start: 'top 80%' },
              }
            )
          }
          if (img) {
            gsap.fromTo(img,
              { x: 80, opacity: 0, scale: 0.95 },
              { x: 0, opacity: 1, scale: 1, duration: 1, delay: 0.2, ease: 'power2.out',
                scrollTrigger: { trigger: section, start: 'top 80%' },
              }
            )
          }
        }

        if (id === 'about') {
          const img = section.querySelector('img')
          const heading = section.querySelector('h2')
          const paragraphs = section.querySelectorAll('p')

          if (img) {
            gsap.fromTo(img,
              { x: -80, opacity: 0, rotateY: 5 },
              { x: 0, opacity: 1, rotateY: 0, duration: 1, ease: 'power2.out',
                scrollTrigger: { trigger: section, start: 'top 80%' },
              }
            )
          }
          if (heading) {
            gsap.fromTo(heading,
              { x: 60, opacity: 0 },
              { x: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
                scrollTrigger: { trigger: section, start: 'top 80%' },
              }
            )
          }
          if (paragraphs.length) {
            gsap.fromTo(paragraphs,
              { y: 40, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out',
                scrollTrigger: { trigger: section, start: 'top 80%' },
              }
            )
          }
        }

        if (id === 'skills') {
          const heading = section.querySelector('h2')
          const cards = section.querySelectorAll('.grid > div')

          if (heading) {
            gsap.fromTo(heading,
              { y: 40, opacity: 0, scale: 0.95 },
              { y: 0, opacity: 1, scale: 1, duration: 0.7, ease: 'power3.out',
                scrollTrigger: { trigger: section, start: 'top 85%' },
              }
            )
          }
          if (cards.length) {
            gsap.fromTo(cards,
              { y: 60, opacity: 0, scale: 0.85, rotateZ: -3 },
              {
                y: 0, opacity: 1, scale: 1, rotateZ: 0, duration: 0.6, stagger: 0.08,
                ease: 'back.out(1.7)',
                scrollTrigger: { trigger: section, start: 'top 80%' },
              }
            )
          }
        }

        if (id === 'testimonials') {
          const title = section.querySelector('h2')
          const sub = section.querySelector('p')
          const cards = section.querySelectorAll('.grid > div')

          if (title) {
            gsap.fromTo(title,
              { y: 30, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out',
                scrollTrigger: { trigger: section, start: 'top 85%' },
              }
            )
          }
          if (sub) {
            gsap.fromTo(sub,
              { y: 20, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.6, delay: 0.15, ease: 'power3.out',
                scrollTrigger: { trigger: section, start: 'top 85%' },
              }
            )
          }
          if (cards.length) {
            gsap.fromTo(cards,
              { y: 50, opacity: 0, scale: 0.9 },
              {
                y: 0, opacity: 1, scale: 1, duration: 0.7, stagger: 0.1,
                ease: 'expo.out',
                scrollTrigger: { trigger: section, start: 'top 80%' },
              }
            )
          }
        }

        if (id === 'experience') {
          const heading = section.querySelector('h2')
          const cards = section.querySelectorAll('.border-zinc-500')

          if (heading) {
            gsap.fromTo(heading,
              { y: 30, opacity: 0, clipPath: 'inset(0 0 100% 0)' },
              { y: 0, opacity: 1, clipPath: 'inset(0 0 0% 0)', duration: 0.8, ease: 'power3.out',
                scrollTrigger: { trigger: section, start: 'top 85%' },
              }
            )
          }
          if (cards.length) {
            gsap.fromTo(cards,
              { y: 80, opacity: 0, filter: 'blur(4px)' },
              {
                y: 0, opacity: 1, filter: 'blur(0px)', duration: 0.9, stagger: 0.2,
                ease: 'power4.out',
                scrollTrigger: { trigger: section, start: 'top 80%' },
              }
            )
          }
        }

        if (id === 'projects') {
          const heading = section.querySelector('h2')
          const rows = section.querySelectorAll('.lg\\:grid')

          if (heading) {
            gsap.fromTo(heading,
              { y: 40, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out',
                scrollTrigger: { trigger: section, start: 'top 85%' },
              }
            )
          }
          if (rows.length) {
            gsap.fromTo(rows,
              { y: 100, opacity: 0, scale: 0.98 },
              {
                y: 0, opacity: 1, scale: 1, duration: 1, stagger: 0.3,
                ease: 'expo.out',
                scrollTrigger: { trigger: section, start: 'top 80%' },
              }
            )
          }
        }

        if (id === 'contact') {
          const heading = section.querySelector('h2')
          const lines = section.querySelectorAll('p, .text-2xl')
          const inputs = section.querySelectorAll('input, textarea, button')

          if (lines.length) {
            gsap.fromTo(lines,
              { x: 40, opacity: 0 },
              { x: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: 'power3.out',
                scrollTrigger: { trigger: section, start: 'top 85%' },
              }
            )
          }
          if (inputs.length) {
            gsap.fromTo(inputs,
              { x: -40, opacity: 0, scale: 0.95 },
              {
                x: 0, opacity: 1, scale: 1, duration: 0.5, stagger: 0.08,
                ease: 'power3.out',
                scrollTrigger: { trigger: section, start: 'top 80%' },
              }
            )
          }
          if (heading) {
            gsap.fromTo(heading,
              { y: 40, opacity: 0, clipPath: 'inset(0 100% 0 0)' },
              { y: 0, opacity: 1, clipPath: 'inset(0 0% 0 0)', duration: 0.9, ease: 'power3.out',
                scrollTrigger: { trigger: section, start: 'top 85%' },
              }
            )
          }
        }
      })

      ScrollTrigger.refresh()
    })

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill())
    }
  }, [])

  return null
}
