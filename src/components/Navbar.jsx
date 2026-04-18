export default function Navbar({ setPage }) {
  return (
    <header className="fixed top-0 left-0 w-full bg-white text-black z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* LOGO */}
<h1 className="logo-glitch" data-text="RAÍ">
  RAÍ
</h1>

        {/* MENU */}
        <nav className="flex gap-8 text-sm font-medium">

          <button
            onClick={() => setPage('home')}
            className="glitch-btn"
            data-text="Home"
          >
            Home
          </button>

          <button
            onClick={() => setPage('about')}
            className="glitch-btn"
            data-text="About"
          >
            About
          </button>

          <button
            onClick={() => setPage('resume')}
            className="glitch-btn"
            data-text="Resume"
          >
            Resume
          </button>

          <button
            onClick={() => setPage('portfolio')}
            className="glitch-btn"
            data-text="Portfolio"
          >
            Portfolio
          </button>

        </nav>
      </div>
    </header>
  )
}