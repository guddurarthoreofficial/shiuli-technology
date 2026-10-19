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
  { to: '/contact', label: 'Contact Us' },
  { to: '/', label: 'Login', cta: true },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (event) => {
      if (event.key === 'Escape') close();
    };
    const onResize = () => {
      if (window.innerWidth > 960) close();
    };

    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('resize', onResize);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('resize', onResize);
    };
  }, [open]);

  return (
    <header className={`sh-nav${scrolled ? ' is-scrolled' : ''}${open ? ' is-open' : ''}`}>
      <Link
        className="sh-brand"
        to="/"
        aria-label="Shiuli Technology, home"
        onClick={close}
      >
        <ShiuliMark className="sh-mark" />
        <span>Shiuli Technology</span>
      </Link>

      <button
        type="button"
        className="sh-burger"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        aria-controls="sh-menu"
        onClick={() => setOpen((current) => !current)}
      >
        <span />
        <span />
      </button>

      <div className="sh-backdrop" onClick={close} aria-hidden="true" />

      <nav id="sh-menu" className="sh-menu" aria-label="Primary">
        <div className="sh-mobile-heading" aria-hidden="true">
          <span className="sh-mobile-kicker">EXPLORE</span>
          <span className="sh-mobile-title">Where ideas take shape.</span>
        </div>

        {LINKS.map((link, index) => (
          <NavLink
            key={link.to + link.label}
            to={link.to}
            end={link.end}
            onClick={close}
            style={{ '--i': index }}
            className={({ isActive }) =>
              'sh-link' +
              (link.cta ? ' is-cta' : '') +
              (isActive ? ' is-active' : '')
            }
          >
            <span>{link.label}</span>
          </NavLink>
        ))}

        <div className="sh-mobile-footer" aria-hidden="true">
          <span className="sh-mobile-footer-dot" />
          <span>Thoughtfully built by Shiuli Technology</span>
        </div>
      </nav>
    </header>
  );
}
