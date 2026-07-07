import { Code2, GraduationCap, BookOpen } from 'lucide-react'

const experiences = [
  {
    icon: Code2,
    title: 'Full Stack Developer',
    description: 'Built and deployed full-stack web applications including e-commerce platforms with Stripe payments, OTP authentication, real-time inventory, and admin dashboards. Focused on scalable architecture, security-first development, performance optimization, and clean maintainable code.',
    period: '2023 — Present',
  },
  {
    icon: GraduationCap,
    title: 'BS Software Engineering',
    description: 'Currently in 4th Semester — building a strong foundation in software engineering principles, data structures, algorithms, and system design. Applying academic knowledge directly to real-world projects and open source contributions.',
    period: '2023 — Present',
  },
  {
    icon: BookOpen,
    title: 'Self-Taught Frontend Developer',
    description: 'Mastered React, TypeScript, and modern frontend tooling through hands-on project building. Developed a strong eye for design, animation, and responsive layouts — building portfolio sites, agency landing pages, and UI-heavy applications.',
    period: '2022 — 2023',
  },
]

export default function Experience() {
  return (
    <section className="bg-black py-12 sm:py-16 md:py-20" id="experience">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-20">
        <div className="flex flex-col items-center text-center mb-10 md:mb-14">
          <p className="text-zinc-400 text-sm font-medium uppercase tracking-widest mb-2">Journey</p>
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold">
            <span className="font-medium">Education &amp;</span> Experience
          </h2>
        </div>
        <div className="flex flex-col gap-6 md:gap-8">
          {experiences.map((exp, i) => (
            <div key={i} className="flex flex-col p-6 sm:p-8 md:p-[30px] gap-6 md:gap-7 border border-zinc-500 rounded-lg">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4 md:gap-7">
                  <exp.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white shrink-0" />
                  <h3 className="text-white text-lg sm:text-xl md:text-2xl font-semibold">{exp.title}</h3>
                </div>
                <p className="text-zinc-300 text-sm md:text-base font-semibold whitespace-nowrap">{exp.period}</p>
              </div>
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed md:text-justify">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
