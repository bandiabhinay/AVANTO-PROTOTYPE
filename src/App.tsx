import { useState, useCallback } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import RideTypes from './components/RideTypes'
import Features from './components/Features'
import Captain from './components/Captain'
import Safety from './components/Safety'
import About from './components/About'
import AppPromotion from './components/AppPromotion'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import BookingModal from './components/BookingModal'
import SlideSection from './components/SlideSection'
import StartupAnimation from './components/StartupAnimation'

export default function App() {
  const [isStartupDone, setIsStartupDone] = useState(false)
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const [selectedRideType, setSelectedRideType] = useState('go')

  const handleStartupComplete = useCallback(() => {
    setIsStartupDone(true)
  }, [])

  const handleOpenBooking = (rideType?: string) => {
    if (rideType) {
      setSelectedRideType(rideType)
    }
    setIsBookingOpen(true)
  }

  const handleScrollToCaptain = () => {
    const el = document.getElementById('captain')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      {/* Full-screen startup vehicle animation on every page load/refresh */}
      {!isStartupDone && (
        <StartupAnimation onComplete={handleStartupComplete} />
      )}

      {isStartupDone && (
        <div className="min-h-screen bg-[#F5F7FC] text-[#101936] antialiased selection:bg-[#E53935] selection:text-white overflow-x-hidden animate-fade-in">
      {/* Sticky & Floating Glass Navigation */}
      <Navbar onOpenBooking={() => handleOpenBooking('go')} />

      <main className="w-full overflow-x-hidden">
        {/* Section 1: Hero (Initial presentation top) */}
        <SlideSection index={0}>
          <Hero
            onBookRide={(tier) => handleOpenBooking(tier || 'go')}
            onBecomeCaptain={handleScrollToCaptain}
          />
        </SlideSection>

        {/* Section 2: How It Works (RIGHT -> LEFT) */}
        <SlideSection index={1}>
          <HowItWorks />
        </SlideSection>

        {/* Section 3: Ride Types (LEFT -> RIGHT) */}
        <SlideSection index={2}>
          <RideTypes onSelectRide={(tier) => handleOpenBooking(tier)} />
        </SlideSection>

        {/* Section 4: Why Choose Avanto (RIGHT -> LEFT) */}
        <SlideSection index={3}>
          <Features />
        </SlideSection>

        {/* Section 5: Become a Captain (LEFT -> RIGHT) */}
        <SlideSection index={4}>
          <Captain />
        </SlideSection>

        {/* Section 6: Safety (RIGHT -> LEFT) */}
        <SlideSection index={5}>
          <Safety />
        </SlideSection>

        {/* Section 7: About (LEFT -> RIGHT) */}
        <SlideSection index={6}>
          <About />
        </SlideSection>

        {/* Section 8: Mobile App Promotion (RIGHT -> LEFT) */}
        <SlideSection index={7}>
          <AppPromotion />
        </SlideSection>

        {/* Section 9: Testimonials (LEFT -> RIGHT) */}
        <SlideSection index={8}>
          <Testimonials />
        </SlideSection>

        {/* Section 10: Frequently Asked Questions (RIGHT -> LEFT) */}
        <SlideSection index={9}>
          <FAQ />
        </SlideSection>

        {/* Section 11: Final Conversion CTA (LEFT -> RIGHT) */}
        <SlideSection index={10}>
          <FinalCTA
            onBookRide={() => handleOpenBooking('go')}
            onBecomeCaptain={handleScrollToCaptain}
          />
        </SlideSection>
      </main>

      {/* Comprehensive Footer */}
      <Footer />

      {/* Interactive 6-Step Ride Booking Demo Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialRideType={selectedRideType}
      />
    </div>
      )}
    </>
  )
}
