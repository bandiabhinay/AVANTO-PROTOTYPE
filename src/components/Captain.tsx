import { useState } from 'react'
import { Check, Star, ArrowRight, ShieldCheck, Clock, CheckCircle2 } from 'lucide-react'

const benefits = [
  'Flexible working hours',
  'Weekly guaranteed payouts',
  'Insurance & benefits coverage',
  '24/7 captain support',
  'Transparent earnings',
]

const weeklyEarningsData = [
  { day: 'Mon', amount: '₹2,450', height: '55%' },
  { day: 'Tue', amount: '₹2,680', height: '62%' },
  { day: 'Wed', amount: '₹2,340', height: '50%' },
  { day: 'Thu', amount: '₹2,890', height: '75%' },
  { day: 'Fri', amount: '₹3,120', height: '85%' },
  { day: 'Sat', amount: '₹3,560', height: '100%', active: true },
  { day: 'Sun', amount: '₹2,410', height: '58%' },
]

export default function Captain() {
  const [applied, setApplied] = useState(false)

  const handleApply = () => {
    setApplied(true)
    setTimeout(() => setApplied(false), 3500)
  }

  return (
    <section id="captain" className="bg-[#101936] text-white py-24 relative overflow-hidden">
      {/* Background Ambient Radial Glows */}
      <div className="absolute top-1/4 -right-24 w-96 h-96 bg-[#1769FF]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#38BDF8]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* ================= LEFT: Headline, Benefits & CTA ================= */}
          <div className="lg:col-span-6 flex flex-col items-start space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-blue-200 border border-white/10">
              <span>💰 Captain Partner Program</span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
              <span>Drive & Earn</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] to-[#1769FF]">
                On Your Schedule
              </span>
            </h2>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-xl">
              Turn your time into income. Choose when, where and how you drive. Enjoy industry-best payouts, dedicated support, and medical protection.
            </p>

            {/* 5 Benefits List */}
            <div className="space-y-3.5 w-full pt-2">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#1769FF]/30 text-[#38BDF8] flex items-center justify-center shrink-0 border border-[#38BDF8]/30">
                    <Check className="w-3.5 h-3.5 stroke-[2.8]" />
                  </div>
                  <span className="text-gray-200 font-semibold text-sm sm:text-base">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-4 w-full sm:w-auto">
              <button
                type="button"
                onClick={handleApply}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#1769FF] hover:bg-[#1255D4] text-white font-bold text-base rounded-full px-8 py-4 shadow-xl shadow-[#1769FF]/35 hover:shadow-2xl transition-all cursor-pointer group"
              >
                {applied ? (
                  <>
                    <CheckCircle2 className="w-5 h-5 text-emerald-300" />
                    <span>Application Sent! We'll call you.</span>
                  </>
                ) : (
                  <>
                    <span>Start Earning Today</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </div>
          </div>

          {/* ================= RIGHT: Captain Dashboard Mockup ================= */}
          <div className="lg:col-span-6 relative">
            {/* Glow backdrop behind card */}
            <div className="absolute -inset-2 bg-gradient-to-r from-[#1769FF]/30 via-[#38BDF8]/20 to-blue-600/30 rounded-3xl blur-2xl opacity-75 -z-10" />

            <div className="relative bg-[#162044]/95 border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl">
              {/* Mockup Header */}
              <div className="flex items-center justify-between pb-5 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-[#1769FF] to-[#38BDF8] flex items-center justify-center text-white font-black text-sm shadow-md">
                    AV
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white tracking-wide">
                      Captain Dashboard
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-semibold">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      Online & Accepting Rides
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-1 bg-amber-400/10 border border-amber-400/20 px-3 py-1 rounded-full text-amber-300 text-xs font-bold">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span>4.9★</span>
                </div>
              </div>

              {/* Key KPI Stats Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-6 border-b border-white/10">
                <div className="bg-[#101936]/60 p-3 rounded-2xl border border-white/5">
                  <span className="text-[10px] text-gray-400 uppercase font-bold block mb-1">Today's Earnings</span>
                  <div className="text-2xl font-black text-emerald-400">₹2,847</div>
                  <span className="text-[10px] text-emerald-500 font-bold">+18% vs avg</span>
                </div>

                <div className="bg-[#101936]/60 p-3 rounded-2xl border border-white/5">
                  <span className="text-[10px] text-gray-400 uppercase font-bold block mb-1">Completed Rides</span>
                  <div className="text-2xl font-black text-white">18</div>
                  <span className="text-[10px] text-gray-400">Target: 15</span>
                </div>

                <div className="bg-[#101936]/60 p-3 rounded-2xl border border-white/5">
                  <span className="text-[10px] text-gray-400 uppercase font-bold block mb-1">Rating</span>
                  <div className="text-2xl font-black text-amber-400">4.9★</div>
                  <span className="text-[10px] text-amber-300 font-semibold">Top Captain</span>
                </div>

                <div className="bg-[#101936]/60 p-3 rounded-2xl border border-white/5">
                  <span className="text-[10px] text-gray-400 uppercase font-bold block mb-1">Online Hours</span>
                  <div className="text-2xl font-black text-[#38BDF8]">8h 24m</div>
                  <span className="text-[10px] text-gray-400">Active shift</span>
                </div>
              </div>

              {/* Weekly Earnings & Bar Chart */}
              <div className="pt-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-xs text-gray-400 font-semibold uppercase block">Weekly Earnings</span>
                    <span className="text-2xl sm:text-3xl font-black text-white">₹18,450</span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-emerald-400 font-bold bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                      Payout Ready
                    </span>
                  </div>
                </div>

                {/* 7-Day Bar Chart */}
                <div className="bg-[#101936]/80 rounded-2xl p-4 border border-white/5">
                  <div className="flex items-end justify-between gap-2.5 h-28 pt-2">
                    {weeklyEarningsData.map((bar, idx) => (
                      <div key={idx} className="flex-1 flex flex-col items-center gap-2 h-full justify-end group">
                        <div className="relative w-full flex items-end justify-center h-full">
                          <div
                            style={{ height: bar.height }}
                            className={`w-full max-w-[28px] rounded-t-lg transition-all duration-300 ${
                              bar.active
                                ? 'bg-gradient-to-t from-[#1769FF] to-[#38BDF8] shadow-lg shadow-[#1769FF]/50'
                                : 'bg-white/20 group-hover:bg-white/35'
                            }`}
                          />
                        </div>
                        <span className={`text-[11px] font-semibold ${bar.active ? 'text-[#38BDF8] font-bold' : 'text-gray-400'}`}>
                          {bar.day}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Support Badge */}
              <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-gray-300">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#38BDF8]" />
                  <span>Instant UPI withdrawal available 24/7</span>
                </div>
                <div className="flex items-center gap-1 text-emerald-400 font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Insured</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
