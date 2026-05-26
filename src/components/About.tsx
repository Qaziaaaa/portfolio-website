export default function About() {
  return (
    <section className="relative flex flex-col items-center max-w-screen-xl px-4 mx-auto md:flex-row sm:px-6 p-8 md:py-[60px] md:px-20" id="about">
      <div className="flex items-center py-5 md:w-5/12 md:pb-20 md:pt-10 md:pl-10 md:mr-8">
        <img src="/about.svg" alt="man with laptop" className="w-full" />
      </div>
      <div className="row items-center py-5 md:w-7/12 md:pb-20 md:pt-10">
        <div className="text-left">
          <h2 className="text-black text-5xl font-normal sm:text-4xl md:text-5xl leading-[56px]">
            Building Solutions,{' '}<span className="font-extrabold">Not Just Websites</span>
          </h2>
          <p className="text-zinc-600 text-base font-normal leading-normal tracking-tight sm:text-1xl mt-5 text-justify">
            I&apos;m Qazi Farhan Ahmad — an AI-focused Full Stack Web Developer based in Pakistan, specializing in building modern, scalable, and high-performance web applications.
            <br /><br />
            I work with React, TypeScript, Node.js, and MongoDB to create production-ready systems with clean architecture, strong security, and optimized performance.
            <br /><br />
            I don&apos;t just build websites — I build solutions that help businesses:
            <br />
            ▸ Generate leads and increase conversions<br />
            ▸ Automate workflows with AI integrations<br />
            ▸ Deliver fast, reliable user experiences
            <br /><br />
            Currently open to internships and freelance opportunities where I can contribute to real-world products and grow fast.
          </p>
        </div>
      </div>
    </section>
  )
}
