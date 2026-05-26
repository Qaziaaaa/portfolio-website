'use client'

import { useState } from 'react'
import QLogo from './QLogo'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { href: '#projects', label: 'Work' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <nav className="w-full top-0 left-0 z-50 fixed bg-white">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 md:px-20">
        <a href="/" className="flex items-center space-x-2 rtl:space-x-reverse">
          <QLogo className="w-7 h-7 text-black" />
          <p className="text-black text-xl font-bold">Qazi Farhan</p>
        </a>
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-2"
          aria-controls="navbar-default"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div className={`${isOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-2 px-3 text-black rounded md:bg-transparent md:p-0"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="md:hidden">
              <button className="w-[153px] h-14 px-5 py-4 bg-black rounded justify-center items-center gap-2 inline-flex">
                <a className="text-white text-xl font-semibold leading-normal tracking-tight" href="/CV.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 relative">
                  <path d="M17.5 12.5V13.5C17.5 14.9001 17.5 15.6002 17.2275 16.135C16.9878 16.6054 16.6054 16.9878 16.135 17.2275C15.6002 17.5 14.9001 17.5 13.5 17.5H6.5C5.09987 17.5 4.3998 17.5 3.86502 17.2275C3.39462 16.9878 3.01217 16.6054 2.77248 16.135C2.5 15.6002 2.5 14.9001 2.5 13.5V12.5M14.1667 8.33333L10 12.5M10 12.5L5.83333 8.33333M10 12.5V2.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </li>
          </ul>
        </div>
        <div className="hidden md:block md:w-auto">
          <button className="w-[153px] h-14 px-5 py-4 bg-black rounded justify-center items-center gap-2 inline-flex">
              <a className="text-white text-xl font-semibold leading-normal tracking-tight" href="/CV.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 relative">
                <path d="M17.5 12.5V13.5C17.5 14.9001 17.5 15.6002 17.2275 16.135C16.9878 16.6054 16.6054 16.9878 16.135 17.2275C15.6002 17.5 14.9001 17.5 13.5 17.5H6.5C5.09987 17.5 4.3998 17.5 3.86502 17.2275C3.39462 16.9878 3.01217 16.6054 2.77248 16.135C2.5 15.6002 2.5 14.9001 2.5 13.5V12.5M14.1667 8.33333L10 12.5M10 12.5L5.83333 8.33333M10 12.5V2.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}
