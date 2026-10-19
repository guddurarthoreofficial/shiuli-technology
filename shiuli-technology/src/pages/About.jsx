import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  Target,
  Eye,
  Gem,
  HeartHandshake,
  Lightbulb,
  Code2,
  Rocket,
  ShieldCheck,
  Sparkles,
  Mail,
  MapPin,
  MessageCircle,
} from 'lucide-react';
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaLinkedinIn,
} from 'react-icons/fa6';
import ShiuliMark from '../components/ShiuliMark';
import './About.css';

const values = [
  { icon: ShieldCheck, title: 'Quality First', text: 'Thoughtful design, dependable development and solutions built around real needs.' },
  { icon: HeartHandshake, title: 'Client Focused', text: 'Clear communication, honest collaboration and your goals at the centre of every decision.' },
  { icon: Lightbulb, title: 'Practical Innovation', text: 'Useful ideas and modern technology that solve meaningful, real-world problems.' },
];
const process = [
  { number: '01', icon: Target, title: 'Discover', text: 'Understand your goals, audience, challenges and requirements.' },
  { number: '02', icon: Lightbulb, title: 'Plan & Design', text: 'Shape the right solution and create a clear user experience.' },
  { number: '03', icon: Code2, title: 'Develop', text: 'Build, test and refine a dependable digital product.' },
  { number: '04', icon: Rocket, title: 'Launch & Grow', text: 'Prepare for launch and keep improving as your needs evolve.' },
];

const socials = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=61595562598658',
    icon: FaFacebookF,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/shiulitech?obrf=cnRoN2c5YzRmNmoz',
    icon: FaInstagram,
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/919523605578',
    icon: FaWhatsapp,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/search/results/companies/?keywords=Shiuli%20Technology',
    icon: FaLinkedinIn,
  },
  {
    label: 'Email',
    href: 'mailto:shiulitech@gmail.com',
    icon: Mail,
  },
];

const PETALS = Array.from({ length: 16 }, (_, i) => {
  const r = n => { const x = Math.sin((i + 1) * n) * 10000; return x - Math.floor(x); };
  return {
    left: `${(i * 7.3 + r(12.9) * 6) % 100}%`,
    size: 13 + Math.round(r(78.2) * 18),
    fall: 12 + r(3.7) * 10,
    spin: 6 + r(6.1) * 6,
    delay: -r(5.1) * 16,
    sway: Math.round(-55 + r(9.3) * 110),
    opacity: 0.22 + r(2.2) * 0.35,
  };
});

function Reveal({ children, className = '', delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!('IntersectionObserver' in window)) { setVisible(true); return; }
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); io.unobserve(el); }
    }, { threshold: 0.12, rootMargin: '0px 0px -35px 0px' });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <div ref={ref} className={`sh-about-reveal${visible ? ' is-visible' : ''} ${className}`} style={{ '--reveal-delay': `${delay}ms` }}>{children}</div>;
}

export default function About() {
  const root = useRef(null);
  const [live, setLive] = useState(false);
  useEffect(() => {
    const el = root.current;
    if (!el || !('IntersectionObserver' in window)) { setLive(true); return; }
    const io = new IntersectionObserver(([entry]) => setLive(entry.isIntersecting), { threshold: 0.01 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <main ref={root} className={`sh-about${live ? ' is-live' : ''}`} id="about-top">
      <div className="sh-about-sky" aria-hidden="true" />
      <div className="sh-about-moon" aria-hidden="true" />
      <div className="sh-about-grain" aria-hidden="true" />
      <div className="sh-about-petals" aria-hidden="true">
        {PETALS.map((p, i) => <span key={i} className="sh-about-petal" style={{
          left: p.left, '--petal-size': `${p.size}px`, '--petal-fall': `${p.fall}s`,
          '--petal-spin': `${p.spin}s`, '--petal-delay': `${p.delay}s`,
          '--petal-sway': `${p.sway}px`, '--petal-opacity': p.opacity,
        }}><ShiuliMark /></span>)}
      </div>

      <section className="sh-about-hero">
        <div className="sh-about-wrap sh-about-hero-grid">
          <Reveal className="sh-about-hero-copy">
            <div className="sh-about-eyebrow"><Sparkles size={14} /><Link to="/">Home</Link><span>/</span><span>About Us</span></div>
            <p className="sh-about-kicker">A little about who we are</p>
            <h1>We turn ideas <span>into possibilities.</span></h1>
            <p className="sh-about-lead">Shiuli Technology builds practical digital experiences through thoughtful design, modern software development and a passion for solving real-world problems.</p>
            <div className="sh-about-actions">
              <Link to="/services" className="sh-about-button sh-about-primary">Explore our services <ArrowRight size={18} /></Link>
              <Link to="/contact" className="sh-about-button sh-about-ghost">Let’s talk <ArrowUpRight size={18} /></Link>
            </div>
            <div className="sh-about-promise"><span><HeartHandshake size={22} /></span><p><strong>Built around your goals</strong><small>Collaboration, clarity and continuous improvement.</small></p></div>
          </Reveal>

          <Reveal className="sh-about-art-wrap" delay={150}>
            <div className="sh-about-art-glow" />
            <div className="sh-about-art">
              <div className="sh-about-art-image"><img src="/shiuli-hero.png" alt="Shiuli Technology floral technology artwork" loading="eager" /></div>
              <div className="sh-about-art-caption"><span><Sparkles size={22} /></span><div><small>OUR PHILOSOPHY</small><strong>Technology with purpose.</strong></div></div>
            </div>
            <div className="sh-about-floating-note"><strong>Think. Create. Grow.</strong><small>One idea at a time</small></div>
          </Reveal>
        </div>
        <a href="#about-story" className="sh-about-scroll"><span>SCROLL TO EXPLORE</span><i /></a>
      </section>

      <section className="sh-about-section" id="about-story">
        <div className="sh-about-wrap sh-about-two-col">
          <Reveal>
            <p className="sh-about-kicker">Our story</p>
            <h2>Driven by curiosity.<span>Focused on solutions.</span></h2>
            <div className="sh-about-body">
              <p>Shiuli Technology is being developed with a simple idea: make technology useful, approachable and accessible to the people and organisations that need it.</p>
              <p>Our interests span website development, software solutions, mobile-friendly applications, IT consulting and practical learning experiences.</p>
              <p>We believe every good project starts with understanding the problem, planning carefully and working collaboratively towards a solution.</p>
            </div>
            <Link to="/projects" className="sh-about-text-link">Discover our work <ArrowRight size={17} /></Link>
          </Reveal>
          <Reveal className="sh-about-belief" delay={120}>
            <div className="sh-about-logo-frame"><img src="/logo.webp" alt="Shiuli Technology logo" loading="lazy" /></div>
            <div className="sh-about-belief-card"><p className="sh-about-kicker">What we believe</p><h3>Great digital experiences begin with understanding people.</h3><p>Listen carefully. Build thoughtfully. Improve continuously.</p></div>
            <div className="sh-about-tags">{['Design', 'Development', 'Consulting', 'Learning'].map(tag => <span key={tag}>{tag}</span>)}</div>
          </Reveal>
        </div>
      </section>

      <section className="sh-about-section sh-about-direction">
        <div className="sh-about-wrap">
          <Reveal className="sh-about-heading"><p className="sh-about-kicker">Our direction</p><h2>Purpose behind every idea.</h2><p>The principles that guide our approach to technology and collaboration.</p></Reveal>
          <div className="sh-about-cards">
            {[
              { icon: Target, title: 'Our Mission', index: '01 / PURPOSE', text: 'To create useful, accessible and reliable digital solutions that help people and organisations work towards their goals.' },
              { icon: Eye, title: 'Our Vision', index: '02 / FUTURE', text: 'To become a trusted technology partner known for thoughtful innovation, dependable solutions and a commitment to growth.' },
              { icon: Gem, title: 'Our Values', index: '03 / PRINCIPLES', text: 'Quality, transparency, creativity, responsible development and respect for clients and collaborators.' },
            ].map(({ icon: Icon, title, index, text }, i) => <Reveal key={title} delay={i * 100}><article className="sh-about-card"><span className="sh-about-icon"><Icon size={25} /></span><small className="sh-about-card-index">{index}</small><h3>{title}</h3><p>{text}</p></article></Reveal>)}
          </div>
        </div>
      </section>

      <section className="sh-about-section">
        <div className="sh-about-wrap">
          <Reveal><p className="sh-about-kicker">What matters to us</p><h2>Principles that shape our work.</h2></Reveal>
          <div className="sh-about-cards sh-about-values">
            {values.map(({ icon: Icon, title, text }, i) => <Reveal key={title} delay={i * 100}><article className="sh-about-card sh-about-value-card"><span className="sh-about-icon"><Icon size={25} /></span><h3>{title}</h3><p>{text}</p><span className="sh-about-card-arrow"><ArrowUpRight size={18} /></span></article></Reveal>)}
          </div>
        </div>
      </section>

      <section className="sh-about-section sh-about-process">
        <div className="sh-about-wrap">
          <Reveal><p className="sh-about-kicker">Our process</p><h2>From the first conversation to launch.</h2><p className="sh-about-muted">A straightforward process designed to keep requirements, communication and project goals aligned.</p></Reveal>
          <div className="sh-about-cards sh-about-steps">
            {process.map(({ number, icon: Icon, title, text }, i) => <Reveal key={number} delay={i * 90}><article className="sh-about-card sh-about-step"><div className="sh-about-step-top"><span>{number}</span><i><Icon size={23} /></i></div><h3>{title}</h3><p>{text}</p></article></Reveal>)}
          </div>
        </div>
      </section>

      <section className="sh-about-section sh-about-contact">
        <div className="sh-about-wrap">
          <Reveal className="sh-about-contact-panel">
            <div className="sh-about-contact-copy"><p className="sh-about-kicker">Let’s create something</p><h2>Have an idea worth building?</h2><p>Tell us about your project, explore our services or discuss how technology could help you.</p><Link to="/contact" className="sh-about-button sh-about-primary">Contact Shiuli Technology <ArrowUpRight size={18} /></Link></div>
            <div className="sh-about-social-box">
              <p className="sh-about-social-title">LET’S CONNECT</p>
              <div className="sh-about-socials">{socials.map(({ label, href, icon: Icon }) => <a key={label} href={href} aria-label={label} title={label} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer noopener' : undefined}><Icon size={19} /></a>)}</div>
              <a className="sh-about-contact-link" href="mailto:shiulitech@gmail.com"><Mail size={17} /> shiulitech@gmail.com</a>
              <a className="sh-about-contact-link" href="https://wa.me/919523605578" target="_blank" rel="noreferrer noopener"><MessageCircle size={17} /> +91 95236 05578</a>
              <p className="sh-about-contact-link"><MapPin size={17} /> Rukanpura, Patna, Bihar, India- 800014</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* <footer className="sh-about-bottom"><div className="sh-about-wrap">
        <Link to="/" className="sh-about-footer-brand"><ShiuliMark /><span>Shiuli Technology</span></Link>
        <p>© {new Date().getFullYear()} Shiuli Technology. All rights reserved.</p>
        <p className="sh-about-footer-tag">Built with ideas, creativity and technology.</p>
        <a href="#about-top" className="sh-about-back-top" aria-label="Back to top"><ArrowUpRight size={18} /></a>
      </div></footer> */}
    </main>
  );
}
