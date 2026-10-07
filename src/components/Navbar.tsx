import { useState, useEffect } from 'react'
import { Navigation, Menu, X, ArrowRight, Smartphone } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface NavbarProps {
  onOpenBooking: () => void
}

const navLinks = [
  { label: 'Home', href: '#home', id: 'home' },
  { label: 'Ride', href: '#ride', id: 'ride' },
  { label: 'Captain', href: '#captain', id: 'captain' },
  { label: 'Safety', href: '#safety', id: 'safety' },
  { label: 'About', href: '#about', id: 'about' },
]

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      // Section spy
      const sections = ['home', 'ride', 'captain', 'safety', 'about', 'download']
      const scrollPosition = window.scrollY + 200

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    const targetId = href.replace('#', '')
    const el = document.getElementById(targetId)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'py-2.5 bg-white/85 backdrop-blur-md shadow-md border-b border-slate-200/50'
          : 'py-4 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault()
              handleNavClick('#home')
            }}
            className="flex items-center gap-2.5 group cursor-pointer"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-[#1769FF] to-[#38BDF8] flex items-center justify-center shadow-md shadow-[#1769FF]/25 group-hover:scale-105 transition-transform duration-200">
              <Navigation className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-black tracking-tight text-[#101936]">
                AVANTO
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 bg-white/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-200/60 shadow-sm">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(link.href)
                  }}
                  className={`relative px-4 py-1.5 text-sm font-semibold rounded-full transition-all duration-200 ${
                    isActive
                      ? 'text-[#1769FF]'
                      : 'text-gray-600 hover:text-[#101936] hover:bg-slate-100/60'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute inset-0 bg-[#1769FF]/10 rounded-full -z-10 border border-[#1769FF]/20"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </a>
              )
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href="#download"
              onClick={(e) => {
                e.preventDefault()
                handleNavClick('#download')
              }}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-[#101936] hover:text-[#1769FF] hover:bg-slate-100/70 rounded-full transition-colors"
            >
              <Smartphone className="w-4 h-4 text-[#1769FF]" />
              <span>Download App</span>
            </a>

            <button
              type="button"
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 bg-[#1769FF] hover:bg-[#1255D4] text-white text-sm font-bold rounded-full px-5 py-2.5 shadow-md shadow-[#1769FF]/30 hover:shadow-lg hover:shadow-[#1769FF]/40 hover:-translate-y-0.5 transition-all cursor-pointer"
            >
              <span>Book a Ride</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-xl text-gray-700 hover:bg-gray-100 hover:text-[#1769FF] transition-colors"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-white/95 backdrop-blur-xl border-b border-slate-200/80 shadow-xl"
          >
            <div className="px-5 pt-3 pb-6 space-y-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick(link.href)
                    }}
                    className={`block px-4 py-2.5 rounded-xl text-base font-semibold transition-colors ${
                      isActive
                        ? 'bg-[#1769FF]/10 text-[#1769FF]'
                        : 'text-gray-700 hover:bg-slate-100'
                    }`}
                  >
                    {link.label}
                  </a>
                )
              })}

              <div className="pt-3 border-t border-gray-100 space-y-2.5">
                <a
                  href="#download"
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick('#download')
                  }}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-gray-200 font-semibold text-sm text-[#101936] hover:bg-gray-50"
                >
                  <Smartphone className="w-4 h-4 text-[#1769FF]" />
                  <span>Download App</span>
                </a>

                <button
                  type="button"
                  onClick={() => {
                    setIsOpen(false)
                    onOpenBooking()
                  }}
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-[#1769FF] text-white font-bold text-sm shadow-md shadow-[#1769FF]/30"
                >
                  <span>Book a Ride</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
