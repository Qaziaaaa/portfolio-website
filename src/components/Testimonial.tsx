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
    <section className="px-2 md:py-[60px] md:px-20 pb-16" id="testimonials">
      <div className="relative flex flex-col text-center max-w-screen-sm px-4 mx-auto sm:px-6 p-8 md:pb-20">
        <p className="text-zinc-600 text-sm font-medium uppercase tracking-widest mb-2">Why Choose Me</p>
        <h2 className="text-black text-4xl font-normal md:text-5xl">
          Why{' '}<span className="font-extrabold">Work With Me</span>
        </h2>
        <p className="text-zinc-600 text-base mt-4 max-w-xl mx-auto">What you get when you work with Qazi Farhan Ahmad</p>
      </div>
      <div className="grid gap-6 md:grid-cols-3 max-w-screen-xl mx-auto px-4">
        {reasons.map((item, i) => (
          <div key={i} className="self-stretch flex flex-col py-8 px-6 gap-5 border-2 border-black rounded items-center text-center bg-white">
            <div className="w-14 h-14 rounded-full bg-black flex items-center justify-center">
              <item.icon className="w-6 h-6 text-white" />
            </div>
            <h5 className="text-base font-bold">{item.title}</h5>
            <p className="text-zinc-600 text-sm leading-relaxed max-w-xs">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
