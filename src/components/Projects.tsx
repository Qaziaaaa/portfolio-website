const projectSvg = (
  <svg viewBox="0 0 260 200" className="w-full h-full p-4" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="35" y="20" width="190" height="130" rx="12" stroke="#a1a1aa" strokeWidth="1.5" fill="#18181b" />
    <rect x="45" y="35" width="170" height="105" rx="4" stroke="#52525b" strokeWidth="1" fill="none" />
    <line x1="45" y1="42" x2="215" y2="42" stroke="#52525b" strokeWidth="1" />
    <circle cx="52" cy="38" r="2" fill="#a1a1aa" fillOpacity="0.5" />
    <circle cx="60" cy="38" r="2" fill="#a1a1aa" fillOpacity="0.3" />
    <circle cx="68" cy="38" r="2" fill="#a1a1aa" fillOpacity="0.3" />
    <rect x="55" y="55" width="110" height="6" rx="3" fill="#a1a1aa" fillOpacity="0.5" />
    <rect x="55" y="68" width="90" height="4" rx="2" fill="#a1a1aa" fillOpacity="0.2" />
    <rect x="55" y="78" width="105" height="4" rx="2" fill="#a1a1aa" fillOpacity="0.2" />
    <rect x="55" y="88" width="80" height="4" rx="2" fill="#a1a1aa" fillOpacity="0.2" />
    <rect x="170" y="55" width="40" height="40" rx="6" stroke="#a1a1aa" strokeWidth="1" fill="none" />
    <path d="M184 70L190 76L200 65" stroke="#a1a1aa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="55" y="105" width="155" height="1" fill="#52525b" />
    <rect x="55" y="112" width="40" height="4" rx="2" fill="#a1a1aa" fillOpacity="0.15" />
    <rect x="105" y="112" width="35" height="4" rx="2" fill="#a1a1aa" fillOpacity="0.15" />
    <rect x="150" y="112" width="60" height="4" rx="2" fill="#a1a1aa" fillOpacity="0.15" />
    <rect x="95" y="153" width="70" height="5" rx="2.5" stroke="#a1a1aa" strokeWidth="1" fill="#18181b" />
    <rect x="120" y="158" width="20" height="2" rx="1" fill="#a1a1aa" fillOpacity="0.3" />
    <line x1="45" y1="135" x2="215" y2="135" stroke="#52525b" strokeWidth="1" />
    <circle cx="120" cy="148" r="2" fill="#a1a1aa" fillOpacity="0.3" />
    <circle cx="128" cy="148" r="2" fill="#a1a1aa" fillOpacity="0.3" />
    <rect x="170" y="100" width="1" height="40" stroke="#a1a1aa" strokeWidth="0.5" strokeDasharray="2 2" fill="none" />
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
      <p className="text-center text-zinc-300 text-base max-w-2xl mx-auto px-4 -mt-4">A curated selection of full-stack projects focusing on user interface, modern architecture, and blazing fast performance.</p>
      {projects.map((proj) => (
        <div key={proj.num} className="relative">
          <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
            <div className={`mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 ${proj.reversed ? 'lg:col-start-2' : ''}`}>
              <div>
                <h3 className="text-2xl font-bold tracking-tight text-white">{proj.num}</h3>
                <div className="mt-6">
                  <h2 className="text-3xl font-bold tracking-tight text-white">{proj.title}</h2>
                  <p className="mt-4 text-lg text-zinc-400 sm:text-sm">{proj.desc}</p>
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
                <a href={proj.link} target="_blank" rel="noopener noreferrer" className="w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none bg-zinc-800 flex items-center justify-center overflow-hidden group cursor-pointer" style={{ minHeight: '200px' }}>
                  {proj.svg}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/30 text-white text-sm font-medium">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.66667 6.66667L14 1.33333" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M14.6667 4V1.33333H12" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M14 8.53333V12C14 13.1046 13.1046 14 12 14H4C2.89543 14 2 13.1046 2 12V4C2 2.89543 2.89543 2 4 2H7.46667" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      Live Demo
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}
