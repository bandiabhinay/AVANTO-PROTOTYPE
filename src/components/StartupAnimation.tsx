import { useEffect, useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { FastForward } from 'lucide-react'
import AvantoLogo from './AvantoLogo'

export interface StartupAnimationProps {
  onComplete: () => void
}

/* ============================================================================
   CUSTOM VECTOR VEHICLE ILLUSTRATIONS (Premium Clean White Theme)
   ============================================================================ */

type PickupPhase = 'approaching' | 'stopped' | 'boarding' | 'starting' | 'departing'

/**
 * 1. BIKE WITH CAPTAIN & OPTIONAL PASSENGER (Pearl White & Avanto Teal)
 * Includes rotating spoked wheels synchronized with movement and Captain in Avanto gear.
 */
function BikeWithRidersIllustration({
  phase,
  hasPassenger,
  className = 'w-52 sm:w-64 md:w-72 h-auto',
}: {
  phase: PickupPhase
  hasPassenger: boolean
  className?: string
}) {
  // Synchronize wheel rotation identically with horizontal bike motion so tires never slip
  const wheelRotate =
    phase === 'approaching'
      ? 900
      : phase === 'departing'
      ? 2160
      : 900

  const wheelTransition =
    phase === 'approaching'
      ? { duration: 1.6, ease: [0.22, 1, 0.36, 1] as const }
      : phase === 'departing'
      ? { duration: 1.7, ease: [0.45, 0, 0.85, 0.4] as const }
      : { duration: 0.2 }

  return (
    <svg
      viewBox="0 -25 240 165"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <radialGradient id="bike-wheel-grad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#003634" />
          <stop offset="70%" stopColor="#002422" />
          <stop offset="100%" stopColor="#001514" />
        </radialGradient>
        <linearGradient id="bike-white-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="55%" stopColor="#F8FAFC" />
          <stop offset="100%" stopColor="#E2E8F0" />
        </linearGradient>
        <linearGradient id="bike-beam-grad" x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="0%" stopColor="#72DCDC" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#72DCDC" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Rear Wheel (Left) with synchronized rotating spokes */}
      <circle cx="52" cy="98" r="32" stroke="#001D1C" strokeWidth="8" fill="url(#bike-wheel-grad)" />
      <g transform="translate(52, 98)">
        <motion.g
          initial={{ rotate: 0 }}
          animate={{ rotate: wheelRotate }}
          transition={wheelTransition}
        >
          <circle cx="0" cy="0" r="22" stroke="#FFFFFF" strokeWidth="2.5" strokeDasharray="5 5" opacity="0.85" />
          <line x1="-19" y1="0" x2="19" y2="0" stroke="#72DCDC" strokeWidth="1.5" opacity="0.55" />
          <line x1="0" y1="-19" x2="0" y2="19" stroke="#72DCDC" strokeWidth="1.5" opacity="0.55" />
          <line x1="-13.5" y1="-13.5" x2="13.5" y2="13.5" stroke="#FFFFFF" strokeWidth="1.2" opacity="0.45" />
          <line x1="-13.5" y1="13.5" x2="13.5" y2="-13.5" stroke="#FFFFFF" strokeWidth="1.2" opacity="0.45" />
        </motion.g>
      </g>
      <circle cx="52" cy="98" r="10" fill="#FFFFFF" />
      <circle cx="52" cy="98" r="4" fill="#00766B" />

      {/* Front Wheel (Right) with synchronized rotating spokes */}
      <circle cx="188" cy="98" r="32" stroke="#001D1C" strokeWidth="8" fill="url(#bike-wheel-grad)" />
      <g transform="translate(188, 98)">
        <motion.g
          initial={{ rotate: 0 }}
          animate={{ rotate: wheelRotate }}
          transition={wheelTransition}
        >
          <circle cx="0" cy="0" r="22" stroke="#FFFFFF" strokeWidth="2.5" strokeDasharray="5 5" opacity="0.85" />
          <line x1="-19" y1="0" x2="19" y2="0" stroke="#72DCDC" strokeWidth="1.5" opacity="0.55" />
          <line x1="0" y1="-19" x2="0" y2="19" stroke="#72DCDC" strokeWidth="1.5" opacity="0.55" />
          <line x1="-13.5" y1="-13.5" x2="13.5" y2="13.5" stroke="#FFFFFF" strokeWidth="1.2" opacity="0.45" />
          <line x1="-13.5" y1="13.5" x2="13.5" y2="-13.5" stroke="#FFFFFF" strokeWidth="1.2" opacity="0.45" />
        </motion.g>
      </g>
      <circle cx="188" cy="98" r="10" fill="#FFFFFF" />
      <circle cx="188" cy="98" r="4" fill="#00766B" />

      {/* ================= PASSENGER / CUSTOMER (Seated behind Captain once boarded) ================= */}
      <AnimatePresence>
        {hasPassenger && (
          <motion.g
            key="seated-passenger"
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            {/* Passenger Backpack */}
            <rect x="70" y="25" width="10" height="22" rx="4" fill="#00766B" stroke="#001D1C" strokeWidth="1.5" />
            <line x1="72" y1="31" x2="78" y2="31" stroke="#72DCDC" strokeWidth="1.5" strokeLinecap="round" />

            {/* Passenger Torso (Casual Pearl White / Mint Hoodie) */}
            <path
              d="M77 56 C76 42 79 27 84 22 L95 23 C98 30 96 45 92 57 Z"
              fill="#FFFFFF"
              stroke="#CBD5E1"
              strokeWidth="1.5"
            />
            {/* Passenger Hood / Collar accent */}
            <path d="M81 24 Q88 28 95 24" stroke="#00766B" strokeWidth="2.5" strokeLinecap="round" />

            {/* Passenger Head & Hair (Matching waiting customer) */}
            <circle cx="89" cy="10" r="8.5" fill="#FDE68A" stroke="#001D1C" strokeWidth="1.5" />
            <path
              d="M80 11 C80 2 89 -1 96 4 C98 6 98 9 96 10 C92 7 85 7 83 12 Z"
              fill="#0F172A"
            />
            {/* Eye detail */}
            <circle cx="93.5" cy="9.5" r="1" fill="#0F172A" />

            {/* Passenger Arm holding Captain's shoulder/waist */}
            <path
              d="M89 29 L98 40 L108 42"
              stroke="#E2E8F0"
              strokeWidth="5.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="109" cy="42" r="2.8" fill="#FDE68A" />

            {/* Passenger Leg on rear footrest */}
            <path
              d="M82 56 L96 68 L84 89"
              stroke="#0F172A"
              strokeWidth="7.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* White Sneaker */}
            <path d="M80 89 L91 89 L92 93 L79 93 Z" fill="#FFFFFF" stroke="#001D1C" strokeWidth="1.2" />
          </motion.g>
        )}
      </AnimatePresence>

      {/* ================= AVANTO CAPTAIN (Seated Rider) ================= */}
      <g>
        {/* Captain Torso (Avanto Deep Teal & Emerald Riding Jacket) */}
        <path
          d="M100 59 C100 45 107 28 116 21 L128 24 C128 34 123 48 117 60 Z"
          fill="#004D4A"
          stroke="#001D1C"
          strokeWidth="1.5"
        />
        {/* Captain Jacket White/Cyan Reflective Stripe */}
        <path d="M111 32 L123 35" stroke="#72DCDC" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M108 42 L120 45" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" opacity="0.85" />

        {/* Captain Helmet & Visor */}
        <circle cx="124" cy="7" r="10.5" fill="#00766B" stroke="#001D1C" strokeWidth="1.5" />
        {/* Helmet White Racing Stripe */}
        <path d="M117 0 Q124 -4 132 1" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
        {/* Dark Tinted Visor with Cyan Glare */}
        <path
          d="M127 2 L134.5 4.5 C135.5 7 134.5 11 131 12 L125 10 Z"
          fill="#001D1C"
        />
        <line x1="128" y1="5" x2="132" y2="6.5" stroke="#72DCDC" strokeWidth="1.3" strokeLinecap="round" />

        {/* Captain Leg & Boot */}
        <path
          d="M107 58 L127 68 L116 89"
          stroke="#0F172A"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M112 89 L124 89 L125 93.5 L111 93.5 Z" fill="#001D1C" stroke="#72DCDC" strokeWidth="1" />
      </g>

      {/* Engine & Metallic Frame Core */}
      <path d="M78 98 L114 98 L128 72 L88 72 Z" fill="#003634" stroke="#002422" strokeWidth="2" />
      <rect x="88" y="76" width="22" height="18" rx="3" fill="#004D4A" />
      {/* Exhaust Pipe (Chrome Silver) */}
      <path d="M106 94 L62 98 L40 92" stroke="#E2E8F0" strokeWidth="4" strokeLinecap="round" />
      <path d="M40 92 L32 90" stroke="#94A3B8" strokeWidth="5" strokeLinecap="round" />

      {/* Bike Swingarm / Rear Suspension */}
      <line x1="52" y1="98" x2="88" y2="76" stroke="#64748B" strokeWidth="6" strokeLinecap="round" />
      <line x1="68" y1="90" x2="82" y2="68" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" />

      {/* Main Chassis Spine */}
      <line x1="88" y1="72" x2="148" y2="62" stroke="#002422" strokeWidth="6" strokeLinecap="round" />
      {/* Front Fork */}
      <line x1="188" y1="98" x2="160" y2="44" stroke="#64748B" strokeWidth="6" strokeLinecap="round" />
      <line x1="188" y1="98" x2="162" y2="52" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />

      {/* Fuel Tank & Sleek Fairing (Clean White) */}
      <path
        d="M108 52 C116 42 142 42 154 50 C162 55 166 65 158 68 C144 72 118 70 108 52 Z"
        fill="url(#bike-white-grad)"
        stroke="#CBD5E1"
        strokeWidth="1.5"
      />
      {/* Tank Teal Accent Stripe */}
      <path d="M120 48 Q138 48 148 54" stroke="#00766B" strokeWidth="2.5" strokeLinecap="round" />

      {/* Rider Seat */}
      <path d="M82 60 C90 60 106 58 114 62 L108 70 L76 68 C76 64 78 60 82 60 Z" fill="#002422" />

      {/* Tail Fairing (Clean White) */}
      <path
        d="M68 64 L102 62 L94 72 L62 70 Z"
        fill="url(#bike-white-grad)"
        stroke="#CBD5E1"
        strokeWidth="1.5"
      />

      {/* Handlebars & Mirror */}
      <path d="M158 44 L150 36 L144 38" stroke="#001D1C" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="144" cy="34" r="3" fill="#FFFFFF" />

      {/* Captain Arm gripping Handlebar (in front of fairing/collar) */}
      <path
        d="M122 27 L134 39 L146 37"
        stroke="#00766B"
        strokeWidth="5.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="147" cy="37" r="3" fill="#001D1C" />

      {/* Headlight */}
      <path d="M172 54 L180 58 L170 66 Z" fill="#FFFFFF" stroke="#72DCDC" strokeWidth="2" />
      {/* Headlight Glow Beam (flares brightly when ride starts) */}
      <motion.polygon
        points="180,58 235,44 235,78"
        fill="url(#bike-beam-grad)"
        animate={{
          opacity: phase === 'starting' || phase === 'departing' ? 1 : 0.65,
        }}
        transition={{ duration: 0.25 }}
      />
    </svg>
  )
}

/**
 * WAITING CUSTOMER ON ROADSIDE (Holding Smartphone)
 * Matches exact 240x165 SVG coordinate space for seamless boarding alignment.
 */
function WaitingCustomerIllustration({
  phase,
  className = 'w-52 sm:w-64 md:w-72 h-auto',
}: {
  phase: PickupPhase
  className?: string
}) {
  const isBoarding = phase === 'boarding'
  const isDepartingOrBoarded = phase === 'starting' || phase === 'departing'

  if (isDepartingOrBoarded) return null

  return (
    <svg
      viewBox="0 -25 240 165"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <motion.g
        initial={{ x: 0, y: 0, opacity: 1 }}
        animate={
          isBoarding
            ? {
                x: [0, 7, 15],
                y: [0, -18, -10],
                opacity: [1, 1, 0],
              }
            : { x: 0, y: 0, opacity: 1 }
        }
        transition={
          isBoarding
            ? { duration: 0.65, times: [0, 0.5, 1], ease: 'easeInOut' }
            : { duration: 0.2 }
        }
      >
        {/* Ground Shadow beneath Customer */}
        <ellipse cx="69" cy="126" rx="11" ry="2.5" fill="#001514" opacity="0.5" />

        {/* Backpack */}
        <rect x="57" y="45" width="9" height="22" rx="4" fill="#00766B" stroke="#001D1C" strokeWidth="1.5" />
        <line x1="59" y1="51" x2="64" y2="51" stroke="#72DCDC" strokeWidth="1.5" strokeLinecap="round" />

        {/* Standing Legs (Dark Trousers) */}
        <line x1="66" y1="78" x2="64" y2="122" stroke="#0F172A" strokeWidth="6.5" strokeLinecap="round" />
        <line x1="72" y1="78" x2="74" y2="122" stroke="#0F172A" strokeWidth="6.5" strokeLinecap="round" />

        {/* White Sneakers */}
        <path d="M61 121 L70 121 L71 125 L60 125 Z" fill="#FFFFFF" stroke="#001D1C" strokeWidth="1.2" />
        <path d="M71 121 L80 121 L81 125 L70 125 Z" fill="#FFFFFF" stroke="#001D1C" strokeWidth="1.2" />

        {/* Torso (Crisp White / Mint Hoodie matching seated passenger) */}
        <path
          d="M62 43 C62 40 75 40 76 44 L76 80 L62 80 Z"
          fill="#FFFFFF"
          stroke="#CBD5E1"
          strokeWidth="1.5"
        />
        <path d="M64 43 Q69 47 74 43" stroke="#00766B" strokeWidth="2.5" strokeLinecap="round" />

        {/* Head & Hair (Glancing slightly toward phone / approaching ride) */}
        <circle cx="69" cy="30" r="8.5" fill="#FDE68A" stroke="#001D1C" strokeWidth="1.5" />
        <path
          d="M60 31 C60 22 69 19 76 24 C78 26 78 29 76 30 C72 27 65 27 63 32 Z"
          fill="#0F172A"
        />
        <circle cx="73.5" cy="29.5" r="1" fill="#0F172A" />

        {/* Arm & Glowing Smartphone (lowers phone cleanly when captain arrives) */}
        <motion.g
          animate={
            phase === 'stopped' || isBoarding
              ? { rotate: 18, y: 4 }
              : { rotate: 0, y: 0 }
          }
          transition={{ duration: 0.3 }}
        >
          <path
            d="M71 47 L78 58 L86 52"
            stroke="#E2E8F0"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="86" cy="52" r="2.5" fill="#FDE68A" />

          {/* Smartphone Body & Radiant Cyan Avanto Screen */}
          <rect x="85" y="42" width="5.5" height="10" rx="1.5" fill="#001D1C" stroke="#72DCDC" strokeWidth="0.8" />
          <rect x="86.2" y="43.5" width="3" height="6.5" rx="0.6" fill="#72DCDC" />

          {/* Subtle Ride Booking Signal Waves above Smartphone while waiting */}
          {phase === 'approaching' && (
            <motion.g
              animate={{ opacity: [0.25, 1, 0.25], y: [0, -2, 0] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <path d="M84 38 Q88 34 92 38" stroke="#72DCDC" strokeWidth="1.5" strokeLinecap="round" fill="none" />
              <path d="M82 35 Q88 29 94 35" stroke="#72DCDC" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.7" />
            </motion.g>
          )}
        </motion.g>
      </motion.g>
    </svg>
  )
}

/**
 * COMPLETE CUSTOMER PICKUP ANIMATION FOR THE BIKE OPTION
 * 1. Waiting customer stands on roadside with smartphone
 * 2. Captain on bike approaches with rotating wheels
 * 3. Gradually decelerates and stops beside customer
 * 4. Customer boards rear seat of the bike
 * 5. Captain starts ride and both exit screen together
 */
function BikePickupSequence() {
  const [phase, setPhase] = useState<PickupPhase>('approaching')
  const [hasPassenger, setHasPassenger] = useState(false)

  useEffect(() => {
    const tStopped = setTimeout(() => setPhase('stopped'), 1600)
    const tBoarding = setTimeout(() => setPhase('boarding'), 1900)
    const tSeated = setTimeout(() => setHasPassenger(true), 2450)
    const tStarting = setTimeout(() => setPhase('starting'), 2700)
    const tDeparting = setTimeout(() => setPhase('departing'), 3000)

    return () => {
      clearTimeout(tStopped)
      clearTimeout(tBoarding)
      clearTimeout(tSeated)
      clearTimeout(tStarting)
      clearTimeout(tDeparting)
    }
  }, [])

  const bikeAnimateX =
    phase === 'approaching' || phase === 'stopped' || phase === 'boarding' || phase === 'starting'
      ? '0vw'
      : '85vw'

  const bikeTransition =
    phase === 'approaching'
      ? { duration: 1.6, ease: [0.22, 1, 0.36, 1] as const }
      : phase === 'departing'
      ? { duration: 1.7, ease: [0.45, 0, 0.85, 0.4] as const }
      : { duration: 0.2 }

  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-52 sm:w-64 md:w-72 pointer-events-none flex items-end justify-center">
      {/* Roadside Waiting Customer Layer (stands behind bike lane on curb) */}
      <div className="absolute inset-0 z-10 flex items-end justify-center">
        <WaitingCustomerIllustration phase={phase} />
      </div>

      {/* Moving Bike + Captain (+ Boarded Customer) Layer */}
      <motion.div
        initial={{ x: '-85vw' }}
        animate={{ x: bikeAnimateX }}
        transition={bikeTransition}
        className="relative z-20 flex flex-col items-center w-full"
      >
        <motion.div
          animate={
            phase === 'approaching' || phase === 'departing'
              ? { y: [0, -1.8, 0, -1.2, 0] }
              : phase === 'boarding'
              ? { y: [0, 2.5, 0] }
              : phase === 'starting'
              ? { y: [0, 1.5, 0, 1, 0] }
              : { y: 0 }
          }
          transition={
            phase === 'approaching' || phase === 'departing'
              ? { duration: 0.75, repeat: Infinity, ease: 'easeInOut' }
              : { duration: 0.35, ease: 'easeInOut' }
          }
          className="w-full"
        >
          <BikeWithRidersIllustration phase={phase} hasPassenger={hasPassenger} />
        </motion.div>
        {/* Ground Shadow beneath Bike */}
        <div className="w-3/4 h-2.5 bg-[#72DCDC]/25 rounded-full blur-[4px] -mt-2" />
      </motion.div>
    </div>
  )
}

/**
 * 2. AUTO / RICKSHAW (Classic Indian 3-Wheeler in Pearl White)
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
          <stop offset="0%" stopColor="#003634" />
          <stop offset="70%" stopColor="#002422" />
          <stop offset="100%" stopColor="#001514" />
        </radialGradient>
        <linearGradient id="auto-white-grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="60%" stopColor="#F8FAFC" />
          <stop offset="100%" stopColor="#E2E8F0" />
        </linearGradient>
        <linearGradient id="auto-roof-white-grad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#E2E8F0" />
        </linearGradient>
        <linearGradient id="auto-beam-grad" x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="0%" stopColor="#72DCDC" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#72DCDC" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Rear Wheel (Left) */}
      <circle cx="62" cy="100" r="28" stroke="#001D1C" strokeWidth="8" fill="url(#auto-wheel-grad)" />
      <circle cx="62" cy="100" r="18" stroke="#FFFFFF" strokeWidth="2" strokeDasharray="3 3" opacity="0.8" />
      <circle cx="62" cy="100" r="8" fill="#FFFFFF" />
      <circle cx="62" cy="100" r="3" fill="#00766B" />

      {/* Front Wheel (Right - Single front wheel) */}
      <circle cx="188" cy="102" r="24" stroke="#001D1C" strokeWidth="7" fill="url(#auto-wheel-grad)" />
      <circle cx="188" cy="102" r="15" stroke="#FFFFFF" strokeWidth="2" strokeDasharray="3 3" opacity="0.8" />
      <circle cx="188" cy="102" r="7" fill="#FFFFFF" />
      <circle cx="188" cy="102" r="2.5" fill="#00766B" />

      {/* Mudguard Front (Clean White) */}
      <path d="M170 94 Q188 78 206 96" stroke="#FFFFFF" strokeWidth="5" fill="none" strokeLinecap="round" />
      <line x1="188" y1="102" x2="180" y2="72" stroke="#64748B" strokeWidth="5" strokeLinecap="round" />

      {/* Lower Main Body Tub (Clean Pearl White) */}
      <path
        d="M40 78 L40 98 Q40 104 46 104 L142 104 Q152 104 158 98 L180 84 Q186 78 184 72 L180 66 L152 66 L138 78 Z"
        fill="url(#auto-white-grad)"
        stroke="#001D1C"
        strokeWidth="2"
      />

      {/* Teal Brand Accent Stripe on White Body */}
      <path d="M42 90 L172 90" stroke="#00766B" strokeWidth="3.5" strokeLinecap="round" />

      {/* Passenger Cabin Opening */}
      <rect x="74" y="52" width="58" height="38" rx="4" fill="#001D1C" />
      {/* Passenger Seat inside */}
      <path d="M78 68 L88 68 L88 88 L78 88 Z" fill="#00766B" />
      <path d="M78 64 Q84 64 88 68" stroke="#72DCDC" strokeWidth="3" />

      {/* Front Windshield */}
      <polygon points="144,38 174,66 148,66 134,38" fill="#E0F7F6" opacity="0.85" stroke="#001D1C" strokeWidth="2" />
      <line x1="156" y1="64" x2="164" y2="48" stroke="#001D1C" strokeWidth="2" strokeLinecap="round" />

      {/* Auto Iconic Hood / Roof (Clean White with sleek trim) */}
      <path
        d="M34 52 Q34 32 64 30 L136 30 Q146 30 148 38 L142 54 L36 54 Z"
        fill="url(#auto-roof-white-grad)"
        stroke="#001D1C"
        strokeWidth="2"
      />
      <path d="M34 52 L40 78" stroke="#001D1C" strokeWidth="3" />
      <line x1="134" y1="36" x2="140" y2="78" stroke="#001D1C" strokeWidth="3" strokeLinecap="round" />

      {/* Driver Handlebar */}
      <line x1="154" y1="68" x2="164" y2="62" stroke="#001D1C" strokeWidth="3" strokeLinecap="round" />

      {/* Headlight */}
      <circle cx="186" cy="74" r="6" fill="#FFFFFF" stroke="#72DCDC" strokeWidth="2" />
      <polygon points="192,74 235,62 235,92" fill="url(#auto-beam-grad)" />
    </svg>
  )
}

/**
 * 3. SCOOTY (Step-through Electric Scooter in Pearl White)
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
          <stop offset="0%" stopColor="#003634" />
          <stop offset="70%" stopColor="#002422" />
          <stop offset="100%" stopColor="#001514" />
        </radialGradient>
        <linearGradient id="scooty-white-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="60%" stopColor="#F8FAFC" />
          <stop offset="100%" stopColor="#E2E8F0" />
        </linearGradient>
        <linearGradient id="scooty-beam-grad" x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="0%" stopColor="#72DCDC" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#72DCDC" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Rear Wheel */}
      <circle cx="58" cy="102" r="26" stroke="#001D1C" strokeWidth="7" fill="url(#scooty-wheel-grad)" />
      <circle cx="58" cy="102" r="16" stroke="#FFFFFF" strokeWidth="2" strokeDasharray="3 3" opacity="0.8" />
      <circle cx="58" cy="102" r="8" fill="#FFFFFF" />
      <circle cx="58" cy="102" r="3" fill="#00766B" />

      {/* Front Wheel */}
      <circle cx="182" cy="102" r="26" stroke="#001D1C" strokeWidth="7" fill="url(#scooty-wheel-grad)" />
      <circle cx="182" cy="102" r="16" stroke="#FFFFFF" strokeWidth="2" strokeDasharray="3 3" opacity="0.8" />
      <circle cx="182" cy="102" r="8" fill="#FFFFFF" />
      <circle cx="182" cy="102" r="3" fill="#00766B" />

      {/* Front Mudguard */}
      <path d="M166 94 Q182 80 198 94" stroke="#FFFFFF" strokeWidth="5" fill="none" strokeLinecap="round" />
      <line x1="182" y1="102" x2="168" y2="58" stroke="#64748B" strokeWidth="5" strokeLinecap="round" />

      {/* Rear Side Fairing (Clean White) */}
      <path
        d="M44 86 Q40 68 64 64 L104 66 L112 88 L60 100 Q46 100 44 86 Z"
        fill="url(#scooty-white-grad)"
        stroke="#CBD5E1"
        strokeWidth="1.5"
      />

      {/* Step-Through Footboard */}
      <path d="M100 96 L148 96 L152 86 L108 86 Z" fill="#002422" stroke="#001D1C" strokeWidth="2" />
      <line x1="106" y1="91" x2="144" y2="91" stroke="#FFFFFF" strokeWidth="2" strokeDasharray="4 2" opacity="0.8" />

      {/* Front Apron (Clean White) */}
      <path
        d="M142 88 L152 64 L168 46 L174 54 L158 92 Z"
        fill="url(#scooty-white-grad)"
        stroke="#CBD5E1"
        strokeWidth="1.5"
      />

      {/* Teal Contrast Accent */}
      <path d="M156 62 L164 50 L166 54 L160 74 Z" fill="#00766B" opacity="0.9" />

      {/* Saddle */}
      <path
        d="M60 58 C68 54 94 54 116 62 L112 68 L56 64 C56 60 58 58 60 58 Z"
        fill="#001D1C"
        stroke="#003634"
        strokeWidth="1.5"
      />
      <path d="M48 62 L42 66 L42 72" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" opacity="0.8" />

      {/* Console */}
      <path
        d="M158 40 L174 38 L170 46 L154 44 Z"
        fill="url(#scooty-white-grad)"
        stroke="#001D1C"
        strokeWidth="1.5"
      />
      <line x1="152" y1="42" x2="146" y2="40" stroke="#001D1C" strokeWidth="4" strokeLinecap="round" />
      <path d="M160 38 L158 30 L154 30" stroke="#64748B" strokeWidth="2" strokeLinecap="round" />
      <circle cx="154" cy="30" r="3" fill="#FFFFFF" />

      {/* Headlight */}
      <polygon points="172,40 178,42 174,48 168,46" fill="#FFFFFF" stroke="#72DCDC" strokeWidth="1.5" />
      <polygon points="178,42 225,32 225,58" fill="url(#scooty-beam-grad)" />
    </svg>
  )
}

/**
 * 4. CAR / CAB (Modern Aerodynamic Sedan in Pearl White)
 * Executive sedan profile, tinted greenhouse, sharp LED headlights, alloy rims,
 * flush handles, dynamic cyan forward projector beam.
 */
function CarIllustration({ className = 'w-56 sm:w-72 md:w-84 h-auto' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 280 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <radialGradient id="car-wheel-grad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#003634" />
          <stop offset="70%" stopColor="#002422" />
          <stop offset="100%" stopColor="#001514" />
        </radialGradient>
        <linearGradient id="car-white-body" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="50%" stopColor="#F8FAFC" />
          <stop offset="100%" stopColor="#E2E8F0" />
        </linearGradient>
        <linearGradient id="car-glass-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0E3332" />
          <stop offset="50%" stopColor="#001D1C" />
          <stop offset="100%" stopColor="#020E0D" />
        </linearGradient>
        <linearGradient id="car-beam-grad" x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="0%" stopColor="#72DCDC" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#72DCDC" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Rear Wheel (Left) */}
      <circle cx="68" cy="100" r="28" stroke="#001D1C" strokeWidth="8" fill="url(#car-wheel-grad)" />
      <circle cx="68" cy="100" r="18" stroke="#FFFFFF" strokeWidth="2.5" strokeDasharray="4 4" opacity="0.9" />
      <circle cx="68" cy="100" r="9" fill="#FFFFFF" />
      <circle cx="68" cy="100" r="4" fill="#00766B" />

      {/* Front Wheel (Right) */}
      <circle cx="212" cy="100" r="28" stroke="#001D1C" strokeWidth="8" fill="url(#car-wheel-grad)" />
      <circle cx="212" cy="100" r="18" stroke="#FFFFFF" strokeWidth="2.5" strokeDasharray="4 4" opacity="0.9" />
      <circle cx="212" cy="100" r="9" fill="#FFFFFF" />
      <circle cx="212" cy="100" r="4" fill="#00766B" />

      {/* Lower Chassis Underbody */}
      <rect x="96" y="100" width="88" height="6" fill="#001D1C" />

      {/* Main Car Silhouette Body (Pearl White) */}
      <path
        d="M26 94 
           C24 90 28 80 34 78
           L56 76
           C68 62 88 48 116 42
           L186 42
           C212 48 234 68 248 76
           L256 80
           C262 84 262 90 258 94
           L242 96
           C240 85 228 76 212 76
           C196 76 184 85 182 96
           L98 96
           C96 85 84 76 68 76
           C52 76 40 85 38 96
           Z"
        fill="url(#car-white-body)"
        stroke="#CBD5E1"
        strokeWidth="1.5"
      />

      {/* Aerodynamic Greenhouse / Window Canopy */}
      <path
        d="M74 72 
           C86 58 104 46 126 44
           L180 44
           C202 46 220 58 230 72
           Z"
        fill="url(#car-glass-grad)"
        stroke="#94A3B8"
        strokeWidth="1.5"
      />

      {/* Window Pillar / Division (B-Pillar) */}
      <line x1="150" y1="44" x2="152" y2="72" stroke="#001D1C" strokeWidth="3" />
      {/* Quarter glass pillar */}
      <line x1="202" y1="52" x2="206" y2="72" stroke="#001D1C" strokeWidth="2" />

      {/* Window Chrome Accent Trim */}
      <path
        d="M72 73 C85 57 104 44 126 43 L180 43 C203 45 221 57 232 73"
        stroke="#FFFFFF"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />

      {/* Side Character Line (Teal Brand Accent) */}
      <path d="M42 84 Q140 82 246 84" stroke="#00766B" strokeWidth="2.5" strokeLinecap="round" />

      {/* Flush Door Handles */}
      <rect x="122" y="80" width="14" height="2.5" rx="1.2" fill="#94A3B8" />
      <rect x="172" y="80" width="14" height="2.5" rx="1.2" fill="#94A3B8" />

      {/* Aerodynamic Side Mirror */}
      <path d="M198 68 L206 65 L208 70 Z" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="1" />
      <circle cx="206" cy="67.5" r="1.5" fill="#72DCDC" />

      {/* Shark-fin antenna on roof */}
      <path d="M110 42 L116 38 L118 42 Z" fill="#FFFFFF" />

      {/* Rear Tail Light (Ruby Red) */}
      <path d="M26 84 L36 82 L34 88 L26 88 Z" fill="#EF4444" stroke="#DC2626" strokeWidth="1" />

      {/* Front Projector LED Headlight */}
      <path d="M246 80 L258 84 L252 90 L242 86 Z" fill="#FFFFFF" stroke="#72DCDC" strokeWidth="1.5" />
      <circle cx="252" cy="85" r="2.5" fill="#72DCDC" />

      {/* Dynamic Forward Headlight Beam */}
      <polygon points="256,84 278,66 278,104" fill="url(#car-beam-grad)" />
    </svg>
  )
}

/* ============================================================================
   STARTUP ANIMATION COMPONENT (Cinematic 5.5s Pacing with Fleet Progression)
   ============================================================================ */

export default function StartupAnimation({ onComplete }: StartupAnimationProps) {
  const shouldReduceMotion = useReducedMotion()
  const [stage, setStage] = useState<'bike' | 'auto' | 'scooty' | 'car' | 'fadeout'>('bike')

  useEffect(() => {
    if (shouldReduceMotion) {
      const timer = setTimeout(() => {
        onComplete()
      }, 700)
      return () => clearTimeout(timer)
    }

    // Cinematic sequence:
    // 0ms -> 4850ms    : Stage 1 • Bike Customer Pickup Experience
    // 4850ms -> 6500ms : Stage 2 • Auto (Unchanged)
    // 6500ms -> 8150ms : Stage 3 • Scooty (Unchanged)
    // 8150ms -> 9900ms : Stage 4 • Car / Sedan (Unchanged)
    // 9900ms -> 10400ms: Stage 5 • Smooth reveal curtain
    const t1 = setTimeout(() => setStage('auto'), 4850)
    const t2 = setTimeout(() => setStage('scooty'), 6500)
    const t3 = setTimeout(() => setStage('car'), 8150)
    const t4 = setTimeout(() => setStage('fadeout'), 9900)
    const t5 = setTimeout(() => onComplete(), 10400)

    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
      clearTimeout(t4)
      clearTimeout(t5)
    }
  }, [shouldReduceMotion, onComplete])

  // Reduced motion alternative: clean quick branded splash fade
  if (shouldReduceMotion) {
    return (
      <div className="fixed inset-0 z-50 bg-[#004D4A] flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col items-center gap-3"
        >
          <AvantoLogo variant="dark" size="xl" />
          <p className="text-[#72DCDC] text-sm font-semibold tracking-wide mt-2">
            Move with confidence.
          </p>
        </motion.div>
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: stage === 'fadeout' ? 0 : 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-50 bg-gradient-to-b from-[#002B29] via-[#004D4A] to-[#001D1C] flex flex-col justify-between overflow-hidden select-none pointer-events-auto"
      style={{ touchAction: 'none' }}
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#72DCDC]/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#00766B]/25 rounded-full blur-[80px] pointer-events-none" />

      {/* TOP HEADER: Avanto Branding, Fleet Badges & Skip Option */}
      <div className="pt-10 sm:pt-14 px-6 max-w-5xl mx-auto w-full flex flex-col items-center relative z-20">
        {/* Subtle Luxury Skip Button */}
        <div className="w-full flex justify-end">
          <button
            type="button"
            onClick={onComplete}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-teal-100 hover:text-white text-xs font-semibold backdrop-blur-md border border-white/15 transition-all cursor-pointer"
            aria-label="Skip intro animation"
          >
            <span>Skip</span>
            <FastForward className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Brand Emblem & App Slogan */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex flex-col items-center gap-2.5 mt-2 text-center"
        >
          <AvantoLogo variant="dark" size="lg" />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-[#72DCDC] text-sm sm:text-base font-semibold tracking-wide"
          >
            Move with confidence.
          </motion.p>
        </motion.div>

        {/* Fleet Progress Steps (Bike • Auto • Scooty • Car) */}
        <div className="mt-6 flex items-center gap-2 sm:gap-3">
          {[
            { id: 'bike', label: 'Bike' },
            { id: 'auto', label: 'Auto' },
            { id: 'scooty', label: 'Scooty' },
            { id: 'car', label: 'Car' },
          ].map((item, idx) => {
            const isActive = stage === item.id
            return (
              <div
                key={item.id}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-[#00766B] to-[#72DCDC] text-white shadow-lg shadow-[#00766B]/50 scale-105 border border-white/30'
                    : 'bg-white/5 text-teal-100/50 border border-white/5'
                }`}
              >
                <span className="text-[10px] opacity-75">{idx + 1}</span>
                <span>{item.label}</span>
              </div>
            )
          })}
        </div>
      </div>

      {/* CENTER VEHICLE TRACK AREA (Smooth Slow Showcase Glide) */}
      <div className="relative w-full h-64 sm:h-72 flex flex-col justify-end overflow-hidden pb-10 z-10">
        {/* Dynamic Road Surface with glowing neon divider */}
        <div className="relative w-full">
          {/* Upper curb */}
          <div className="w-full h-1 bg-[#00766B]/40" />
          {/* Glowing road center divider */}
          <div className="w-full h-0.5 mt-1 border-t-2 border-dashed border-[#72DCDC]/70 shadow-[0_0_12px_rgba(114,220,220,0.6)]" />
          {/* Lower curb */}
          <div className="w-full h-1 mt-2 bg-[#004D4A]/60" />
        </div>

        <AnimatePresence>
          {/* ================= VEHICLE STAGE 1: BIKE PICKUP ================= */}
          {stage === 'bike' && (
            <motion.div
              key="bike"
              exit={{ opacity: 0, transition: { duration: 0.15 } }}
              className="absolute inset-0 pointer-events-none"
            >
              <BikePickupSequence />
            </motion.div>
          )}

          {/* ================= VEHICLE STAGE 2: AUTO ================= */}
          {stage === 'auto' && (
            <motion.div
              key="auto"
              initial={{ x: '-320px', opacity: 0 }}
              animate={{
                x: ['-320px', '28vw', '62vw', '110vw'],
                opacity: [0, 1, 1, 0],
              }}
              exit={{ opacity: 0, transition: { duration: 0.15 } }}
              transition={{
                duration: 1.65,
                times: [0, 0.22, 0.78, 1],
                ease: 'easeInOut',
              }}
              className="absolute bottom-8 left-0 flex flex-col items-center pointer-events-none"
            >
              <motion.div
                animate={{ y: [0, -2, 0, -1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, ease: 'easeInOut' }}
              >
                <AutoIllustration />
              </motion.div>
              <div className="w-3/4 h-3 bg-[#72DCDC]/25 rounded-full blur-[4px] mt-0.5" />
            </motion.div>
          )}

          {/* ================= VEHICLE STAGE 3: SCOOTY ================= */}
          {stage === 'scooty' && (
            <motion.div
              key="scooty"
              initial={{ x: '-320px', opacity: 0 }}
              animate={{
                x: ['-320px', '28vw', '62vw', '110vw'],
                opacity: [0, 1, 1, 0],
              }}
              exit={{ opacity: 0, transition: { duration: 0.15 } }}
              transition={{
                duration: 1.65,
                times: [0, 0.22, 0.78, 1],
                ease: 'easeInOut',
              }}
              className="absolute bottom-8 left-0 flex flex-col items-center pointer-events-none"
            >
              <motion.div
                animate={{ y: [0, -1.5, 0, -1, 0] }}
                transition={{ duration: 0.85, repeat: Infinity, ease: 'easeInOut' }}
              >
                <ScootyIllustration />
              </motion.div>
              <div className="w-3/4 h-2.5 bg-[#72DCDC]/25 rounded-full blur-[4px] mt-0.5" />
            </motion.div>
          )}

          {/* ================= VEHICLE STAGE 4: CAR / SEDAN ================= */}
          {stage === 'car' && (
            <motion.div
              key="car"
              initial={{ x: '-350px', opacity: 0 }}
              animate={{
                x: ['-350px', '26vw', '60vw', '110vw'],
                opacity: [0, 1, 1, 0],
              }}
              exit={{ opacity: 0, transition: { duration: 0.15 } }}
              transition={{
                duration: 1.75,
                times: [0, 0.22, 0.78, 1],
                ease: 'easeInOut',
              }}
              className="absolute bottom-8 left-0 flex flex-col items-center pointer-events-none"
            >
              <motion.div
                animate={{ y: [0, -1.5, 0, -1, 0] }}
                transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
              >
                <CarIllustration />
              </motion.div>
              <div className="w-4/5 h-3.5 bg-[#72DCDC]/30 rounded-full blur-[5px] mt-0.5" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* BOTTOM BRAND FOOTER & PROGRESS LINE */}
      <div className="pb-8 px-6 flex flex-col items-center justify-center text-center z-10 w-full max-w-md mx-auto space-y-4">
        {/* Luminous Precision Progress Bar (0% -> 100% over 9.9s) */}
        <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden backdrop-blur-sm border border-white/10">
          <motion.div
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 9.9, ease: 'linear' }}
            className="h-full bg-gradient-to-r from-[#00766B] via-[#72DCDC] to-[#A7F3D0] shadow-[0_0_8px_#72DCDC]"
          />
        </div>

        <span className="text-[11px] font-semibold text-teal-100/70 tracking-widest uppercase">
          Your ride, our priority • 50+ Cities in India
        </span>
      </div>
    </motion.div>
  )
}
