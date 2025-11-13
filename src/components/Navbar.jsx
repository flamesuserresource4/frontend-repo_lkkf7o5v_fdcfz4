import { useState } from 'react'

function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ]

  const handleNavClick = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setOpen(false)
    }
  }

  return (
    <header className="fixed top-0 left-0 w-full z-20 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-black/5">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" onClick={(e)=>{e.preventDefault();handleNavClick('home')}} className="font-extrabold text-xl tracking-tight bg-gradient-to-r from-blue-600 via-fuchsia-600 to-indigo-600 bg-clip-text text-transparent">
          MyPortfolio
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
            >
              {item.label}
            </button>
          ))}
          <a
            href="#contact"
            onClick={(e)=>{e.preventDefault();handleNavClick('contact')}}
            className="inline-flex items-center rounded-full bg-gray-900 text-white px-4 py-2 text-sm font-semibold shadow hover:shadow-md transition-all"
          >
            Let’s Talk
          </a>
        </div>

        <button
          aria-label="Open menu"
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100"
          onClick={() => setOpen(!open)}
        >
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {open ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <>
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-black/5 bg-white">
          <div className="px-4 py-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="block w-full text-left px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('contact')}
              className="w-full mt-2 inline-flex items-center justify-center rounded-md bg-gray-900 text-white px-4 py-2 text-sm font-semibold shadow hover:shadow-md"
            >
              Let’s Talk
            </button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
