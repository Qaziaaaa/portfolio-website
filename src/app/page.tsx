import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Testimonial from '@/components/Testimonial'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="space-y-10 pt-20">
        <Hero />
        <Skills />
        <Experience />
        <About />
        <Projects />
        <Testimonial />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
