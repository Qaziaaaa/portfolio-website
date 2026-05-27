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

    const init = () => {
      const isDesktop = window.innerWidth >= 768
      if (!isDesktop) return

      const sections = document.querySelectorAll('section[id]')

    sections.forEach((section) => {
      const id = section.id

      if (id === 'hero') {
        const lines = section.querySelectorAll('h2')
        const p = section.querySelector('p')
        const social = section.querySelector('.row > div:last-child')
        const img = section.querySelector('img')

        lines.forEach((line, i) => {
          gsap.set(line, { y: 60, opacity: 0 })
          gsap.to(line, {
            y: 0, opacity: 1, duration: 0.8, delay: i * 0.15, ease: 'power3.out',
            scrollTrigger: { trigger: line, start: 'top 85%', toggleActions: 'play none none none' },
          })
        })
        if (p) {
          gsap.set(p, { y: 40, opacity: 0 })
          gsap.to(p, {
            y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
            scrollTrigger: { trigger: p, start: 'top 85%', toggleActions: 'play none none none' },
          })
        }
        if (social) {
          gsap.set(social, { y: 30, opacity: 0 })
          gsap.to(social, {
            y: 0, opacity: 1, duration: 0.6, ease: 'power3.out',
            scrollTrigger: { trigger: social, start: 'top 85%', toggleActions: 'play none none none' },
          })
        }
        if (img) {
          gsap.set(img, { x: 80, opacity: 0, scale: 0.95 })
          gsap.to(img, {
            x: 0, opacity: 1, scale: 1, duration: 1, ease: 'power2.out',
            scrollTrigger: { trigger: img, start: 'top 85%', toggleActions: 'play none none none' },
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
            scrollTrigger: { trigger: img, start: 'top 80%', toggleActions: 'play none none none' },
          })
        }
        if (heading) {
          gsap.set(heading, { x: 60, opacity: 0 })
          gsap.to(heading, {
            x: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
            scrollTrigger: { trigger: heading, start: 'top 80%', toggleActions: 'play none none none' },
          })
        }
        paragraphs.forEach((p) => {
          gsap.set(p, { y: 40, opacity: 0 })
          gsap.to(p, {
            y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
            scrollTrigger: { trigger: p, start: 'top 80%', toggleActions: 'play none none none' },
          })
        })
      }

      if (id === 'skills') {
        const heading = section.querySelector('h2')
        if (heading) {
          gsap.set(heading, { y: 40, opacity: 0 })
          gsap.to(heading, {
            y: 0, opacity: 1, duration: 0.7, ease: 'power3.out',
            scrollTrigger: { trigger: heading, start: 'top 85%', toggleActions: 'play none none none' },
          })
        }
        const cards = section.querySelectorAll('.grid > div')
        cards.forEach((card) => {
          gsap.set(card, { y: 60, opacity: 0, scale: 0.85 })
          gsap.to(card, {
            y: 0, opacity: 1, scale: 1, duration: 0.6, ease: 'back.out(1.7)',
            scrollTrigger: { trigger: card, start: 'top 80%', toggleActions: 'play none none none' },
          })
        })
      }

      if (id === 'experience') {
        const heading = section.querySelector('h2')
        if (heading) {
          gsap.set(heading, { opacity: 0 })
          gsap.to(heading, {
            opacity: 1, duration: 0.8, ease: 'power3.out',
            scrollTrigger: { trigger: heading, start: 'top 85%', toggleActions: 'play none none none' },
          })
        }
        const cards = section.querySelectorAll('.border-zinc-500')
        cards.forEach((card) => {
          gsap.set(card, { y: 80, opacity: 0 })
          gsap.to(card, {
            y: 0, opacity: 1, duration: 0.9, ease: 'power4.out',
            scrollTrigger: { trigger: card, start: 'top 80%', toggleActions: 'play none none none' },
          })
        })
      }

      if (id === 'projects') {
        const heading = section.querySelector('h2')
        if (heading) {
          gsap.set(heading, { y: 40, opacity: 0 })
          gsap.to(heading, {
            y: 0, opacity: 1, duration: 0.7, ease: 'power3.out',
            scrollTrigger: { trigger: heading, start: 'top 85%', toggleActions: 'play none none none' },
          })
        }
        const rows = section.querySelectorAll('.lg\\:grid')
        rows.forEach((row) => {
          gsap.set(row, { y: 100, opacity: 0 })
          gsap.to(row, {
            y: 0, opacity: 1, duration: 1, ease: 'expo.out',
            scrollTrigger: { trigger: row, start: 'top 75%', toggleActions: 'play none none none' },
          })
        })
      }

      if (id === 'testimonials') {
        const title = section.querySelector('h2')
        const ps = section.querySelectorAll('p')
        if (title) {
          gsap.set(title, { y: 30, opacity: 0 })
          gsap.to(title, {
            y: 0, opacity: 1, duration: 0.6, ease: 'power3.out',
            scrollTrigger: { trigger: title, start: 'top 85%', toggleActions: 'play none none none' },
          })
        }
        if (ps.length) {
          ps.forEach((p) => {
            gsap.set(p, { y: 20, opacity: 0 })
            gsap.to(p, {
              y: 0, opacity: 1, duration: 0.6, ease: 'power3.out',
              scrollTrigger: { trigger: p, start: 'top 85%', toggleActions: 'play none none none' },
            })
          })
        }
        const cards = section.querySelectorAll('.grid > div')
        cards.forEach((card) => {
          gsap.set(card, { y: 50, opacity: 0, scale: 0.9 })
          gsap.to(card, {
            y: 0, opacity: 1, scale: 1, duration: 0.7, ease: 'expo.out',
            scrollTrigger: { trigger: card, start: 'top 80%', toggleActions: 'play none none none' },
          })
        })
      }

      if (id === 'contact') {
        const heading = section.querySelector('h2')
        const lines = section.querySelectorAll('p, .text-2xl')
        const inputs = section.querySelectorAll('input, textarea, button')

        if (heading) {
          gsap.set(heading, { y: 40, opacity: 0 })
          gsap.to(heading, {
            y: 0, opacity: 1, duration: 0.9, ease: 'power3.out',
            scrollTrigger: { trigger: heading, start: 'top 85%', toggleActions: 'play none none none' },
          })
        }
        lines.forEach((line) => {
          gsap.set(line, { x: 40, opacity: 0 })
          gsap.to(line, {
            x: 0, opacity: 1, duration: 0.7, ease: 'power3.out',
            scrollTrigger: { trigger: line, start: 'top 85%', toggleActions: 'play none none none' },
          })
        })
        inputs.forEach((input) => {
          gsap.set(input, { x: -40, opacity: 0 })
          gsap.to(input, {
            x: 0, opacity: 1, duration: 0.5, ease: 'power3.out',
            scrollTrigger: { trigger: input, start: 'top 85%', toggleActions: 'play none none none' },
          })
        })
      }
    })

      ScrollTrigger.refresh()

      return () => {
        ScrollTrigger.getAll().forEach((st) => st.kill())
      }
    }

    if (document.body.dataset.loaderDone === 'true') {
      init()
    } else {
      window.addEventListener('loaderDone', init, { once: true })
    }
  }, [])

  return null
}
