import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Car,
  MapPin,
  Star,
  Clock,
  Navigation,
  ShieldCheck,
  Headphones,
  Sparkles,
  Zap,
} from 'lucide-react'

export interface HeroProps {
  onBookRide: (rideType?: string) => void
  onBecomeCaptain: () => void
}

interface RideOption {
  id: string
  name: string
  eta: string
  price: number
  icon: typeof Car
  tag?: string
}

const rideOptions: RideOption[] = [
  {
    id: 'go',
    name: 'Avanto Go',
    eta: '3 min',
    price: 149,
    icon: Car,
    tag: 'Popular',
  },
  {
    id: 'premier',
    name: 'Avanto Premier',
    eta: '5 min',
    price: 219,
    icon: Sparkles,
  },
  {
    id: 'auto',
    name: 'Avanto Auto',
    eta: '2 min',
    price: 89,
    icon: Zap,
    tag: 'Fastest',
  },
]

const stats = [
  { value: '10M+', label: 'Rides', icon: Car, color: 'text-[#00766B]', bg: 'bg-[#00766B]/10' },
  { value: '50+', label: 'Cities', icon: MapPin, color: 'text-[#008779]', bg: 'bg-[#72DCDC]/20' },
  { value: '4.9★', label: 'Average Rating', icon: Star, color: 'text-amber-500', bg: 'bg-amber-500/10' },
  { value: '24/7', label: 'Support', icon: Headphones, color: 'text-[#00766B]', bg: 'bg-[#E0F7F6]' },
]

export default function Hero({ onBookRide, onBecomeCaptain }: HeroProps) {
  const [selectedRide, setSelectedRide] = useState<RideOption>(rideOptions[0])

  return (
    <section
      id="home"
      className="relative min-h-[92vh] w-full bg-gradient-to-b from-[#F0FDFB] via-[#F4FAF9] to-white flex flex-col justify-center overflow-hidden pt-28 pb-16 lg:pt-32 lg:pb-20"
    >
      {/* Background Decorative Ambient Blobs with App Teal & Cyan Tints */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 sm:w-[520px] sm:h-[520px] rounded-full bg-[#00766B]/10 blur-3xl" />
        <div className="absolute top-1/2 -left-28 w-80 h-80 sm:w-[480px] sm:h-[480px] rounded-full bg-[#72DCDC]/15 blur-3xl" />
        <div className="absolute -bottom-24 right-1/4 w-96 h-96 rounded-full bg-[#004D4A]/8 blur-3xl" />

        {/* Subtle geometric dot grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `radial-gradient(#004D4A 1.5px, transparent 1.5px)`,
            backgroundSize: '28px 28px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* ================= LEFT COLUMN: Headline & CTAs ================= */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center space-y-6 sm:space-y-8 max-w-2xl lg:max-w-none"
          >
            {/* Pill Badge */}
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#D1E7E5] text-[#00766B] text-xs sm:text-sm font-bold tracking-wide shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#72DCDC] animate-pulse" />
                <span>Now in 50+ cities across India</span>
              </span>
            </div>

            {/* Main Headline (Aligning with new app slogan "Move with confidence.") */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-[#003634] leading-[1.06]">
              <span>Move with</span>
              <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-[#00766B] via-[#008779] to-[#72DCDC]">
                Confidence.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-[#4A6361] leading-relaxed max-w-xl font-normal">
              Safe rides, reliable earnings, and transparent fares at your fingertips. Your ride, our priority.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                type="button"
                onClick={() => onBookRide(selectedRide.id)}
                className="inline-flex items-center justify-center gap-3 bg-[#00766B] hover:bg-[#004D4A] text-white font-bold text-base sm:text-lg rounded-full px-8 py-4 shadow-xl shadow-[#00766B]/30 hover:shadow-2xl hover:shadow-[#00766B]/40 hover:-translate-y-0.5 transition-all cursor-pointer group"
              >
                <span>Book a Ride</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              <button
                type="button"
                onClick={onBecomeCaptain}
                className="inline-flex items-center justify-center gap-2 border-2 border-[#004D4A] text-[#004D4A] hover:bg-[#004D4A] hover:text-white font-bold text-base sm:text-lg rounded-full px-8 py-4 transition-all duration-200 cursor-pointer"
              >
                <span>Become a Captain</span>
              </button>
            </div>

            {/* ================= HERO STATS ================= */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="pt-6 sm:pt-8 border-t border-[#D1E7E5]"
            >
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
                {stats.map((stat, i) => {
                  const Icon = stat.icon
                  return (
                    <motion.div
                      key={stat.label}
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.4 + i * 0.08 }}
                      className="bg-white/90 backdrop-blur-sm p-3.5 rounded-2xl border border-[#D1E7E5]/70 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-center gap-2.5 mb-1.5">
                        <div className={`w-8 h-8 rounded-xl ${stat.bg} ${stat.color} flex items-center justify-center`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="text-xl sm:text-2xl font-black text-[#003634] tracking-tight">
                          {stat.value}
                        </div>
                      </div>
                      <div className="text-xs text-[#4A6361] font-semibold pl-1">
                        {stat.label}
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          </motion.div>

          {/* ================= RIGHT COLUMN: Interactive Ride-Booking Mockup ================= */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative flex items-center justify-center pt-6 pb-6 lg:py-0"
          >
            <div className="relative w-full max-w-[430px]">
              {/* Backlight Glow Behind Mockup */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#00766B]/20 via-[#72DCDC]/15 to-[#004D4A]/10 rounded-3xl blur-2xl transform scale-95 -z-10" />

              {/* FLOATING BADGE 1: ETA 3 min (Top-Left) */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-5 -left-4 sm:-left-6 z-20 bg-white/95 backdrop-blur-md rounded-2xl p-3 shadow-xl border border-white flex items-center gap-2.5 pointer-events-none"
              >
                <div className="w-9 h-9 rounded-xl bg-[#E53935]/10 text-[#E53935] flex items-center justify-center relative">
                  <Clock className="w-5 h-5 text-[#E53935]" />
                  <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E53935] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#E53935]" />
                  </span>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-gray-400 font-bold">Fastest pickup</div>
                  <div className="text-sm font-extrabold text-[#101936]">ETA: 3 min</div>
                </div>
              </motion.div>

              {/* FLOATING BADGE 2: Guaranteed Price (Bottom-Left) */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -bottom-6 -left-3 sm:-left-6 z-20 bg-white/95 backdrop-blur-md rounded-2xl p-3 shadow-xl border border-white flex items-center gap-2.5 pointer-events-none"
              >
                <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-base">
                  ₹
                </div>
                <div>
                  <div className="text-sm font-extrabold text-[#101936]">₹149 Guaranteed Price</div>
                  <div className="text-[10px] text-gray-500 font-medium">No surge pricing</div>
                </div>
              </motion.div>

              {/* FLOATING BADGE 3: Top Captains (Top-Right) */}
              <motion.div
                animate={{ y: [0, -7, 0] }}
                transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -top-4 -right-3 sm:-right-6 z-20 bg-white/95 backdrop-blur-md rounded-2xl p-3 shadow-xl border border-white flex items-center gap-2.5 pointer-events-none"
              >
                <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-500 flex items-center justify-center">
                  <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                </div>
                <div>
                  <div className="text-sm font-extrabold text-[#101936]">4.9★ Top Captains</div>
                  <div className="text-[10px] text-gray-500 font-medium flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-emerald-600 inline" />
                    Verified & Trained
                  </div>
                </div>
              </motion.div>

              {/* MAIN MOCKUP CARD */}
              <div className="relative bg-white rounded-3xl p-5 sm:p-6 shadow-[0_20px_50px_rgba(0,77,74,0.12)] border border-[#D1E7E5] z-10">
                {/* Mockup Header: Brand & Status */}
                <div className="flex items-center justify-between pb-3.5 border-b border-gray-100">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-[#004D4A] to-[#00766B] flex items-center justify-center text-white font-black text-xs shadow-sm">
                      <svg viewBox="0 0 100 100" fill="none" className="w-4 h-4 text-white">
                        <path d="M38 18 L18 82 L34 82 L54 18 Z" fill="currentColor" />
                        <path d="M56 42 L82 42 L66 60 L50 60 Z" fill="currentColor" />
                        <path d="M48 64 L74 64 L58 82 L42 82 Z" fill="currentColor" />
                      </svg>
                    </div>
                    <div className="flex flex-col text-left justify-center">
                      <span className="font-black text-sm tracking-tight leading-none text-[#004D4A]">
                        AVANTO
                      </span>
                      <span className="text-[8px] font-extrabold uppercase tracking-[0.25em] text-[#00766B] leading-none mt-0.5">
                        R I D E
                      </span>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#E0F7F6] text-[11px] font-bold text-[#00766B] border border-[#72DCDC]/40">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#72DCDC] animate-pulse" />
                    <span>Live Fleet</span>
                  </div>
                </div>

                {/* Pickup & Destination Inputs */}
                <div className="mt-3.5 bg-[#F5F7FC] rounded-2xl p-3.5 border border-slate-200/70 space-y-2">
                  {/* Current Location */}
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-emerald-500 ring-4 ring-emerald-100 shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="text-[10px] uppercase font-bold tracking-wider text-gray-400">Current Location</div>
                      <div className="text-xs sm:text-sm font-bold text-[#101936] truncate">Tech Park, Gate 2</div>
                    </div>
                    <Navigation className="w-4 h-4 text-[#E53935] shrink-0" />
                  </div>

                  {/* Connector */}
                  <div className="pl-1.5 py-0">
                    <div className="border-l-2 border-dashed border-gray-300 h-3 ml-0" />
                  </div>

                  {/* Destination */}
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-[#E53935] ring-4 ring-[#E53935]/20 shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="text-[10px] uppercase font-bold tracking-wider text-gray-400">Destination</div>
                      <div className="text-xs sm:text-sm font-bold text-[#101936] truncate">International Airport, T2</div>
                    </div>
                    <MapPin className="w-4 h-4 text-rose-500 shrink-0" />
                  </div>
                </div>

                {/* Stylized Map View with Animated Moving Car */}
                <div className="mt-3.5 h-40 w-full rounded-2xl relative overflow-hidden bg-[#101936] shadow-inner">
                  {/* SVG Map Lines */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 360 160">
                    <defs>
                      <pattern id="hero-map-dots" width="16" height="16" patternUnits="userSpaceOnUse">
                        <circle cx="2" cy="2" r="1" fill="#FFFFFF" opacity="0.12" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#hero-map-dots)" />

                    {/* Background streets */}
                    <path d="M-10 40 C80 40 120 120 220 120 C290 120 330 30 380 30" stroke="rgba(255,255,255,0.06)" strokeWidth="4" />
                    <path d="M90 -10 L90 170" stroke="rgba(255,255,255,0.05)" strokeWidth="3" />
                    <path d="M250 -10 L250 170" stroke="rgba(255,255,255,0.05)" strokeWidth="3" />

                    {/* Active Route Glow */}
                    <path
                      d="M 45 120 C 100 120, 130 50, 190 50 C 240 50, 270 95, 315 90"
                      fill="none"
                      stroke="#00766B"
                      strokeWidth="7"
                      strokeLinecap="round"
                      opacity="0.35"
                    />

                    {/* Active Route Core Line */}
                    <path
                      d="M 45 120 C 100 120, 130 50, 190 50 C 240 50, 270 95, 315 90"
                      fill="none"
                      stroke="#72DCDC"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      strokeDasharray="6 4"
                    />

                    {/* Pickup Marker */}
                    <circle cx="45" cy="120" r="5" fill="#72DCDC" />
                    <circle cx="45" cy="120" r="10" stroke="#72DCDC" strokeWidth="2" opacity="0.6" />

                    {/* Destination Marker */}
                    <circle cx="315" cy="90" r="5" fill="#00766B" />
                    <circle cx="315" cy="90" r="10" stroke="#00766B" strokeWidth="2" opacity="0.5" />
                  </svg>

                  {/* Real-time moving vehicle along route */}
                  <motion.div
                    animate={{
                      x: [45, 120, 190, 250, 305],
                      y: [100, 50, 32, 60, 75],
                    }}
                    transition={{
                      duration: 7,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className="absolute top-0 left-0"
                  >
                    <div className="w-8 h-8 rounded-full bg-[#00766B] text-white flex items-center justify-center shadow-lg shadow-[#00766B]/50 border-2 border-white ring-2 ring-[#72DCDC]">
                      <Car className="w-4 h-4" />
                    </div>
                  </motion.div>

                  {/* Route Badge */}
                  <div className="absolute top-2.5 left-2.5 bg-[#004D4A]/80 backdrop-blur-md text-white text-[10px] font-medium px-2.5 py-1 rounded-full border border-[#72DCDC]/30 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#72DCDC]" />
                    <span>Fastest Route • 8.4 km</span>
                  </div>

                  {/* Captain Status */}
                  <div className="absolute bottom-2.5 right-2.5 bg-[#004D4A]/80 backdrop-blur-sm text-[#E0F7F6] text-[10px] font-medium px-2 py-0.5 rounded-md border border-[#72DCDC]/20">
                    Captain rating: 4.9★
                  </div>
                </div>

                {/* Ride Options Tiers */}
                <div className="mt-3.5 grid grid-cols-3 gap-2">
                  {rideOptions.map((ride) => {
                    const isSelected = selectedRide.id === ride.id
                    const Icon = ride.icon

                    return (
                      <button
                        key={ride.id}
                        type="button"
                        onClick={() => setSelectedRide(ride)}
                        className={`relative rounded-xl p-2.5 text-left transition-all cursor-pointer border ${
                          isSelected
                            ? 'bg-[#E0F7F6] border-[#00766B] shadow-sm ring-1 ring-[#00766B]'
                            : 'bg-white border-gray-100 hover:border-gray-200 hover:bg-gray-50'
                        }`}
                      >
                        {ride.tag && (
                          <span className="absolute -top-2 right-2 text-[8px] font-bold bg-[#00766B] text-white px-1.5 py-0.2 rounded-full uppercase">
                            {ride.tag}
                          </span>
                        )}
                        <div className="flex items-center justify-between mb-1">
                          <Icon className={`w-4 h-4 ${isSelected ? 'text-[#00766B]' : 'text-gray-400'}`} />
                          <span className="text-[10px] text-gray-400 font-medium">{ride.eta}</span>
                        </div>
                        <div className="text-[11px] font-bold text-[#004D4A] truncate">{ride.name}</div>
                        <div className="text-xs font-black text-[#00766B]">₹{ride.price}</div>
                      </button>
                    )
                  })}
                </div>

                {/* Book Now Button */}
                <div className="mt-3.5">
                  <button
                    type="button"
                    onClick={() => onBookRide(selectedRide.id)}
                    className="w-full py-3.5 rounded-xl bg-[#00766B] hover:bg-[#004D4A] text-white font-bold text-sm shadow-lg shadow-[#00766B]/30 hover:shadow-xl hover:shadow-[#00766B]/40 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Book Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
