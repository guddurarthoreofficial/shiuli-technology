import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  ArrowUpRight,
  Mail,
  Clock,
  MessageCircle,
  Send,
  Sparkles,
  Code2,
  CheckCircle2,
  BriefcaseBusiness,
  Phone,
  MapPin,
  LockKeyhole,
} from 'lucide-react'
import './Contact.css'

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
    action: 'hello@shiulitech.in',
    href: 'mailto:hello@shiulitech.in',
    tone: 'green',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    value: 'Start a conversation',
    description: 'Discuss your idea directly with our team.',
    action: 'Chat on WhatsApp',
    href: 'https://wa.me/919523605578',
    tone: 'orange',
  },
  {
    icon: Clock,
    title: 'Working Hours',
    value: 'By appointment',
    description: 'Contact us to arrange a suitable time.',
    action: 'Get in touch',
    href: 'mailto:hello@shiulitech.in',
    tone: 'green',
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
    event?.preventDefault?.()
    const message = [
      'Hello Shiuli Technology!',
      '',
      `Name: ${form.name || 'Not provided'}`,
      `Email: ${form.email || 'Not provided'}`,
      `Phone: ${form.phone || 'Not provided'}`,
      `Service: ${form.service || 'Not selected'}`,
      `Budget: ${form.budget || 'Not decided'}`,
      '',
      `Project details: ${form.message || 'I would like to discuss a project.'}`,
    ].join('\n')

    window.open(
      `https://wa.me/919523605578?text=${encodeURIComponent(message)}`,
      '_blank',
      'noopener,noreferrer',
    )
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="st-contact">
      <div className="st-night-sky" aria-hidden="true">

        <span className="st-star st-star-1" />
        <span className="st-star st-star-2" />
        <span className="st-star st-star-3" />
        <span className="st-star st-star-4" />
        <span className="st-night-orbit st-night-orbit-1" />
        <span className="st-night-orbit st-night-orbit-2" />
        <span className="st-night-glow st-night-glow-green" />
        <span className="st-night-glow st-night-glow-orange" />
      </div>

      <section className="st-contact-hero">
        <div className="st-contact-container st-contact-layout">
          <div className="st-contact-left">
            <div className="st-contact-breadcrumb st-animate">
              <Sparkles size={15} />
              <Link to="/">Home</Link>
              <span>/</span>
              <span>Contact</span>
            </div>

            <p className="st-eyebrow st-animate st-delay-1">Let's connect</p>
            <h1 className="st-contact-title st-animate st-delay-1">
              Let's talk about
              <span className="st-title-green">your next <em>big idea.</em></span>
            </h1>
            <p className="st-contact-lead st-animate st-delay-2">
              Have a project, business idea or technology question? Tell us what
              you want to build, and let's explore the right way forward together.
            </p>

            <div className="st-contact-benefits st-animate st-delay-2">
              <span><CheckCircle2 size={18} /> Quick Response</span>
              <span><CheckCircle2 size={18} /> Clear Communication</span>
              <span><CheckCircle2 size={18} /> Tailored Solutions</span>
            </div>

            <div className="st-contact-cards">
              {contactCards.map(({ icon: Icon, title, value, description, action, href, tone }, index) => (
                <article className={`st-contact-card st-animate st-delay-${index + 2}`} key={title}>
                  <span className={`st-contact-card-icon ${tone}`}><Icon size={22} /></span>
                  <h2>{title}</h2>
                  <strong>{value}</strong>
                  <p>{description}</p>
                  <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined}>
                    {action} <ArrowRight size={15} />
                  </a>
                </article>
              ))}
            </div>

            <div className="st-location-card st-animate st-delay-3">
              <div className="st-location-icon"><MapPin size={25} /></div>
              <div className="st-location-copy">
                <h2>Our Location</h2>
                <p>Based in India, working with clients across the country and globally.</p>
                <a href="https://www.google.com/maps/search/?api=1&query=India" target="_blank" rel="noreferrer">
                  View on Map <ArrowRight size={15} />
                </a>
              </div>
              <div className="st-map-visual" aria-hidden="true">
                <span className="st-map-grid" />
                <span className="st-map-pin"><MapPin size={23} /></span>
                <span className="st-map-label">Shiuli Technology</span>
              </div>
            </div>
          </div>

          <aside className="st-form-panel st-animate st-delay-2" id="contact-form">
            <div className="st-form-topline">
              <span className="st-eyebrow"><Sparkles size={15} /> Send us a message</span>
              <span className="st-response-pill"><MessageCircle size={14} /> We'll get back to you soon</span>
            </div>

            {submitted ? (
              <div className="st-form-success">
                <span className="st-success-icon"><CheckCircle2 size={34} /></span>
                <p className="st-eyebrow">Form validated</p>
                <h2>Thanks, {form.name}!</h2>
                <p>Your enquiry has only been validated in this browser. It has not been sent or stored. Send it to our team using WhatsApp below.</p>
                <button type="button" className="st-submit-button st-submit-whatsapp" onClick={openWhatsApp}>
                  <MessageCircle size={18} /> Send via WhatsApp
                </button>
                <button type="button" className="st-review-button" onClick={() => setSubmitted(false)}>Review details</button>
              </div>
            ) : (
              <form className="st-contact-form" onSubmit={handleSubmit}>
                <h2>Enquiry Form</h2>
                <p className="st-form-subtitle">Fill in the details and we'll be in touch.</p>

                <div className="st-form-grid">
                  <div className="st-field">
                    <label htmlFor="contact-name">Full Name <b>*</b></label>
                    <div className="st-input-wrap"><input id="contact-name" name="name" value={form.name} onChange={updateField} placeholder="Your name" required maxLength={100} autoComplete="name" /></div>
                  </div>
                  <div className="st-field">
                    <label htmlFor="contact-email">Email Address <b>*</b></label>
                    <div className="st-input-wrap"><input id="contact-email" name="email" type="email" value={form.email} onChange={updateField} placeholder="your@email.com" required maxLength={254} autoComplete="email" /></div>
                  </div>
                  <div className="st-field">
                    <label htmlFor="contact-phone">Phone Number</label>
                    <div className="st-input-wrap"><input id="contact-phone" name="phone" type="tel" value={form.phone} onChange={updateField} placeholder="Your phone number" maxLength={20} autoComplete="tel" /></div>
                  </div>
                  <div className="st-field">
                    <label htmlFor="contact-service">Service Interested In <b>*</b></label>
                    <div className="st-input-wrap">
                      <select id="contact-service" name="service" value={form.service} onChange={updateField} required>
                        <option value="">Select a service</option>
                        {services.map((service) => <option key={service} value={service}>{service}</option>)}
                      </select>
                    </div>
                  </div>
                  <div className="st-field st-field-full">
                    <label htmlFor="contact-budget">Project Budget</label>
                    <div className="st-input-wrap">
                      <select id="contact-budget" name="budget" value={form.budget} onChange={updateField}>
                        <option value="">Select a budget</option>
                        {budgets.map((budget) => <option key={budget} value={budget}>{budget}</option>)}
                      </select>
                    </div>
                  </div>
                  <div className="st-field st-field-full">
                    <label htmlFor="contact-message">Your Message <b>*</b></label>
                    <div className="st-input-wrap st-textarea-wrap">
                      <textarea id="contact-message" name="message" value={form.message} onChange={updateField} placeholder="Tell us about your project, goals and specific requirements..." required minLength={10} maxLength={3000} rows={4} />
                    </div>
                    <p className="st-character-count">{form.message.length}/3000 characters</p>
                  </div>
                </div>

                <div className="st-form-buttons">
                  <button type="submit" className="st-submit-button st-submit-main"><Send size={18} /> Send Enquiry</button>
                  <button type="button" className="st-submit-button st-submit-whatsapp" onClick={openWhatsApp}><MessageCircle size={18} /> Send via WhatsApp</button>
                </div>
                <p className="st-privacy-note"><LockKeyhole size={14} /> Your information is not stored by this form. Connect a backend to securely receive enquiries.</p>
              </form>
            )}
          </aside>
        </div>
      </section>

      <section className="st-contact-bottom">
        <div className="st-contact-container">
          <div className="st-bottom-banner st-animate">
            <div>
              <p className="st-eyebrow">Let's work together</p>
              <h2>Ready to bring your idea to life?</h2>
              <p>Whether it's a website, an application or expert guidance, let's create something great together.</p>
            </div>
            <a href="#contact-form" className="st-bottom-cta">Start a Conversation <ArrowRight size={17} /></a>
          </div>
        </div>
      </section>
    </main>
  )
}
