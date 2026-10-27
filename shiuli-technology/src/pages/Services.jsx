import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, ArrowUpRight, Code2, Smartphone, Lightbulb, GraduationCap,
  Palette, ShieldCheck, Cloud, Sparkles, CheckCircle2, Rocket,
  BriefcaseBusiness, Users, Mail,
} from 'lucide-react';
import { FaFacebookF, FaInstagram, FaWhatsapp, FaLinkedinIn } from 'react-icons/fa6';
import SEO from '../components/SEO';
import './Services.css';

const services = [
  { icon: Code2, title: 'Web Development', description: 'Responsive business websites, landing pages, portfolios and modern web applications.', points: ['Business websites', 'React applications', 'Admin dashboards'] },
  { icon: Smartphone, title: 'App Development', description: 'Mobile-friendly digital experiences and cross-platform applications tailored to your needs.', points: ['Cross-platform apps', 'Progressive web apps', 'API integration'] },
  { icon: Cloud, title: 'Custom Software', description: 'Purpose-built software to simplify everyday workflows and help organisations work smarter.', points: ['Management systems', 'Database solutions', 'Business automation'] },
  { icon: Palette, title: 'UI/UX Design', description: 'Clean, intuitive and modern interfaces designed around real users and business goals.', points: ['Website UI design', 'App prototypes', 'Responsive layouts'] },
  { icon: Lightbulb, title: 'IT Consulting', description: 'Practical technical guidance to help you plan projects, choose technologies and define next steps.', points: ['Technology planning', 'Project roadmaps', 'Digital strategy'] },
  { icon: ShieldCheck, title: 'Maintenance & Support', description: 'Ongoing assistance to help keep your website or application reliable and up to date.', points: ['Bug fixing', 'Performance improvements', 'Feature updates'] },
];

const internships = [
  { icon: Code2, title: 'Web Development', description: 'Learn frontend and backend development by building practical web projects.', duration: 'Duration discussed on application' },
  { icon: Smartphone, title: 'App Development', description: 'Explore responsive interfaces, application workflows and API integration.', duration: 'Duration discussed on application' },
  { icon: Palette, title: 'UI/UX Design', description: 'Practise wireframing, interface design and interactive prototypes.', duration: 'Duration discussed on application' },
];

const steps = [
  { icon: Users, title: 'Understand', text: 'Discuss your goals, requirements and priorities.' },
  { icon: Lightbulb, title: 'Plan', text: 'Agree on scope, approach and project milestones.' },
  { icon: Code2, title: 'Build', text: 'Develop and test the solution with regular communication.' },
  { icon: Rocket, title: 'Deliver', text: 'Prepare for launch and discuss future improvements.' },
];

const socialLinks = [
  { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61595562598658', icon: FaFacebookF },
  { label: 'Instagram', href: 'https://www.instagram.com/shiulitech?obrf=cnRoN2c5YzRmNmoz', icon: FaInstagram },
  { label: 'WhatsApp', href: 'https://wa.me/919523605578', icon: FaWhatsapp },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/search/results/companies/?keywords=Shiuli%20Technology', icon: FaLinkedinIn },
  { label: 'Email', href: 'mailto:shiulitech@gmail.com', icon: Mail },
];

function Reveal({ children, className = '', delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!('IntersectionObserver' in window)) {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.unobserve(el);
      }
    }, { threshold: 0.12, rootMargin: '0px 0px -30px 0px' });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`sh-services-reveal${visible ? ' is-visible' : ''} ${className}`} style={{ '--reveal-delay': `${delay}ms` }}>
      {children}
    </div>
  );
}

const petals = Array.from({ length: 13 }, (_, i) => ({
  left: `${(i * 17 + 7) % 100}%`,
  size: 9 + ((i * 7) % 12),
  duration: 13 + ((i * 3) % 8),
  delay: -((i * 2) % 14),
  sway: -50 + ((i * 29) % 100),
}));

export default function Services() {
  const root = useRef(null);
  const [live, setLive] = useState(false);

  useEffect(() => {
    const el = root.current;
    if (!el || !('IntersectionObserver' in window)) {
      setLive(true);
      return;
    }
    const observer = new IntersectionObserver(([entry]) => setLive(entry.isIntersecting), { threshold: 0.01 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <main ref={root} id="services-top" className={`sh-services${live ? ' is-live' : ''}`}>

      <SEO
        title="Web & App Development Services | Shiuli Technology"
        description="Explore Shiuli Technology's web development, mobile app development, custom software, UI/UX design, IT consulting and maintenance services."
        path="/services"
      />
      <div className="sh-services-sky" aria-hidden="true" />
      <div className="sh-services-moon" aria-hidden="true" />
      <div className="sh-services-grain" aria-hidden="true" />
      <div className="sh-services-petals" aria-hidden="true">
        {petals.map((p, i) => (
          <span key={i} className="sh-services-petal" style={{
            left: p.left, '--petal-size': `${p.size}px`, '--petal-duration': `${p.duration}s`,
            '--petal-delay': `${p.delay}s`, '--petal-sway': `${p.sway}px`,
          }}>
            <svg viewBox="0 0 20 28" fill="none"><path d="M10 1C3 7 1 13 5 19c2 3 5 5 5 8 0-3 3-5 5-8C19 13 17 7 10 1Z" fill="currentColor" /></svg>
          </span>
        ))}
      </div>

      <section className="sh-services-hero">
        <div className="sh-services-wrap sh-services-hero-grid">
          <Reveal className="sh-services-hero-copy">
            <div className="sh-services-eyebrow"><Sparkles size={14} /><Link to="/">Home</Link><span>/</span><span>Services</span></div>
            <p className="sh-services-kicker">Technology with purpose</p>
            <h1>Smart technology.<span>Meaningful</span><span className="sh-services-orange">solutions.</span></h1>
            <p className="sh-services-lead">From your first website to custom software and technology consulting, we create digital solutions shaped around your requirements, your people and your ambitions.</p>
            <div className="sh-services-actions">
              <Link to="/contact" className="sh-services-button sh-services-primary">Discuss your project <ArrowRight size={18} /></Link>
              <Link to="/pricing" className="sh-services-button sh-services-ghost">Explore pricing <ArrowUpRight size={18} /></Link>
            </div>
            <div className="sh-services-promise">
              <span><CheckCircle2 size={20} /></span>
              <p><strong>Built around your goals</strong><small>Tailored solutions · Clear communication · Practical delivery</small></p>
            </div>
          </Reveal>

          <Reveal className="sh-services-art-wrap" delay={130}>
            <div className="sh-services-art-glow" />
            <div className="sh-services-art">
              <div className="sh-services-art-inner">
                <div className="sh-services-art-top"><span className="sh-services-spark"><Sparkles size={24} /></span><span className="sh-services-pill">SHIULI TECHNOLOGY</span></div>
                <p className="sh-services-art-kicker">THINK · CREATE · GROW</p>
                <h2>Your next big idea<br /><em>starts here.</em></h2>
                <p className="sh-services-art-copy">Plan it. Design it. Build it. Take the next step with the right digital solution.</p>
                <div className="sh-services-art-grid">
                  {[
                    { icon: Code2, label: 'Web solutions' },
                    { icon: Smartphone, label: 'Mobile apps' },
                    { icon: Lightbulb, label: 'Consulting' },
                    { icon: GraduationCap, label: 'Learning' },
                  ].map(({ icon: Icon, label }) => <div className="sh-services-art-chip" key={label}><Icon size={19} /><span>{label}</span></div>)}
                </div>
                <div className="sh-services-art-bottom"><span className="sh-services-live-dot" /> Thoughtful technology. Real-world impact.</div>
              </div>
            </div>
            <div className="sh-services-floating-note"><strong>Ideas into reality</strong><small>Technology with purpose</small></div>
          </Reveal>
        </div>
        <a className="sh-services-scroll" href="#services-offerings" aria-label="Scroll to services"><span>EXPLORE</span><i /></a>
      </section>

      <section className="sh-services-section" id="services-offerings">
        <div className="sh-services-wrap">
          <Reveal className="sh-services-section-head">
            <div><p className="sh-services-kicker">Our expertise</p><h2>Solutions for what’s <span>next.</span></h2><p className="sh-services-muted">Flexible technology services for businesses, schools, startups, students and individuals.</p></div>
            <Link to="/contact" className="sh-services-text-link">Find the right solution <ArrowRight size={17} /></Link>
          </Reveal>
          <div className="sh-services-cards">
            {services.map(({ icon: Icon, title, description, points }, index) => (
              <Reveal key={title} delay={(index % 3) * 90}>
                <article className="sh-services-card">
                  <div className="sh-services-card-top"><span className="sh-services-icon"><Icon size={24} /></span><span className="sh-services-index">0{index + 1}</span></div>
                  <h3>{title}</h3><p className="sh-services-card-description">{description}</p>
                  <ul>{points.map(point => <li key={point}><CheckCircle2 size={15} />{point}</li>)}</ul>
                  <Link to="/contact" className="sh-services-card-link">Discuss this service <ArrowRight size={16} /></Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="sh-services-section sh-services-process">
        <div className="sh-services-wrap">
          <Reveal className="sh-services-section-head sh-services-centered">
            <p className="sh-services-kicker">Our approach</p><h2>From idea to <span>implementation.</span></h2><p className="sh-services-muted">A clear, collaborative process that keeps your project focused and moving in the right direction.</p>
          </Reveal>
          <div className="sh-services-steps">
            {steps.map(({ icon: Icon, title, text }, index) => (
              <Reveal key={title} delay={index * 85}>
                <article className="sh-services-step"><div className="sh-services-step-top"><span>0{index + 1}</span><i><Icon size={21} /></i></div><h3>{title}</h3><p>{text}</p></article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="sh-services-section">
        <div className="sh-services-wrap">
          <div className="sh-services-internship">
            <Reveal className="sh-services-internship-copy">
              <div className="sh-services-eyebrow"><GraduationCap size={15} /><span>Learn by building</span></div>
              <p className="sh-services-kicker">Grow your skills</p>
              <h2>Build skills.<span>Create your future.</span></h2>
              <p className="sh-services-muted">Explore practical learning opportunities in modern technologies, guided projects and software development.</p>
              <div className="sh-services-experience"><BriefcaseBusiness size={22} /><p><strong>Practical project experience</strong><span>Programme details, availability and eligibility can be discussed before applying.</span></p></div>
              <Link to="/contact" className="sh-services-button sh-services-primary">Enquire about internships <ArrowRight size={18} /></Link>
            </Reveal>
            <div className="sh-services-internships">
              {internships.map(({ icon: Icon, title, description, duration }, index) => (
                <Reveal key={title} delay={index * 100}>
                  <article className="sh-services-internship-card"><span className="sh-services-icon"><Icon size={23} /></span><div><h3>{title} internship</h3><p>{description}</p><small>{duration}</small></div><ArrowUpRight className="sh-services-internship-arrow" size={18} /></article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="sh-services-contact">
        <div className="sh-services-wrap">
          <Reveal>
            <div className="sh-services-contact-panel">
              <div className="sh-services-contact-copy"><p className="sh-services-kicker">Let’s work together</p><h2>Have a challenge <span>to solve?</span></h2><p>Tell us about your idea. Let’s explore the right technology solution for your goals.</p><Link to="/contact" className="sh-services-button sh-services-primary">Start a conversation <ArrowUpRight size={18} /></Link></div>
              <div className="sh-services-contact-box"><p className="sh-services-social-title">CONNECT WITH US</p><div className="sh-services-socials">{socialLinks.map(({ label, href, icon: Icon }) => <a key={label} href={href} aria-label={label} title={label} target={href.startsWith('mailto:') ? undefined : '_blank'} rel="noreferrer"><Icon size={18} /></a>)}</div><a className="sh-services-email" href="mailto:shiulitech@gmail.com"><Mail size={16} />shiulitech@gmail.com</a><p className="sh-services-contact-note">Tell us what you’re building. We’ll help you explore the next step.</p></div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* <div className="sh-services-bottom"><div className="sh-services-wrap"><Link className="sh-services-footer-brand" to="/">✳ <span>Shiuli Technology</span></Link><p>Thoughtful digital solutions, built with purpose.</p><a className="sh-services-back-top" href="#services-top" aria-label="Back to top"><ArrowUpRight size={18} /></a></div></div> */}
    </main>
  );
}
