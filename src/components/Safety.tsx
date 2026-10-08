import { motion } from 'framer-motion'
import {
  ShieldCheck,
  Eye,
  AlertTriangle,
  Share2,
  Lock,
  Headphones,
  CheckCircle2,
} from 'lucide-react'

const safetyFeatures = [
  {
    icon: ShieldCheck,
    title: 'Verified Captains',
    description: 'Multi-layer criminal background checks, license verification, and vehicle fitness audits.',
    color: 'text-[#E53935]',
    bg: 'bg-[#E53935]/10',
  },
  {
    icon: Eye,
    title: 'Live Ride Tracking',
    description: 'Real-time GPS telemetry tracks route deviations and alerts our central safety hub.',
    color: 'text-indigo-600',
    bg: 'bg-indigo-50',
  },
  {
    icon: AlertTriangle,
    title: 'SOS Emergency Button',
    description: 'One-touch SOS instantly alerts local emergency police services and Avanto emergency teams.',
    color: 'text-rose-600',
    bg: 'bg-rose-50',
  },
  {
    icon: Share2,
    title: 'Trip Sharing',
    description: 'Share live trip status, captain photo, and vehicle license plate with trusted family and friends.',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
  },
  {
    icon: Lock,
    title: 'Secure Payments',
    description: 'End-to-end encrypted transactions via UPI, cards, and zero cash handling disputes.',
    color: 'text-amber-600',
    bg: 'bg-amber-50',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Dedicated round-the-clock safety and escalation helpline in multiple Indian languages.',
    color: 'text-sky-600',
    bg: 'bg-sky-50',
  },
]

export default function Safety() {
  return (
    <section id="safety" className="bg-[#F5F7FC] py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-rose-600 bg-rose-50 border border-rose-200 mb-3">
            Peace of Mind
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-[#101936] tracking-tight">
            Your Safety Comes First
          </h2>
          <p className="mt-4 text-lg text-gray-600 font-medium">
            Every Avanto ride is designed with safety at every step.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Animated Shield Illustration Card */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative w-80 h-80 sm:w-96 sm:h-96 flex items-center justify-center">
              {/* Outer pulsing ring */}
              <motion.div
                animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.4, 0.15] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-[#E53935]/30"
              />

              {/* Middle pulsing ring */}
              <motion.div
                animate={{ scale: [1, 1.08, 1], opacity: [0.25, 0.55, 0.25] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute inset-8 rounded-full border-2 border-[#E53935]/40 bg-[#E53935]/5"
              />

              {/* Central Glowing Shield Badge */}
              <motion.div
                whileHover={{ scale: 1.04 }}
                className="relative z-10 w-36 h-36 rounded-3xl bg-gradient-to-tr from-[#101936] via-[#E53935] to-[#FF5252] text-white flex flex-col items-center justify-center shadow-2xl shadow-[#E53935]/40 p-4 text-center border-2 border-white/20"
              >
                <ShieldCheck className="w-14 h-14 stroke-[2] mb-1 text-white" />
                <span className="text-xs font-extrabold tracking-wider uppercase text-rose-100">
                  100% Verified
                </span>
              </motion.div>

              {/* Floating badges around shield */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-4 right-0 bg-white shadow-lg border border-slate-100 px-3 py-1.5 rounded-full flex items-center gap-1.5 text-xs font-bold text-[#101936]"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span>24/7 Incident Desk</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute bottom-6 left-0 bg-white shadow-lg border border-slate-100 px-3 py-1.5 rounded-full flex items-center gap-1.5 text-xs font-bold text-[#101936]"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Zero Tolerance Policy</span>
              </motion.div>
            </div>
          </div>

          {/* 6 Safety Pillars Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {safetyFeatures.map((feat, index) => {
              const Icon = feat.icon
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-lg transition-all duration-200 flex flex-col group hover:-translate-y-1"
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${feat.bg} ${feat.color} mb-4 group-hover:scale-105 transition-transform`}>
                    <Icon className="w-6 h-6 stroke-[2.2]" />
                  </div>
                  <h3 className="text-lg font-black text-[#101936] mb-2 group-hover:text-[#E53935] transition-colors">
                    {feat.title}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mt-auto">
                    {feat.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
