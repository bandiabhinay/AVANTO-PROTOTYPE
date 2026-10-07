import React, { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

export interface SlideSectionProps {
  children: React.ReactNode
  direction?: 'right' | 'left' | 'fade'
  index?: number
  className?: string
  id?: string
}

export default function SlideSection({
  children,
  direction,
  index,
  className = '',
  id,
}: SlideSectionProps) {
  const shouldReduceMotion = useReducedMotion()
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile, { passive: true })
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Determine direction based on index if not explicitly provided
  // Hero (index 0): subtle fade/scale entrance
  // Odd indices (1, 3, 5, 7, 9): RIGHT -> LEFT
  // Even indices (2, 4, 6, 8, 10): LEFT -> RIGHT
  let resolvedDirection: 'right' | 'left' | 'fade' = direction || 'fade'
  if (!direction && typeof index === 'number') {
    if (index === 0) {
      resolvedDirection = 'fade'
    } else if (index % 2 === 1) {
      resolvedDirection = 'right'
    } else {
      resolvedDirection = 'left'
    }
  }

  // Offset distance: reduced on mobile for comfort, pronounced on desktop
  const offset = isMobile ? 45 : 110

  const initialX =
    resolvedDirection === 'right' ? offset : resolvedDirection === 'left' ? -offset : 0

  const variants = {
    hidden: shouldReduceMotion
      ? { opacity: 0 }
      : {
          opacity: 0,
          x: initialX,
          scale: 0.97,
        },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: shouldReduceMotion ? 0.35 : 0.8,
        ease: [0.22, 1, 0.36, 1], // Apple / Tesla smooth presentation curve
      },
    },
  }

  return (
    <div
      id={id}
      className={`w-full overflow-hidden relative ${className}`}
      style={{ overflowX: 'hidden' }}
    >
      <motion.div
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.12 }}
        style={{ willChange: 'transform, opacity' }}
        className="w-full"
      >
        {children}
      </motion.div>
    </div>
  )
}
