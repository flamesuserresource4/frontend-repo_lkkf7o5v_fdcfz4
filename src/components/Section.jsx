function Section({ id, eyebrow, title, desc, children }) {
  return (
    <section id={id} className="relative py-20 sm:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl">
          {eyebrow && <p className="text-sm uppercase tracking-widest text-gray-600">{eyebrow}</p>}
          {title && <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900">{title}</h2>}
          {desc && <p className="mt-3 text-gray-700">{desc}</p>}
        </div>
        <div className="mt-10">
          {children}
        </div>
      </div>
    </section>
  )
}

export default Section
