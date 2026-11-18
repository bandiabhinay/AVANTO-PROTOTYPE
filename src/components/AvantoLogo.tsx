interface AvantoLogoProps {
  className?: string
  variant?: 'light' | 'dark' | 'white'
  tagline?: string
  showTagline?: boolean
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

/**
 * Official Finalized AVANTO RIDE Logo
 * Features the 3D folded geometric emblem and AVANTO — R I D E — wordmark.
 */
export default function AvantoLogo({
  className = '',
  variant = 'light',
  size = 'md',
}: AvantoLogoProps) {
  const isDark = variant === 'dark' || variant === 'white'
  const logoSrc = isDark ? '/avanto-logo-white.png' : '/avanto-logo.png'

  const sizeClasses = {
    sm: 'h-8 sm:h-9',
    md: 'h-11 sm:h-12',
    lg: 'h-16 sm:h-20',
    xl: 'h-24 sm:h-28',
  }

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <img
        src={logoSrc}
        alt="Avanto - Move with confidence"
        className={`${sizeClasses[size] || 'h-11'} w-auto object-contain transition-transform duration-200 group-hover:scale-105`}
        loading="eager"
      />
    </div>
  )
}
