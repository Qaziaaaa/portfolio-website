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
    <section className="self-stretch bg-black overflow-hidden flex flex-row items-start justify-start md:py-[60px] md:px-20 max-w-full py-10" id="experience">
      <div className="flex-1 overflow-hidden flex flex-col items-center py-0 md:px-8 box-border gap-[20px] max-w-full">
        <div className="self-stretch overflow-hidden flex flex-row items-center justify-center py-5 px-6 md:px-0 gap-[16px]">
          <p className="text-zinc-400 text-sm font-medium uppercase tracking-widest whitespace-nowrap">Journey</p>
          <h2 className="text-white py-5 text-3xl sm:text-4xl md:text-5xl font-bold">
            <span className="font-medium">Education &amp;</span> Experience
          </h2>
        </div>
        <div className="self-stretch overflow-hidden flex flex-col items-start justify-start py-10 px-6 gap-[32px]">
          {experiences.map((exp, i) => (
            <div key={i} className="self-stretch box-border flex flex-col items-start justify-start py-[30px] px-[23px] gap-[28px] max-w-full border-[1px] border-solid border-zinc-500 rounded-lg">
              <div className="self-stretch flex md:flex-row flex-col items-center justify-between max-w-full">
                <div className="flex flex-row items-center justify-start gap-7 max-w-full">
                  <exp.icon className="w-8 h-8 text-white" />
                  <h3 className="text-left text-white md:text-2xl text-xl font-semibold leading-7">{exp.title}</h3>
                </div>
                <div className="self-start mt-4 md:mt-0 md:self-center">
                  <p className="text-zinc-300 text-sm md:text-base font-semibold leading-tight whitespace-nowrap">{exp.period}</p>
                </div>
              </div>
              <div className="text-left md:text-justify text-base font-normal leading-normal text-zinc-300 tracking-tight">{exp.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
