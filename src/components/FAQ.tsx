import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, HelpCircle } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: 'How do I book a ride?',
    answer:
      'Booking with Avanto takes less than 10 seconds. Simply open the app or click "Book a Ride", confirm your pickup and drop-off points, select your preferred ride tier (Auto, Go, Premier, or Premium), and confirm. Nearby captains are dispatched instantaneously.',
  },
  {
    question: 'How do I become an Avanto captain?',
    answer:
      'To join as an Avanto Captain, click "Become a Captain" on our website or download the Avanto Captain app. Submit your valid driver’s license, vehicle registration, and Aadhaar documents. Once verification and our quick onboarding training are complete, you can start earning on your own schedule.',
  },
  {
    question: 'What ride types are available?',
    answer:
      'We offer 4 flexible tiers: Avanto Auto (affordable 3-wheelers starting at ₹29), Avanto Mini (economic compact cars starting at ₹79), Avanto Sedan (spacious executive sedans starting at ₹129), and Avanto Premium (top-rated luxury cars starting at ₹249).',
  },
  {
    question: 'How is the fare calculated?',
    answer:
      'Avanto uses upfront, guaranteed distance and travel-time formulas. The price you see before tapping "Confirm Ride" is the exact amount you pay — with no hidden booking fees, fuel surcharges, or mid-trip price recalculations.',
  },
  {
    question: 'Is Avanto available 24/7?',
    answer:
      'Yes! Avanto operates 24 hours a day, 7 days a week across all 50+ supported cities. Whether you need an early-morning 4:00 AM airport transfer or a late-night ride home, our active fleet is always on duty.',
  },
  {
    question: 'How does Avanto ensure safety?',
    answer:
      'Safety is integrated into every step: 100% background-checked verified captains, live continuous GPS monitoring with route divergence alerts, an in-app emergency SOS button linked directly to police response centers, and one-tap live trip sharing with friends and family.',
  },
  {
    question: 'What payment methods are supported?',
    answer:
      'We support all leading payment options: UPI (Google Pay, PhonePe, Paytm, BHIM), debit and credit cards (Visa, Mastercard, RuPay), Net Banking, and Avanto Wallet with instant cashback.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx)
  }

  return (
    <section className="bg-[#F5F7FC] py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#1769FF] bg-[#1769FF]/10 mb-3 border border-[#1769FF]/20">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-[#101936] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-lg text-gray-600">
            Everything you need to know about riding and earning with Avanto.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-[#101936] hover:text-[#1769FF] transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'bg-[#1769FF] text-white rotate-180' : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 text-sm sm:text-base text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
