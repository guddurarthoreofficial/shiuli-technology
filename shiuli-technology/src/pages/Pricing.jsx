import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, ArrowUpRight, Check, Code2, Smartphone, GraduationCap,
  Lightbulb, Sparkles, Building2, Palette, ShieldCheck, MessageCircle,
  ChevronDown,
} from 'lucide-react';
import SEO from '../components/SEO';
import './Pricing.css';

const plans = [
  {
    name: 'Starter Website',
    subtitle: 'For individuals and small businesses',
    price: '₹4,999',
    billing: 'one-time starting price',
    description: 'A professional online presence to get started.',
    icon: Code2,
    features: ['Up to 5 pages', 'Responsive design', 'Contact form UI', 'Basic on-page SEO setup', 'Deployment assistance'],
    featured: false,
    cta: 'Choose Starter',
    number: '01',
  },
  {
    name: 'Business Website',
    subtitle: 'For growing businesses',
    price: '₹9,999',
    billing: 'one-time starting price',
    description: 'A polished website built around your business goals.',
    icon: Building2,
    features: ['Up to 10 pages', 'Custom UI design', 'Responsive layouts', 'Contact and enquiry forms', 'Basic SEO setup', 'Deployment assistance'],
    featured: true,
    cta: 'Choose Business',
    number: '02',
  },
  {
    name: 'Custom Software',
    subtitle: 'For specific business needs',
    price: 'Let’s Talk',
    billing: 'custom quotation',
    description: 'A tailored application planned around your requirements.',
    icon: Sparkles,
    features: ['Requirement discussion', 'Custom feature planning', 'Frontend and backend options', 'Database integration', 'Project-based estimation', 'Support scope agreed in advance'],
    featured: false,
    cta: 'Request a Quote',
    number: '03',
  },
];

const additionalServices = [
  { icon: Smartphone, title: 'Mobile App Development', description: 'Cross-platform apps and mobile-friendly products scoped to your requirements.', price: 'Custom quote', number: 'A1' },
  { icon: Building2, title: 'School Management System', description: 'Discuss student records, attendance, reports, dashboards and other school workflows.', price: 'Custom quote', number: 'A2' },
  { icon: Lightbulb, title: 'IT Consulting', description: 'Technical guidance, architecture discussions and project planning.', price: 'From ₹999 / session', number: 'A3' },
  { icon: Palette, title: 'UI/UX Design', description: 'Interface design and prototypes for websites and applications.', price: 'Custom quote', number: 'A4' },
];

const internships = [
  { title: 'Web Development', description: 'Practise frontend, backend and web application fundamentals.', price: 'Fee and duration on enquiry', icon: Code2 },
  { title: 'App Development', description: 'Explore mobile-friendly application development and APIs.', price: 'Fee and duration on enquiry', icon: Smartphone },
  { title: 'UI/UX Design', description: 'Learn interface design, layouts and interactive prototyping.', price: 'Fee and duration on enquiry', icon: Palette },
];

const faqs = [
  { q: 'Are these fixed prices?', a: 'They are suggested starting prices. Your final quote depends on the agreed features, content, integrations and delivery scope.' },
  { q: 'Is domain and hosting included?', a: 'It depends on the package. Domain, hosting, renewals and paid third-party services should be clearly listed in your quotation.' },
  { q: 'Can I request a custom package?', a: 'Yes. Share your requirements and we can discuss a suitable scope, estimated cost and timeline.' },
  { q: 'Do you provide ongoing support?', a: 'Support and maintenance can be discussed separately and included in the agreement where required.' },
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
    }, { threshold: 0.12, rootMargin: '0px 0px -25px 0px' });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return <div ref={ref} className={`sh-pricing-reveal${visible ? ' is-visible' : ''} ${className}`} style={{ '--reveal-delay': `${delay}ms` }}>{children}</div>;
}

const petals = Array.from({ length: 13 }, (_, i) => ({
  left: `${(i * 17 + 7) % 100}%`,
  size: 9 + ((i * 7) % 12),
  duration: 13 + ((i * 3) % 8),
  delay: -((i * 2) % 14),
  sway: -50 + ((i * 29) % 100),
}));

function PriceCard({ plan, index }) {
  const Icon = plan.icon;
  return (
    <Reveal delay={index * 90}>
      <article className={`sh-pricing-plan${plan.featured ? ' is-featured' : ''}`}>
        {plan.featured && <span className="sh-pricing-popular"><Sparkles size={13} /> MOST POPULAR</span>}
        <div className="sh-pricing-plan-head">
          <div><span className="sh-pricing-plan-number">{plan.number} / PACKAGE</span><h3>{plan.name}</h3><p>{plan.subtitle}</p></div>
          <span className="sh-pricing-plan-icon"><Icon size={23} /></span>
        </div>
        <p className="sh-pricing-plan-description">{plan.description}</p>
        <div className="sh-pricing-amount"><strong>{plan.price}</strong><span>{plan.billing}</span></div>
        <ul className="sh-pricing-feature-list">{plan.features.map(feature => <li key={feature}><span><Check size={14} /></span>{feature}</li>)}</ul>
        <Link to={`/contact?service=${encodeURIComponent(plan.name)}`} className={`sh-pricing-plan-cta${plan.featured ? ' featured-cta' : ''}`}>{plan.cta}<ArrowRight size={17} /></Link>
      </article>
    </Reveal>
  );
}

export default function Pricing() {
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
    <main ref={root} id="pricing-top" className={`sh-pricing${live ? ' is-live' : ''}`}>

      <SEO
        title="Website & Software Development Pricing | Shiuli Technology"
        description="Explore Shiuli Technology pricing for website development, custom software, mobile apps, school management systems, UI/UX design and IT consulting."
        path="/pricing"
      />

      <div className="sh-pricing-sky" aria-hidden="true" />
      <div className="sh-pricing-moon" aria-hidden="true" />
      <div className="sh-pricing-grain" aria-hidden="true" />
      <div className="sh-pricing-petals" aria-hidden="true">
        {petals.map((p, i) => <span key={i} className="sh-pricing-petal" style={{ left: p.left, '--petal-size': `${p.size}px`, '--petal-duration': `${p.duration}s`, '--petal-delay': `${p.delay}s`, '--petal-sway': `${p.sway}px` }}><svg viewBox="0 0 20 28" fill="none"><path d="M10 1C3 7 1 13 5 19c2 3 5 5 5 8 0-3 3-5 5-8C19 13 17 7 10 1Z" fill="currentColor" /></svg></span>)}
      </div>

      <section className="sh-pricing-hero">
        <div className="sh-pricing-wrap sh-pricing-hero-grid">
          <Reveal className="sh-pricing-hero-copy">
            <div className="sh-pricing-eyebrow"><Sparkles size={14} /><Link to="/">Home</Link><span>/</span><span>Pricing</span></div>
            <p className="sh-pricing-kicker">Simple & transparent</p>
            <h1>Invest in<br /><span>better</span><em>technology.</em></h1>
            <p className="sh-pricing-lead">Explore starting prices for websites, software, consulting and learning programmes. Every custom project receives a quote based on its actual requirements.</p>
            <div className="sh-pricing-actions"><a href="#website-plans" className="sh-pricing-button sh-pricing-primary">Explore plans <ArrowRight size={18} /></a><Link to="/contact?service=Custom%20Quotation" className="sh-pricing-button sh-pricing-ghost">Get a custom quote <ArrowUpRight size={18} /></Link></div>
            <div className="sh-pricing-trust-row"><span><Check size={15} /> Clear scope</span><span><Check size={15} /> Agreed deliverables</span><span><Check size={15} /> Transparent quote</span></div>
          </Reveal>

          <Reveal className="sh-pricing-hero-art" delay={130}>
            <div className="sh-pricing-art-glow" />
            <div className="sh-pricing-art">
              <div className="sh-pricing-art-top"><span className="sh-pricing-art-symbol"><Sparkles size={23} /></span><span>SHIULI TECHNOLOGY</span><span className="sh-pricing-art-dot" /></div>
              <p className="sh-pricing-art-kicker">A BETTER WAY TO BEGIN</p>
              <h2>Clear scope.<br /><em>Thoughtful pricing.</em></h2>
              <p className="sh-pricing-art-copy">Tell us what you want to build. We’ll discuss the features, timeline and estimated cost before work begins.</p>
              <div className="sh-pricing-art-checks">{['Understand your requirements', 'Agree on scope and deliverables', 'Discuss cost and timeline'].map(item => <div key={item}><span><Check size={14} /></span>{item}</div>)}</div>
              <div className="sh-pricing-art-footer"><span>THINK · CREATE · GROW</span><span>01 — 03</span></div>
            </div>
            <div className="sh-pricing-floating-note"><span>01</span><div><strong>Built around your needs</strong><small>No one-size-fits-all quote</small></div></div>
          </Reveal>
        </div>
        <a className="sh-pricing-scroll" href="#website-plans" aria-label="Scroll to pricing plans"><span>EXPLORE PRICING</span><i /></a>
      </section>

      <section id="website-plans" className="sh-pricing-section">
        <div className="sh-pricing-wrap">
          <Reveal className="sh-pricing-section-head">
            <div><p className="sh-pricing-kicker">Website packages</p><h2>Choose your <span>starting point.</span></h2><p className="sh-pricing-muted">Suggested starting prices for typical projects. Final pricing depends on features, content, integrations and scope.</p></div>
            <div className="sh-pricing-starting"><span>STARTING FROM</span><strong>₹4,999</strong><small>One-time starting price</small></div>
          </Reveal>
          <div className="sh-pricing-plans">{plans.map((plan, index) => <PriceCard key={plan.name} plan={plan} index={index} />)}</div>
          <Reveal delay={120}><div className="sh-pricing-notice"><ShieldCheck size={22} /><p><strong>Before you confirm:</strong> Domain registration, hosting renewals, paid APIs, third-party subscriptions, taxes and ongoing maintenance should be listed separately in the final quotation wherever applicable.</p></div></Reveal>
        </div>
      </section>

      <section className="sh-pricing-section sh-pricing-alternatives">
        <div className="sh-pricing-wrap">
          <Reveal className="sh-pricing-section-head"><div><p className="sh-pricing-kicker">More ways to work together</p><h2>Services for <span>every idea.</span></h2><p className="sh-pricing-muted">Need something beyond a standard website? Let’s scope it together.</p></div></Reveal>
          <div className="sh-pricing-services">{additionalServices.map(({ icon: Icon, title, description, price, number }, index) => <Reveal key={title} delay={(index % 2) * 90}><article className="sh-pricing-service-card"><div className="sh-pricing-service-top"><span className="sh-pricing-service-icon"><Icon size={23} /></span><span>{number}</span></div><h3>{title}</h3><p>{description}</p><div className="sh-pricing-service-bottom"><strong>{price}</strong><Link to={`/contact?service=${encodeURIComponent(title)}`}>Enquire <ArrowRight size={15} /></Link></div></article></Reveal>)}</div>
        </div>
      </section>

      <section className="sh-pricing-section">
        <div className="sh-pricing-wrap">
          <div className="sh-pricing-internship">
            <Reveal className="sh-pricing-internship-copy"><div className="sh-pricing-eyebrow"><GraduationCap size={15} /><span>Learn & build</span></div><p className="sh-pricing-kicker">Invest in your skills</p><h2>Start your<br /><span>learning journey.</span></h2><p className="sh-pricing-muted">Explore practical training and project-based learning opportunities in modern technology.</p><Link to="/contact?service=Internship" className="sh-pricing-button sh-pricing-primary">Ask about internships <ArrowRight size={18} /></Link></Reveal>
            <div className="sh-pricing-internships">{internships.map(({ title, description, price, icon: Icon }, index) => <Reveal key={title} delay={index * 80}><article className="sh-pricing-internship-card"><span className="sh-pricing-service-icon"><Icon size={22} /></span><div><h3>{title} internship</h3><p>{description}</p><small>{price}</small></div><ArrowUpRight className="sh-pricing-internship-arrow" size={18} /></article></Reveal>)}</div>
          </div>
        </div>
      </section>

      <section className="sh-pricing-section sh-pricing-faq-section">
        <div className="sh-pricing-wrap">
          <Reveal className="sh-pricing-section-head sh-pricing-faq-head"><div><p className="sh-pricing-kicker">Good to know</p><h2>Pricing questions,<br /><span>answered.</span></h2><p className="sh-pricing-muted">A little clarity before we get started.</p></div></Reveal>
          <div className="sh-pricing-faqs">{faqs.map(({ q, a }, index) => <Reveal key={q} delay={index * 60}><details className="sh-pricing-faq"><summary>{q}<span><ChevronDown size={18} /></span></summary><p>{a}</p></details></Reveal>)}</div>
        </div>
      </section>

      <section className="sh-pricing-cta">
        <div className="sh-pricing-wrap"><Reveal><div className="sh-pricing-cta-panel"><div><p className="sh-pricing-kicker">Your project, your goals</p><h2>Need a <span>custom solution?</span></h2><p>Tell us your idea and get in touch to discuss the scope, estimated budget and next steps.</p></div><Link to="/contact?service=Custom%20Quotation" className="sh-pricing-button sh-pricing-primary">Request a quote <ArrowUpRight size={18} /></Link></div></Reveal></div>
      </section>

      <div className="sh-pricing-bottom"><div className="sh-pricing-wrap"><Link className="sh-pricing-footer-brand" to="/"><span>✳</span> Shiuli Technology</Link><p>Thoughtful digital solutions, built with purpose.</p><a className="sh-pricing-back-top" href="#pricing-top" aria-label="Back to top"><ArrowUpRight size={18} /></a></div></div>
    </main>
  );
}
