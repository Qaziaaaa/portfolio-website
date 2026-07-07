import { Code2, Rocket, Palette, Brain, ShieldCheck, MessageSquare } from 'lucide-react'

const reasons = [
  { icon: Code2, title: 'Clean, Scalable Code', desc: 'Every project is built with maintainability in mind — typed, documented, and structured for growth.' },
  { icon: Rocket, title: 'Fast & Reliable Delivery', desc: 'I ship on time without cutting corners. Production-ready from day one.' },
  { icon: Palette, title: 'Modern UI/UX Design', desc: 'Pixel-perfect interfaces that look great and feel intuitive on every device.' },
  { icon: Brain, title: 'AI-Powered Solutions', desc: 'I integrate AI tools — chatbots, automation, smart APIs — to give your product a real edge.' },
  { icon: ShieldCheck, title: 'Security-First Mindset', desc: 'JWT auth, CSRF protection, rate limiting, input validation — security is never an afterthought.' },
  { icon: MessageSquare, title: 'Clear Communication', desc: 'You always know what\'s happening. Regular updates, honest timelines, no surprises.' },
]

export default function Testimonial() {
  return (
    <section className="py-12 sm:py-16 md:py-20" id="testimonials">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-20">
        <div className="text-center mb-10 md:mb-14">
          <p className="text-zinc-600 text-sm font-medium uppercase tracking-widest mb-2">Why Choose Me</p>
          <h2 className="text-black text-3xl sm:text-4xl md:text-5xl font-normal">
            Why <span className="font-extrabold">Work With Me</span>
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base mt-4 max-w-xl mx-auto">What you get when you work with Qazi Farhan Ahmad</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((item, i) => (
            <div key={i} className="flex flex-col py-8 px-6 gap-5 border-2 border-black rounded items-center text-center bg-white">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-black flex items-center justify-center">
                <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h5 className="text-sm sm:text-base font-bold">{item.title}</h5>
              <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed max-w-xs">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
