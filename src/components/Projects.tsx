const projectSvg = (
  <svg viewBox="0 0 260 200" className="w-full h-full p-4" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="screenGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#6366f1" stopOpacity="0.3" />
        <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.15" />
      </linearGradient>
      <linearGradient id="glowGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#6366f1" stopOpacity="0.15" />
        <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
      </linearGradient>
    </defs>

    <rect x="40" y="15" width="180" height="120" rx="10" stroke="#a1a1aa" strokeWidth="1.5" fill="#18181b" />
    <rect x="40" y="15" width="180" height="120" rx="10" fill="url(#screenGrad)" />
    <rect x="40" y="15" width="180" height="120" rx="10" fill="url(#glowGrad)" />

    <rect x="50" y="28" width="20" height="2" rx="1" fill="#a1a1aa" fillOpacity="0.3" />
    <rect x="50" y="35" width="14" height="2" rx="1" fill="#a1a1aa" fillOpacity="0.3" />
    <circle cx="210" cy="30" r="2.5" fill="#a1a1aa" fillOpacity="0.3" />

    <rect x="50" y="50" width="100" height="6" rx="3" fill="#6366f1" fillOpacity="0.7" />
    <rect x="50" y="64" width="80" height="4" rx="2" fill="#a1a1aa" fillOpacity="0.3" />
    <rect x="50" y="74" width="90" height="4" rx="2" fill="#a1a1aa" fillOpacity="0.2" />
    <rect x="50" y="84" width="70" height="4" rx="2" fill="#a1a1aa" fillOpacity="0.2" />

    <rect x="162" y="50" width="48" height="48" rx="6" stroke="#6366f1" strokeWidth="1" fill="none" />
    <path d="M180 70L186 76L194 66" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="162" y="104" width="48" height="3" rx="1.5" fill="#a1a1aa" fillOpacity="0.15" />

    <rect x="50" y="100" width="48" height="3" rx="1.5" fill="#a1a1aa" fillOpacity="0.15" />
    <rect x="106" y="100" width="44" height="3" rx="1.5" fill="#a1a1aa" fillOpacity="0.15" />

    <rect x="65" y="138" width="130" height="8" rx="4" stroke="#a1a1aa" strokeWidth="1.5" fill="#18181b" />
    <rect x="100" y="146" width="60" height="3" rx="1.5" fill="#a1a1aa" fillOpacity="0.3" />
    <rect x="115" y="152" width="30" height="2" rx="1" fill="#a1a1aa" fillOpacity="0.2" />

    <circle cx="20" cy="60" r="6" fill="#6366f1" fillOpacity="0.2" />
    <circle cx="20" cy="60" r="3" fill="#6366f1" fillOpacity="0.5" />
    <circle cx="240" cy="140" r="5" fill="#6366f1" fillOpacity="0.15" />
    <circle cx="240" cy="140" r="2" fill="#6366f1" fillOpacity="0.4" />
  </svg>
)

const projects = [
  {
    num: '01',
    title: 'NOVA E-Commerce Platform',
    desc: 'Production-grade MERN shopping platform — Stripe payments, OTP auth, real-time stock, admin panel.',
    reversed: false,
    link: 'https://ecommerce-store-one-ochre.vercel.app/',
    svg: projectSvg,
  },
  {
    num: '02',
    title: 'HIKI — Hiking Guide App',
    desc: 'Full-stack MERN hiking app with trail discovery, authentication, admin dashboard, and blog.',
    reversed: true,
    link: 'https://hiking-app-puce.vercel.app/',
    svg: projectSvg,
  },
  {
    num: '03',
    title: 'QAZI-X Portfolio',
    desc: 'Futuristic cyberpunk OS-inspired developer portfolio with cinematic animations.',
    reversed: false,
    link: 'https://qazixcode.netlify.app/',
    svg: projectSvg,
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
                <div className="w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none bg-zinc-800 flex items-center justify-center overflow-hidden" style={{ minHeight: '200px' }}>
                  {proj.svg}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}
