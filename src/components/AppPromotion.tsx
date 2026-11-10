import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Navigation,
  Car,
  CreditCard,
  Tag,
  History,
  CheckCircle2,
  ShieldCheck,
  ArrowRight,
} from 'lucide-react'
import AvantoLogo from './AvantoLogo'

// Custom Apple & Google Play Store SVG Icons
const AppleIcon = ({ className = 'w-6 h-6' }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.42c.62-.75 1.04-1.8 0.92-2.85-.9.04-2 .6-2.65 1.35-.58.66-1.09 1.73-.95 2.76.99.08 2.04-.51 2.68-1.26z" />
  </svg>
)

const GooglePlayIcon = ({ className = 'w-6 h-6' }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M3.609 1.814L13.792 12 3.61 22.186a2.03 2.03 0 0 1-.61-.958V2.772c0-.36.216-.696.61-.958zm11.235 11.238l2.25 2.25-11.4 6.582 9.15-8.832zm2.25-2.25l-2.25-2.25 9.15-8.832-6.9 11.082zm1.05 1.05l3.456-1.996a1.53 1.53 0 0 0 0-2.656l-3.456-1.996-2.07 3.324 2.07 3.324z" />
  </svg>
)

export default function AppPromotion() {
  const [downloadToast, setDownloadToast] = useState<string | null>(null)

  const triggerDownload = (store: string) => {
    setDownloadToast(`Starting ${store} download... Check back soon!`)
    setTimeout(() => setDownloadToast(null), 3500)
  }

  return (
    <section id="download" className="bg-[#F4FAF9] py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-br from-[#002B29] via-[#003634] to-[#004D4A] rounded-3xl p-8 sm:p-12 lg:p-16 text-white shadow-2xl relative overflow-hidden border border-[#004D4A]/50">
          {/* Background Ambient Teal & Cyan Circles */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#72DCDC]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-[#00766B]/25 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-[#72DCDC] border border-white/15">
                <span>📱 Mobile Experience</span>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
                <span>Your Ride.</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#72DCDC] via-teal-200 to-[#008779]">
                  One Tap Away.
                </span>
              </h2>

              <p className="text-teal-100/90 text-base sm:text-lg leading-relaxed max-w-xl">
                Download the Avanto app to unlock rapid booking, live vehicle tracking, UPI cashback offers, and hassle-free rides whenever you need them.
              </p>

              {/* Feature Chips */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 max-w-lg">
                {[
                  { icon: Car, label: 'Book in 10s' },
                  { icon: Navigation, label: 'Live Tracking' },
                  { icon: CreditCard, label: 'UPI Payments' },
                  { icon: Tag, label: 'Daily Offers' },
                  { icon: History, label: 'Ride History' },
                  { icon: ShieldCheck, label: '24/7 Safety' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-xs font-semibold text-teal-50">
                    <item.icon className="w-4 h-4 text-[#72DCDC] shrink-0" />
                    <span className="truncate">{item.label}</span>
                  </div>
                ))}
              </div>

              {/* App Store Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => triggerDownload('Apple App Store')}
                  className="inline-flex items-center justify-center gap-3 bg-white text-[#003634] hover:bg-slate-100 font-bold px-6 py-3.5 rounded-2xl shadow-lg transition-all cursor-pointer group"
                >
                  <AppleIcon className="w-6 h-6 text-[#003634] group-hover:scale-110 transition-transform" />
                  <div className="text-left">
                    <div className="text-[10px] uppercase font-bold text-gray-500 leading-tight">Download on</div>
                    <div className="text-sm font-extrabold leading-tight">App Store</div>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => triggerDownload('Google Play')}
                  className="inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold px-6 py-3.5 rounded-2xl backdrop-blur-md transition-all cursor-pointer group"
                >
                  <GooglePlayIcon className="w-6 h-6 text-[#72DCDC] group-hover:scale-110 transition-transform" />
                  <div className="text-left">
                    <div className="text-[10px] uppercase font-bold text-teal-100 leading-tight">Get it on</div>
                    <div className="text-sm font-extrabold leading-tight">Google Play</div>
                  </div>
                </button>
              </div>

              {downloadToast && (
                <div className="p-3 bg-emerald-500/20 border border-emerald-400 text-emerald-300 rounded-xl text-xs font-semibold flex items-center gap-2 animate-fade-in">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>{downloadToast}</span>
                </div>
              )}
            </div>

            {/* Right Mockup: Smartphone Frame Matching App Login Screenshot */}
            <div className="lg:col-span-5 flex justify-center">
              <motion.div
                whileHover={{ rotate: 0, scale: 1.02 }}
                initial={{ rotate: 1 }}
                className="relative w-72 sm:w-80 bg-[#001D1C] rounded-[44px] p-3 shadow-[0_25px_60px_rgba(0,0,0,0.6)] border-4 border-[#004D4A] transition-all duration-300"
              >
                {/* Phone Speaker & Camera Notch */}
                <div className="absolute top-5 left-1/2 -translate-x-1/2 w-28 h-4 bg-slate-900 rounded-full z-20 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-800 ml-auto mr-3" />
                </div>

                {/* Inner Screen */}
                <div className="bg-[#FFFFFF] rounded-[36px] overflow-hidden pt-7 pb-6 px-4 text-[#003634] space-y-4 shadow-inner">
                  {/* Top Header matching App Onboarding */}
                  <div className="flex items-center justify-between pt-1">
                    <AvantoLogo variant="light" size="sm" />
                    <span className="text-[10px] font-bold bg-[#E0F7F6] text-[#00766B] px-2 py-0.5 rounded-full">
                      50+ Cities
                    </span>
                  </div>

                  {/* App Visual Header Icon (Matches Screenshot 2) */}
                  <div className="flex flex-col items-center text-center pt-2">
                    <div className="w-16 h-16 rounded-full bg-[#E0F7F6] border-2 border-[#72DCDC]/40 flex items-center justify-center text-[#00766B] shadow-inner mb-3">
                      <Car className="w-8 h-8 text-[#00766B]" />
                    </div>
                    <h4 className="text-lg font-black text-[#003634] tracking-tight">
                      Move with confidence.
                    </h4>
                    <p className="text-[11px] text-[#4A6361] mt-0.5">
                      Your ride, our priority.
                    </p>
                  </div>

                  {/* Phone Input Box matching screenshot */}
                  <div className="bg-[#F4FAF9] border border-[#00766B]/20 rounded-2xl p-2.5 space-y-1">
                    <label className="text-[9px] font-bold uppercase tracking-wider text-[#4A6361] block">
                      Mobile Number
                    </label>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1 text-xs font-bold text-[#004D4A] bg-white px-2 py-1 rounded-lg border border-gray-200">
                        <span>🇮🇳</span>
                        <span>+91</span>
                      </div>
                      <div className="text-xs font-semibold text-gray-400">
                        98765 43210
                      </div>
                    </div>
                  </div>

                  {/* Quick Feature Pills */}
                  <div className="grid grid-cols-2 gap-2 text-left">
                    <div className="bg-[#F4FAF9] p-2.5 rounded-xl border border-teal-100">
                      <Navigation className="w-3.5 h-3.5 text-[#00766B] mb-1" />
                      <span className="font-bold text-[11px] block text-[#003634]">Live Fleet</span>
                      <span className="text-[8px] text-gray-500">Instant dispatch</span>
                    </div>
                    <div className="bg-[#F4FAF9] p-2.5 rounded-xl border border-teal-100">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#00766B] mb-1" />
                      <span className="font-bold text-[11px] block text-[#003634]">Verified</span>
                      <span className="text-[8px] text-gray-500">100% background checks</span>
                    </div>
                  </div>

                  {/* Primary Continue Button */}
                  <button
                    type="button"
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-[#004D4A] to-[#00766B] text-white text-xs font-black flex items-center justify-center gap-1.5 shadow-md shadow-[#00766B]/30 hover:opacity-95 transition-opacity"
                  >
                    <span>Continue with Phone</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <p className="text-[9px] text-center text-gray-400">
                    By signing up, you agree to Avanto's Terms & Safety Policy.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
