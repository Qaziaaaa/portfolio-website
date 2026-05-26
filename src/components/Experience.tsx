const experiences = [
  {
    title: 'Full Stack Developer',
    description: 'Built and deployed full-stack web applications including e-commerce platforms with Stripe payments, OTP authentication, real-time inventory, and admin dashboards. Focused on scalable architecture, security-first development, performance optimization, and clean maintainable code.',
    period: '2023 — Present',
  },
  {
    title: 'BS Software Engineering',
    description: 'Currently in 4th Semester — building a strong foundation in software engineering principles, data structures, algorithms, and system design. Applying academic knowledge directly to real-world projects and open source contributions.',
    period: '2023 — Present',
  },
  {
    title: 'Self-Taught Frontend Developer',
    description: 'Mastered React, TypeScript, and modern frontend tooling through hands-on project building. Developed a strong eye for design, animation, and responsive layouts — building portfolio sites, agency landing pages, and UI-heavy applications.',
    period: '2022 — 2023',
  },
]

export default function Experience() {
  return (
    <section className="self-stretch bg-black overflow-hidden flex flex-row items-start justify-start md:py-[60px] md:px-20 max-w-full py-10">
      <div className="flex-1 overflow-hidden flex flex-col items-center py-0 md:px-8 box-border gap-[20px] max-w-full">
        <div className="self-stretch overflow-hidden flex flex-row items-center justify-center py-5 px-0 gap-[16px]">
          <p className="text-zinc-400 text-sm font-medium uppercase tracking-widest">Journey</p>
          <h2 className="text-white py-5 text-4xl font-bold sm:text-4xl md:text-5xl">
            <span className="font-medium">Education &amp;</span> Experience
          </h2>
        </div>
        <div className="self-stretch overflow-hidden flex flex-col items-start justify-start py-10 px-6 gap-[32px]">
          {experiences.map((exp, i) => (
            <div key={i} className="self-stretch box-border flex flex-col items-start justify-start py-[30px] px-[23px] gap-[28px] max-w-full border-[1px] border-solid border-zinc-500 rounded-lg">
              <div className="self-stretch flex md:flex-row flex-col items-center justify-between max-w-full">
                <div className="flex flex-row items-center justify-start gap-7 max-w-full">
                  <svg width="32" height="32" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 relative overflow-hidden shrink-0">
                    <path d="M49.2333 25.7833L30.2167 6.76665C29.6333 6.18331 28.8167 5.83331 28 5.83331C27.1833 5.83331 26.3667 6.18331 25.7833 6.76665L21.7 10.85L26.4833 15.6333C26.95 15.4 27.4167 15.2833 28 15.2833C29.9833 15.2833 31.5 16.8 31.5 18.7833C31.5 19.3666 31.3833 19.8333 31.15 20.3L35.8167 24.9666C36.2833 24.7333 36.75 24.6166 37.3333 24.6166C39.3167 24.6166 40.8333 26.1333 40.8333 28.1166C40.8333 30.1 39.3167 31.6166 37.3333 31.6166C35.35 31.6166 33.8333 30.1 33.8333 28.1166C33.8333 27.5333 33.95 27.0666 34.1833 26.6L29.5167 21.9333C29.4 21.9333 29.2833 22.05 29.1667 22.05V34.1833C30.5667 34.65 31.5 35.9333 31.5 37.45C31.5 39.4333 29.9833 40.95 28 40.95C26.0167 40.95 24.5 39.4333 24.5 37.45C24.5 35.9333 25.4333 34.65 26.8333 34.1833V21.9333C25.4333 21.4666 24.5 20.1833 24.5 18.6666C24.5 18.0833 24.6167 17.6166 24.85 17.15L20.0667 12.3666L6.76668 25.7833C6.18334 26.3666 5.83334 27.1833 5.83334 28C5.83334 28.8166 6.18334 29.6333 6.76668 30.2166L25.7833 49.2333C26.3667 49.8167 27.1833 50.1666 28 50.1666C28.8167 50.1666 29.6333 49.8167 30.2167 49.2333L49.2333 30.2166C49.8167 29.6333 50.1667 28.8166 50.1667 28C50.1667 27.1833 49.8167 26.3666 49.2333 25.7833Z" fill="white" />
                  </svg>
                  <h3 className="text-left text-white md:text-2xl text-xl font-semibold leading-7">{exp.title}</h3>
                </div>
                <div className="self-start mt-4 md:mt-0">
                  <p className="text-zinc-300 text-base font-semibold leading-tight">{exp.period}</p>
                </div>
              </div>
              <div className="text-justify text-base font-normal leading-normal text-zinc-300 tracking-tight">{exp.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
