
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ArrowUpRight, Menu, X } from 'lucide-react'

const links = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Projects', path: '/projects' },
  { label: 'Pricing', path: '/pricing' },
  { label: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const closeMenu = () => setOpen(false)

  return (
    <header className="sticky top-0 z-50 border-b border-green-950/10 bg-white/95 backdrop-blur-xl">
      <nav className="container-width flex min-h-[78px] items-center justify-between gap-5">
        <Link
          to="/"
          onClick={closeMenu}
          aria-label="Shiuli Technology home"
          className="flex shrink-0 items-center"
        >
          <img
            src="/logo.png"
            alt="Shiuli Technology"
            className="h-14 w-auto max-w-[190px] object-contain sm:h-[62px]"
          />
        </Link>

        <div className="hidden items-center gap-6 lg:flex xl:gap-8">
          {links.map(({ label, path }) => (
            <NavLink
              key={path}
              to={path}
              end={path === '/'}
              className={({ isActive }) =>
                `relative py-3 text-sm font-semibold transition-colors after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-green-700 after:transition-all ${
                  isActive
                    ? 'text-green-800 after:w-full'
                    : 'text-slate-600 after:w-0 hover:text-green-800 hover:after:w-full'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>

        <Link
          to="/contact"
          className="hidden shrink-0 items-center gap-2 rounded-full bg-green-800 px-5 py-3 text-sm font-bold text-white shadow-md shadow-green-900/15 transition hover:-translate-y-0.5 hover:bg-green-950 sm:inline-flex"
        >
          Let's Talk <ArrowUpRight size={17} />
        </Link>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
          className="rounded-xl border border-green-900/15 p-2.5 text-green-950 transition hover:bg-green-50 lg:hidden"
        >
          {open ? <X size={23} /> : <Menu size={23} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-green-950/10 bg-white shadow-lg lg:hidden">
          <div className="container-width flex flex-col gap-1 py-4">
            {links.map(({ label, path }) => (
              <NavLink
                key={path}
                to={path}
                end={path === '/'}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-3 text-sm font-semibold transition ${
                    isActive
                      ? 'bg-green-50 text-green-800'
                      : 'text-slate-700 hover:bg-green-50 hover:text-green-800'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}

            <Link
              to="/contact"
              onClick={closeMenu}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-green-800 px-4 py-3 font-bold text-white"
            >
              Let's Talk <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
