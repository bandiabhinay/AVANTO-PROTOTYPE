import { motion } from 'framer-motion'
import { Users, Car, HeartHandshake, Compass } from 'lucide-react'

const pillars = [
  {
    icon: Users,
    title: 'Customer First',
    subtitle: 'Rider Community',
    description: 'Dependable daily commutes, upfront transparent fares without surge tricks, and courteous service on every booking.',
    accent: 'border-[#D1E7E5] bg-[#E0F7F6]/40',
    iconBg: 'bg-[#00766B]/10 text-[#00766B]',
  },
  {
    icon: Car,
    title: 'Captain Empowered',
    subtitle: 'Driver Dignity',
    description: 'Guaranteed payouts, low commission structures, accident insurance, and respect for our hardworking partner captains.',
    accent: 'border-[#72DCDC]/40 bg-[#F4FAF9]',
    iconBg: 'bg-[#004D4A]/10 text-[#004D4A]',
  },
  {
    icon: HeartHandshake,
    title: 'Community Driven',
    subtitle: 'Sustainable Cities',
    description: 'Cleaner air through EV integration, safer late-night transit options, and decongesting India’s fastest-growing metropolitan hubs.',
    accent: 'border-emerald-200 bg-emerald-50/50',
    iconBg: 'bg-emerald-600/10 text-emerald-600',
  },
]

export default function About() {
  return (
    <section id="about" className="bg-white py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#00766B] bg-[#E0F7F6] mb-3 border border-[#72DCDC]/40">
            About Avanto
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-[#003634] tracking-tight">
            Mobility Built for Everyone
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#4A6361] leading-relaxed font-medium">
            Avanto is India’s next-generation urban mobility ecosystem — engineered from the ground up to connect millions of riders with verified local captains through seamless, intelligent technology.
          </p>
        </div>

        {/* 3 Pillars: Customer, Captain, Community */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pillars.map((item, idx) => {
            const Icon = item.icon
            return (
              <motion.div
                key={idx}
                whileHover={{ y: -6 }}
                className={`rounded-3xl p-8 border ${item.accent} hover:shadow-xl transition-all duration-300 flex flex-col`}
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${item.iconBg} mb-6 shadow-sm`}>
                  <Icon className="w-7 h-7" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#4A6361] mb-1">
                  {item.subtitle}
                </span>
                <h3 className="text-2xl font-black text-[#003634] mb-3">
                  {item.title}
                </h3>
                <p className="text-[#4A6361] text-sm leading-relaxed mt-auto">
                  {item.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Mission Statement Banner */}
        <div className="bg-gradient-to-r from-[#003634] via-[#00766B] to-[#008779] rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-xs font-bold uppercase tracking-wider border border-white/20 text-[#72DCDC]">
              <Compass className="w-3.5 h-3.5" />
              <span>Our Mission</span>
            </div>
            <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-snug tracking-tight">
              &ldquo;Our mission is to make urban transportation smarter, safer and more accessible.&rdquo;
            </p>
            <p className="text-[#E0F7F6] text-sm sm:text-base font-medium pt-2">
              Building fair wages, predictable journeys, and zero hassle mobility for all of India.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
