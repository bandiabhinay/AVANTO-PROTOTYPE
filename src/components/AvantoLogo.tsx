interface AvantoLogoProps {
  className?: string
  variant?: 'light' | 'dark' | 'white'
  tagline?: string
  showTagline?: boolean
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

/**
 * Official AVANTO RIDE Emblem & Wordmark
 * Directly matching the new mobile application splash screen & onboarding design:
 * - Dynamic geometric folding 'A' emblem with forward-slanting wings
 * - Clean modern uppercase 'AVANTO' typography
 * - Sleek '— R I D E —' tagline with balanced horizontal accent rules
 */
export default function AvantoLogo({
  className = '',
  variant = 'light',
  tagline = 'R I D E',
  showTagline = true,
  size = 'md',
}: AvantoLogoProps) {
  // Color configuration
  const isDarkBg = variant === 'dark' || variant === 'white'
  const textColor = isDarkBg ? 'text-white' : 'text-[#004D4A]'
  const subColor = isDarkBg ? 'text-[#72DCDC]' : 'text-[#00766B]'
  const ruleColor = isDarkBg ? 'bg-[#72DCDC]/70' : 'bg-[#00766B]/50'

  // Dimensions
  const emblemSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9 sm:w-10 sm:h-10',
    lg: 'w-12 h-12 sm:w-14 sm:h-14',
    xl: 'w-16 h-16 sm:w-20 sm:h-20',
  }

  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl sm:text-2xl',
    lg: 'text-3xl sm:text-4xl',
    xl: 'text-4xl sm:text-5xl',
  }

  const tagSizes = {
    sm: 'text-[8px] tracking-[0.25em]',
    md: 'text-[9px] sm:text-[10px] tracking-[0.28em]',
    lg: 'text-xs sm:text-sm tracking-[0.32em]',
    xl: 'text-sm sm:text-base tracking-[0.35em]',
  }

  return (
    <div className={`inline-flex items-center gap-2.5 sm:gap-3 ${className}`}>
      {/* Precision Vector Emblem (Matching screenshot app icon) */}
      <div
        className={`${emblemSizes[size]} rounded-xl sm:rounded-2xl ${
          isDarkBg
            ? 'bg-gradient-to-tr from-[#00766B] via-[#008779] to-[#72DCDC] shadow-lg shadow-[#004D4A]/40'
            : 'bg-gradient-to-tr from-[#004D4A] via-[#00766B] to-[#008779] shadow-md shadow-[#00766B]/20'
        } flex items-center justify-center p-1.5 shrink-0 transition-transform duration-200 group-hover:scale-105`}
      >
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full text-white"
        >
          {/* Main forward angled left stem */}
          <path
            d="M38 18 L18 82 L34 82 L54 18 Z"
            fill="currentColor"
          />
          {/* Upper chevron wing */}
          <path
            d="M56 42 L82 42 L66 60 L50 60 Z"
            fill="currentColor"
            opacity="0.95"
          />
          {/* Lower chevron wing creating the distinct folding 'A' */}
          <path
            d="M48 64 L74 64 L58 82 L42 82 Z"
            fill="currentColor"
            opacity="0.9"
          />
        </svg>
      </div>

      {/* Brand Name + Tagline Layout */}
      <div className="flex flex-col text-left justify-center">
        <span
          className={`${textSizes[size]} font-black tracking-tight leading-none ${textColor}`}
          style={{ letterSpacing: '0.02em' }}
        >
          AVANTO
        </span>

        {showTagline && (
          <div className="flex items-center gap-1.5 mt-1">
            <span className={`h-[1px] w-3 ${ruleColor}`} />
            <span className={`${tagSizes[size]} font-extrabold uppercase ${subColor} leading-none`}>
              {tagline}
            </span>
            <span className={`h-[1px] w-3 ${ruleColor}`} />
          </div>
        )}
      </div>
    </div>
  )
}
