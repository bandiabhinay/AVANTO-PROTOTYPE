import { motion } from 'framer-motion'
import { ArrowRight, Navigation } from 'lucide-react'

interface FinalCTAProps {
  onBookRide: () => void
  onBecomeCaptain: () => void
}

export default function FinalCTA({ onBookRide, onBecomeCaptain }: FinalCTAProps) {
  return (
    <section className="bg-[#002B29] text-white py-24 relative overflow-hidden">
      {/* Background radial blurs & glowing grid */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 left-1/3 w-96 h-96 bg-[#72DCDC]/15 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 right-1/4 w-96 h-96 bg-[#00766B]/25 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#004D4A] to-[#00766B] flex items-center justify-center mx-auto shadow-xl shadow-[#004D4A]/50 border border-[#72DCDC]/30"
        >
          <Navigation className="w-8 h-8 text-[#72DCDC]" />
        </motion.div>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
          <span>Ready to Move </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#72DCDC] via-teal-200 to-[#2DD4BF]">
            with Confidence?
          </span>
        </h2>

        <p className="text-teal-100/90 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
          Experience the future of everyday mobility with Avanto. Available across 50+ cities with upfront pricing and verified captains.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            type="button"
            onClick={onBookRide}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#00766B] hover:bg-[#008779] text-white font-extrabold text-lg rounded-full px-9 py-4 shadow-xl shadow-[#00766B]/40 hover:shadow-2xl hover:-translate-y-0.5 transition-all cursor-pointer group"
          >
            <span>Book a Ride</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            type="button"
            onClick={onBecomeCaptain}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white text-white hover:bg-white hover:text-[#003634] font-bold text-lg rounded-full px-9 py-4 transition-all duration-200 cursor-pointer"
          >
            <span>Become a Captain</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
