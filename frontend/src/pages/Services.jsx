
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  Smartphone,
  Lightbulb,
  GraduationCap,
  Palette,
  ShieldCheck,
  Cloud,
  Headphones,
  Sparkles,
  CheckCircle2,
  Rocket,
  BriefcaseBusiness,
  Users,
} from 'lucide-react'

const services = [
  {
    icon: Code2,
    title: 'Web Development',
    description:
      'Responsive business websites, landing pages, portfolios and modern web applications.',
    points: ['Business websites', 'React applications', 'Admin dashboards'],
    color: 'bg-green-100 text-green-800',
    glow: 'group-hover:bg-green-800 group-hover:text-white',
  },
  {
    icon: Smartphone,
    title: 'App Development',
    description:
      'Mobile-friendly digital experiences and cross-platform applications tailored to your needs.',
    points: ['Cross-platform apps', 'Progressive web apps', 'API integration'],
    color: 'bg-orange-100 text-orange-700',
    glow: 'group-hover:bg-orange-500 group-hover:text-white',
  },
  {
    icon: Cloud,
    title: 'Custom Software',
    description:
      'Purpose-built software to simplify everyday workflows and help organisations work smarter.',
    points: ['Management systems', 'Database solutions', 'Business automation'],
    color: 'bg-blue-100 text-blue-700',
    glow: 'group-hover:bg-blue-700 group-hover:text-white',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description:
      'Clean, intuitive and modern interfaces designed around real users and business goals.',
    points: ['Website UI design', 'App prototypes', 'Responsive layouts'],
    color: 'bg-purple-100 text-purple-700',
    glow: 'group-hover:bg-purple-700 group-hover:text-white',
  },
  {
    icon: Lightbulb,
    title: 'IT Consulting',
    description:
      'Practical technical guidance to help you plan projects, choose technologies and define next steps.',
    points: ['Technology planning', 'Project roadmaps', 'Digital strategy'],
    color: 'bg-amber-100 text-amber-700',
    glow: 'group-hover:bg-amber-500 group-hover:text-white',
  },
  {
    icon: ShieldCheck,
    title: 'Maintenance & Support',
    description:
      'Ongoing assistance to help keep your website or application reliable and up to date.',
    points: ['Bug fixing', 'Performance improvements', 'Feature updates'],
    color: 'bg-rose-100 text-rose-700',
    glow: 'group-hover:bg-rose-600 group-hover:text-white',
  },
]

const internships = [
  {
    icon: Code2,
    title: 'Web Development',
    description: 'Learn frontend and backend development by building practical web projects.',
    duration: 'Duration discussed on application',
    color: 'bg-green-100 text-green-800',
  },
  {
    icon: Smartphone,
    title: 'App Development',
    description: 'Explore responsive interfaces, application workflows and API integration.',
    duration: 'Duration discussed on application',
    color: 'bg-blue-100 text-blue-700',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Practise wireframing, interface design and interactive prototypes.',
    duration: 'Duration discussed on application',
    color: 'bg-purple-100 text-purple-700',
  },
]

export default function Services() {
  return (
    <main className="overflow-hidden bg-white">
      {/* HERO */}
      <section className="relative isolate bg-gradient-to-br from-white via-[#f2faf4] to-[#fff4e8]">
        <div className="pointer-events-none absolute -left-24 top-10 -z-10 h-72 w-72 rounded-full bg-green-200/40 blur-3xl" />
        <div className="pointer-events-none absolute right-0 top-0 -z-10 h-72 w-72 rounded-full bg-orange-200/30 blur-3xl" />

        <div className="container-width grid items-center gap-8 py-12 sm:py-16 lg:grid-cols-2 lg:gap-12 lg:py-20">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-white/90 px-4 py-2 text-xs font-bold text-green-900 shadow-sm sm:text-sm">
              <Sparkles size={15} className="text-orange-500" />
              <Link to="/">Home</Link>
              <span className="text-slate-400">/</span>
              Services
            </div>

            <p className="mt-7 text-sm font-bold uppercase tracking-[0.2em] text-orange-600">
              What we do
            </p>

            <h1 className="mt-4 text-4xl font-black leading-[1.12] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Smart technology.
              <span className="block text-green-800">Meaningful</span>
              <span className="text-orange-500">solutions.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
              From your first website to custom software and technology
              consulting, explore digital solutions designed around your
              requirements and ambitions.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-green-800 px-6 py-3.5 font-bold text-white shadow-lg shadow-green-900/15 transition hover:-translate-y-1 hover:bg-green-950"
              >
                Discuss Your Project <ArrowRight size={18} />
              </Link>

              <Link
                to="/pricing"
                className="inline-flex items-center gap-2 rounded-full border border-green-800/25 bg-white px-6 py-3.5 font-bold text-green-900 transition hover:bg-green-50"
              >
                Explore Pricing <ArrowUpRight size={18} />
              </Link>
            </div>

            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 border-t border-green-900/10 pt-6 text-sm font-semibold text-slate-700">
              <span className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-green-700" />
                Tailored solutions
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-green-700" />
                Clear communication
              </span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-green-200/60 via-white to-orange-200/60 blur-2xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white bg-white p-3 shadow-2xl shadow-green-950/10 sm:p-4">
              <div className="rounded-[1.5rem] bg-gradient-to-br from-green-950 via-green-900 to-green-800 p-7 text-white sm:p-10">
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-orange-300">
                    <Sparkles size={26} />
                  </div>
                  <span className="rounded-full border border-white/20 px-3 py-1.5 text-xs font-semibold text-green-100">
                    Shiuli Technology
                  </span>
                </div>

                <h2 className="mt-10 max-w-sm text-3xl font-black leading-tight sm:text-4xl">
                  Your next big idea starts here.
                </h2>

                <p className="mt-4 max-w-sm leading-7 text-white/70">
                  Plan it. Design it. Build it. Take the next step with the
                  right digital solution.
                </p>

                <div className="mt-9 grid grid-cols-2 gap-3">
                  {[
                    { icon: Code2, label: 'Web Solutions' },
                    { icon: Smartphone, label: 'Mobile Apps' },
                    { icon: Lightbulb, label: 'Consulting' },
                    { icon: GraduationCap, label: 'Learning' },
                  ].map(({ icon: Icon, label }) => (
                    <div
                      key={label}
                      className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.07] p-3"
                    >
                      <Icon size={20} className="shrink-0 text-orange-300" />
                      <span className="text-sm font-semibold">{label}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 border-t border-white/15 pt-5">
                  <p className="text-sm font-medium text-green-200">
                    THINK · CREATE · GROW
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -right-1 top-8 hidden rounded-2xl border border-green-100 bg-white px-4 py-3 shadow-lg sm:block md:-right-4">
              <p className="text-sm font-extrabold text-green-900">
                Ideas into reality
              </p>
              <p className="mt-1 text-xs text-slate-500">
                Technology with purpose
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE CARDS */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-600">
                Our expertise
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                Our core <span className="text-green-800">services.</span>
              </h2>
              <p className="mt-4 max-w-2xl leading-7 text-slate-600">
                Flexible technology services for businesses, schools,
                startups, students and individuals.
              </p>
            </div>

            <Link
              to="/contact"
              className="inline-flex shrink-0 items-center gap-2 font-bold text-green-800 transition hover:text-orange-600"
            >
              Find the right solution <ArrowRight size={18} />
            </Link>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(
              ({ icon: Icon, title, description, points, color, glow }) => (
                <article
                  key={title}
                  className="group rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1.5 hover:border-green-200 hover:shadow-xl hover:shadow-green-950/5 sm:p-7"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl ${color} transition duration-300 ${glow}`}
                    >
                      <Icon size={27} />
                    </div>
                    <span className="text-xs font-bold tracking-widest text-slate-300">
                      {String(services.findIndex((s) => s.title === title) + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl font-extrabold text-slate-950">
                    {title}
                  </h3>
                  <p className="mt-3 min-h-[72px] text-sm leading-7 text-slate-600">
                    {description}
                  </p>

                  <ul className="mt-5 space-y-3 border-t border-slate-100 pt-5">
                    {points.map((point) => (
                      <li
                        key={point}
                        className="flex items-center gap-2 text-sm text-slate-700"
                      >
                        <CheckCircle2
                          size={16}
                          className="shrink-0 text-green-700"
                        />
                        {point}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className="mt-6 inline-flex items-center gap-2 font-bold text-green-800 transition group-hover:text-orange-600"
                  >
                    Discuss this service
                    <ArrowRight
                      size={17}
                      className="transition group-hover:translate-x-1"
                    />
                  </Link>
                </article>
              ),
            )}
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="section-padding bg-[#f5faf6]">
        <div className="container-width">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-600">
              Our approach
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              From idea to implementation.
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              A transparent process to help keep your project focused and
              moving in the right direction.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Users,
                title: 'Understand',
                text: 'Discuss your goals, requirements and priorities.',
              },
              {
                icon: Lightbulb,
                title: 'Plan',
                text: 'Agree on scope, approach and project milestones.',
              },
              {
                icon: Code2,
                title: 'Build',
                text: 'Develop and test the solution with regular communication.',
              },
              {
                icon: Rocket,
                title: 'Deliver',
                text: 'Prepare for launch and discuss future improvements.',
              },
            ].map(({ icon: Icon, title, text }, index) => (
              <article
                key={title}
                className="relative rounded-3xl border border-green-100 bg-white p-6 shadow-sm"
              >
                <span className="absolute right-5 top-5 text-xs font-black tracking-widest text-green-700/40">
                  0{index + 1}
                </span>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-green-800">
                  <Icon size={26} />
                </div>
                <h3 className="mt-5 text-lg font-extrabold text-slate-950">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* INTERNSHIP */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="relative overflow-hidden rounded-[2rem] border border-green-100 bg-gradient-to-br from-[#f1faf3] via-white to-[#fff3e7] p-6 sm:p-10 lg:p-12">
            <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-green-200/40 blur-3xl" />

            <div className="relative grid items-start gap-9 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-white px-3 py-2 text-xs font-bold text-green-900">
                  <GraduationCap size={16} className="text-orange-500" />
                  LEARN BY BUILDING
                </div>

                <h2 className="mt-5 text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-4xl">
                  Build skills.
                  <span className="block text-green-800">Create your future.</span>
                </h2>

                <p className="mt-5 leading-7 text-slate-600">
                  Explore practical learning opportunities in modern
                  technologies, guided projects and software development.
                </p>

                <div className="mt-6 flex items-start gap-3 rounded-2xl border border-green-100 bg-white/90 p-4">
                  <BriefcaseBusiness
                    size={23}
                    className="mt-0.5 shrink-0 text-green-800"
                  />
                  <p className="text-sm leading-6 text-slate-600">
                    <span className="block font-extrabold text-slate-950">
                      Practical project experience
                    </span>
                    Programme details, availability and eligibility can be
                    discussed before applying.
                  </p>
                </div>

                <Link
                  to="/contact"
                  className="mt-7 inline-flex items-center gap-2 rounded-full bg-green-800 px-6 py-3.5 font-bold text-white transition hover:bg-green-950"
                >
                  Enquire About Internships <ArrowRight size={18} />
                </Link>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                {internships.map(({ icon: Icon, title, description, duration, color }) => (
                  <article
                    key={title}
                    className="rounded-2xl border border-slate-200/80 bg-white/95 p-5 shadow-sm transition hover:border-green-200 hover:shadow-md sm:p-6"
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${color}`}
                      >
                        <Icon size={24} />
                      </div>
                      <div>
                        <h3 className="font-extrabold text-slate-950">
                          {title} Internship
                        </h3>
                        <p className="mt-2 text-sm leading-6 text-slate-600">
                          {description}
                        </p>
                        <p className="mt-3 text-xs font-semibold text-green-800">
                          {duration}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-white pb-16 sm:pb-20">
        <div className="container-width">
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-r from-green-950 via-green-900 to-green-800 px-7 py-10 text-white sm:px-12 sm:py-14">
            <div className="absolute -right-12 -top-20 h-60 w-60 rounded-full bg-orange-400/10 blur-3xl" />

            <div className="relative flex flex-col justify-between gap-7 md:flex-row md:items-center">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-300">
                  Let's work together
                </p>
                <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                  Have a challenge to solve?
                </h2>
                <p className="mt-4 max-w-xl leading-7 text-white/70">
                  Tell us about your idea. Let's explore the right technology
                  solution for your goals.
                </p>
              </div>

              <Link
                to="/contact"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-6 py-4 font-bold text-green-950 transition hover:-translate-y-1 hover:bg-orange-100"
              >
                Start a Conversation <ArrowUpRight size={19} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
