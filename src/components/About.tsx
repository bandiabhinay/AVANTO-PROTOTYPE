import { motion } from 'framer-motion'
import { Users, Car, HeartHandshake, Compass } from 'lucide-react'

const pillars = [
  {
    icon: Users,
    title: 'Customer First',
    subtitle: 'Rider Community',
    description: 'Dependable daily commutes, upfront transparent fares without surge tricks, and courteous service on every booking.',
    accent: 'border-red-200 bg-red-50/50',
    iconBg: 'bg-[#E53935]/10 text-[#E53935]',
  },
  {
    icon: Car,
    title: 'Captain Empowered',
    subtitle: 'Driver Dignity',
    description: 'Guaranteed payouts, low commission structures, accident insurance, and respect for our hardworking partner captains.',
    accent: 'border-rose-200 bg-rose-50/50',
    iconBg: 'bg-rose-600/10 text-rose-600',
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
          <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#E53935] bg-[#E53935]/10 mb-3 border border-[#E53935]/20">
            About Avanto
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-[#101936] tracking-tight">
            Mobility Built for Everyone
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed font-medium">
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
                className={`rounded-3xl p-8 border-2 ${item.accent} hover:shadow-xl transition-all duration-300 flex flex-col`}
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${item.iconBg} mb-6 shadow-sm`}>
                  <Icon className="w-7 h-7" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">
                  {item.subtitle}
                </span>
                <h3 className="text-2xl font-black text-[#101936] mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mt-auto">
                  {item.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Mission Statement Banner */}
        <div className="bg-gradient-to-r from-[#101936] via-[#E53935] to-[#FF5252] rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-xs font-bold uppercase tracking-wider border border-white/20">
              <Compass className="w-3.5 h-3.5" />
              <span>Our Mission</span>
            </div>
            <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-snug tracking-tight">
              &ldquo;Our mission is to make urban transportation smarter, safer and more accessible.&rdquo;
            </p>
            <p className="text-rose-100 text-sm sm:text-base font-medium pt-2">
              Building fair wages, predictable journeys, and zero hassle mobility for all of India.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
