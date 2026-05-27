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

    ScrollTrigger.refresh()

    const sections = document.querySelectorAll('section[id]')

    sections.forEach((section) => {
      const id = section.id

      if (id === 'hero') {
        const lines = section.querySelectorAll('h2')
        const p = section.querySelector('p')
        const social = section.querySelector('.row > div:last-child')
        const img = section.querySelector('img')

        gsap.set(lines, { y: 60, opacity: 0 })
        gsap.to(lines, {
          y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out',
          scrollTrigger: { trigger: section, start: 'top 30%', toggleActions: 'play none none none' },
        })
        if (p) {
          gsap.set(p, { y: 40, opacity: 0 })
          gsap.to(p, {
            y: 0, opacity: 1, duration: 0.8, delay: 0.5, ease: 'power3.out',
            scrollTrigger: { trigger: section, start: 'top 30%', toggleActions: 'play none none none' },
          })
        }
        if (social) {
          gsap.set(social, { y: 30, opacity: 0 })
          gsap.to(social, {
            y: 0, opacity: 1, duration: 0.6, delay: 0.7, ease: 'power3.out',
            scrollTrigger: { trigger: section, start: 'top 30%', toggleActions: 'play none none none' },
          })
        }
        if (img) {
          gsap.set(img, { x: 80, opacity: 0, scale: 0.95 })
          gsap.to(img, {
            x: 0, opacity: 1, scale: 1, duration: 1, delay: 0.2, ease: 'power2.out',
            scrollTrigger: { trigger: section, start: 'top 30%', toggleActions: 'play none none none' },
          })
        }
      }

      if (id === 'about') {
        const img = section.querySelector('img')
        const heading = section.querySelector('h2')
        const paragraphs = section.querySelectorAll('p')

        if (img) {
          gsap.set(img, { x: -80, opacity: 0 })
          gsap.to(img, {
            x: 0, opacity: 1, duration: 1, ease: 'power2.out',
            scrollTrigger: { trigger: section, start: 'top 30%', toggleActions: 'play none none none' },
          })
        }
        if (heading) {
          gsap.set(heading, { x: 60, opacity: 0 })
          gsap.to(heading, {
            x: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
            scrollTrigger: { trigger: section, start: 'top 30%', toggleActions: 'play none none none' },
          })
        }
        if (paragraphs.length) {
          gsap.set(paragraphs, { y: 40, opacity: 0 })
          gsap.to(paragraphs, {
            y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out',
            scrollTrigger: { trigger: section, start: 'top 30%', toggleActions: 'play none none none' },
          })
        }
      }

      if (id === 'skills') {
        const heading = section.querySelector('h2')
        const cards = section.querySelectorAll('.grid > div')

        if (heading) {
          gsap.set(heading, { y: 40, opacity: 0 })
          gsap.to(heading, {
            y: 0, opacity: 1, duration: 0.7, ease: 'power3.out',
            scrollTrigger: { trigger: section, start: 'top 30%', toggleActions: 'play none none none' },
          })
        }
        if (cards.length) {
          gsap.set(cards, { y: 60, opacity: 0, scale: 0.85 })
          gsap.to(cards, {
            y: 0, opacity: 1, scale: 1, rotation: 0, duration: 0.6, stagger: 0.08,
            ease: 'back.out(1.7)',
            scrollTrigger: { trigger: section, start: 'top 30%', toggleActions: 'play none none none' },
          })
        }
      }

      if (id === 'experience') {
        const heading = section.querySelector('h2')
        const cards = section.querySelectorAll('.border-zinc-500')

        if (heading) {
          gsap.set(heading, { opacity: 0 })
          gsap.to(heading, {
            opacity: 1, duration: 0.8, ease: 'power3.out',
            scrollTrigger: { trigger: section, start: 'top 30%', toggleActions: 'play none none none' },
          })
        }
        if (cards.length) {
          gsap.set(cards, { y: 80, opacity: 0 })
          gsap.to(cards, {
            y: 0, opacity: 1, duration: 0.9, stagger: 0.2, ease: 'power4.out',
            scrollTrigger: { trigger: section, start: 'top 30%', toggleActions: 'play none none none' },
          })
        }
      }

      if (id === 'projects') {
        const heading = section.querySelector('h2')
        const rows = section.querySelectorAll('.lg\\:grid')

        if (heading) {
          gsap.set(heading, { y: 40, opacity: 0 })
          gsap.to(heading, {
            y: 0, opacity: 1, duration: 0.7, ease: 'power3.out',
            scrollTrigger: { trigger: section, start: 'top 30%', toggleActions: 'play none none none' },
          })
        }
        if (rows.length) {
          gsap.set(rows, { y: 100, opacity: 0 })
          gsap.to(rows, {
            y: 0, opacity: 1, duration: 1, stagger: 0.3, ease: 'expo.out',
            scrollTrigger: { trigger: section, start: 'top 30%', toggleActions: 'play none none none' },
          })
        }
      }

      if (id === 'testimonials') {
        const title = section.querySelector('h2')
        const sub = section.querySelector('p')
        const cards = section.querySelectorAll('.grid > div')

        if (title) {
          gsap.set(title, { y: 30, opacity: 0 })
          gsap.to(title, {
            y: 0, opacity: 1, duration: 0.6, ease: 'power3.out',
            scrollTrigger: { trigger: section, start: 'top 30%', toggleActions: 'play none none none' },
          })
        }
        if (sub) {
          gsap.set(sub, { y: 20, opacity: 0 })
          gsap.to(sub, {
            y: 0, opacity: 1, duration: 0.6, delay: 0.15, ease: 'power3.out',
            scrollTrigger: { trigger: section, start: 'top 30%', toggleActions: 'play none none none' },
          })
        }
        if (cards.length) {
          gsap.set(cards, { y: 50, opacity: 0, scale: 0.9 })
          gsap.to(cards, {
            y: 0, opacity: 1, scale: 1, duration: 0.7, stagger: 0.1, ease: 'expo.out',
            scrollTrigger: { trigger: section, start: 'top 30%', toggleActions: 'play none none none' },
          })
        }
      }

      if (id === 'contact') {
        const heading = section.querySelector('h2')
        const lines = section.querySelectorAll('p, .text-2xl')
        const inputs = section.querySelectorAll('input, textarea, button')

        if (heading) {
          gsap.set(heading, { y: 40, opacity: 0 })
          gsap.to(heading, {
            y: 0, opacity: 1, duration: 0.9, ease: 'power3.out',
            scrollTrigger: { trigger: section, start: 'top 30%', toggleActions: 'play none none none' },
          })
        }
        if (lines.length) {
          gsap.set(lines, { x: 40, opacity: 0 })
          gsap.to(lines, {
            x: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: 'power3.out',
            scrollTrigger: { trigger: section, start: 'top 30%', toggleActions: 'play none none none' },
          })
        }
        if (inputs.length) {
          gsap.set(inputs, { x: -40, opacity: 0 })
          gsap.to(inputs, {
            x: 0, opacity: 1, duration: 0.5, stagger: 0.08, ease: 'power3.out',
            scrollTrigger: { trigger: section, start: 'top 30%', toggleActions: 'play none none none' },
          })
        }
      }
    })

    ScrollTrigger.refresh()

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill())
    }
  }, [])

  return null
}
