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
    <section className="pt-10" id="skills">
      <div className="relative flex flex-col items-center max-w-screen-sm px-4 mx-auto sm:px-6 p-8 md:py-[60px] md:px-20">
        <h2 className="text-black text-4xl font-normal sm:text-4xl md:text-5xl">
          Skills{' '}<span className="font-extrabold">&amp; Services</span>
        </h2>
      </div>
        <div className="self-stretch overflow-hidden flex flex-col py-0 md:pb-20 px-4 sm:px-8 gap-[20px]">
        <div className="self-stretch grid grid-cols-2 md:flex md:flex-row md:flex-wrap justify-items-center md:items-center md:justify-center py-5 box-border gap-[10px] md:gap-[71px] min-h-[492px] text-center text-xl">
          {skills.map((skill, i) => (
            <div key={i} className="h-[145px] w-full max-w-[160px] md:h-[186px] md:w-[186px] md:max-w-none rounded bg-white box-border border-black flex flex-col items-center justify-center py-6 px-[22px] gap-[32px] border-[2px] border-solid border-black justify-self-center">
              <skill.icon className="w-18 h-18 md:w-14 md:h-14 stroke-black" />
              <b className="self-stretch relative text-sm md:text-lg">{skill.name}</b>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
