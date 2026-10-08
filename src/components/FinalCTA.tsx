import { motion } from 'framer-motion'
import { ArrowRight, Navigation } from 'lucide-react'

interface FinalCTAProps {
  onBookRide: () => void
  onBecomeCaptain: () => void
}

export default function FinalCTA({ onBookRide, onBecomeCaptain }: FinalCTAProps) {
  return (
    <section className="bg-[#101936] text-white py-24 relative overflow-hidden">
      {/* Background radial blurs & glowing grid */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 left-1/3 w-96 h-96 bg-[#E53935]/25 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 right-1/4 w-96 h-96 bg-[#FF5252]/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#E53935] to-[#FF5252] flex items-center justify-center mx-auto shadow-xl shadow-[#E53935]/40 border border-white/20"
        >
          <Navigation className="w-8 h-8 text-white" />
        </motion.div>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
          <span>Ready to Move </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5252] via-rose-300 to-[#E53935]">
            Smarter?
          </span>
        </h2>

        <p className="text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
          Experience the future of everyday mobility with Avanto. Available across 50+ cities with upfront pricing and verified captains.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            type="button"
            onClick={onBookRide}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#E53935] hover:bg-[#C62828] text-white font-extrabold text-lg rounded-full px-9 py-4 shadow-xl shadow-[#E53935]/40 hover:shadow-2xl hover:-translate-y-0.5 transition-all cursor-pointer group"
          >
            <span>Book a Ride</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            type="button"
            onClick={onBecomeCaptain}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white text-white hover:bg-white hover:text-[#101936] font-bold text-lg rounded-full px-9 py-4 transition-all duration-200 cursor-pointer"
          >
            <span>Become a Captain</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
