
import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  Sparkles,
  Code2,
  CheckCircle2,
  BriefcaseBusiness,
} from 'lucide-react'

const services = [
  'Web Development',
  'App Development',
  'Custom Software',
  'School Management System',
  'UI/UX Design',
  'IT Consulting',
  'Internship & Training',
  'Maintenance & Support',
  'Other',
]

const budgets = [
  'Under ₹5,000',
  '₹5,000 – ₹10,000',
  '₹10,000 – ₹25,000',
  '₹25,000 – ₹50,000',
  '₹50,000+',
  'Need guidance',
]

const contactCards = [
  {
    icon: Mail,
    title: 'Email Us',
    value: 'Send us an enquiry',
    description: 'Share your project requirements with us.',
    color: 'bg-green-100 text-green-800',
    href: 'mailto:hello@shiulitech.in',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    value: 'Start a conversation',
    description: 'Discuss your idea directly with our team.',
    color: 'bg-orange-100 text-orange-700',
    href: null,
  },
  {
    icon: Clock,
    title: 'Working Hours',
    value: 'By appointment',
    description: 'Contact us to arrange a suitable time.',
    color: 'bg-blue-100 text-blue-700',
    href: null,
  },
]

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const updateField = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
    setSubmitted(false)
  }

  const openWhatsApp = (event) => {
    event.preventDefault()

    const message = [
      'Hello Shiuli Technology!',
      '',
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone || 'Not provided'}`,
      `Service: ${form.service}`,
      `Budget: ${form.budget || 'Not decided'}`,
      '',
      `Project details: ${form.message}`,
    ].join('\n')

    // Replace this placeholder with your official WhatsApp number.
    const whatsappNumber = ''

    if (!whatsappNumber) {
      window.alert(
        'Please add your official WhatsApp number in Contact.jsx before using this option.',
      )
      return
    }

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      '_blank',
      'noopener,noreferrer',
    )
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    // This currently validates the form in the browser.
    // Backend/email submission will be connected separately.
    setSubmitted(true)
  }

  return (
    <main className="overflow-hidden bg-white">
      {/* HERO */}
      <section className="relative isolate bg-gradient-to-br from-white via-[#f2faf4] to-[#fff4e8]">
        <div className="pointer-events-none absolute -left-24 top-10 -z-10 h-72 w-72 rounded-full bg-green-200/40 blur-3xl" />
        <div className="pointer-events-none absolute right-0 top-0 -z-10 h-72 w-72 rounded-full bg-orange-200/30 blur-3xl" />

        <div className="container-width grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-2 lg:gap-12 lg:py-20">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-white/90 px-4 py-2 text-xs font-bold text-green-900 shadow-sm sm:text-sm">
              <Sparkles size={15} className="text-orange-500" />
              <Link to="/">Home</Link>
              <span className="text-slate-400">/</span>
              Contact
            </div>

            <p className="mt-7 text-sm font-bold uppercase tracking-[0.2em] text-orange-600">
              Let's connect
            </p>

            <h1 className="mt-4 text-4xl font-black leading-[1.12] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Let's talk about
              <span className="block text-green-800">your next</span>
              <span className="text-orange-500">big idea.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
              Have a project, business idea or technology question? Tell us
              what you want to build, and let's explore the right way forward.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact-form"
                className="inline-flex items-center gap-2 rounded-full bg-green-800 px-6 py-3.5 font-bold text-white shadow-lg shadow-green-900/15 transition hover:-translate-y-1 hover:bg-green-950"
              >
                Send an Enquiry <ArrowRight size={18} />
              </a>

              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-full border border-green-800/25 bg-white px-6 py-3.5 font-bold text-green-900 transition hover:bg-green-50"
              >
                Explore Services <ArrowUpRight size={18} />
              </Link>
            </div>

            <div className="mt-9 flex items-center gap-3 border-t border-green-900/10 pt-6">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-green-100 text-green-800">
                <BriefcaseBusiness size={22} />
              </div>
              <div>
                <p className="font-extrabold text-slate-900">
                  Every project starts with a conversation.
                </p>
                <p className="mt-1 text-sm text-slate-500">
                  Share your requirements and goals with us.
                </p>
              </div>
            </div>
          </div>

          {/* BRAND VISUAL */}
          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-green-200/60 via-white to-orange-200/60 blur-2xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white bg-white p-3 shadow-2xl shadow-green-950/10 sm:p-4">
              <div className="rounded-[1.5rem] bg-gradient-to-br from-green-950 via-green-900 to-green-800 p-7 text-white sm:p-10">
                <img
                  src="/logo.png"
                  alt="Shiuli Technology"
                  className="h-20 w-auto max-w-full rounded-xl bg-white p-2 object-contain sm:h-24"
                />

                <p className="mt-9 text-sm font-bold uppercase tracking-[0.18em] text-orange-300">
                  Ideas · Technology · Growth
                </p>

                <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">
                  Your idea deserves
                  <span className="block text-green-200">
                    the right solution.
                  </span>
                </h2>

                <p className="mt-4 leading-7 text-white/70">
                  Let's discuss your goals, understand your requirements and
                  explore what we can build together.
                </p>

                <div className="mt-8 space-y-4 border-t border-white/15 pt-6">
                  <div className="flex items-center gap-3">
                    <Code2 size={20} className="text-orange-300" />
                    <span className="text-sm font-semibold">
                      Web & Software Solutions
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MessageCircle size={20} className="text-orange-300" />
                    <span className="text-sm font-semibold">
                      Clear Project Communication
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 size={20} className="text-orange-300" />
                    <span className="text-sm font-semibold">
                      Scope & Pricing Discussion
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT OPTIONS */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-600">
              Get in touch
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              We'd love to hear from you.
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              Choose how you'd like to connect with Shiuli Technology.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {contactCards.map(
              ({ icon: Icon, title, value, description, color, href }) => (
                <article
                  key={title}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-green-200 hover:shadow-xl"
                >
                  <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${color}`}>
                    <Icon size={26} />
                  </div>

                  <h3 className="mt-5 text-lg font-extrabold text-slate-950">
                    {title}
                  </h3>
                  <p className="mt-2 font-semibold text-green-800">{value}</p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    {description}
                  </p>

                  {href && (
                    <a
                      href={href}
                      className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-green-800 hover:text-orange-600"
                    >
                      Send Email <ArrowUpRight size={16} />
                    </a>
                  )}
                </article>
              ),
            )}
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section id="contact-form" className="section-padding bg-[#f5faf6]">
        <div className="container-width grid items-start gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-14">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-600">
              Project enquiry
            </p>

            <h2 className="mt-3 text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-4xl">
              Tell us what
              <span className="block text-green-800">you have in mind.</span>
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              A few details will help us understand your requirements and
              prepare for a useful discussion.
            </p>

            <div className="mt-8 space-y-4">
              {[
                'Describe your idea or business need.',
                'Choose a service and estimated budget.',
                'Share your preferred way to connect.',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 size={19} className="mt-1 shrink-0 text-green-700" />
                  <p className="text-sm leading-7 text-slate-700">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-3xl border border-green-100 bg-white p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-100 text-orange-700">
                <MessageCircle size={24} />
              </div>
              <h3 className="mt-4 font-extrabold text-slate-950">
                Prefer WhatsApp?
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Complete the form and use the WhatsApp option to prepare your
                enquiry message.
              </p>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-xl shadow-green-950/5 sm:p-8 lg:p-9">
            {submitted ? (
              <div className="py-10 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-800">
                  <CheckCircle2 size={34} />
                </div>
                <h3 className="mt-5 text-2xl font-black text-slate-950">
                  Form validated!
                </h3>
                <p className="mx-auto mt-3 max-w-md leading-7 text-slate-600">
                  Your details are currently available in this form session,
                  but they have not been sent or saved. Connect a backend or
                  email service to receive real enquiries.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-6 rounded-full bg-green-800 px-6 py-3 font-bold text-white hover:bg-green-950"
                >
                  Review Details
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-green-800">
                    Let's get started
                  </p>
                  <h3 className="mt-2 text-2xl font-black text-slate-950">
                    Send us a message
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Fields marked with * are required.
                  </p>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-bold text-slate-800">
                      Full Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={updateField}
                      placeholder="Your full name"
                      autoComplete="name"
                      required
                      maxLength={100}
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-green-600 focus:ring-4 focus:ring-green-100"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-bold text-slate-800">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={updateField}
                      placeholder="you@example.com"
                      autoComplete="email"
                      required
                      maxLength={254}
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-green-600 focus:ring-4 focus:ring-green-100"
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="phone" className="mb-2 block text-sm font-bold text-slate-800">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={updateField}
                      placeholder="Your contact number"
                      autoComplete="tel"
                      maxLength={20}
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-green-600 focus:ring-4 focus:ring-green-100"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="mb-2 block text-sm font-bold text-slate-800">
                      Interested Service *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={form.service}
                      onChange={updateField}
                      required
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-700 outline-none transition focus:border-green-600 focus:ring-4 focus:ring-green-100"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="budget" className="mb-2 block text-sm font-bold text-slate-800">
                    Estimated Budget
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={form.budget}
                    onChange={updateField}
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-700 outline-none transition focus:border-green-600 focus:ring-4 focus:ring-green-100"
                  >
                    <option value="">Choose a budget (optional)</option>
                    {budgets.map((budget) => (
                      <option key={budget} value={budget}>
                        {budget}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-bold text-slate-800">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={updateField}
                    placeholder="Tell us about your idea, required features or goals..."
                    required
                    minLength={10}
                    maxLength={3000}
                    rows={5}
                    className="w-full resize-y rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm leading-7 outline-none transition placeholder:text-slate-400 focus:border-green-600 focus:ring-4 focus:ring-green-100"
                  />
                  <p className="mt-2 text-right text-xs text-slate-400">
                    {form.message.length}/3000 characters
                  </p>
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-green-800 px-6 py-4 font-bold text-white shadow-lg shadow-green-900/15 transition hover:-translate-y-0.5 hover:bg-green-950"
                >
                  Validate Enquiry <Send size={18} />
                </button>

                <button
                  type="button"
                  onClick={openWhatsApp}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-green-800/25 bg-white px-6 py-3.5 font-bold text-green-900 transition hover:bg-green-50"
                >
                  Prepare WhatsApp Message <MessageCircle size={18} />
                </button>

                <p className="text-center text-xs leading-5 text-slate-500">
                  Your form will not send or store information until a
                  submission service is connected.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* LOCATION / FINAL CTA */}
      <section className="bg-white pb-16 sm:pb-20">
        <div className="container-width">
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-r from-green-950 via-green-900 to-green-800 px-7 py-10 text-white sm:px-12 sm:py-14">
            <div className="pointer-events-none absolute -right-12 -top-24 h-64 w-64 rounded-full bg-orange-400/10 blur-3xl" />

            <div className="relative flex flex-col justify-between gap-7 md:flex-row md:items-center">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-300">
                  Shiuli Technology
                </p>
                <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                  Let's build something meaningful.
                </h2>
                <p className="mt-4 max-w-xl leading-7 text-white/70">
                  Have questions before starting? Explore our services or
                  share your project requirements.
                </p>
              </div>

              <Link
                to="/services"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-6 py-4 font-bold text-green-950 transition hover:-translate-y-1 hover:bg-orange-100"
              >
                Explore Services <ArrowUpRight size={19} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
