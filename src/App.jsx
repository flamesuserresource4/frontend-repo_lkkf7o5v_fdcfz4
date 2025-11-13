import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Section from './components/Section'
import ProjectCard from './components/ProjectCard'

function App() {
  const projects = [
    {
      title: 'Interactive Dashboard',
      tags: ['React', 'Tailwind', 'Charts'],
      description: 'A responsive analytics dashboard with real-time charts and filters.',
      link: '#',
    },
    {
      title: 'E-commerce UI Kit',
      tags: ['Design', 'Components', 'UX'],
      description: 'Modular UI components designed for high-converting storefronts.',
      link: '#',
    },
    {
      title: 'Motion Experiments',
      tags: ['Framer Motion', '3D', 'Playground'],
      description: 'A collection of smooth interaction patterns and micro-animations.',
      link: '#',
    },
  ]

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />

        <Section
          id="about"
          eyebrow="About"
          title="Designer-Engineer blending aesthetics with performance"
          desc="I craft fast, accessible, and beautiful interfaces with a keen eye for detail and a love for elegant code."
        >
          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold">Focus Areas</h3>
              <p className="mt-2 text-gray-600">Design systems, interaction design, frontend architectures.</p>
            </div>
            <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold">Toolbox</h3>
              <p className="mt-2 text-gray-600">React, Tailwind, Framer Motion, Three.js, Figma.</p>
            </div>
            <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold">Values</h3>
              <p className="mt-2 text-gray-600">Performance first, inclusive by default, detail obsessed.</p>
            </div>
          </div>
        </Section>

        <Section
          id="projects"
          eyebrow="Projects"
          title="Selected Work"
          desc="A few highlights from recent explorations and client work."
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <ProjectCard key={p.title} {...p} />
            ))}
          </div>
        </Section>

        <Section
          id="skills"
          eyebrow="Skills"
          title="What I use to build"
          desc="Always learning, always improving — here are my current go-tos."
        >
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Node.js', 'FastAPI', 'MongoDB', 'Three.js', 'Figma'].map((s) => (
              <div key={s} className="rounded-xl border border-black/5 bg-white p-4 text-sm font-medium text-gray-700 shadow-sm">{s}</div>
            ))}
          </div>
        </Section>

        <Section
          id="contact"
          eyebrow="Contact"
          title="Let’s create something great"
          desc="Have an idea or opportunity? I’m open to freelance work and collaborations."
        >
          <form onSubmit={(e)=>e.preventDefault()} className="max-w-2xl grid sm:grid-cols-2 gap-4">
            <input required placeholder="Name" className="col-span-2 sm:col-span-1 rounded-lg border border-black/10 px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500" />
            <input required placeholder="Email" type="email" className="col-span-2 sm:col-span-1 rounded-lg border border-black/10 px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500" />
            <textarea required placeholder="Tell me about your project" rows="5" className="col-span-2 rounded-lg border border-black/10 px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500" />
            <button className="col-span-2 inline-flex items-center justify-center rounded-lg bg-gray-900 text-white px-6 py-3 font-semibold shadow hover:shadow-md">Send Message</button>
          </form>
        </Section>

        <footer className="py-10 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </footer>
      </main>
    </div>
  )
}

export default App
