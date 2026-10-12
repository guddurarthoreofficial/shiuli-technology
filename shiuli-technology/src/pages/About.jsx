
import { Link } from 'react-router-dom'
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
  Users,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'

const values = [
  {
    icon: ShieldCheck,
    title: 'Quality First',
    text: 'We focus on thoughtful design, dependable development and solutions built around real needs.',
    color: 'bg-green-100 text-green-800',
  },
  {
    icon: HeartHandshake,
    title: 'Client Focused',
    text: 'We listen, communicate clearly and keep your goals at the centre of every project.',
    color: 'bg-orange-100 text-orange-700',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    text: 'We explore practical ideas and use technology to solve meaningful problems.',
    color: 'bg-blue-100 text-blue-700',
  },
]

const process = [
  {
    number: '01',
    icon: Target,
    title: 'Discover',
    text: 'We understand your goals, challenges and requirements.',
  },
  {
    number: '02',
    icon: Lightbulb,
    title: 'Plan & Design',
    text: 'We map out the solution and create a clear user experience.',
  },
  {
    number: '03',
    icon: Code2,
    title: 'Develop',
    text: 'We build, test and refine your digital product.',
  },
  {
    number: '04',
    icon: Rocket,
    title: 'Launch & Grow',
    text: 'We help prepare your solution for launch and future improvements.',
  },
]

export default function About() {
  return (
    <main className="overflow-hidden bg-white">
      {/* HERO */}
      <section className="relative isolate bg-gradient-to-br from-white via-[#f2faf4] to-[#fff5e9]">
        <div className="pointer-events-none absolute -left-24 top-10 -z-10 h-72 w-72 rounded-full bg-green-200/40 blur-3xl" />
        <div className="pointer-events-none absolute right-0 top-0 -z-10 h-72 w-72 rounded-full bg-orange-200/30 blur-3xl" />

        <div className="container-width grid items-center gap-8 py-12 sm:py-16 lg:grid-cols-2 lg:gap-12 lg:py-20">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-white/90 px-4 py-2 text-xs font-bold text-green-900 shadow-sm sm:text-sm">
              <Sparkles size={15} className="text-orange-500" />
              <Link to="/" className="hover:text-orange-600">Home</Link>
              <span className="text-slate-400">/</span>
              About Us
            </div>

            <p className="mt-7 text-sm font-bold uppercase tracking-[0.2em] text-orange-600">
              Get to know us
            </p>

            <h1 className="mt-4 text-4xl font-black leading-[1.12] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              We turn your
              <span className="block text-green-800">ideas into</span>
              <span className="text-orange-500">possibilities.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
              Shiuli Technology is building practical digital solutions through
              thoughtful design, modern software development and a passion for
              solving real-world problems.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-full bg-green-800 px-6 py-3.5 font-bold text-white shadow-lg shadow-green-900/15 transition hover:-translate-y-1 hover:bg-green-950"
              >
                Explore Our Services <ArrowRight size={18} />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-green-800/25 bg-white px-6 py-3.5 font-bold text-green-900 transition hover:bg-green-50"
              >
                Let's Talk <ArrowUpRight size={18} />
              </Link>
            </div>

            <div className="mt-9 flex items-center gap-3 border-t border-green-900/10 pt-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-green-100 text-green-800">
                <HeartHandshake size={23} />
              </div>
              <p className="text-sm leading-6 text-slate-600">
                <span className="block font-extrabold text-slate-900">
                  Built around your goals
                </span>
                Collaboration, clarity and continuous improvement.
              </p>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-green-200/60 via-white to-orange-200/60 blur-2xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white bg-white p-3 shadow-2xl shadow-green-950/10 sm:p-4">
              <div className="relative overflow-hidden rounded-[1.5rem] bg-[#f3faf4]">
                <img
                  src="/shiuli-hero.png"
                  alt="Shiuli Technology floral technology artwork"
                  className="aspect-[5/4] w-full object-contain p-2 sm:p-4"
                  loading="eager"
                />

                <div className="absolute inset-x-3 bottom-3 rounded-2xl border border-white/80 bg-white/95 p-4 shadow-lg backdrop-blur sm:inset-x-4 sm:bottom-4 sm:p-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-orange-100 text-orange-600">
                      <Sparkles size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-green-700">
                        Our philosophy
                      </p>
                      <h2 className="mt-1 font-extrabold text-slate-950 sm:text-lg">
                        Technology with purpose.
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -right-1 top-8 hidden rounded-2xl border border-green-100 bg-white px-4 py-3 shadow-lg sm:block md:-right-4">
              <p className="text-sm font-extrabold text-green-900">
                Think. Create. Grow.
              </p>
              <p className="mt-1 text-xs text-slate-500">
                One idea at a time
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="section-padding bg-white">
        <div className="container-width grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-600">
              Our story
            </p>

            <h2 className="mt-4 text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-4xl">
              Driven by curiosity.
              <span className="block text-green-800">
                Focused on solutions.
              </span>
            </h2>

            <div className="mt-6 space-y-4 leading-8 text-slate-600">
              <p>
                Shiuli Technology is being developed with a simple idea: make
                technology useful, approachable and accessible to the people
                and organisations that need it.
              </p>
              <p>
                Our interests span website development, software solutions,
                mobile-friendly applications, IT consulting and practical
                learning experiences.
              </p>
              <p>
                We believe every good project starts with understanding the
                problem, planning carefully and working collaboratively towards
                a solution.
              </p>
            </div>

            <Link
              to="/projects"
              className="mt-7 inline-flex items-center gap-2 font-bold text-green-800 transition hover:text-orange-600"
            >
              Discover our work <ArrowRight size={18} />
            </Link>
          </div>

          <div className="relative">
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-green-100 to-orange-100 blur-lg" />
            <div className="relative overflow-hidden rounded-[2rem] border border-green-100 bg-gradient-to-br from-[#f1f9f2] to-[#fff7ed] p-6 sm:p-9">
              <img
                src="/logo.png"
                alt="Shiuli Technology logo"
                className="mx-auto max-h-40 w-full object-contain sm:max-h-48"
              />

              <div className="mt-6 rounded-2xl border border-white bg-white/90 p-5 shadow-sm sm:p-6">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-orange-600">
                  What we believe
                </p>
                <p className="mt-3 text-xl font-black leading-snug text-green-950 sm:text-2xl">
                  Great digital experiences begin with understanding people.
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Listen carefully. Build thoughtfully. Improve continuously.
                </p>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {['Design', 'Development', 'Consulting', 'Learning'].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-green-200 bg-white px-3 py-2 text-xs font-bold text-green-900"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="section-padding bg-[#f5faf6]">
        <div className="container-width">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-600">
              Our direction
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              Purpose behind every idea.
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              The principles that guide our approach to technology and
              collaboration.
            </p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            <article className="group rounded-3xl border border-green-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-green-800 transition group-hover:bg-green-800 group-hover:text-white">
                <Target size={27} />
              </div>
              <h3 className="mt-5 text-xl font-extrabold text-slate-950">
                Our Mission
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                To create useful, accessible and reliable digital solutions
                that help people and organisations work towards their goals.
              </p>
            </article>

            <article className="group rounded-3xl border border-orange-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100 text-orange-700 transition group-hover:bg-orange-500 group-hover:text-white">
                <Eye size={27} />
              </div>
              <h3 className="mt-5 text-xl font-extrabold text-slate-950">
                Our Vision
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                To become a trusted technology partner known for thoughtful
                innovation, dependable solutions and a commitment to growth.
              </p>
            </article>

            <article className="group rounded-3xl border border-blue-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-700 transition group-hover:bg-blue-700 group-hover:text-white">
                <Gem size={27} />
              </div>
              <h3 className="mt-5 text-xl font-extrabold text-slate-950">
                Our Values
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Quality, transparency, creativity, responsible development and
                respect for our clients and collaborators.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-600">
            What matters to us
          </p>

          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
            Principles that shape our work.
          </h2>

          <div className="mt-9 grid gap-5 md:grid-cols-3">
            {values.map(({ icon: Icon, title, text, color }) => (
              <article
                key={title}
                className="rounded-3xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-green-200 hover:shadow-xl"
              >
                <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${color}`}>
                  <Icon size={26} />
                </div>
                <h3 className="mt-5 text-lg font-extrabold text-slate-950">
                  {title}
                </h3>
                <p className="mt-3 leading-7 text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="section-padding bg-green-950 text-white">
        <div className="container-width">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-300">
              Our process
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              From the first conversation to launch.
            </h2>
            <p className="mt-4 leading-7 text-white/70">
              A straightforward process designed to keep requirements,
              communication and project goals aligned.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {process.map(({ number, icon: Icon, title, text }) => (
              <article
                key={number}
                className="rounded-3xl border border-white/15 bg-white/[0.05] p-6 transition hover:border-green-300/50 hover:bg-white/[0.09]"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-black tracking-widest text-orange-300">
                    {number}
                  </span>
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-green-200">
                    <Icon size={24} />
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-extrabold">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/65">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16 sm:py-20">
        <div className="container-width">
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-r from-green-950 via-green-900 to-green-800 px-7 py-10 text-white sm:px-12 sm:py-14">
            <div className="pointer-events-none absolute -right-12 -top-24 h-64 w-64 rounded-full bg-green-500/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 left-1/3 h-48 w-48 rounded-full bg-orange-400/10 blur-3xl" />

            <div className="relative flex flex-col justify-between gap-7 md:flex-row md:items-center">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-300">
                  Let's create something
                </p>
                <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                  Have an idea worth building?
                </h2>
                <p className="mt-4 max-w-xl leading-7 text-white/75">
                  Tell us about your project, explore our services or discuss
                  how technology could help you.
                </p>
              </div>

              <Link
                to="/contact"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-6 py-4 font-bold text-green-950 transition hover:-translate-y-1 hover:bg-orange-100"
              >
                Contact Us <ArrowUpRight size={19} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
