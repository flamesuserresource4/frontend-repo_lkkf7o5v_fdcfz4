import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-10 items-center">
        <div className="backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 rounded-2xl p-8 shadow-lg">
          <p className="text-sm uppercase tracking-widest text-gray-600">Portfolio</p>
          <h1 className="mt-2 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">
            Hi, I’m <span className="bg-gradient-to-r from-blue-600 via-fuchsia-600 to-indigo-600 bg-clip-text text-transparent">Your Name</span>
          </h1>
          <p className="mt-4 text-gray-700 text-lg">
            I design and build delightful digital products with a focus on performance, accessibility, and smooth interactions.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center rounded-full bg-gray-900 text-white px-5 py-2.5 text-sm font-semibold shadow hover:shadow-md transition-all">View Projects</a>
            <a href="#contact" className="inline-flex items-center rounded-full border border-gray-300 bg-white text-gray-900 px-5 py-2.5 text-sm font-semibold hover:bg-gray-50 transition-all">Contact</a>
          </div>
        </div>

        <div className="hidden md:block" />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/10 to-white/80" />
    </section>
  )
}

export default Hero
