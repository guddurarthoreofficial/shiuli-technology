import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import ShiuliMark from './ShiuliMark';
import './Navbar.css';

const LINKS = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About Us' },
  { to: '/services', label: 'Services' },
  { to: '/projects', label: 'Our Projects' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/contact', label: 'Contact Us', cta: true },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  // solid bar after the first bit of scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // mobile menu: lock page scroll, close on Escape or when resized to desktop
  useEffect(() => {
    if (!open) return undefined;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = e => e.key === 'Escape' && setOpen(false);
    const onResize = () => window.innerWidth > 960 && setOpen(false);
    window.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
    };
  }, [open]);

  return (
    <header className={`sh-nav${scrolled ? ' is-scrolled' : ''}${open ? ' is-open' : ''}`}>
      <Link className="sh-brand" to="/" aria-label="Shiuli Technology, home" onClick={close}>
        <ShiuliMark className="sh-mark" />
        <span>Shiuli Technology</span>
      </Link>

      <button
        type="button"
        className="sh-burger"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        aria-controls="sh-menu"
        onClick={() => setOpen(o => !o)}
      >
        <span />
        <span />
      </button>

      <nav id="sh-menu" className="sh-menu" aria-label="Primary">
        {LINKS.map(l => (
          <NavLink
            key={l.to}
            to={l.to}
            end={l.end}
            onClick={close}
            className={({ isActive }) =>
              'sh-link' + (l.cta ? ' is-cta' : '') + (isActive ? ' is-active' : '')
            }
          >
            {l.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
