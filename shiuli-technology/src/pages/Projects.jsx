import { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, ArrowUpRight, Code2, Smartphone, GraduationCap,
  BriefcaseBusiness, Search, Sparkles, ExternalLink, Layers3,
  CheckCircle2, X, SlidersHorizontal,
} from 'lucide-react';
import SEO from '../components/SEO';
import './Projects.css';

const projects = [
  {
    title: 'School Attendance System',
    category: 'Education',
    type: 'Web Application',
    description: 'A school attendance platform concept featuring face verification, GPS-based location checks and attendance management.',
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1000&q=85',
    technologies: ['React', 'Node.js', 'MongoDB'],
    icon: GraduationCap,
    status: 'Platform concept',
  },
  {
    title: 'HM Dance Studio',
    category: 'Business',
    type: 'Web Application',
    description: 'A dance studio portal concept for course discovery, student admissions, payment history and certificates.',
    image: 'https://images.unsplash.com/photo-1504609813442-a8924e83f76e?auto=format&fit=crop&w=1000&q=85',
    technologies: ['React', 'Tailwind CSS', 'Vite'],
    icon: Layers3,
    status: 'Web experience',
  },
  {
    title: 'Hospital Management',
    category: 'Healthcare',
    type: 'Web Application',
    description: 'A management system concept to organise hospital information, patient records and everyday workflows.',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1000&q=85',
    technologies: ['React', 'Node.js', 'Database'],
    icon: BriefcaseBusiness,
    status: 'System concept',
  },
  {
    title: 'Car Rental Management',
    category: 'Business',
    type: 'Management System',
    description: 'A vehicle rental management concept for browsing vehicles, handling bookings and managing fleet information.',
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1000&q=85',
    technologies: ['React', 'Express.js', 'MongoDB'],
    icon: BriefcaseBusiness,
    status: 'System concept',
  },
  {
    title: 'Attendance Mobile App',
    category: 'Mobile Apps',
    type: 'Mobile / PWA',
    description: 'A mobile-friendly attendance experience designed around camera access, location features and a responsive interface.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1000&q=85',
    technologies: ['React', 'Capacitor', 'Node.js'],
    icon: Smartphone,
    status: 'Mobile experience',
  },
  {
    title: 'Internship Projects',
    category: 'Education',
    type: 'Learning & Development',
    description: 'A collection of learning projects focused on practical frontend development, API integration and software skills.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=85',
    technologies: ['JavaScript', 'React', 'Git'],
    icon: Code2,
    status: 'Learning portfolio',
  },

  {
    title: 'E-Commerce Platform',
    category: 'Business',
    type: 'Full-Stack Store',
    description: 'An online shopping platform concept with product discovery, cart, checkout, order history and admin catalogue tools.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1000&q=85',
    technologies: ['React', 'Node.js', 'MongoDB'],
    icon: Layers3,
    status: 'Portfolio concept',
  },
  {
    title: 'Learning Management System',
    category: 'Education',
    type: 'Learning Platform',
    description: 'A learning portal concept for course content, student progress, quizzes and instructor-managed lessons.',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=85',
    technologies: ['React', 'Express.js', 'MongoDB'],
    icon: GraduationCap,
    status: 'Portfolio concept',
  },
  {
    title: 'Food Ordering & Delivery',
    category: 'Business',
    type: 'Ordering Platform',
    description: 'A food ordering experience concept with restaurant menus, order tracking and an operations dashboard.',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1000&q=85',
    technologies: ['React', 'Node.js', 'REST API'],
    icon: Smartphone,
    status: 'Portfolio concept',
  },
  {
    title: 'Appointment Booking System',
    category: 'Healthcare',
    type: 'Booking Platform',
    description: 'A booking workflow concept for service availability, appointment requests, reminders and staff schedules.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=85',
    technologies: ['React', 'Express.js', 'MongoDB'],
    icon: BriefcaseBusiness,
    status: 'Portfolio concept',
  },
  {
    title: 'Job & Recruitment Portal',
    category: 'Business',
    type: 'Web Application',
    description: 'A job portal concept with searchable vacancies, candidate profiles, applications and recruiter tools.',
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=85',
    technologies: ['React', 'Node.js', 'SQL'],
    icon: Code2,
    status: 'Portfolio concept',
  },
  {
    title: 'Real Estate Listing Portal',
    category: 'Business',
    type: 'Listing Platform',
    description: 'A property discovery concept with listing filters, image galleries, enquiry forms and agent dashboards.',
    image: 'https://cdn.mos.cms.futurecdn.net/FyuJDMicboPjn8mkbsq5vQ.jpg',
    technologies: ['React', 'Node.js', 'MongoDB'],
    icon: Layers3,
    status: 'Portfolio concept',
  },
  {
    title: 'Expense & Finance Tracker',
    category: 'Business',
    type: 'Dashboard',
    description: 'A personal finance dashboard concept for recording income, categorising expenses and reviewing monthly summaries.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1000&q=85',
    technologies: ['React', 'Node.js', 'Charts'],
    icon: Code2,
    status: 'Portfolio concept',
  },
  {
    title: 'Real-Time Chat Application',
    category: 'Communication',
    type: 'Real-Time App',
    description: 'A messaging app concept with conversations, online status, notifications and real-time event delivery.',
    image: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&w=1000&q=85',
    technologies: ['React', 'Socket.IO', 'Node.js'],
    icon: Smartphone,
    status: 'Portfolio concept',
  },
  {
    title: 'Task & Team Management',
    category: 'Business',
    type: 'Productivity App',
    description: 'A team workspace concept with task assignments, project boards, deadlines and progress summaries.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1000&q=85',
    technologies: ['React', 'Express.js', 'MongoDB'],
    icon: Layers3,
    status: 'Portfolio concept',
  },
];

const categories = ['All Projects', 'Education', 'Business', 'Healthcare', 'Mobile Apps', 'Communication'];

function Reveal({ children, className = '', delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    if (!('IntersectionObserver' in window)) {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.unobserve(element);
      }
    }, { threshold: 0.12, rootMargin: '0px 0px -25px 0px' });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return <div ref={ref} className={`sh-projects-reveal${visible ? ' is-visible' : ''} ${className}`} style={{ '--reveal-delay': `${delay}ms` }}>{children}</div>;
}

const petals = Array.from({ length: 12 }, (_, i) => ({
  left: `${(i * 19 + 5) % 100}%`,
  size: 9 + ((i * 7) % 11),
  duration: 13 + ((i * 3) % 8),
  delay: -((i * 2) % 14),
  sway: -50 + ((i * 29) % 100),
}));

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All Projects');
  const [search, setSearch] = useState('');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
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

  const filteredProjects = useMemo(() => {
    const query = search.trim().toLowerCase();
    return projects.filter(project => {
      const matchesCategory = activeCategory === 'All Projects' || project.category === activeCategory;
      const searchable = [project.title, project.category, project.type, project.description, ...project.technologies].join(' ').toLowerCase();
      return matchesCategory && (!query || searchable.includes(query));
    });
  }, [activeCategory, search]);

  const clearFilters = () => {
    setSearch('');
    setActiveCategory('All Projects');
    setMobileFiltersOpen(false);
  };

  return (
    <main ref={root} id="projects-top" className={`sh-projects${live ? ' is-live' : ''}`}>

      <SEO
        title="Our Projects & Portfolio | Shiuli Technology"
        description="Explore Shiuli Technology's web applications, school attendance systems, mobile apps and custom software project concepts built with modern technologies."
        path="/projects"
      />

      <div className="sh-projects-sky" aria-hidden="true" />
      <div className="sh-projects-moon" aria-hidden="true" />
      <div className="sh-projects-grain" aria-hidden="true" />
      <div className="sh-projects-petals" aria-hidden="true">
        {petals.map((p, i) => <span key={i} className="sh-projects-petal" style={{ left: p.left, '--petal-size': `${p.size}px`, '--petal-duration': `${p.duration}s`, '--petal-delay': `${p.delay}s`, '--petal-sway': `${p.sway}px` }}><svg viewBox="0 0 20 28" fill="none"><path d="M10 1C3 7 1 13 5 19c2 3 5 5 5 8 0-3 3-5 5-8C19 13 17 7 10 1Z" fill="currentColor" /></svg></span>)}
      </div>

      <section className="sh-projects-hero">
        <div className="sh-projects-wrap sh-projects-hero-grid">
          <Reveal className="sh-projects-hero-copy">
            <div className="sh-projects-eyebrow"><Sparkles size={14} /><Link to="/">Home</Link><span>/</span><span>Projects</span></div>
            <p className="sh-projects-kicker">Selected work & ideas</p>
            <h1>Ideas made<br /><span>into digital</span><em>experiences.</em></h1>
            <p className="sh-projects-lead">Explore selected project concepts across education, business, healthcare and mobile applications. Every solution starts with understanding a real need.</p>
            <div className="sh-projects-actions"><a href="#project-gallery" className="sh-projects-button sh-projects-primary">Explore projects <ArrowRight size={18} /></a><Link to="/contact" className="sh-projects-button sh-projects-ghost">Start a project <ArrowUpRight size={18} /></Link></div>
            <div className="sh-projects-proof">
              <div><Code2 size={21} /><p><strong>Web solutions</strong><small>Modern experiences</small></p></div>
              <div><Smartphone size={21} /><p><strong>Mobile ready</strong><small>Flexible interfaces</small></p></div>
              <div><GraduationCap size={21} /><p><strong>Practical ideas</strong><small>Built around needs</small></p></div>
            </div>
          </Reveal>


          <Reveal className="sh-projects-hero-art" delay={130}>
            <div className="sh-projects-art-glow" />

            <div className="sh-projects-showcase">
              <div className="sh-projects-showcase-top">
                <span className="sh-projects-brand-mark">
                  <svg
                    className="sh-projects-shiuli-logo"
                    viewBox="0 0 48 48"
                    role="img"
                    aria-label="Shiuli Technology flower logo"
                  >
                    <g fill="#F7F3E8">
                      <ellipse cx="24" cy="13" rx="5.5" ry="10" />
                      <ellipse
                        cx="34" cy="19" rx="5.5" ry="10"
                        transform="rotate(60 34 19)"
                      />
                      <ellipse
                        cx="34" cy="30" rx="5.5" ry="10"
                        transform="rotate(120 34 30)"
                      />
                      <ellipse cx="24" cy="35" rx="5.5" ry="10" />
                      <ellipse
                        cx="14" cy="30" rx="5.5" ry="10"
                        transform="rotate(60 14 30)"
                      />
                      <ellipse
                        cx="14" cy="19" rx="5.5" ry="10"
                        transform="rotate(120 14 19)"
                      />
                    </g>
                    <circle cx="24" cy="24" r="4" fill="#FF7A1F" />
                  </svg>
                </span>

                <span>SHIULI TECHNOLOGY</span>

                <span className="sh-projects-online">
                  <i /> DIGITAL STUDIO
                </span>
              </div>

              <div className="sh-projects-showcase-main">
                <p className="sh-projects-kicker">
                  THE WORK IN PROGRESS
                </p>

                <h2>
                  Make ideas
                  <br />
                  <em>matter.</em>
                </h2>

                <p>
                  Thoughtful design. Useful technology.
                  Real-world purpose.
                </p>
              </div>

              <div className="sh-projects-showcase-lines">
                <span />
                <span />
                <span />
              </div>

              <div className="sh-projects-showcase-bottom">
                <span>01 — IMAGINE</span>
                <span>02 — CREATE</span>
                <span>03 — IMPROVE</span>
              </div>
            </div>

            <div className="sh-projects-floating-card">
              <Layers3 size={18} />
              <span>
                <strong>Ideas into impact</strong>
                <small>One project at a time</small>
              </span>
            </div>
          </Reveal>

        </div>
        <a className="sh-projects-scroll" href="#project-gallery" aria-label="Scroll to project gallery"><span>DISCOVER</span><i /></a>
      </section>

      <section className="sh-projects-gallery" id="project-gallery">
        <div className="sh-projects-wrap">
          <Reveal className="sh-projects-section-head">
            <div><p className="sh-projects-kicker">The portfolio</p><h2>Explore our <span>projects.</span></h2><p className="sh-projects-muted">Browse by category or search by project name and technology.</p></div>
            <div className="sh-projects-count"><Layers3 size={18} /><strong>{filteredProjects.length.toString().padStart(2, '0')}</strong><span>projects shown</span></div>
          </Reveal>

          <Reveal className="sh-projects-toolbar" delay={80}>
            <div className="sh-projects-filter-row">
              <div className="sh-projects-category-list" aria-label="Filter projects by category">
                {categories.map(category => <button type="button" key={category} onClick={() => setActiveCategory(category)} aria-pressed={activeCategory === category} className={activeCategory === category ? 'active' : ''}>{category}</button>)}
              </div>
              <button className="sh-projects-filter-toggle" type="button" onClick={() => setMobileFiltersOpen(v => !v)} aria-expanded={mobileFiltersOpen}><SlidersHorizontal size={16} /> Filters</button>
              <label className="sh-projects-search"><Search size={18} /><input type="search" value={search} onChange={event => setSearch(event.target.value)} placeholder="Search projects or tech..." aria-label="Search projects" />{search && <button type="button" aria-label="Clear search" onClick={() => setSearch('')}><X size={15} /></button>}</label>
            </div>
            {mobileFiltersOpen && <div className="sh-projects-mobile-categories">{categories.map(category => <button type="button" key={category} onClick={() => { setActiveCategory(category); setMobileFiltersOpen(false); }} className={activeCategory === category ? 'active' : ''}>{category}</button>)}</div>}
            <div className="sh-projects-active-filter"><span>Showing</span><strong>{activeCategory}</strong>{search && <span>matching “{search}”</span>}{(activeCategory !== 'All Projects' || search) && <button type="button" onClick={clearFilters}>Clear filters <X size={13} /></button>}</div>
          </Reveal>

          {filteredProjects.length > 0 ? (
            <div className="sh-projects-grid">
              {filteredProjects.map(({ title, category, type, description, image, technologies, icon: Icon, status }, index) => (
                <Reveal key={title} delay={(index % 3) * 80}>
                  <article className="sh-projects-card">
                    <div className="sh-projects-card-image">
                      <img src={image} alt={`${title} project preview`} loading="lazy" />
                      <div className="sh-projects-image-shade" />
                      <span className="sh-projects-type"><Icon size={14} />{type}</span>
                      <span className="sh-projects-image-index">0{index + 1}</span>
                      <span className="sh-projects-status">{status}</span>
                    </div>
                    <div className="sh-projects-card-body">
                      <p className="sh-projects-category-label">{category}</p>
                      <h3>{title}</h3>
                      <p className="sh-projects-description">{description}</p>
                      <div className="sh-projects-tech">{technologies.map(technology => <span key={technology}>{technology}</span>)}</div>
                      <div className="sh-projects-card-bottom"><span>Project overview</span><Link to="/contact" aria-label={`Enquire about ${title}`}>Enquire <ArrowUpRight size={16} /></Link></div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="sh-projects-empty"><Search size={29} /><h3>No matching projects</h3><p>Try another search or choose a different category.</p><button type="button" onClick={clearFilters}>Clear filters <ArrowRight size={16} /></button></div>
          )}
          <p className="sh-projects-disclaimer">Project images are illustrative previews. Update descriptions and technology lists to match implemented features before presenting any project as completed client work.</p>
        </div>
      </section>

      <section className="sh-projects-cta">
        <div className="sh-projects-wrap">
          <Reveal><div className="sh-projects-cta-panel"><div><p className="sh-projects-kicker">Have an idea?</p><h2>Let’s build your next <span>project.</span></h2><p>Tell us your requirements and let’s discuss the right digital solution for your goals.</p></div><Link to="/contact" className="sh-projects-button sh-projects-primary">Discuss your project <ArrowUpRight size={18} /></Link></div></Reveal>
        </div>
      </section>

      {/* <div className="sh-projects-bottom"><div className="sh-projects-wrap"><Link className="sh-projects-footer-brand" to="/"><span className="sh-projects-footer-flower">✿</span> Shiuli Technology</Link><p>Thoughtful digital solutions, built with purpose.</p><a className="sh-projects-back-top" href="#projects-top" aria-label="Back to top"><ArrowUpRight size={18} /></a></div></div> */}
    </main>
  );
}
