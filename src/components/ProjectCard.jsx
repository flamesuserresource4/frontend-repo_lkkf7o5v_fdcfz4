function ProjectCard({ title, tags = [], description, link, image }) {
  return (
    <a href={link} target="_blank" rel="noreferrer" className="group block rounded-2xl border border-black/5 bg-white shadow-sm hover:shadow-md transition-shadow overflow-hidden">
      {image ? (
        <img src={image} alt={title} className="w-full h-48 object-cover" />
      ) : (
        <div className="w-full h-48 bg-gradient-to-br from-blue-100 via-fuchsia-100 to-indigo-100" />
      )}
      <div className="p-5">
        <div className="flex items-center gap-2 flex-wrap">
          {tags.map((t) => (
            <span key={t} className="inline-flex items-center rounded-full bg-gray-100 text-gray-700 px-2.5 py-0.5 text-xs font-medium">{t}</span>
          ))}
        </div>
        <h3 className="mt-3 text-xl font-semibold text-gray-900">{title}</h3>
        <p className="mt-2 text-gray-600 text-sm">{description}</p>
        <div className="mt-4 text-sm font-semibold text-indigo-600 group-hover:translate-x-0.5 transition-transform">View project →</div>
      </div>
    </a>
  )
}

export default ProjectCard
