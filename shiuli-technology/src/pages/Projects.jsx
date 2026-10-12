
import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import {
    ArrowRight,
    ArrowUpRight,
    Code2,
    Smartphone,
    GraduationCap,
    BriefcaseBusiness,
    Search,
    Sparkles,
    ExternalLink,
    Layers3,
} from 'lucide-react'

const projects = [
    {
        title: 'School Attendance System',
        category: 'Education',
        type: 'Web Application',
        description:
            'A school attendance platform concept featuring face verification, GPS-based location checks and attendance management.',
        image:
            'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1000&q=85',
        technologies: ['React', 'Node.js', 'MongoDB'],
        icon: GraduationCap,
        accent: 'bg-green-100 text-green-800',
    },
    {
        title: 'HM Dance Studio',
        category: 'Business',
        type: 'Web Application',
        description:
            'A dance studio portal concept for course discovery, student admissions, payment history and certificates.',
        image:
            'https://images.unsplash.com/photo-1504609813442-a8924e83f76e?auto=format&fit=crop&w=1000&q=85',
        technologies: ['React', 'Tailwind CSS', 'Vite'],
        icon: Layers3,
        accent: 'bg-orange-100 text-orange-700',
    },
    {
        title: 'Hospital Management',
        category: 'Healthcare',
        type: 'Web Application',
        description:
            'A management system concept to organise hospital information, patient records and everyday workflows.',
        image:
            'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1000&q=85',
        technologies: ['React', 'Node.js', 'Database'],
        icon: BriefcaseBusiness,
        accent: 'bg-blue-100 text-blue-700',
    },
    {
        title: 'Car Rental Management',
        category: 'Business',
        type: 'Management System',
        description:
            'A vehicle rental management concept for browsing vehicles, handling bookings and managing fleet information.',
        image:
            'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1000&q=85',
        technologies: ['React', 'Express.js', 'MongoDB'],
        icon: BriefcaseBusiness,
        accent: 'bg-amber-100 text-amber-700',
    },
    {
        title: 'Attendance Mobile App',
        category: 'Mobile Apps',
        type: 'Mobile / PWA',
        description:
            'A mobile-friendly attendance experience designed around camera access, location features and a responsive interface.',
        image:
            'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1000&q=85',
        technologies: ['React', 'Capacitor', 'Node.js'],
        icon: Smartphone,
        accent: 'bg-purple-100 text-purple-700',
    },
    {
        title: 'Internship Projects',
        category: 'Education',
        type: 'Learning & Development',
        description:
            'A collection of learning projects focused on practical frontend development, API integration and software skills.',
        image:
            'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=85',
        technologies: ['JavaScript', 'React', 'Git'],
        icon: Code2,
        accent: 'bg-rose-100 text-rose-700',
    },
]

const categories = [
    'All Projects',
    'Education',
    'Business',
    'Healthcare',
    'Mobile Apps',
]

export default function Projects() {
    const [activeCategory, setActiveCategory] = useState('All Projects')
    const [search, setSearch] = useState('')

    const filteredProjects = useMemo(() => {
        const query = search.trim().toLowerCase()

        return projects.filter((project) => {
            const matchesCategory =
                activeCategory === 'All Projects' ||
                project.category === activeCategory

            const matchesSearch =
                !query ||
                [
                    project.title,
                    project.category,
                    project.type,
                    project.description,
                    ...project.technologies,
                ]
                    .join(' ')
                    .toLowerCase()
                    .includes(query)

            return matchesCategory && matchesSearch
        })
    }, [activeCategory, search])

    return (
        <main className="overflow-hidden bg-white">
            {/* HERO */}
            <section className="relative isolate bg-gradient-to-br from-white via-[#f1faf3] to-[#fff4e8]">
                <div className="pointer-events-none absolute -left-24 top-10 -z-10 h-72 w-72 rounded-full bg-green-200/40 blur-3xl" />
                <div className="pointer-events-none absolute right-0 top-0 -z-10 h-72 w-72 rounded-full bg-orange-200/30 blur-3xl" />

                <div className="container-width grid items-center gap-8 py-12 sm:py-16 lg:grid-cols-2 lg:gap-12 lg:py-20">
                    <div>
                        <div className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-white/90 px-4 py-2 text-xs font-bold text-green-900 shadow-sm sm:text-sm">
                            <Sparkles size={15} className="text-orange-500" />
                            <Link to="/">Home</Link>
                            <span className="text-slate-400">/</span>
                            Projects
                        </div>

                        <p className="mt-7 text-sm font-bold uppercase tracking-[0.2em] text-orange-600">
                            Our work
                        </p>

                        <h1 className="mt-4 text-4xl font-black leading-[1.12] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                            Ideas made
                            <span className="block text-green-800">into digital</span>
                            <span className="text-orange-500">experiences.</span>
                        </h1>

                        <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
                            Explore our selected project concepts across education,
                            business, healthcare and mobile applications. Every solution
                            starts with understanding a real need.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-3">
                            <a
                                href="#project-gallery"
                                className="inline-flex items-center gap-2 rounded-full bg-green-800 px-6 py-3.5 font-bold text-white shadow-lg shadow-green-900/15 transition hover:-translate-y-1 hover:bg-green-950"
                            >
                                Explore Projects <ArrowRight size={18} />
                            </a>

                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-2 rounded-full border border-green-800/25 bg-white px-6 py-3.5 font-bold text-green-900 transition hover:bg-green-50"
                            >
                                Start a Project <ArrowUpRight size={18} />
                            </Link>
                        </div>

                        <div className="mt-9 flex flex-wrap gap-6 border-t border-green-900/10 pt-6">
                            <div>
                                <Code2 size={22} className="mb-2 text-green-800" />
                                <p className="font-extrabold text-slate-950">Web Solutions</p>
                                <p className="mt-1 text-xs text-slate-500">Modern experiences</p>
                            </div>
                            <div>
                                <Smartphone size={22} className="mb-2 text-orange-500" />
                                <p className="font-extrabold text-slate-950">Mobile Ready</p>
                                <p className="mt-1 text-xs text-slate-500">Flexible interfaces</p>
                            </div>
                            <div>
                                <GraduationCap size={22} className="mb-2 text-green-800" />
                                <p className="font-extrabold text-slate-950">Practical Ideas</p>
                                <p className="mt-1 text-xs text-slate-500">Built around needs</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative mx-auto w-full max-w-xl">
                        <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-green-200/60 via-white to-orange-200/60 blur-2xl" />

                        <div className="relative overflow-hidden rounded-[2rem] border border-white bg-white p-3 shadow-2xl shadow-green-950/10 sm:p-4">
                            <div className="relative overflow-hidden rounded-[1.5rem]">
                                <img
                                    src="/shiuli-hero.png"
                                    alt="Shiuli Technology brand artwork"
                                    className="aspect-[5/4] w-full bg-[#f2faf4] object-contain p-4 sm:p-6"
                                />

                                <div className="absolute inset-x-3 bottom-3 rounded-2xl border border-white/80 bg-white/95 p-4 shadow-lg backdrop-blur sm:inset-x-4 sm:bottom-4">
                                    <div className="flex items-center gap-3">
                                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-800">
                                            <Layers3 size={23} />
                                        </div>
                                        <div>
                                            <p className="font-extrabold text-slate-950">
                                                Designed for real needs
                                            </p>
                                            <p className="mt-1 text-xs text-slate-500">
                                                Explore ideas, solutions and technology.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* PROJECT GALLERY */}
            <section id="project-gallery" className="section-padding bg-white">
                <div className="container-width">
                    <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
                        <div>
                            <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-600">
                                Selected work
                            </p>
                            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                                Explore our <span className="text-green-800">projects.</span>
                            </h2>
                            <p className="mt-4 max-w-2xl leading-7 text-slate-600">
                                Find a project by category or search for a technology.
                            </p>
                        </div>

                        <div className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500">
                            <Layers3 size={18} className="text-green-800" />
                            {filteredProjects.length} projects shown
                        </div>
                    </div>

                    {/* FILTERS */}
                    <div className="mt-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                        <div className="flex flex-wrap gap-2">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    type="button"
                                    onClick={() => setActiveCategory(category)}
                                    aria-pressed={activeCategory === category}
                                    className={`rounded-full border px-4 py-2.5 text-sm font-bold transition ${activeCategory === category
                                            ? 'border-green-800 bg-green-800 text-white shadow-md shadow-green-900/15'
                                            : 'border-slate-200 bg-white text-slate-600 hover:border-green-300 hover:text-green-900'
                                        }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>

                        <label className="flex w-full items-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-3 transition focus-within:border-green-500 focus-within:ring-4 focus-within:ring-green-100 lg:max-w-xs">
                            <Search size={19} className="shrink-0 text-slate-400" />
                            <input
                                type="search"
                                value={search}
                                onChange={(event) => setSearch(event.target.value)}
                                placeholder="Search projects..."
                                className="w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
                                aria-label="Search projects"
                            />
                        </label>
                    </div>

                    {/* CARDS */}
                    {filteredProjects.length > 0 ? (
                        <div className="mt-9 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {filteredProjects.map(
                                ({
                                    title,
                                    category,
                                    type,
                                    description,
                                    image,
                                    technologies,
                                    icon: Icon,
                                    accent,
                                }) => (
                                    <article
                                        key={title}
                                        className="group flex flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-green-200 hover:shadow-xl hover:shadow-green-950/5"
                                    >
                                        <div className="relative overflow-hidden bg-[#f1f8f2]">
                                            <img
                                                src={image}
                                                alt={`${title} project preview`}
                                                loading="lazy"
                                                className="h-52 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-56"
                                            />
                                            <div className="absolute left-4 top-4">
                                                <span className={`inline-flex items-center gap-2 rounded-full px-3 py-2 text-xs font-bold shadow-sm ${accent}`}>
                                                    <Icon size={14} />
                                                    {type}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="flex flex-1 flex-col p-5 sm:p-6">
                                            <p className="text-xs font-bold uppercase tracking-[0.15em] text-green-700">
                                                {category}
                                            </p>

                                            <h3 className="mt-2 text-xl font-extrabold text-slate-950">
                                                {title}
                                            </h3>

                                            <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">
                                                {description}
                                            </p>

                                            <div className="mt-5 flex flex-wrap gap-2">
                                                {technologies.map((technology) => (
                                                    <span
                                                        key={technology}
                                                        className="rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-xs font-semibold text-slate-600"
                                                    >
                                                        {technology}
                                                    </span>
                                                ))}
                                            </div>

                                            <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
                                                <span className="text-xs font-medium text-slate-500">
                                                    Project overview
                                                </span>
                                                <Link
                                                    to="/contact"
                                                    aria-label={`Enquire about ${title}`}
                                                    className="inline-flex items-center gap-2 font-bold text-green-800 transition hover:text-orange-600"
                                                >
                                                    Enquire <ExternalLink size={16} />
                                                </Link>
                                            </div>
                                        </div>
                                    </article>
                                ),
                            )}
                        </div>
                    ) : (
                        <div className="mt-9 rounded-3xl border border-dashed border-slate-300 bg-slate-50 px-6 py-16 text-center">
                            <Search size={30} className="mx-auto text-slate-400" />
                            <h3 className="mt-4 text-xl font-extrabold text-slate-900">
                                No matching projects
                            </h3>
                            <p className="mt-2 text-sm text-slate-600">
                                Try another search or choose a different category.
                            </p>
                            <button
                                type="button"
                                onClick={() => {
                                    setSearch('')
                                    setActiveCategory('All Projects')
                                }}
                                className="mt-5 rounded-full bg-green-800 px-5 py-3 font-bold text-white transition hover:bg-green-950"
                            >
                                Clear Filters
                            </button>
                        </div>
                    )}

                    <p className="mt-6 text-xs leading-6 text-slate-500">
                        Project images are illustrative previews. Update the project
                        descriptions and technology lists to match the actual implemented
                        features before presenting them as completed client work.
                    </p>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-white pb-16 sm:pb-20">
                <div className="container-width">
                    <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-r from-green-950 via-green-900 to-green-800 px-7 py-10 text-white sm:px-12 sm:py-14">
                        <div className="pointer-events-none absolute -right-12 -top-24 h-64 w-64 rounded-full bg-green-500/20 blur-3xl" />

                        <div className="relative flex flex-col justify-between gap-7 md:flex-row md:items-center">
                            <div>
                                <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-300">
                                    Have an idea?
                                </p>
                                <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                                    Let's build your next project.
                                </h2>
                                <p className="mt-4 max-w-xl leading-7 text-white/70">
                                    Tell us your requirements and let's discuss the right digital
                                    solution for your goals.
                                </p>
                            </div>

                            <Link
                                to="/contact"
                                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-6 py-4 font-bold text-green-950 transition hover:-translate-y-1 hover:bg-orange-100"
                            >
                                Discuss Your Project <ArrowUpRight size={19} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
