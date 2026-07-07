import SocialIcons from './SocialIcons'

export default function Hero() {
  return (
    <section
      className="flex flex-col-reverse items-center max-w-screen-xl mx-auto px-4 sm:px-6 md:px-20 py-12 sm:py-16 md:py-20 lg:py-24 md:flex-row"
      id="hero"
    >
      <div className="flex flex-col items-center md:items-start md:w-5/12 py-5 md:py-10">
        <div className="text-left space-y-3 md:space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold">
            Qazi Farhan Ahmad
          </h2>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold">
            <span className="text-white font-sans font-outline-sm md:font-outline">AI Web Developer</span>
          </h2>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold">
            <span className="font-normal">&amp; </span>MERN Stack Expert
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base md:text-lg leading-relaxed tracking-tight pb-6 md:pb-8 max-w-lg">
            I build high-performance websites and AI-powered web applications that help businesses grow, automate processes, and increase conversions.
          </p>
        </div>
        <SocialIcons />
      </div>
      <div className="flex items-center justify-center md:w-7/12 py-5 md:py-10">
        <img src="/hero.svg" alt="man with laptop" className="w-full max-w-md md:max-w-full" />
      </div>
    </section>
  )
}
