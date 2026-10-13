import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import {
  ArrowUpRight,
  Menu,
  X,
  ChevronRight,
  Sparkles,
} from 'lucide-react'

const links = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Our Projects', path: '/projects' },
  { label: 'Pricing', path: '/pricing' },
  { label: 'Contact Us', path: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  const closeMenu = () => setOpen(false)

  // Close the sidebar whenever the route changes.
  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  // Prevent background scrolling while the mobile sidebar is open.
  useEffect(() => {
    if (!open) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') closeMenu()
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [open])

  const desktopLinkClass = ({ isActive }) =>
    `relative whitespace-nowrap py-2 text-sm font-semibold transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:rounded-full after:bg-green-700 after:transition-all after:duration-300 ${
      isActive
        ? 'text-green-800 after:w-full'
        : 'text-slate-600 after:w-0 hover:text-green-800 hover:after:w-full'
    }`

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-green-950/[0.08] bg-white/90 shadow-[0_4px_24px_rgba(15,60,35,0.035)] backdrop-blur-xl">
        <nav
          className="container-width flex min-h-[76px] items-center justify-between gap-4"
          aria-label="Main navigation"
        >
          {/* Brand */}
          <Link
            to="/"
            onClick={closeMenu}
            aria-label="Shiuli Technology home"
            className="flex shrink-0 items-center"
          >
            <img
              src="/logo.webp"
              alt="Shiuli Technology"
              className="h-12 w-auto max-w-[175px] object-contain sm:h-[58px] sm:max-w-[200px]"
            />
          </Link>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-5 lg:flex xl:gap-7">
            {links.map(({ label, path }) => (
              <NavLink
                key={path}
                to={path}
                end={path === '/'}
                className={desktopLinkClass}
              >
                {label}
              </NavLink>
            ))}
          </div>

          {/* Desktop CTA */}
          <Link
            to="/contact"
            className="hidden shrink-0 items-center gap-2 rounded-full bg-green-800 px-5 py-3 text-sm font-bold text-white shadow-md shadow-green-900/10 transition duration-200 hover:-translate-y-0.5 hover:bg-green-950 hover:shadow-lg lg:inline-flex"
          >
            Let's Talk
            <ArrowUpRight size={17} />
          </Link>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={open}
            aria-controls="mobile-sidebar"
            className="inline-flex items-center justify-center rounded-xl border border-green-900/10 bg-white p-2.5 text-green-900 shadow-sm transition hover:border-green-800/25 hover:bg-green-50 lg:hidden"
          >
            <Menu size={23} strokeWidth={2} />
          </button>
        </nav>
      </header>

      {/* Mobile overlay */}
      <div
        aria-hidden="true"
        onClick={closeMenu}
        className={`fixed inset-0 z-[60] bg-slate-950/50 backdrop-blur-[2px] transition-opacity duration-300 lg:hidden ${
          open
            ? 'pointer-events-auto opacity-100'
            : 'pointer-events-none opacity-0'
        }`}
      />

      {/* Left slide-in sidebar */}
      <aside
        id="mobile-sidebar"
        role="dialog"
        aria-modal={open ? 'true' : undefined}
        aria-label="Mobile navigation"
        aria-hidden={!open}
        className={`fixed inset-y-0 left-0 z-[70] flex w-[min(86vw,350px)] flex-col border-r border-green-950/10 bg-white shadow-2xl transition-transform duration-300 ease-out lg:hidden ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Sidebar header */}
        <div className="flex min-h-[82px] items-center justify-between border-b border-green-950/[0.08] px-5">
          <Link
            to="/"
            onClick={closeMenu}
            tabIndex={open ? 0 : -1}
            aria-label="Shiuli Technology home"
            className="flex items-center"
          >
            <img
              src="/logo.webp"
              alt="Shiuli Technology"
              className="h-12 w-auto max-w-[180px] object-contain"
            />
          </Link>

          <button
            type="button"
            onClick={closeMenu}
            tabIndex={open ? 0 : -1}
            aria-label="Close navigation menu"
            className="rounded-xl border border-slate-200 p-2.5 text-slate-600 transition hover:border-green-200 hover:bg-green-50 hover:text-green-800"
          >
            <X size={21} />
          </button>
        </div>

        {/* Sidebar intro */}
        <div className="px-5 pb-4 pt-6">
          <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-green-50 px-3 py-1.5 text-xs font-bold text-green-800">
            <Sparkles size={13} />
            Technology for growth
          </div>
          <p className="text-sm leading-6 text-slate-500">
            Explore our services, projects and digital solutions.
          </p>
        </div>

        {/* Sidebar links */}
        <nav
          aria-label="Mobile navigation links"
          className="flex-1 overflow-y-auto px-3 py-2"
        >
          <p className="px-3 pb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400">
            Explore
          </p>

          <div className="space-y-1">
            {links.map(({ label, path }, index) => (
              <NavLink
                key={path}
                to={path}
                end={path === '/'}
                onClick={closeMenu}
                tabIndex={open ? 0 : -1}
                style={{ transitionDelay: open ? `${index * 35}ms` : '0ms' }}
                className={({ isActive }) =>
                  `group flex items-center justify-between rounded-xl px-4 py-3.5 text-[15px] font-semibold transition duration-200 ${
                    isActive
                      ? 'bg-green-50 text-green-900 shadow-sm ring-1 ring-green-800/[0.06]'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-green-800'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span className="flex items-center gap-3">
                      <span
                        className={`h-1.5 w-1.5 rounded-full transition-colors ${
                          isActive
                            ? 'bg-green-700'
                            : 'bg-slate-300 group-hover:bg-green-600'
                        }`}
                      />
                      {label}
                    </span>
                    <ChevronRight
                      size={17}
                      className={`transition-transform ${
                        isActive
                          ? 'translate-x-0 text-green-700'
                          : '-translate-x-1 text-slate-300 group-hover:translate-x-0 group-hover:text-green-700'
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </div>
        </nav>

        {/* Sidebar footer CTA */}
        <div className="border-t border-green-950/[0.08] bg-slate-50/70 p-5">
          <p className="mb-3 text-sm text-slate-600">
            Have a project in mind?
          </p>
          <Link
            to="/contact"
            onClick={closeMenu}
            tabIndex={open ? 0 : -1}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-green-800 px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-green-900/10 transition hover:bg-green-950"
          >
            Let's Talk
            <ArrowUpRight size={18} />
          </Link>

          <p className="mt-4 text-center text-xs text-slate-400">
            © {new Date().getFullYear()} Shiuli Technology
          </p>
        </div>
      </aside>
    </>
  )
}
