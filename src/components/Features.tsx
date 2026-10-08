import React from 'react'
import { motion } from 'framer-motion'
import { Zap, ShieldCheck, Wallet, Star, Leaf, Clock } from 'lucide-react'

interface FeatureItem {
  icon: React.ComponentType<{ className?: string }>
  title: string
  subtitle: string
  description: string
  accentColor: string
  iconBg: string
  iconColor: string
}

const features: FeatureItem[] = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    subtitle: '⚡ Instant Dispatch',
    description: 'Get matched with nearby captains in seconds with our smart routing algorithm.',
    accentColor: 'group-hover:border-amber-400',
    iconBg: 'bg-amber-500/10',
    iconColor: 'text-amber-500',
  },
  {
    icon: ShieldCheck,
    title: 'Safe & Secure',
    subtitle: '🛡 Total Protection',
    description: 'Verified captains, continuous live tracking, and instant SOS emergency assistance.',
    accentColor: 'group-hover:border-[#E53935]',
    iconBg: 'bg-[#E53935]/10',
    iconColor: 'text-[#E53935]',
  },
  {
    icon: Wallet,
    title: 'Best Prices',
    subtitle: '💰 True Affordability',
    description: 'Transparent pricing with no hidden charges or unexpected peak surge multipliers.',
    accentColor: 'group-hover:border-emerald-500',
    iconBg: 'bg-emerald-500/10',
    iconColor: 'text-emerald-600',
  },
  {
    icon: Star,
    title: 'Top Rated',
    subtitle: '⭐ 4.9★ Average',
    description: 'Highly rated captains and quality service evaluated across 10 million rides.',
    accentColor: 'group-hover:border-orange-400',
    iconBg: 'bg-orange-500/10',
    iconColor: 'text-orange-500',
  },
  {
    icon: Leaf,
    title: 'Eco Friendly',
    subtitle: '🌱 Green Fleet',
    description: 'Carbon-neutral ride options and rapidly expanding electric vehicle mobility.',
    accentColor: 'group-hover:border-teal-500',
    iconBg: 'bg-teal-500/10',
    iconColor: 'text-teal-600',
  },
  {
    icon: Clock,
    title: '24/7 Available',
    subtitle: '🕐 Day & Night',
    description: 'Round-the-clock mobility across cities, early morning flights or late night returns.',
    accentColor: 'group-hover:border-sky-500',
    iconBg: 'bg-sky-500/10',
    iconColor: 'text-sky-500',
  },
]

export default function Features() {
  return (
    <section className="bg-white py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#E53935] bg-[#E53935]/10 mb-3 border border-[#E53935]/20">
            Avanto Advantage
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-[#101936] tracking-tight">
            Why Choose Avanto
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            The smartest way to get around.
          </p>
        </div>

        {/* 6 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                className={`group rounded-3xl p-8 border-2 border-slate-100 bg-[#F5F7FC]/70 hover:bg-white ${feature.accentColor} hover:shadow-xl transition-all duration-300 flex flex-col`}
              >
                {/* Icon Container */}
                <div className="flex items-center justify-between mb-6">
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center ${feature.iconBg} ${feature.iconColor} group-hover:scale-110 transition-transform duration-300 shadow-sm`}
                  >
                    <Icon className="w-7 h-7" />
                  </div>
                  <span className="text-xs font-bold text-gray-400 font-mono">
                    0{index + 1}
                  </span>
                </div>

                <div className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">
                  {feature.subtitle}
                </div>
                <h3 className="text-2xl font-black text-[#101936] mb-3 group-hover:text-[#E53935] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mt-auto">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
