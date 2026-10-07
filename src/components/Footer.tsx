import React from 'react'
import { Navigation } from 'lucide-react'

// Custom clean SVG icons for all requested social links
const XIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 24.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

const InstagramIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
)

const LinkedinIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.48 1.48 0 1 0-.01-2.96 1.48 1.48 0 0 0 .01 2.96M7.86 18.5V10.1H5.06v8.4z" />
  </svg>
)

const YoutubeIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
)

const footerLinks = {
  Product: [
    { label: 'Customer App', href: '#download' },
    { label: 'Captain App', href: '#captain' },
    { label: 'Admin Dashboard', href: '#home' },
  ],
  Company: [
    { label: 'About', href: '#about' },
    { label: 'Careers', href: '#about' },
    { label: 'Contact', href: '#home' },
  ],
  Support: [
    { label: 'Help Center', href: '#home' },
    { label: 'Safety', href: '#safety' },
    { label: 'FAQs', href: '#about' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms & Conditions', href: '#' },
  ],
}

const socialLinks = [
  { icon: InstagramIcon, href: '#', label: 'Instagram' },
  { icon: LinkedinIcon, href: '#', label: 'LinkedIn' },
  { icon: YoutubeIcon, href: '#', label: 'YouTube' },
  { icon: XIcon, href: '#', label: 'X' },
]

export default function Footer() {
  const handleScroll = (href: string) => {
    if (href.startsWith('#')) {
      const id = href.replace('#', '')
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <footer className="bg-[#0b1226] text-white border-t border-white/5">
      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
          {/* Brand Info Column */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#home" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#1769FF] to-[#38BDF8] flex items-center justify-center shadow-md">
                <Navigation className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-black tracking-tight text-white">AVANTO</span>
            </a>
            <p className="text-gray-400 text-sm font-semibold tracking-wide">
              Smart Mobility. Simple Rides.
            </p>
            <p className="text-gray-400 text-xs leading-relaxed max-w-sm">
              Connecting millions of commuters across India with verified local captains through fast, affordable and dependable mobility technology.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5 pt-2">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-9 h-9 rounded-xl bg-white/5 hover:bg-[#1769FF] flex items-center justify-center transition-colors text-gray-300 hover:text-white border border-white/5"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-xs font-bold uppercase tracking-wider text-gray-300 mb-4">
                {category}
              </h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        if (link.href.startsWith('#')) {
                          e.preventDefault()
                          handleScroll(link.href)
                        }
                      }}
                      className="text-xs text-gray-400 hover:text-[#38BDF8] transition-colors font-medium"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5 bg-[#080d1c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© 2026 Avanto. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-gray-300 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors">
              Terms &amp; Conditions
            </a>
            <a href="#home" className="hover:text-[#38BDF8] transition-colors">
              Back to Top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
