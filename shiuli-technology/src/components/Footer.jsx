
import { Link } from 'react-router-dom'
import { ArrowUpRight, Mail, MapPin } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="bg-[#071b12] text-white">
            <div className="container-width grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
                <div>
                    <Link to="/" className="text-2xl font-black tracking-tight">
                        SHIULI<span className="text-orange-400">.</span>
                    </Link>
                    <p className="mt-4 max-w-xs text-sm leading-7 text-white/65">
                        Turning ideas into digital solutions. We build modern, scalable
                        technology for businesses, schools and startups.
                    </p>
                </div>

                <div>
                    <h3 className="font-bold">Quick Links</h3>
                    <div className="mt-4 flex flex-col gap-3 text-sm text-white/65">
                        <Link to="/about" className="hover:text-white">About Us</Link>
                        <Link to="/services" className="hover:text-white">Our Services</Link>
                        <Link to="/projects" className="hover:text-white">Our Projects</Link>
                        <Link to="/pricing" className="hover:text-white">Pricing</Link>
                    </div>
                </div>

                <div>
                    <h3 className="font-bold">Our Services</h3>
                    <div className="mt-4 flex flex-col gap-3 text-sm text-white/65">
                        <Link to="/services" className="hover:text-white">Web Development</Link>
                        <Link to="/services" className="hover:text-white">App Development</Link>
                        <Link to="/services" className="hover:text-white">IT Consulting</Link>
                        <Link to="/services" className="hover:text-white">Internship Programs</Link>
                    </div>
                </div>

                <div>
                    <h3 className="font-bold">Get in Touch</h3>
                    <div className="mt-4 space-y-4 text-sm text-white/65">
                        <p className="flex items-start gap-3">
                            <MapPin size={18} className="shrink-0 text-green-400" />
                            Bettiah, West Champaran, Bihar, India
                        </p>
                        <a href="mailto:hello@shiulitech.in" className="flex items-center gap-3 hover:text-white">
                            <Mail size={18} className="text-green-400" />
                            hello@shiulitech.in
                        </a>
                        <Link to="/contact" className="inline-flex items-center gap-2 font-bold text-green-300">
                            Contact Us <ArrowUpRight size={16} />
                        </Link>
                    </div>
                </div>
            </div>

            <div className="border-t border-white/10">
                <div className="container-width flex flex-col justify-between gap-2 py-5 text-xs text-white/50 sm:flex-row">
                    <p>© {new Date().getFullYear()} Shiuli Technology. All rights reserved.</p>
                    <p>Built with ideas, creativity and technology.</p>
                </div>
            </div>
        </footer>
    )
}
