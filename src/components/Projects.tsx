const projects = [
  {
    num: '01',
    title: 'NOVA E-Commerce Platform',
    desc: 'Production-grade MERN shopping platform — Stripe payments, OTP auth, real-time stock, admin panel.',
    reversed: false,
    link: 'https://ecommerce-store-one-ochre.vercel.app/',
  },
  {
    num: '02',
    title: 'HIKI — Hiking Guide App',
    desc: 'Full-stack MERN hiking app with trail discovery, authentication, admin dashboard, and blog.',
    reversed: true,
    link: 'https://hiking-app-puce.vercel.app/',
  },
  {
    num: '03',
    title: 'QAZI-X Portfolio',
    desc: 'Futuristic cyberpunk OS-inspired developer portfolio with cinematic animations.',
    reversed: false,
    link: 'https://qazixcode.netlify.app/',
  },
]

export default function Projects() {
  return (
    <section className="overflow-hidden bg-black pt-14 pb-32 space-y-24" id="projects">
      <div className="self-stretch overflow-hidden flex flex-row items-center justify-center py-5 px-0 gap-[16px]">
        <h2 className="text-white py-5 text-4xl font-bold sm:text-4xl md:text-5xl">
          Selected<span className="font-medium"> Work</span>
        </h2>
      </div>
      <p className="text-center text-zinc-400 text-base max-w-2xl mx-auto px-4 -mt-4">A curated selection of full-stack projects focusing on user interface, modern architecture, and blazing fast performance.</p>
      {projects.map((proj) => (
        <div key={proj.num} className="relative">
          <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
            <div className={`mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 ${proj.reversed ? 'lg:col-start-2' : ''}`}>
              <div>
                <h3 className="text-2xl font-bold tracking-tight text-white">{proj.num}</h3>
                <div className="mt-6">
                  <h2 className="text-3xl font-bold tracking-tight text-white">{proj.title}</h2>
                  <p className="mt-4 text-lg text-zinc-500 sm:text-sm">{proj.desc}</p>
                  <div className="mt-6">
                    <a href={proj.link} target="_blank" rel="noopener noreferrer">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="social-icon">
                        <path d="M10.8333 9.16658L17.6667 2.33325" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M18.3333 5.66675V1.66675H14.3333" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M9.16667 1.66675H7.5C3.33333 1.66675 1.66667 3.33341 1.66667 7.50008V12.5001C1.66667 16.6667 3.33333 18.3334 7.5 18.3334H12.5C16.6667 18.3334 18.3333 16.6667 18.3333 12.5001V10.8334" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0">
              <div className="mx-4 md:mx-2 lg:relative lg:m-0 lg:h-full lg:px-0">
                <div className="w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none bg-zinc-800 flex items-center justify-center" style={{ minHeight: '200px' }}>
                  <span className="text-white text-lg">Project {proj.num}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}
