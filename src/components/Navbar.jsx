import { useState } from "react"

export default function Navbar({ setPage }) {
  const [open, setOpen] = useState(false)

  const handleClick = (page) => {
    setPage(page)
    setOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 w-full bg-white text-black z-50 shadow-sm">
      
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* LOGO */}
        <h1 className="logo-glitch" data-text="RAÍ">
          RAÍ
        </h1>

        {/* MENU DESKTOP */}
        <nav className="hidden md:flex gap-8 text-sm font-medium">

          <button onClick={() => setPage('home')} className="glitch-btn" data-text="Home">
            Home
          </button>

          <button onClick={() => setPage('about')} className="glitch-btn" data-text="About">
            About
          </button>

          <button onClick={() => setPage('resume')} className="glitch-btn" data-text="Resume">
            Resume
          </button>

          <button onClick={() => setPage('portfolio')} className="glitch-btn" data-text="Portfolio">
            Portfolio
          </button>

        </nav>

        {/* BOTÃO MOBILE (3 pontinhos) */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ⋮
        </button>

      </div>

      {/* MENU MOBILE */}
      {open && (
        <div className="md:hidden bg-white text-black px-6 pb-6 flex flex-col gap-4 shadow-md">

          <button onClick={() => handleClick('home')} className="glitch-btn text-left">
            Home
          </button>

          <button onClick={() => handleClick('about')} className="glitch-btn text-left">
            About
          </button>

          <button onClick={() => handleClick('resume')} className="glitch-btn text-left">
            Resume
          </button>

          <button onClick={() => handleClick('portfolio')} className="glitch-btn text-left">
            Portfolio
          </button>

        </div>
      )}

    </header>
  )
}