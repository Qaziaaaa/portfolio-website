const testimonials = [
  { initial: 'C', quote: 'Every project is built with maintainability in mind — typed, documented, and structured for growth.', name: 'Clean, Scalable Code', role: 'Typed · Documented · Structured', center: false },
  { initial: 'F', quote: 'I ship on time without cutting corners. Production-ready from day one.', name: 'Fast & Reliable Delivery', role: 'On Time · Production-Ready', center: true },
  { initial: 'A', quote: 'I integrate AI tools — chatbots, automation, smart APIs — to give your product a real edge.', name: 'AI-Powered Solutions', role: 'Chatbots · Automation · Smart APIs', center: false },
]

export default function Testimonial() {
  return (
    <section className="px-2 md:py-[60px] md:px-20 pb-16">
      <div className="relative flex flex-col text-center max-w-screen-sm px-4 mx-auto sm:px-6 p-8 md:pb-20">
        <p className="text-zinc-500 text-sm font-medium uppercase tracking-widest mb-2">Why Choose Me</p>
        <h2 className="text-black text-4xl font-normal md:text-5xl">
          Why{' '}<span className="font-extrabold">Work With Me</span>
        </h2>
        <p className="text-zinc-500 text-base mt-4 max-w-xl mx-auto">What you get when you work with Qazi Farhan Ahmad</p>
      </div>
      <div className="grid gap-6 text-center md:grid-cols-3 lg:gap-12 max-w-screen-xl mx-auto px-4">
        {testimonials.map((item, i) => (
          <div
            key={i}
            className={`self-stretch flex flex-col py-[30px] px-[23px] gap-[18px] max-w-full border-solid border-zinc-500 rounded-xl shadow-lg items-center ${
              item.center ? 'text-white bg-black' : ''
            }`}
          >
            <div className="mb-6 flex justify-center">
              <div className={`w-32 h-32 rounded-full flex items-center justify-center text-4xl font-bold ${
                item.center ? 'bg-zinc-600' : 'bg-zinc-300'
              }`}>
                {item.initial}
              </div>
            </div>
            <p className="mb-4">{item.quote}</p>
            <h5 className="text-xl font-semibold">{item.name}</h5>
            <h6 className={`font-semibold ${item.center ? 'text-zinc-300' : 'text-zinc-700'}`}>{item.role}</h6>
          </div>
        ))}
      </div>
    </section>
  )
}
