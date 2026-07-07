'use client'

import { Mail, Phone } from 'lucide-react'
import { useState, FormEvent } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) return
    setSubmitted(true)
    setFormData({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <section className="flex flex-col-reverse md:flex-row max-w-screen-xl mx-auto px-4 sm:px-6 md:px-20 py-12 sm:py-16 md:py-20 gap-8 md:gap-16" id="contact">
      <div className="md:w-5/12 py-5">
        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          <div>
            <label htmlFor="name" className="sr-only">Your Name</label>
            <input
              id="name"
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="w-full rounded-md py-2.5 px-4 border-2 border-black placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
          <div>
            <label htmlFor="email" className="sr-only">Your Email</label>
            <input
              id="email"
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="w-full rounded-md py-2.5 px-4 border-2 border-black placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
          <div>
            <label htmlFor="subject" className="sr-only">Subject</label>
            <input
              id="subject"
              type="text"
              placeholder="Subject"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              className="w-full rounded-md py-2.5 px-4 border-2 border-black placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
          <div>
            <label htmlFor="message" className="sr-only">Message</label>
            <textarea
              id="message"
              placeholder="How can I help?"
              rows={6}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              className="w-full rounded-md px-4 pt-2.5 border-2 border-black placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-black resize-y"
            />
          </div>
          <button
            type="submit"
            className="text-white bg-black font-semibold rounded-md text-sm px-6 py-3 w-full hover:opacity-90 transition-opacity active:scale-[0.98]"
          >
            Get In Touch
          </button>
          {submitted && (
            <p className="text-green-600 text-sm text-center font-medium">Thanks! Your message has been received.</p>
          )}
        </form>
      </div>
      <div className="md:w-6/12 md:pl-10 py-5 flex items-center">
        <div className="space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
            Open to <span className="text-white font-sans font-outline-sm md:font-outline">Opportunities</span>
          </h2>
          <p className="text-lg sm:text-xl font-medium text-black pt-2">Let&apos;s build something great.</p>
          <p className="text-sm sm:text-base text-zinc-600 max-w-md">
            I&apos;m open to internships, freelance projects, and collaboration opportunities. If you have an idea, a project, or need a developer — let&apos;s connect and build something valuable.
          </p>
          <div className="text-lg sm:text-xl md:text-2xl font-medium pt-4 md:pt-8 space-y-4">
            <a href="mailto:qazithekingston@gmail.com" className="flex items-center gap-3 hover:underline">
              <Mail className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" />
              qazithekingston@gmail.com
            </a>
            <a href="tel:+923141935787" className="flex items-center gap-3 hover:underline">
              <Phone className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" />
              +92 314 1935787
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
