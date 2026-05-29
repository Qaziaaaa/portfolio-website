import { Mail, Phone } from 'lucide-react'

export default function Contact() {
  return (
    <section className="relative flex flex-col-reverse items-center max-w-screen-xl px-4 mx-auto md:flex-row p-14 md:py-[60px] md:px-20" id="contact">
      <div className="row items-center py-5 md:w-5/12 md:pb-20 md:pt-10">
        <div className="text-left space-y-3">
          <form className="ml-auto space-y-4">
            <input type="text" placeholder="Your Name" className="w-full rounded-md py-2.5 px-4 border-black border-2 placeholder:text-slate-400" />
            <input type="email" placeholder="Your Email" className="w-full rounded-md py-2.5 px-4 border-black border-2 placeholder:text-slate-400" />
            <input type="text" placeholder="Subject" className="w-full rounded-md py-2.5 px-4 border-black border-2 placeholder:text-slate-400" />
            <textarea placeholder="How can I help?" rows={6} className="w-full rounded-md px-4 pt-2.5 border-black border-2 placeholder:text-slate-400" />
            <div className="grid grid-rows-1 grid-flow-col gap-2">
              <button type="button" className="text-white bg-black font-semibold rounded-md text-sm px-4 py-2.5 w-full">Get In Touch</button>
            </div>
          </form>
        </div>
      </div>
      <div className="flex items-center py-5 md:w-6/12 md:pb-20 md:pt-10 md:pl-20">
        <div className="text-left space-y-3">
          <h2 className="text-4xl font-bold sm:text-4xl md:text-6xl">
            Open to{' '}<span className="text-white font-sans font-outline-sm md:font-outline">Opportunities</span>
          </h2>
          <p className="text-lg font-medium text-black pt-3">Let&apos;s build something great.</p>
          <p className="text-base text-zinc-600">I&apos;m open to internships, freelance projects, and collaboration opportunities. If you have an idea, a project, or need a developer — let&apos;s connect and build something valuable.</p>
          <p className="text-2xl font-medium md:pt-8 space-y-3">
            <a href="mailto:qazithekingston@gmail.com" className="flex items-center gap-3 hover:underline">
              <Mail className="w-6 h-6" />
              qazithekingston@gmail.com
            </a>
            <a href="tel:+923141935787" className="flex items-center gap-3 hover:underline">
              <Phone className="w-6 h-6" />
              +92 314 1935787
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
