import { Code2, Server, Database, Brain, ShieldCheck, Rocket } from 'lucide-react'

const skills = [
  { name: 'Frontend Development', icon: Code2 },
  { name: 'Backend Development', icon: Server },
  { name: 'Database & Payments', icon: Database },
  { name: 'AI Integrations', icon: Brain },
  { name: 'Performance & Security', icon: ShieldCheck },
  { name: 'DevOps & Deployment', icon: Rocket },
]

export default function Skills() {
  return (
    <section id="skills" className="py-12 sm:py-16 md:py-20">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-20">
        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-normal mb-10 md:mb-14">
          Skills <span className="font-extrabold">&amp; Services</span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-row md:flex-wrap justify-center gap-4 md:gap-8">
          {skills.map((skill, i) => (
            <div key={i} className="flex flex-col items-center justify-center gap-6 p-6 sm:p-8 border-2 border-black rounded bg-white aspect-square w-full max-w-[180px] md:w-[186px] md:h-[186px] mx-auto">
              <skill.icon className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 stroke-black" />
              <span className="text-sm sm:text-base md:text-lg font-bold text-center leading-tight">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
