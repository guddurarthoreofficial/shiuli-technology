import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, ArrowUpRight, Mail, MapPin } from 'lucide-react';
import ShiuliMark from './ShiuliMark';
import './Footer.css';

const QUICK_LINKS = [
  ['/about', 'About Us'],
  ['/services', 'Our Services'],
  ['/projects', 'Our Projects'],
  ['/pricing', 'Pricing'],
];

const SERVICES = ['Web Development', 'App Development', 'IT Consulting', 'Internship Programs'];

const WORDMARK = 'Shiuli'.split('');

/* fixed, pseudo-random petal settings so every render looks the same */
const PETALS = Array.from({ length: 14 }, (_, i) => {
  const r = n => {
    const x = Math.sin((i + 1) * n) * 10000;
    return x - Math.floor(x);
  };
  return {
    left: `${(i * 7.3 + r(12.9) * 6) % 100}%`,
    size: 14 + Math.round(r(78.2) * 18),
    fall: 11 + r(3.7) * 9,
    spin: 5 + r(6.1) * 5,
    delay: -r(5.1) * 14,
    sway: Math.round(-60 + r(9.3) * 120),
    opacity: 0.35 + r(2.2) * 0.45,
  };
});

export default function Footer() {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false); // reveal once
  const [live, setLive] = useState(false); // petals run only while visible

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    if (!('IntersectionObserver' in window)) {
      setSeen(true);
      setLive(true);
      return undefined;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        setLive(entry.isIntersecting);
        if (entry.isIntersecting) setSeen(true);
      },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const toTop = () => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
  };

  return (
    <footer ref={ref} className={`sh-footer${seen ? ' is-seen' : ''}${live ? ' is-live' : ''}`}>
      <div className="sh-f-petals" aria-hidden="true">
        {PETALS.map((p, i) => (
          <span
            key={i}
            className="sh-f-petal"
            style={{
              left: p.left,
              '--s': `${p.size}px`,
              '--fall': `${p.fall}s`,
              '--spin': `${p.spin}s`,
              '--delay': `${p.delay}s`,
              '--sway': `${p.sway}px`,
              '--o': p.opacity,
            }}
          >
            <ShiuliMark />
          </span>
        ))}
      </div>

      <span className="sh-f-line" aria-hidden="true" />

      <div className="sh-f-wrap">
        <div className="sh-f-cta sh-rv" style={{ '--d': '.1s' }}>
          <h2>Have an idea? Let&apos;s grow it together.</h2>
          <Link to="/contact" className="sh-f-btn">
            Start a project <ArrowUpRight size={18} />
          </Link>
        </div>

        <div className="sh-f-grid">
          <div className="sh-rv" style={{ '--d': '.2s' }}>
            <Link to="/" className="sh-f-brand" aria-label="Shiuli Technology, home">
              <ShiuliMark className="sh-f-mark" />
              <span>Shiuli Technology</span>
            </Link>
            <p className="sh-f-about">
              Turning ideas into digital solutions. We build modern, scalable technology for
              businesses, schools and startups.
            </p>
          </div>

          <div className="sh-rv" style={{ '--d': '.3s' }}>
            <h3>Quick Links</h3>
            <ul>
              {QUICK_LINKS.map(([to, label]) => (
                <li key={to}>
                  <Link to={to} className="sh-f-link">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="sh-rv" style={{ '--d': '.4s' }}>
            <h3>Our Services</h3>
            <ul>
              {SERVICES.map(label => (
                <li key={label}>
                  <Link to="/services" className="sh-f-link">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="sh-rv" style={{ '--d': '.5s' }}>
            <h3>Get in Touch</h3>
            <ul className="sh-f-contact">
              <li>
                <MapPin size={18} />
                <span>Bettiah, West Champaran, Bihar, India</span>
              </li>
              <li>
                <Mail size={18} />
                <a href="mailto:hello@shiulitech.in" className="sh-f-link">hello@shiulitech.in</a>
              </li>
              <li>
                <Link to="/contact" className="sh-f-more">
                  Contact Us <ArrowUpRight size={16} />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="sh-f-word" aria-hidden="true">
          {WORDMARK.map((ch, i) => (
            <span key={i} style={{ '--i': i }}>{ch}</span>
          ))}
        </div>

        <div className="sh-f-bottom sh-rv" style={{ '--d': '.6s' }}>
          <p>© {new Date().getFullYear()} Shiuli Technology. All rights reserved.</p>
          <p className="sh-f-tag">Built with ideas, creativity and technology.</p>
          <button type="button" className="sh-f-top" onClick={toTop} aria-label="Back to top">
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
}
