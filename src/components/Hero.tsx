import SocialIcons from './SocialIcons'

export default function Hero() {
  return (
    <section className="relative flex flex-col-reverse items-center max-w-screen-xl px-4 mx-auto md:flex-row sm:px-6 p-8 md:py-[60px] md:px-20" id="hero">
      <div className="row items-center py-5 md:w-5/12 md:pb-20 md:pt-10">
        <div className="text-left space-y-3">
          <h2 className="text-4xl font-extrabold md:text-5xl">
            Qazi Farhan Ahmad
          </h2>
          <h2 className="text-4xl font-extrabold md:text-5xl">
            <span className="text-white font-sans font-outline-sm md:font-outline">AI Web Developer</span>
          </h2>
          <h2 className="text-4xl font-extrabold md:text-5xl">
            <span className="font-normal">&amp; </span>MERN Stack Expert
          </h2>
          <p className="text-zinc-600 text-base font-normal leading-normal tracking-tight pb-8">
            I build high-performance websites and AI-powered web applications that help businesses grow, automate processes, and increase conversions.
          </p>
        </div>
        <SocialIcons />
      </div>
      <div className="flex items-center py-5 md:w-7/12 md:pb-20 md:pt-10">
        <img src="/hero.svg" alt="man with laptop" className="w-full" />
      </div>
    </section>
  )
}
