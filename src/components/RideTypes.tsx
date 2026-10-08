import React from 'react'
import { motion } from 'framer-motion'
import { Bike, Car, Crown, ArrowRight, Star, Clock, Check } from 'lucide-react'

export interface RideTypesProps {
  onSelectRide: (rideType: string) => void
}

interface RideTier {
  id: string
  name: string
  tag: string
  tagClasses: string
  accentColor: string
  borderColor: string
  iconBg: string
  icon: React.ComponentType<{ className?: string }>
  description: string
  price: string
  eta: string
  rating: string
  features: string[]
}

const rideTiers: RideTier[] = [
  {
    id: 'auto',
    name: 'AVANTO AUTO',
    tag: 'Budget Friendly',
    tagClasses: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    accentColor: 'from-emerald-500 to-teal-600',
    borderColor: 'hover:border-emerald-400',
    iconBg: 'bg-emerald-50 text-emerald-600',
    icon: Bike,
    description: 'Affordable 3-wheeler rides for quick intra-city hops',
    price: '₹29',
    eta: '2 min away',
    rating: '4.8★',
    features: ['Direct doorstep pickup', 'Zero hidden surcharges', 'Fast traffic navigation'],
  },
  {
    id: 'mini',
    name: 'AVANTO MINI',
    tag: 'Most Popular',
    tagClasses: 'bg-red-50 text-[#E53935] border-red-200',
    accentColor: 'from-[#E53935] to-[#C62828]',
    borderColor: 'hover:border-[#E53935]',
    iconBg: 'bg-red-50 text-[#E53935]',
    icon: Car,
    description: 'Compact cars for quick trips and daily office commutes',
    price: '₹79',
    eta: '3 min away',
    rating: '4.9★',
    features: ['Air-conditioned comfort', 'Seats up to 4 passengers', 'Affordable daily pricing'],
  },
  {
    id: 'sedan',
    name: 'AVANTO SEDAN',
    tag: 'High Comfort',
    tagClasses: 'bg-rose-50 text-rose-700 border-rose-200',
    accentColor: 'from-rose-600 to-red-700',
    borderColor: 'hover:border-rose-400',
    iconBg: 'bg-rose-50 text-rose-600',
    icon: Car,
    description: 'Comfortable sedan rides with extra legroom & boot space',
    price: '₹129',
    eta: '4 min away',
    rating: '4.9★',
    features: ['Spacious sedans with boot space', 'Top-rated executive captains', 'Quiet cabin experience'],
  },
  {
    id: 'premium',
    name: 'AVANTO PREMIUM',
    tag: 'Luxury Tier',
    tagClasses: 'bg-amber-50 text-amber-800 border-amber-200',
    accentColor: 'from-amber-500 to-orange-500',
    borderColor: 'hover:border-amber-400',
    iconBg: 'bg-amber-50 text-amber-600',
    icon: Crown,
    description: 'Luxury cars and top-rated captains for special journeys',
    price: '₹249',
    eta: '5 min away',
    rating: '5.0★',
    features: ['Premium luxury vehicles', 'VIP priority dispatch', 'Bottled water & phone chargers'],
  },
]

export default function RideTypes({ onSelectRide }: RideTypesProps) {
  return (
    <section id="ride" className="bg-[#F5F7FC] py-24 relative overflow-hidden">
      {/* Background accents */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#E53935] bg-[#E53935]/10 mb-3 border border-[#E53935]/20">
            Ride Categories
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-[#101936] tracking-tight">
            Choose Your Ride
          </h2>
          <p className="mt-3 text-lg text-gray-600">
            From budget-friendly trips to premium luxury.
          </p>
        </div>

        {/* 4 Interactive Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
          {rideTiers.map((tier) => {
            const Icon = tier.icon
            return (
              <motion.div
                key={tier.id}
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className={`group relative bg-white rounded-3xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 border-2 border-slate-100 ${tier.borderColor} flex flex-col justify-between`}
              >
                {/* Top accent badge */}
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className={`text-[11px] font-bold px-3 py-1 rounded-full border ${tier.tagClasses}`}>
                      {tier.tag}
                    </span>
                    <div className="flex items-center gap-1 text-xs font-bold text-amber-500">
                      <Star className="w-3.5 h-3.5 fill-amber-400" />
                      <span>{tier.rating}</span>
                    </div>
                  </div>

                  {/* Icon illustration container with hover zoom */}
                  <div className="mb-5 flex items-center justify-center">
                    <div
                      className={`w-20 h-20 rounded-2xl flex items-center justify-center ${tier.iconBg} group-hover:scale-110 transition-transform duration-300 shadow-sm`}
                    >
                      <Icon className="w-10 h-10" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-black text-[#101936] mb-1.5 group-hover:text-[#E53935] transition-colors">
                    {tier.name}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed min-h-[36px] mb-4">
                    {tier.description}
                  </p>

                  {/* Features list */}
                  <div className="space-y-2 py-3 border-t border-gray-100 mb-5">
                    {tier.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-gray-600">
                        <Check className="w-3.5 h-3.5 text-[#E53935] shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price, ETA & Action */}
                <div className="pt-4 border-t border-gray-100 mt-auto">
                  <div className="flex items-baseline justify-between mb-4">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-gray-400 block">Starting from</span>
                      <span className="text-3xl font-black text-[#101936]">{tier.price}</span>
                    </div>
                    <div className="flex items-center gap-1 text-xs font-semibold text-gray-500">
                      <Clock className="w-3.5 h-3.5 text-[#E53935]" />
                      <span>{tier.eta}</span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => onSelectRide(tier.id)}
                    className="w-full py-3.5 px-4 rounded-xl font-bold text-sm bg-[#101936] hover:bg-[#E53935] text-white transition-colors duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-sm group-hover:shadow-md"
                  >
                    <span>Book Now</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
