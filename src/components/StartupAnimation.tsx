import { useEffect, useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { Navigation } from 'lucide-react'

export interface StartupAnimationProps {
  onComplete: () => void
}

/* ============================================================================
   CUSTOM VECTOR VEHICLE ILLUSTRATIONS (Premium Avanto Red + White Theme)
   ============================================================================ */

/**
 * 1. BIKE (Motorcycle / Commuter Bike)
 * Facing Right, modern sporty styling, rider silhouette / aerodynamic body, alloy wheels.
 */
function BikeIllustration({ className = 'w-48 sm:w-60 md:w-72 h-auto' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        {/* Wheel spoke radial gradients */}
        <radialGradient id="bike-wheel-grad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#2A334E" />
          <stop offset="70%" stopColor="#101936" />
          <stop offset="100%" stopColor="#0B1226" />
        </radialGradient>
        {/* Body highlight gradient */}
        <linearGradient id="bike-red-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF5252" />
          <stop offset="60%" stopColor="#E53935" />
          <stop offset="100%" stopColor="#C62828" />
        </linearGradient>
      </defs>

      {/* Rear Wheel (Left) */}
      <circle cx="52" cy="98" r="32" stroke="#101936" strokeWidth="8" fill="url(#bike-wheel-grad)" />
      <circle cx="52" cy="98" r="22" stroke="#E2E8F0" strokeWidth="2" strokeDasharray="3 3" />
      <circle cx="52" cy="98" r="10" fill="#E53935" />
      <circle cx="52" cy="98" r="4" fill="#FFFFFF" />

      {/* Front Wheel (Right) */}
      <circle cx="188" cy="98" r="32" stroke="#101936" strokeWidth="8" fill="url(#bike-wheel-grad)" />
      <circle cx="188" cy="98" r="22" stroke="#E2E8F0" strokeWidth="2" strokeDasharray="3 3" />
      <circle cx="188" cy="98" r="10" fill="#E53935" />
      <circle cx="188" cy="98" r="4" fill="#FFFFFF" />

      {/* Engine & Metallic Frame Core */}
      <path d="M78 98 L114 98 L128 72 L88 72 Z" fill="#1E293B" stroke="#0F172A" strokeWidth="2" />
      <rect x="88" y="76" width="22" height="18" rx="3" fill="#334155" />
      {/* Exhaust Pipe */}
      <path d="M106 94 L62 98 L40 92" stroke="#94A3B8" strokeWidth="5" strokeLinecap="round" />
      <path d="M40 92 L32 90" stroke="#64748B" strokeWidth="6" strokeLinecap="round" />

      {/* Bike Swingarm / Rear Suspension */}
      <line x1="52" y1="98" x2="88" y2="76" stroke="#475569" strokeWidth="6" strokeLinecap="round" />
      <line x1="68" y1="90" x2="82" y2="68" stroke="#E53935" strokeWidth="4" strokeLinecap="round" />

      {/* Main Chassis Spine */}
      <line x1="88" y1="72" x2="148" y2="62" stroke="#0F172A" strokeWidth="6" strokeLinecap="round" />
      {/* Front Fork */}
      <line x1="188" y1="98" x2="160" y2="44" stroke="#475569" strokeWidth="6" strokeLinecap="round" />
      <line x1="188" y1="98" x2="162" y2="52" stroke="#E53935" strokeWidth="3" strokeLinecap="round" />

      {/* Fuel Tank & Sleek Fairing (Avanto Red) */}
      <path
        d="M108 52 C116 42 142 42 154 50 C162 55 166 65 158 68 C144 72 118 70 108 52 Z"
        fill="url(#bike-red-grad)"
      />
      {/* Tank White Brand Stripe */}
      <path d="M120 48 Q138 48 148 54" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />

      {/* Rider Seat */}
      <path d="M82 60 C90 60 106 58 114 62 L108 70 L76 68 C76 64 78 60 82 60 Z" fill="#0F172A" />

      {/* Tail Fairing (Rear upward sweep) */}
      <path d="M68 64 L102 62 L94 72 L62 70 Z" fill="url(#bike-red-grad)" />

      {/* Handlebars & Mirror */}
      <path d="M158 44 L150 36 L144 38" stroke="#101936" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="144" cy="34" r="3" fill="#E53935" />

      {/* Headlight (LED Angle) */}
      <path d="M172 54 L180 58 L170 66 Z" fill="#FFFFFF" stroke="#E53935" strokeWidth="2" />
      {/* Headlight Glow Beam */}
      <polygon points="180,58 230,46 230,76" fill="rgba(255, 82, 82, 0.2)" />
    </svg>
  )
}

/**
 * 2. AUTO / RICKSHAW (Classic Indian 3-Wheeler)
 * Recognizable silhouette: Slanted windshield, curved cabin roof, open passenger side,
 * 1 front wheel + 1 visible rear wheel, distinctive yellow/black/red livery.
 */
function AutoIllustration({ className = 'w-48 sm:w-60 md:w-72 h-auto' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <radialGradient id="auto-wheel-grad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#2A334E" />
          <stop offset="70%" stopColor="#101936" />
          <stop offset="100%" stopColor="#0B1226" />
        </radialGradient>
        <linearGradient id="auto-roof-grad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFE082" />
          <stop offset="100%" stopColor="#F59E0B" />
        </linearGradient>
        <linearGradient id="auto-body-grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FF5252" />
          <stop offset="60%" stopColor="#E53935" />
          <stop offset="100%" stopColor="#B71C1C" />
        </linearGradient>
      </defs>

      {/* Rear Wheel (Left) */}
      <circle cx="62" cy="100" r="28" stroke="#101936" strokeWidth="8" fill="url(#auto-wheel-grad)" />
      <circle cx="62" cy="100" r="18" stroke="#E2E8F0" strokeWidth="2" strokeDasharray="3 3" />
      <circle cx="62" cy="100" r="8" fill="#E53935" />
      <circle cx="62" cy="100" r="3" fill="#FFFFFF" />

      {/* Front Wheel (Right - Single front wheel characteristic of Indian autos) */}
      <circle cx="188" cy="102" r="24" stroke="#101936" strokeWidth="7" fill="url(#auto-wheel-grad)" />
      <circle cx="188" cy="102" r="15" stroke="#E2E8F0" strokeWidth="2" strokeDasharray="3 3" />
      <circle cx="188" cy="102" r="7" fill="#E53935" />
      <circle cx="188" cy="102" r="2.5" fill="#FFFFFF" />

      {/* Mudguard Front */}
      <path d="M170 94 Q188 78 206 96" stroke="#E53935" strokeWidth="5" fill="none" strokeLinecap="round" />
      <line x1="188" y1="102" x2="180" y2="72" stroke="#475569" strokeWidth="5" strokeLinecap="round" />

      {/* Lower Main Body Tub (Avanto Red with White trim) */}
      <path
        d="M40 78 L40 98 Q40 104 46 104 L142 104 Q152 104 158 98 L180 84 Q186 78 184 72 L180 66 L152 66 L138 78 Z"
        fill="url(#auto-body-grad)"
        stroke="#101936"
        strokeWidth="2"
      />

      {/* White Accent Stripe on Body */}
      <path d="M42 90 L172 90" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />

      {/* Passenger Cabin Opening (Characteristic open doorway of Indian auto) */}
      <rect x="74" y="52" width="58" height="38" rx="4" fill="#0F172A" />
      {/* Passenger Seat inside */}
      <path d="M78 68 L88 68 L88 88 L78 88 Z" fill="#E53935" />
      <path d="M78 64 Q84 64 88 68" stroke="#FF5252" strokeWidth="3" />

      {/* Front Windshield (Slanted) */}
      <polygon points="144,38 174,66 148,66 134,38" fill="#E0F2FE" opacity="0.85" stroke="#101936" strokeWidth="2" />
      {/* Wiper on glass */}
      <line x1="156" y1="64" x2="164" y2="48" stroke="#101936" strokeWidth="2" strokeLinecap="round" />

      {/* Auto Iconic Hood / Roof (Yellow/Black or Yellow/Red classic combination) */}
      <path
        d="M34 52 Q34 32 64 30 L136 30 Q146 30 148 38 L142 54 L36 54 Z"
        fill="url(#auto-roof-grad)"
        stroke="#101936"
        strokeWidth="2"
      />
      {/* Roof rear curve */}
      <path d="M34 52 L40 78" stroke="#101936" strokeWidth="3" />
      {/* Cabin support pillar */}
      <line x1="134" y1="36" x2="140" y2="78" stroke="#101936" strokeWidth="3" strokeLinecap="round" />

      {/* Driver Handlebar */}
      <line x1="154" y1="68" x2="164" y2="62" stroke="#101936" strokeWidth="3" strokeLinecap="round" />

      {/* Front Chrome Round Headlight */}
      <circle cx="186" cy="74" r="6" fill="#FFFFFF" stroke="#E53935" strokeWidth="2" />
      {/* Headlight Beam */}
      <polygon points="192,74 235,62 235,92" fill="rgba(255, 82, 82, 0.22)" />
    </svg>
  )
}

/**
 * 3. SCOOTY (Step-through Scooter / Electric Scooty)
 * Recognizable silhouette: Step-through footboard, front apron / fairing,
 * smaller wheels, elegant handlebars with headlight, Avanto Red body.
 */
function ScootyIllustration({ className = 'w-48 sm:w-60 md:w-72 h-auto' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <radialGradient id="scooty-wheel-grad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#2A334E" />
          <stop offset="70%" stopColor="#101936" />
          <stop offset="100%" stopColor="#0B1226" />
        </radialGradient>
        <linearGradient id="scooty-red-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF5252" />
          <stop offset="50%" stopColor="#E53935" />
          <stop offset="100%" stopColor="#C62828" />
        </linearGradient>
      </defs>

      {/* Rear Wheel (Left) - Smaller scooter wheel */}
      <circle cx="58" cy="102" r="26" stroke="#101936" strokeWidth="7" fill="url(#scooty-wheel-grad)" />
      <circle cx="58" cy="102" r="16" stroke="#E2E8F0" strokeWidth="2" strokeDasharray="3 3" />
      <circle cx="58" cy="102" r="8" fill="#E53935" />
      <circle cx="58" cy="102" r="3" fill="#FFFFFF" />

      {/* Front Wheel (Right) */}
      <circle cx="182" cy="102" r="26" stroke="#101936" strokeWidth="7" fill="url(#scooty-wheel-grad)" />
      <circle cx="182" cy="102" r="16" stroke="#E2E8F0" strokeWidth="2" strokeDasharray="3 3" />
      <circle cx="182" cy="102" r="8" fill="#E53935" />
      <circle cx="182" cy="102" r="3" fill="#FFFFFF" />

      {/* Front Mudguard */}
      <path d="M166 94 Q182 80 198 94" stroke="#E53935" strokeWidth="5" fill="none" strokeLinecap="round" />
      <line x1="182" y1="102" x2="168" y2="58" stroke="#475569" strokeWidth="5" strokeLinecap="round" />

      {/* Rear Engine Cover / Side Fairing (Bulbous curved body of scooty) */}
      <path
        d="M44 86 Q40 68 64 64 L104 66 L112 88 L60 100 Q46 100 44 86 Z"
        fill="url(#scooty-red-grad)"
        stroke="#101936"
        strokeWidth="2"
      />

      {/* Low Step-Through Footboard (Flat floor typical of scooties) */}
      <path d="M100 96 L148 96 L152 86 L108 86 Z" fill="#1E293B" stroke="#0F172A" strokeWidth="2" />
      <line x1="106" y1="91" x2="144" y2="91" stroke="#E2E8F0" strokeWidth="2" strokeDasharray="4 2" />

      {/* Front Apron (Vertical shield protecting rider's legs) */}
      <path
        d="M142 88 L152 64 L168 46 L174 54 L158 92 Z"
        fill="url(#scooty-red-grad)"
        stroke="#101936"
        strokeWidth="2"
      />

      {/* White Contrast Accent Panel on Apron */}
      <path d="M156 62 L164 50 L166 54 L160 74 Z" fill="#FFFFFF" opacity="0.9" />

      {/* Scooty Long Two-Seater Saddle */}
      <path
        d="M60 58 C68 54 94 54 116 62 L112 68 L56 64 C56 60 58 58 60 58 Z"
        fill="#0F172A"
        stroke="#1E293B"
        strokeWidth="1.5"
      />
      {/* Grab Rail / Luggage Carrier */}
      <path d="M48 62 L42 66 L42 72" stroke="#94A3B8" strokeWidth="3" strokeLinecap="round" />

      {/* Handlebar Console with Integrated Headlight */}
      <path
        d="M158 40 L174 38 L170 46 L154 44 Z"
        fill="url(#scooty-red-grad)"
        stroke="#101936"
        strokeWidth="1.5"
      />
      {/* Grips */}
      <line x1="152" y1="42" x2="146" y2="40" stroke="#0F172A" strokeWidth="4" strokeLinecap="round" />
      {/* Rearview Mirror */}
      <path d="M160 38 L158 30 L154 30" stroke="#475569" strokeWidth="2" strokeLinecap="round" />
      <circle cx="154" cy="30" r="3" fill="#E53935" />

      {/* Front Apron LED Light */}
      <polygon points="172,40 178,42 174,48 168,46" fill="#FFFFFF" stroke="#E53935" strokeWidth="1.5" />
      {/* Headlight Beam */}
      <polygon points="178,42 225,32 225,58" fill="rgba(255, 82, 82, 0.22)" />
    </svg>
  )
}

/* ============================================================================
   STARTUP ANIMATION COMPONENT
   ============================================================================ */

export default function StartupAnimation({ onComplete }: StartupAnimationProps) {
  const shouldReduceMotion = useReducedMotion()

  // Stages:
  // 'bike' -> stage 1: Bike travels left to right
  // 'auto' -> stage 2: Auto travels left to right
  // 'scooty' -> stage 3: Scooty travels left to right
  // 'fadeout' -> stage 4: Smooth transition out into website
  const [stage, setStage] = useState<'bike' | 'auto' | 'scooty' | 'fadeout'>('bike')

  useEffect(() => {
    // If user prefers reduced motion, complete quickly with simple fade
    if (shouldReduceMotion) {
      const timer = setTimeout(() => {
        onComplete()
      }, 700)
      return () => clearTimeout(timer)
    }

    // Sequence timings (Total ~3.8s):
    // 0ms: Bike starts moving
    // 1200ms: Bike exits -> Auto starts moving
    // 2400ms: Auto exits -> Scooty starts moving
    // 3500ms: Scooty exits -> Fadeout splash screen
    // 3900ms: Complete and show Avanto website
    const t1 = setTimeout(() => setStage('auto'), 1150)
    const t2 = setTimeout(() => setStage('scooty'), 2300)
    const t3 = setTimeout(() => setStage('fadeout'), 3450)
    const t4 = setTimeout(() => onComplete(), 3850)

    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
      clearTimeout(t4)
    }
  }, [shouldReduceMotion, onComplete])

  // Reduced motion alternative: clean quick branded splash fade
  if (shouldReduceMotion) {
    return (
      <div className="fixed inset-0 z-50 bg-white flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col items-center gap-3"
        >
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#E53935] to-[#FF5252] flex items-center justify-center shadow-xl shadow-[#E53935]/30">
            <Navigation className="w-8 h-8 text-white" />
          </div>
          <span className="text-3xl font-black tracking-tight text-[#101936]">AVANTO</span>
          <span className="text-xs uppercase tracking-widest text-[#E53935] font-bold">
            Urban Mobility
          </span>
        </motion.div>
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: stage === 'fadeout' ? 0 : 1 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      className="fixed inset-0 z-50 bg-white flex flex-col justify-between overflow-hidden select-none pointer-events-auto"
      style={{ touchAction: 'none' }}
    >
      {/* TOP / CENTER: Subtle Avanto Branding & Tagline */}
      <div className="pt-12 sm:pt-16 flex flex-col items-center justify-center px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="flex items-center gap-3"
        >
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-gradient-to-tr from-[#E53935] to-[#FF5252] flex items-center justify-center shadow-lg shadow-[#E53935]/25">
            <Navigation className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </div>
          <span className="text-2xl sm:text-3xl font-black tracking-tight text-[#101936]">
            AVANTO
          </span>
        </motion.div>

        {/* Current vehicle indicator pill */}
        <motion.div
          key={stage}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="mt-3 px-3 py-1 rounded-full bg-red-50 text-[#E53935] text-xs font-bold tracking-wider uppercase border border-red-100"
        >
          {stage === 'bike' && '1 • Avanto Bike'}
          {stage === 'auto' && '2 • Avanto Auto'}
          {stage === 'scooty' && '3 • Avanto Scooty'}
          {stage === 'fadeout' && 'Ready to Ride'}
        </motion.div>
      </div>

      {/* CENTER VEHICLE TRACK AREA (Left -> Right) */}
      <div className="relative w-full h-56 sm:h-64 flex flex-col justify-end overflow-hidden pb-8">
        {/* Continuous Ground / Road Surface */}
        <div className="relative w-full">
          {/* Main Road Line */}
          <div className="w-full h-1 bg-slate-200" />
          {/* Dashed Center Road Stripe */}
          <div className="w-full h-0.5 mt-1 border-t-2 border-dashed border-red-200/80" />
        </div>

        {/* ================= STAGE 1: BIKE ================= */}
        <AnimatePresence mode="wait">
          {stage === 'bike' && (
            <motion.div
              key="bike"
              initial={{ x: '-120%', opacity: 0 }}
              animate={{ x: '120vw', opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 1.15,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="absolute bottom-6 left-0 flex flex-col items-center pointer-events-none"
            >
              <BikeIllustration />
              {/* Ground Shadow & Speed Wind Effect */}
              <div className="w-3/4 h-2 bg-black/10 rounded-full blur-[2px] mt-0.5" />
            </motion.div>
          )}

          {/* ================= STAGE 2: AUTO / RICKSHAW ================= */}
          {stage === 'auto' && (
            <motion.div
              key="auto"
              initial={{ x: '-120%', opacity: 0 }}
              animate={{ x: '120vw', opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 1.15,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="absolute bottom-6 left-0 flex flex-col items-center pointer-events-none"
            >
              <AutoIllustration />
              {/* Ground Shadow & Speed Wind Effect */}
              <div className="w-3/4 h-2.5 bg-black/10 rounded-full blur-[2px] mt-0.5" />
            </motion.div>
          )}

          {/* ================= STAGE 3: SCOOTY ================= */}
          {stage === 'scooty' && (
            <motion.div
              key="scooty"
              initial={{ x: '-120%', opacity: 0 }}
              animate={{ x: '120vw', opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 1.15,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="absolute bottom-6 left-0 flex flex-col items-center pointer-events-none"
            >
              <ScootyIllustration />
              {/* Ground Shadow & Speed Wind Effect */}
              <div className="w-3/4 h-2 bg-black/10 rounded-full blur-[2px] mt-0.5" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* BOTTOM BRAND FOOTER BAR */}
      <div className="pb-8 flex flex-col items-center justify-center text-center">
        <span className="text-xs font-semibold text-gray-400 tracking-wider">
          FAST • RELIABLE • EVERYDAY MOBILITY
        </span>
      </div>
    </motion.div>
  )
}
