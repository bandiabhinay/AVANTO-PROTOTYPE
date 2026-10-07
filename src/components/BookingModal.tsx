import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  X,
  MapPin,
  Navigation,
  ArrowRight,
  Car,
  Bike,
  Sparkles,
  Crown,
  CheckCircle2,
  Clock,
  Star,
  ShieldCheck,
  RotateCcw,
} from 'lucide-react'

export interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
  initialRideType?: string
}

interface RideOption {
  id: string
  name: string
  price: number
  eta: string
  icon: React.ComponentType<{ className?: string }>
  desc: string
  tag?: string
}

const rideOptions: RideOption[] = [
  { id: 'auto', name: 'Avanto Auto', price: 89, eta: '2 min', icon: Bike, desc: 'Eco 3-wheeler', tag: 'Fastest' },
  { id: 'go', name: 'Avanto Go', price: 149, eta: '3 min', icon: Car, desc: 'Compact sedan', tag: 'Popular' },
  { id: 'premier', name: 'Avanto Premier', price: 219, eta: '4 min', icon: Sparkles, desc: 'Spacious & quiet' },
  { id: 'premium', name: 'Avanto Premium', price: 249, eta: '5 min', icon: Crown, desc: 'Top tier luxury', tag: 'VIP' },
]

export default function BookingModal({ isOpen, onClose, initialRideType = 'go' }: BookingModalProps) {
  const [step, setStep] = useState<number>(1)
  const [pickup, setPickup] = useState('Tech Park, Gate 2')
  const [destination, setDestination] = useState('International Airport, T2')
  const [selectedRideId, setSelectedRideId] = useState<string>(initialRideType)
  const [isSearching, setIsSearching] = useState<boolean>(false)
  const [rating, setRating] = useState<number>(5)
  const [hoverRating, setHoverRating] = useState<number>(0)

  // Sync initialRideType when modal opens
  useEffect(() => {
    if (initialRideType) {
      setSelectedRideId(initialRideType)
    }
  }, [initialRideType, isOpen])

  // Reset state when closed
  const handleClose = () => {
    onClose()
    setTimeout(() => {
      setStep(1)
      setIsSearching(false)
      setRating(5)
    }, 300)
  }

  // Handle Step 3 -> Step 4 Transition with 2.5s timer
  const handleConfirmRide = () => {
    setStep(4)
    setIsSearching(true)
    const timer = setTimeout(() => {
      setIsSearching(false)
    }, 2400)
    return () => clearTimeout(timer)
  }

  const selectedRide = rideOptions.find((r) => r.id === selectedRideId) || rideOptions[1]

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
          className="fixed inset-0 bg-[#101936]/70 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden z-10 border border-slate-100 my-8"
        >
          {/* Header Bar */}
          <div className="bg-[#101936] text-white px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-[#1769FF] flex items-center justify-center">
                <Navigation className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold tracking-tight text-base">AVANTO Booking Demo</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs px-2.5 py-1 rounded-full bg-white/10 text-blue-200 font-medium">
                Step {step} of 6
              </span>
              <button
                onClick={handleClose}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors text-white"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Progress bar */}
          <div className="w-full bg-gray-100 h-1.5">
            <motion.div
              className="bg-[#1769FF] h-full"
              initial={{ width: `${((step - 1) / 5) * 100}%` }}
              animate={{ width: `${(step / 6) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>

          <div className="p-6">
            {/* ================= STEP 1: Where are you going? ================= */}
            {step === 1 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="text-2xl font-bold text-[#101936]">Where are you going?</h3>
                  <p className="text-sm text-gray-500 mt-1">
                    Select your pickup location and destination.
                  </p>
                </div>

                <div className="bg-[#F5F7FC] rounded-2xl p-4 border border-slate-200/80 space-y-4">
                  {/* Pickup */}
                  <div>
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-1">
                      Pickup Location
                    </label>
                    <div className="flex items-center gap-3 bg-white px-3.5 py-2.5 rounded-xl border border-gray-200 focus-within:border-[#1769FF] focus-within:ring-2 focus-within:ring-[#1769FF]/20">
                      <div className="w-3 h-3 rounded-full bg-emerald-500 ring-4 ring-emerald-100 shrink-0" />
                      <input
                        type="text"
                        value={pickup}
                        onChange={(e) => setPickup(e.target.value)}
                        className="w-full text-sm font-semibold text-[#101936] outline-none"
                        placeholder="Enter pickup point"
                      />
                    </div>
                  </div>

                  {/* Destination */}
                  <div>
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-1">
                      Destination
                    </label>
                    <div className="flex items-center gap-3 bg-white px-3.5 py-2.5 rounded-xl border border-gray-200 focus-within:border-[#1769FF] focus-within:ring-2 focus-within:ring-[#1769FF]/20">
                      <div className="w-3 h-3 rounded-full bg-[#1769FF] ring-4 ring-[#1769FF]/20 shrink-0" />
                      <input
                        type="text"
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                        className="w-full text-sm font-semibold text-[#101936] outline-none"
                        placeholder="Enter destination"
                      />
                    </div>
                  </div>
                </div>

                {/* Quick destination chips */}
                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="text-gray-400 py-1 font-medium">Quick Pick:</span>
                  {[
                    'International Airport, T2',
                    'Indiranagar 100ft Rd',
                    'Electronic City Phase 1',
                  ].map((preset) => (
                    <button
                      key={preset}
                      type="button"
                      onClick={() => setDestination(preset)}
                      className="px-2.5 py-1 rounded-full bg-blue-50 text-[#1769FF] hover:bg-blue-100 font-medium transition-colors"
                    >
                      {preset}
                    </button>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="w-full py-4 rounded-xl bg-[#1769FF] hover:bg-[#1255D4] text-white font-bold text-base flex items-center justify-center gap-2 shadow-lg shadow-[#1769FF]/30 transition-all cursor-pointer"
                >
                  <span>Continue</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </motion.div>
            )}

            {/* ================= STEP 2: Choose your ride ================= */}
            {step === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="text-2xl font-bold text-[#101936]">Choose your ride</h3>
                  <p className="text-sm text-gray-500 mt-1">
                    Select the option that best fits your comfort and schedule.
                  </p>
                </div>

                <div className="space-y-3">
                  {rideOptions.map((opt) => {
                    const isSelected = selectedRideId === opt.id
                    const Icon = opt.icon
                    return (
                      <div
                        key={opt.id}
                        onClick={() => setSelectedRideId(opt.id)}
                        className={`p-3.5 rounded-2xl border-2 transition-all cursor-pointer flex items-center justify-between ${
                          isSelected
                            ? 'border-[#1769FF] bg-blue-50/60 shadow-sm'
                            : 'border-gray-200 hover:border-gray-300 bg-white'
                        }`}
                      >
                        <div className="flex items-center gap-3.5">
                          <div
                            className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                              isSelected
                                ? 'bg-[#1769FF] text-white shadow-md shadow-[#1769FF]/30'
                                : 'bg-gray-100 text-[#101936]'
                            }`}
                          >
                            <Icon className="w-6 h-6" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-bold text-[#101936] text-base">{opt.name}</span>
                              {opt.tag && (
                                <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-full bg-[#1769FF]/10 text-[#1769FF]">
                                  {opt.tag}
                                </span>
                              )}
                            </div>
                            <span className="text-xs text-gray-500">{opt.desc} • {opt.eta} away</span>
                          </div>
                        </div>

                        <div className="text-right">
                          <div className="text-lg font-black text-[#101936]">₹{opt.price}</div>
                          <span className="text-[11px] text-emerald-600 font-semibold">Guaranteed</span>
                        </div>
                      </div>
                    )
                  })}
                </div>

                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="w-1/3 py-3.5 rounded-xl border border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 transition-colors"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="w-2/3 py-3.5 rounded-xl bg-[#1769FF] hover:bg-[#1255D4] text-white font-bold flex items-center justify-center gap-2 shadow-lg shadow-[#1769FF]/25 transition-all cursor-pointer"
                  >
                    <span>Review Ride</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* ================= STEP 3: Confirm your ride ================= */}
            {step === 3 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="text-2xl font-bold text-[#101936]">Confirm your ride</h3>
                  <p className="text-sm text-gray-500 mt-1">
                    Please review your booking summary before requesting.
                  </p>
                </div>

                <div className="bg-[#F5F7FC] rounded-2xl p-5 border border-slate-200/80 space-y-4">
                  {/* Route Summary */}
                  <div className="space-y-3 pb-4 border-b border-gray-200">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[11px] font-semibold text-gray-400 uppercase">Pickup</span>
                        <p className="text-sm font-semibold text-[#101936]">{pickup}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-[#1769FF] shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[11px] font-semibold text-gray-400 uppercase">Destination</span>
                        <p className="text-sm font-semibold text-[#101936]">{destination}</p>
                      </div>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="bg-white p-3 rounded-xl border border-gray-100">
                      <span className="text-[11px] text-gray-400 uppercase font-semibold">Ride Tier</span>
                      <p className="font-bold text-[#101936]">{selectedRide.name}</p>
                    </div>
                    <div className="bg-white p-3 rounded-xl border border-gray-100">
                      <span className="text-[11px] text-gray-400 uppercase font-semibold">Estimated Fare</span>
                      <p className="font-extrabold text-[#1769FF] text-lg">₹{selectedRide.price}</p>
                    </div>
                    <div className="bg-white p-3 rounded-xl border border-gray-100">
                      <span className="text-[11px] text-gray-400 uppercase font-semibold">Arrival Time</span>
                      <p className="font-bold text-[#101936]">{selectedRide.eta} pickup</p>
                    </div>
                    <div className="bg-white p-3 rounded-xl border border-gray-100">
                      <span className="text-[11px] text-gray-400 uppercase font-semibold">Trip Distance</span>
                      <p className="font-bold text-[#101936]">8.4 km (~24m)</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="w-1/3 py-4 rounded-xl border border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 transition-colors"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={handleConfirmRide}
                    className="w-2/3 py-4 rounded-xl bg-[#1769FF] hover:bg-[#1255D4] text-white font-bold flex items-center justify-center gap-2 shadow-lg shadow-[#1769FF]/30 transition-all cursor-pointer"
                  >
                    <span>Confirm Ride</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* ================= STEP 4: Finding Captain / Captain Found ================= */}
            {step === 4 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="py-4 text-center space-y-6"
              >
                {isSearching ? (
                  /* Searching State (2-3s animation) */
                  <div className="py-8 space-y-6">
                    <div className="relative w-28 h-28 mx-auto flex items-center justify-center">
                      <motion.div
                        animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0.7, 0.3] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className="absolute inset-0 rounded-full bg-[#1769FF]/20"
                      />
                      <motion.div
                        animate={{ scale: [1, 1.8, 1], opacity: [0.1, 0.4, 0.1] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="absolute inset-0 rounded-full border-2 border-dashed border-[#1769FF]/40"
                      />
                      <div className="w-16 h-16 rounded-full bg-[#1769FF] text-white flex items-center justify-center shadow-xl shadow-[#1769FF]/40 z-10">
                        <Car className="w-8 h-8 animate-pulse" />
                      </div>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-[#101936]">Finding your Captain...</h3>
                      <p className="text-sm text-gray-500 mt-2">
                        Connecting to top-rated nearby captains in Tech Park area.
                      </p>
                    </div>

                    <div className="flex items-center justify-center gap-2 text-xs text-blue-600 font-semibold bg-blue-50 py-2 px-4 rounded-full max-w-xs mx-auto">
                      <Clock className="w-3.5 h-3.5" />
                      <span>Average match time: ~5 seconds</span>
                    </div>
                  </div>
                ) : (
                  /* Captain Found State */
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="space-y-6"
                  >
                    <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full font-bold text-sm border border-emerald-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>Captain Found! 🎉</span>
                    </div>

                    {/* Captain card */}
                    <div className="bg-[#F5F7FC] rounded-2xl p-5 border border-slate-200/80 text-left">
                      <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                        <div className="flex items-center gap-3.5">
                          <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#1769FF] to-blue-400 text-white flex items-center justify-center font-bold text-xl shadow-md">
                            RK
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <h4 className="font-bold text-[#101936] text-lg">Rahul Kumar</h4>
                              <ShieldCheck className="w-4 h-4 text-[#1769FF]" />
                            </div>
                            <div className="flex items-center gap-1.5 text-xs text-gray-500">
                              <span className="flex items-center text-amber-500 font-bold">
                                <Star className="w-3.5 h-3.5 fill-amber-400 inline mr-0.5" />
                                4.9
                              </span>
                              <span>•</span>
                              <span>2,400+ rides</span>
                            </div>
                          </div>
                        </div>

                        <div className="text-right">
                          <span className="text-[11px] text-gray-400 font-semibold uppercase">ETA</span>
                          <p className="text-xl font-extrabold text-[#1769FF]">3 mins</p>
                        </div>
                      </div>

                      {/* Vehicle details */}
                      <div className="pt-4 flex items-center justify-between">
                        <div>
                          <span className="text-[11px] text-gray-400 font-semibold uppercase">Vehicle</span>
                          <p className="font-bold text-[#101936] text-sm">{selectedRide.name} • White Swift</p>
                        </div>
                        <div className="bg-white px-3 py-1.5 rounded-lg border border-gray-200 text-sm font-mono font-bold text-[#101936]">
                          KA 01 AB 1234
                        </div>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => setStep(5)}
                      className="w-full py-4 rounded-xl bg-[#1769FF] hover:bg-[#1255D4] text-white font-bold text-base flex items-center justify-center gap-2 shadow-lg shadow-[#1769FF]/30 transition-all cursor-pointer"
                    >
                      <span>Track Ride</span>
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </motion.div>
                )}
              </motion.div>
            )}

            {/* ================= STEP 5: Live Ride Tracking ================= */}
            {step === 5 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-5"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-[#101936]">Captain is on the way</h3>
                    <p className="text-xs text-gray-500">Arriving in approximately 2 min</p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200 animate-pulse">
                    Live Tracking
                  </span>
                </div>

                {/* Animated Map Area */}
                <div className="relative h-48 w-full bg-[#101936] rounded-2xl overflow-hidden shadow-inner border border-slate-800">
                  {/* Road Grid Vector */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 190">
                    <defs>
                      <pattern id="modal-map-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                        <circle cx="2" cy="2" r="1" fill="#FFFFFF" opacity="0.15" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#modal-map-grid)" />

                    {/* Street background paths */}
                    <path d="M0 60 H400 M0 140 H400 M120 0 V190 M280 0 V190" stroke="rgba(255,255,255,0.06)" strokeWidth="4" />

                    {/* Active Route Glow */}
                    <path
                      d="M 50 140 C 120 140, 150 60, 240 60 C 300 60, 320 110, 360 110"
                      fill="none"
                      stroke="#1769FF"
                      strokeWidth="6"
                      strokeLinecap="round"
                      opacity="0.3"
                    />
                    {/* Active Route Core */}
                    <path
                      d="M 50 140 C 120 140, 150 60, 240 60 C 300 60, 320 110, 360 110"
                      fill="none"
                      stroke="#38BDF8"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      strokeDasharray="6 4"
                    />

                    {/* Pickup Marker */}
                    <circle cx="50" cy="140" r="6" fill="#10B981" />
                    <circle cx="50" cy="140" r="12" stroke="#10B981" strokeWidth="2" opacity="0.4" />

                    {/* Destination Marker */}
                    <circle cx="360" cy="110" r="6" fill="#EF4444" />
                    <circle cx="360" cy="110" r="12" stroke="#EF4444" strokeWidth="2" opacity="0.4" />
                  </svg>

                  {/* Animated moving vehicle along the curve */}
                  <motion.div
                    animate={{
                      x: [50, 140, 240, 310],
                      y: [120, 70, 40, 85],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className="absolute top-0 left-0"
                  >
                    <div className="w-8 h-8 rounded-full bg-[#1769FF] text-white flex items-center justify-center shadow-lg shadow-[#1769FF]/50 border-2 border-white ring-2 ring-[#38BDF8]">
                      <Car className="w-4 h-4" />
                    </div>
                  </motion.div>

                  {/* Overlay Badges */}
                  <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm text-white px-2.5 py-1 rounded-lg text-[11px] font-medium border border-white/10">
                    Rahul Kumar • KA 01 AB 1234
                  </div>
                  <div className="absolute bottom-3 right-3 bg-emerald-600 text-white px-2.5 py-1 rounded-lg text-[11px] font-bold shadow">
                    ETA: 2 min
                  </div>
                </div>

                {/* Status card */}
                <div className="bg-[#F5F7FC] rounded-xl p-3.5 border border-slate-200/80 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="font-semibold text-[#101936]">On schedule for airport drop-off</span>
                  </div>
                  <span className="font-mono text-gray-500">OTP: 4821</span>
                </div>

                <button
                  type="button"
                  onClick={() => setStep(6)}
                  className="w-full py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/30 transition-all cursor-pointer"
                >
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Complete Demo Ride</span>
                </button>
              </motion.div>
            )}

            {/* ================= STEP 6: Ride Completed ================= */}
            {step === 6 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="text-center space-y-6 py-2"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-9 h-9" />
                </div>

                <div>
                  <h3 className="text-2xl font-black text-[#101936]">Ride Completed 🎉</h3>
                  <p className="text-sm text-gray-500 mt-1">Thank you for riding with Avanto!</p>
                </div>

                {/* Receipt Card */}
                <div className="bg-[#F5F7FC] rounded-2xl p-5 border border-slate-200/80 text-left space-y-3">
                  <div className="flex justify-between items-baseline pb-3 border-b border-gray-200">
                    <span className="text-sm text-gray-500 font-medium">Total Fare</span>
                    <span className="text-2xl font-black text-[#101936]">₹{selectedRide.price}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs text-gray-600">
                    <div>Distance: <span className="font-bold text-[#101936]">8.4 km</span></div>
                    <div>Duration: <span className="font-bold text-[#101936]">24 min</span></div>
                    <div>Captain: <span className="font-bold text-[#101936]">Rahul Kumar</span></div>
                    <div>Payment: <span className="font-bold text-emerald-600">Paid via UPI</span></div>
                  </div>
                </div>

                {/* Star Rating */}
                <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm">
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                    Rate Your Ride
                  </p>
                  <div className="flex items-center justify-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                        className="p-1 transition-transform hover:scale-125"
                      >
                        <Star
                          className={`w-7 h-7 cursor-pointer transition-colors ${
                            (hoverRating || rating) >= star
                              ? 'fill-amber-400 text-amber-400'
                              : 'text-gray-300'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                  <span className="text-xs text-gray-400 mt-1 block">
                    {rating === 5 ? 'Excellent service!' : `Rated ${rating} out of 5 stars`}
                  </span>
                </div>

                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="w-1/2 py-3.5 rounded-xl border border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span>Book Again</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleClose}
                    className="w-1/2 py-3.5 rounded-xl bg-[#1769FF] hover:bg-[#1255D4] text-white font-bold shadow-lg shadow-[#1769FF]/30 transition-all cursor-pointer"
                  >
                    Done
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
