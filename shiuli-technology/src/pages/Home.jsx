
import { Link } from 'react-router-dom'
import {
    ArrowRight,
    ArrowUpRight,
    Code2,
    Smartphone,
    GraduationCap,
    Lightbulb,
    Palette,
    Globe,
    ShieldCheck,
    Sparkles,
} from 'lucide-react'

const services = [
    {
        icon: Code2,
        title: 'Web Development',
        text: 'Modern, responsive websites for businesses, schools and startups.',
        color: 'bg-green-100 text-green-800',
    },
    {
        icon: Smartphone,
        title: 'App Development',
        text: 'Mobile-friendly digital products and cross-platform applications.',
        color: 'bg-orange-100 text-orange-700',
    },
    {
        icon: Lightbulb,
        title: 'IT Consulting',
        text: 'Practical technology guidance, planning and digital transformation.',
        color: 'bg-blue-100 text-blue-700',
    },
    {
        icon: GraduationCap,
        title: 'Internship & Training',
        text: 'Build practical skills through guided projects and mentorship.',
        color: 'bg-purple-100 text-purple-700',
    },
]

const projects = [
    {
        title: 'School Attendance System',
        category: 'Education Technology',
        text: 'Face verification and GPS-based attendance designed for school workflows.',
        image:
            'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=900&q=80',
        icon: GraduationCap,
    },
    {
        title: 'HM Dance Studio',
        category: 'Website & Management',
        text: 'A dance studio portal concept for courses, admissions and student services.',
        image:
            'https://images.unsplash.com/photo-1504609813442-a8924e83f76e?auto=format&fit=crop&w=900&q=80',
        icon: Sparkles,
    },
    {
        title: 'Hospital Management',
        category: 'Healthcare Technology',
        text: 'A management solution concept for hospital information and workflows.',
        image:
            'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=900&q=80',
        icon: ShieldCheck,
    },
]

export default function Home() {
    return (
        <main className="overflow-hidden bg-white">
            {/* HERO */}
            <section className="relative isolate bg-gradient-to-br from-white via-[#f3faf5] to-[#fff6ed]">
                <div className="pointer-events-none absolute -left-24 top-16 -z-10 h-72 w-72 rounded-full bg-green-200/50 blur-3xl" />
                <div className="pointer-events-none absolute right-0 top-0 -z-10 h-80 w-80 rounded-full bg-orange-100/60 blur-3xl" />

                <div className="container-width grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:py-24">
                    <div>
                        <div className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-white/90 px-4 py-2 text-xs font-bold tracking-wide text-green-900 shadow-sm sm:text-sm">
                            <Sparkles size={15} className="text-orange-500" />
                            IDEAS · TECHNOLOGY · BETTER TOMORROW
                        </div>

                        <h1 className="mt-7 text-4xl font-black leading-[1.12] tracking-tight text-slate-950 sm:text-5xl lg:text-[62px]">
                            Turning Ideas into
                            <span className="mt-1 block text-green-800">
                                Digital <span className="text-orange-500">Reality.</span>
                            </span>
                        </h1>

                        <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
                            We build modern digital solutions for businesses, schools,
                            startups and individuals. From websites to custom software,
                            let’s turn your idea into something meaningful.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-3">
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-2 rounded-full bg-green-800 px-6 py-3.5 font-bold text-white shadow-lg shadow-green-900/20 transition hover:-translate-y-1 hover:bg-green-950"
                            >
                                Start Your Project
                                <ArrowRight size={18} />
                            </Link>

                            <Link
                                to="/projects"
                                className="inline-flex items-center gap-2 rounded-full border border-green-800/25 bg-white px-6 py-3.5 font-bold text-green-900 transition hover:border-green-800 hover:bg-green-50"
                            >
                                Explore Our Work
                                <ArrowUpRight size={18} />
                            </Link>
                        </div>

                        <div className="mt-10 grid max-w-lg grid-cols-3 border-t border-green-900/10 pt-6">
                            <div className="pr-3">
                                <Code2 className="mb-2 text-green-800" size={23} />
                                <p className="text-sm font-extrabold text-slate-900 sm:text-base">
                                    Web Solutions
                                </p>
                                <p className="mt-1 text-xs leading-5 text-slate-500">
                                    Built for your goals
                                </p>
                            </div>

                            <div className="border-l border-green-900/10 px-3 sm:px-5">
                                <Lightbulb className="mb-2 text-orange-500" size={23} />
                                <p className="text-sm font-extrabold text-slate-900 sm:text-base">
                                    Smart Ideas
                                </p>
                                <p className="mt-1 text-xs leading-5 text-slate-500">
                                    Practical technology
                                </p>
                            </div>

                            <div className="border-l border-green-900/10 pl-3 sm:pl-5">
                                <GraduationCap className="mb-2 text-green-800" size={23} />
                                <p className="text-sm font-extrabold text-slate-900 sm:text-base">
                                    Learning
                                </p>
                                <p className="mt-1 text-xs leading-5 text-slate-500">
                                    Practical experience
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* HERO VISUAL */}

                    {/* PREMIUM FLORAL HERO VISUAL */}
                    <div className="relative mx-auto w-full max-w-xl lg:scale-110">
                        <div className="absolute inset-8 rounded-full bg-green-200/50 blur-3xl" />
                        <div className="absolute right-5 top-8 h-32 w-32 rounded-full bg-orange-200/40 blur-3xl" />

                        <div className="relative">
                            <img
                                src="/shiuli-hero.png"
                                alt="Shiuli Technology floral technology artwork"
                                fetchPriority="high"
                                className="relative z-10 w-full object-contain drop-shadow-xl"
                            />

                            <div className="absolute bottom-3 right-0 z-20 rounded-2xl border border-green-100 bg-white/95 p-4 shadow-xl backdrop-blur-sm sm:-right-3">
                                <div className="flex items-center gap-3">
                                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                                        <Sparkles size={23} />
                                    </span>
                                    <div>
                                        <p className="text-sm font-extrabold text-green-900">
                                            Built Around Your Ideas
                                        </p>
                                        <p className="mt-1 text-xs text-slate-500">
                                            Design · Code · Innovation
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SERVICES */}
            <section className="section-padding bg-white">
                <div className="container-width">
                    <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
                        <div>
                            <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-600">
                                What we do
                            </p>
                            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                                Technology that{' '}
                                <span className="text-green-800">moves you forward.</span>
                            </h2>
                            <p className="mt-3 max-w-2xl leading-7 text-slate-600">
                                From your first website to a complete digital solution, we help
                                you move from idea to execution.
                            </p>
                        </div>

                        <Link
                            to="/services"
                            className="inline-flex shrink-0 items-center gap-2 font-bold text-green-800 transition hover:text-orange-600"
                        >
                            View all services <ArrowRight size={18} />
                        </Link>
                    </div>

                    <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        {services.map(({ icon: Icon, title, text, color }) => (
                            <Link
                                to="/services"
                                key={title}
                                className="group rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-green-200 hover:shadow-xl hover:shadow-green-950/5"
                            >
                                <div
                                    className={`flex h-14 w-14 items-center justify-center rounded-2xl ${color}`}
                                >
                                    <Icon size={27} />
                                </div>

                                <h3 className="mt-5 text-lg font-extrabold text-slate-900">
                                    {title}
                                </h3>

                                <p className="mt-3 text-sm leading-7 text-slate-600">
                                    {text}
                                </p>

                                <div className="mt-5 flex items-center gap-2 text-sm font-bold text-green-800">
                                    Learn more
                                    <ArrowRight
                                        size={16}
                                        className="transition group-hover:translate-x-1"
                                    />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* PROJECTS */}
            <section className="section-padding bg-[#f5faf6]">
                <div className="container-width">
                    <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
                        <div>
                            <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-600">
                                Selected work
                            </p>
                            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                                Projects built around{' '}
                                <span className="text-green-800">real needs.</span>
                            </h2>
                            <p className="mt-3 max-w-2xl leading-7 text-slate-600">
                                Explore our work across education, healthcare and digital
                                experiences.
                            </p>
                        </div>

                        <Link
                            to="/projects"
                            className="inline-flex shrink-0 items-center gap-2 font-bold text-green-800 transition hover:text-orange-600"
                        >
                            Explore projects <ArrowRight size={18} />
                        </Link>
                    </div>

                    <div className="mt-10 grid gap-6 md:grid-cols-3">
                        {projects.map((project) => (
                            <article
                                key={project.title}
                                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                            >
                                <div className="relative overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        loading="lazy"
                                        className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
                                    />
                                    <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-2 text-xs font-bold text-green-900 shadow-sm">
                                        <project.icon size={15} />
                                        {project.category}
                                    </span>
                                </div>

                                <div className="p-6">
                                    <h3 className="text-xl font-extrabold text-slate-900">
                                        {project.title}
                                    </h3>

                                    <p className="mt-3 text-sm leading-7 text-slate-600">
                                        {project.text}
                                    </p>

                                    <Link
                                        to="/projects"
                                        className="mt-5 inline-flex items-center gap-2 font-bold text-green-800 transition hover:text-orange-600"
                                    >
                                        View projects <ArrowRight size={16} />
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>

                    <p className="mt-5 text-xs leading-5 text-slate-500">
                        Project cards currently show previews. Connect each card to its
                        individual project details when those pages are ready.
                    </p>
                </div>
            </section>

            {/* WHY CHOOSE US */}
            <section className="section-padding bg-white">
                <div className="container-width grid items-center gap-10 lg:grid-cols-2">
                    <div>
                        <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-600">
                            Why Shiuli Technology
                        </p>

                        <h2 className="mt-3 text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-4xl">
                            Good technology.
                            <span className="block text-green-800">
                                Thoughtful execution.
                            </span>
                        </h2>

                        <p className="mt-5 max-w-xl leading-8 text-slate-600">
                            We focus on understanding your needs, creating useful
                            experiences and delivering maintainable solutions. Every project
                            starts with a conversation about the problem you want to solve.
                        </p>

                        <Link
                            to="/about"
                            className="mt-7 inline-flex items-center gap-2 rounded-full border border-green-800/30 px-5 py-3 font-bold text-green-900 transition hover:bg-green-50"
                        >
                            Get to know us <ArrowRight size={17} />
                        </Link>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                        <div className="rounded-3xl border border-green-100 bg-green-50/70 p-6">
                            <ShieldCheck size={29} className="text-green-800" />
                            <h3 className="mt-4 font-extrabold text-slate-900">
                                Quality Focus
                            </h3>
                            <p className="mt-2 text-sm leading-7 text-slate-600">
                                Thoughtful implementation and attention to detail.
                            </p>
                        </div>

                        <div className="rounded-3xl border border-orange-100 bg-orange-50/70 p-6">
                            <Lightbulb size={29} className="text-orange-600" />
                            <h3 className="mt-4 font-extrabold text-slate-900">
                                Practical Ideas
                            </h3>
                            <p className="mt-2 text-sm leading-7 text-slate-600">
                                Technology selected to fit the actual problem.
                            </p>
                        </div>

                        <div className="rounded-3xl border border-blue-100 bg-blue-50/70 p-6">
                            <Globe size={29} className="text-blue-700" />
                            <h3 className="mt-4 font-extrabold text-slate-900">
                                Modern Solutions
                            </h3>
                            <p className="mt-2 text-sm leading-7 text-slate-600">
                                Responsive web experiences and scalable foundations.
                            </p>
                        </div>

                        <div className="rounded-3xl border border-purple-100 bg-purple-50/70 p-6">
                            <GraduationCap size={29} className="text-purple-700" />
                            <h3 className="mt-4 font-extrabold text-slate-900">
                                Learning Together
                            </h3>
                            <p className="mt-2 text-sm leading-7 text-slate-600">
                                Knowledge sharing and hands-on learning opportunities.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="bg-white pb-16 sm:pb-20">
                <div className="container-width">
                    <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-r from-green-950 via-green-900 to-green-800 px-7 py-10 text-white sm:px-12 sm:py-14">
                        <div className="pointer-events-none absolute -right-12 -top-24 h-64 w-64 rounded-full bg-green-500/20 blur-3xl" />
                        <div className="pointer-events-none absolute -bottom-24 left-1/3 h-48 w-48 rounded-full bg-orange-400/10 blur-3xl" />

                        <div className="relative flex flex-col justify-between gap-8 md:flex-row md:items-center">
                            <div>
                                <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-300">
                                    Let's work together
                                </p>

                                <h2 className="mt-3 max-w-2xl text-3xl font-black tracking-tight sm:text-4xl">
                                    Have a project in mind?
                                </h2>

                                <p className="mt-4 max-w-xl leading-7 text-white/75">
                                    Tell us what you want to build. Let's explore the right
                                    solution for your business, school or idea.
                                </p>
                            </div>

                            <Link
                                to="/contact"
                                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-6 py-4 font-bold text-green-950 transition hover:-translate-y-1 hover:bg-orange-100"
                            >
                                Let's talk <ArrowUpRight size={19} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
