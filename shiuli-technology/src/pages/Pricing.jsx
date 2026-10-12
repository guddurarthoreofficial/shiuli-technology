
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Code2,
  Smartphone,
  GraduationCap,
  Lightbulb,
  Sparkles,
  Building2,
  Palette,
  Headphones,
  ShieldCheck,
  MessageCircle,
} from 'lucide-react'

const plans = [
  {
    name: 'Starter Website',
    subtitle: 'For individuals and small businesses',
    price: '₹4,999',
    billing: 'one-time starting price',
    description: 'A professional online presence to get started.',
    icon: Code2,
    color: 'bg-orange-100 text-orange-700',
    features: [
      'Up to 5 pages',
      'Responsive design',
      'Contact form UI',
      'Basic on-page SEO setup',
      'Deployment assistance',
    ],
    featured: false,
    cta: 'Choose Starter',
  },
  {
    name: 'Business Website',
    subtitle: 'For growing businesses',
    price: '₹9,999',
    billing: 'one-time starting price',
    description: 'A polished website built around your business goals.',
    icon: Building2,
    color: 'bg-blue-100 text-blue-700',
    features: [
      'Up to 10 pages',
      'Custom UI design',
      'Responsive layouts',
      'Contact and enquiry forms',
      'Basic SEO setup',
      'Deployment assistance',
    ],
    featured: true,
    cta: 'Choose Business',
  },
  {
    name: 'Custom Software',
    subtitle: 'For specific business needs',
    price: 'Let’s Talk',
    billing: 'custom quotation',
    description: 'A tailored application planned around your requirements.',
    icon: Sparkles,
    color: 'bg-purple-100 text-purple-700',
    features: [
      'Requirement discussion',
      'Custom feature planning',
      'Frontend and backend options',
      'Database integration',
      'Project-based estimation',
      'Support scope agreed in advance',
    ],
    featured: false,
    cta: 'Request a Quote',
  },
]

const additionalServices = [
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description:
      'Cross-platform apps and mobile-friendly products scoped to your requirements.',
    price: 'Custom quote',
    color: 'bg-blue-100 text-blue-700',
  },
  {
    icon: Building2,
    title: 'School Management System',
    description:
      'Discuss student records, attendance, reports, dashboards and other school workflows.',
    price: 'Custom quote',
    color: 'bg-green-100 text-green-800',
  },
  {
    icon: Lightbulb,
    title: 'IT Consulting',
    description:
      'Technical guidance, architecture discussions and project planning.',
    price: 'From ₹999 / session',
    color: 'bg-orange-100 text-orange-700',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description:
      'Interface design and prototypes for websites and applications.',
    price: 'Custom quote',
    color: 'bg-purple-100 text-purple-700',
  },
]

const internships = [
  {
    title: 'Web Development',
    description: 'Practise frontend, backend and web application fundamentals.',
    price: 'Fee and duration on enquiry',
  },
  {
    title: 'App Development',
    description: 'Explore mobile-friendly application development and APIs.',
    price: 'Fee and duration on enquiry',
  },
  {
    title: 'UI/UX Design',
    description: 'Learn interface design, layouts and interactive prototyping.',
    price: 'Fee and duration on enquiry',
  },
]

function PriceCard({ plan }) {
  const Icon = plan.icon

  return (
    <article
      className={`relative flex flex-col rounded-3xl border p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-7 ${
        plan.featured
          ? 'border-green-700 bg-gradient-to-b from-green-50 to-white shadow-lg shadow-green-900/10 ring-1 ring-green-700/10'
          : 'border-slate-200 bg-white shadow-sm hover:border-green-200'
      }`}
    >
      {plan.featured && (
        <span className="absolute -top-3 left-6 rounded-full bg-green-800 px-4 py-1.5 text-xs font-extrabold text-white shadow-md">
          MOST POPULAR
        </span>
      )}

      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-xl font-extrabold text-slate-950">
            {plan.name}
          </h3>
          <p className="mt-2 text-sm leading-6 text-slate-500">
            {plan.subtitle}
          </p>
        </div>
        <div
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${plan.color}`}
        >
          <Icon size={24} />
        </div>
      </div>

      <p className="mt-6 text-sm leading-6 text-slate-600">
        {plan.description}
      </p>

      <div className="mt-6 border-b border-slate-200 pb-6">
        <p className="text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
          {plan.price}
        </p>
        <p className="mt-2 text-xs font-medium text-slate-500">
          {plan.billing}
        </p>
      </div>

      <ul className="mt-6 flex-1 space-y-3.5">
        {plan.features.map((feature) => (
          <li
            key={feature}
            className="flex items-start gap-3 text-sm leading-6 text-slate-700"
          >
            <Check
              size={17}
              className="mt-0.5 shrink-0 text-green-700"
              strokeWidth={2.5}
            />
            {feature}
          </li>
        ))}
      </ul>

      <Link
        to={`/contact?service=${encodeURIComponent(plan.name)}`}
        className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3.5 text-sm font-extrabold transition ${
          plan.featured
            ? 'bg-green-800 text-white shadow-lg shadow-green-900/15 hover:bg-green-950'
            : 'border border-green-800/30 bg-white text-green-900 hover:border-green-800 hover:bg-green-50'
        }`}
      >
        {plan.cta} <ArrowRight size={17} />
      </Link>
    </article>
  )
}

export default function Pricing() {
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
              Pricing
            </div>

            <p className="mt-7 text-sm font-bold uppercase tracking-[0.2em] text-orange-600">
              Simple & transparent
            </p>

            <h1 className="mt-4 text-4xl font-black leading-[1.12] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Invest in
              <span className="block text-green-800">better</span>
              <span className="text-orange-500">technology.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
              Explore starting prices for websites, software, consulting and
              learning programmes. Every custom project receives a quote
              based on its actual requirements.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#website-plans"
                className="inline-flex items-center gap-2 rounded-full bg-green-800 px-6 py-3.5 font-bold text-white shadow-lg shadow-green-900/15 transition hover:-translate-y-1 hover:bg-green-950"
              >
                Explore Plans <ArrowRight size={18} />
              </a>

              <Link
                to="/contact?service=Custom%20Quotation"
                className="inline-flex items-center gap-2 rounded-full border border-green-800/25 bg-white px-6 py-3.5 font-bold text-green-900 transition hover:bg-green-50"
              >
                Get a Custom Quote <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-green-200/60 via-white to-orange-200/60 blur-2xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white bg-white p-3 shadow-2xl shadow-green-950/10 sm:p-4">
              <div className="rounded-[1.5rem] bg-gradient-to-br from-green-950 via-green-900 to-green-800 p-7 text-white sm:p-10">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-orange-300">
                  <Sparkles size={29} />
                </div>

                <p className="mt-8 text-sm font-bold uppercase tracking-[0.18em] text-green-200">
                  The right solution
                </p>

                <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">
                  Clear scope.
                  <span className="block text-orange-300">
                    Thoughtful pricing.
                  </span>
                </h2>

                <p className="mt-4 leading-7 text-white/70">
                  Tell us what you want to build. We’ll discuss the features,
                  timeline and estimated cost before work begins.
                </p>

                <div className="mt-8 space-y-4 border-t border-white/15 pt-6">
                  {[
                    'Understand your requirements',
                    'Agree on scope and deliverables',
                    'Discuss cost and timeline',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <Check size={18} className="shrink-0 text-green-300" />
                      <span className="text-sm font-semibold text-white/90">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WEBSITE PACKAGES */}
      <section id="website-plans" className="section-padding bg-white">
        <div className="container-width">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-600">
              Website packages
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              Choose your <span className="text-green-800">starting point.</span>
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              Suggested starting prices for typical projects. Final pricing
              depends on features, content, integrations and scope.
            </p>
          </div>

          <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-3">
            {plans.map((plan) => (
              <PriceCard key={plan.name} plan={plan} />
            ))}
          </div>

          <div className="mt-6 flex items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-4 sm:p-5">
            <ShieldCheck size={22} className="mt-0.5 shrink-0 text-amber-700" />
            <p className="text-sm leading-7 text-slate-700">
              <span className="font-extrabold text-slate-900">
                Before you confirm:
              </span>{' '}
              Domain registration, hosting renewals, paid APIs, third-party
              subscriptions, taxes and ongoing maintenance should be listed
              separately in the final quotation wherever applicable.
            </p>
          </div>
        </div>
      </section>

      {/* ADDITIONAL SERVICES */}
      <section className="section-padding bg-[#f5faf6]">
        <div className="container-width">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-600">
                More ways to work together
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                Services for <span className="text-green-800">every idea.</span>
              </h2>
              <p className="mt-4 max-w-2xl leading-7 text-slate-600">
                Need something beyond a standard website? Let's scope it
                together.
              </p>
            </div>
          </div>

          <div className="mt-9 grid gap-5 sm:grid-cols-2">
            {additionalServices.map(({ icon: Icon, title, description, price, color }) => (
              <article
                key={title}
                className="flex flex-col rounded-3xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-green-200 hover:shadow-lg sm:flex-row sm:items-start sm:gap-5"
              >
                <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${color}`}>
                  <Icon size={26} />
                </div>

                <div className="mt-4 flex-1 sm:mt-0">
                  <h3 className="text-lg font-extrabold text-slate-950">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    {description}
                  </p>
                  <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                    <span className="text-sm font-extrabold text-green-800">
                      {price}
                    </span>
                    <Link
                      to={`/contact?service=${encodeURIComponent(title)}`}
                      className="inline-flex items-center gap-2 text-sm font-bold text-slate-800 transition hover:text-orange-600"
                    >
                      Enquire <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* INTERNSHIP */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="relative overflow-hidden rounded-[2rem] border border-green-100 bg-gradient-to-br from-[#f1faf3] via-white to-[#fff4e8] p-6 sm:p-10 lg:p-12">
            <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-green-200/40 blur-3xl" />

            <div className="relative grid items-start gap-9 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-white px-3 py-2 text-xs font-bold text-green-900">
                  <GraduationCap size={16} className="text-orange-500" />
                  LEARN & BUILD
                </div>

                <h2 className="mt-5 text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-4xl">
                  Start your
                  <span className="block text-green-800">learning journey.</span>
                </h2>

                <p className="mt-5 leading-7 text-slate-600">
                  Explore practical training and project-based learning
                  opportunities in modern technology.
                </p>

                <Link
                  to="/contact?service=Internship"
                  className="mt-7 inline-flex items-center gap-2 rounded-full bg-green-800 px-6 py-3.5 font-bold text-white transition hover:bg-green-950"
                >
                  Ask About Internships <ArrowRight size={18} />
                </Link>
              </div>

              <div className="space-y-4">
                {internships.map(({ title, description, price }) => (
                  <article
                    key={title}
                    className="rounded-2xl border border-slate-200/80 bg-white/95 p-5 shadow-sm sm:p-6"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-green-100 text-green-800">
                        <GraduationCap size={24} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-extrabold text-slate-950">
                          {title} Internship
                        </h3>
                        <p className="mt-2 text-sm leading-6 text-slate-600">
                          {description}
                        </p>
                        <p className="mt-3 text-xs font-bold text-green-800">
                          {price}
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

      {/* FAQ */}
      <section className="section-padding bg-[#f5faf6]">
        <div className="container-width">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-600">
              Good to know
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              Pricing questions, answered.
            </h2>
          </div>

          <div className="mx-auto mt-9 max-w-3xl space-y-4">
            {[
              {
                q: 'Are these fixed prices?',
                a: 'They are suggested starting prices. Your final quote depends on the agreed features, content, integrations and delivery scope.',
              },
              {
                q: 'Is domain and hosting included?',
                a: 'It depends on the package. Domain, hosting, renewals and paid third-party services should be clearly listed in your quotation.',
              },
              {
                q: 'Can I request a custom package?',
                a: 'Yes. Share your requirements and we can discuss a suitable scope, estimated cost and timeline.',
              },
              {
                q: 'Do you provide ongoing support?',
                a: 'Support and maintenance can be discussed separately and included in the agreement where required.',
              },
            ].map(({ q, a }) => (
              <details
                key={q}
                className="group rounded-2xl border border-slate-200 bg-white p-5 open:border-green-200 sm:p-6"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-extrabold text-slate-950">
                  {q}
                  <span className="text-xl text-green-800 transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-sm leading-7 text-slate-600">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white pb-16 sm:pb-20">
        <div className="container-width">
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-r from-green-950 via-green-900 to-green-800 px-7 py-10 text-white sm:px-12 sm:py-14">
            <div className="pointer-events-none absolute -right-12 -top-24 h-64 w-64 rounded-full bg-orange-400/10 blur-3xl" />

            <div className="relative flex flex-col justify-between gap-7 md:flex-row md:items-center">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-300">
                  Your project, your goals
                </p>
                <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                  Need a custom solution?
                </h2>
                <p className="mt-4 max-w-xl leading-7 text-white/70">
                  Tell us your idea and get in touch to discuss the scope,
                  estimated budget and next steps.
                </p>
              </div>

              <Link
                to="/contact?service=Custom%20Quotation"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-6 py-4 font-bold text-green-950 transition hover:-translate-y-1 hover:bg-orange-100"
              >
                Request a Quote <ArrowUpRight size={19} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
