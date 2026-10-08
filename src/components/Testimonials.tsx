import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Priya Sharma',
    city: 'Bengaluru',
    role: 'Product Designer',
    review: 'Avanto made my daily office commute so much easier. The captains arrive right on time, and the app interface is unbelievably smooth.',
    rating: 5,
    avatar: 'PS',
    bg: 'from-blue-500 to-indigo-600',
  },
  {
    name: 'Vikram Mehta',
    city: 'Mumbai',
    role: 'Tech Lead',
    review: 'Fast pickup, clean vehicles and excellent captains. Unlike other apps, the fare shown upfront is always the exact fare charged.',
    rating: 5,
    avatar: 'VM',
    bg: 'from-emerald-500 to-teal-600',
  },
  {
    name: 'Ananya Iyer',
    city: 'Hyderabad',
    role: 'Marketing Director',
    review: 'Pricing is transparent and the booking experience is super simple. The safety tracking features give my family complete peace of mind.',
    rating: 5,
    avatar: 'AI',
    bg: 'from-purple-500 to-pink-600',
  },
  {
    name: 'Rohan Gupta',
    city: 'Delhi NCR',
    role: 'Consultant',
    review: 'I never worry about surge pricing during peak morning rainstorms anymore. Avanto has completely won my loyalty for city travel.',
    rating: 5,
    avatar: 'RG',
    bg: 'from-amber-500 to-orange-600',
  },
]

export default function Testimonials() {
  return (
    <section className="bg-white py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#E53935] bg-[#E53935]/10 mb-3 border border-[#E53935]/20">
            Rider Stories
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-[#101936] tracking-tight">
            Loved by 10M+ Riders
          </h2>
          <p className="mt-3 text-lg text-gray-600">
            Real feedback from riders across 50+ cities in India.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className="bg-[#F5F7FC] rounded-3xl p-6 border border-slate-200/70 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#E53935]/30" />
                </div>

                <p className="text-sm text-gray-700 leading-relaxed italic mb-6">
                  &ldquo;{item.review}&rdquo;
                </p>
              </div>

              {/* Reviewer Details */}
              <div className="pt-4 border-t border-slate-200/80 flex items-center gap-3">
                <div className={`w-11 h-11 rounded-2xl bg-gradient-to-tr ${item.bg} text-white font-bold flex items-center justify-center text-sm shadow-sm shrink-0`}>
                  {item.avatar}
                </div>
                <div>
                  <h4 className="font-extrabold text-[#101936] text-sm">{item.name}</h4>
                  <span className="text-[11px] text-gray-500 font-medium">
                    {item.role} • {item.city}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
