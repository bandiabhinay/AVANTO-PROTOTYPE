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
import SlideSection from './components/SlideSection'
import StartupAnimation from './components/StartupAnimation'

// ============================================================================
// CONFIGURE YOUR AVANTO APPLICATION LINKS HERE
// When you have your live Play Store / App Store links or a Smart Link (e.g. from onelink.to),
// simply paste them here and they will work seamlessly on GoDaddy or any host.
// ============================================================================

// 1. Customer / Rider App Links:
const RIDER_SMART_LINK = '' // e.g. 'https://onelink.to/avanto-rider'
const RIDER_PLAY_STORE_URL = 'https://play.google.com/store/apps'
const RIDER_APP_STORE_URL = 'https://apps.apple.com'

// 2. Captain / Driver Partner App Links:
const CAPTAIN_SMART_LINK = '' // e.g. 'https://onelink.to/avanto-captain'
const CAPTAIN_PLAY_STORE_URL = 'https://play.google.com/store/apps'
const CAPTAIN_APP_STORE_URL = 'https://apps.apple.com'

// Helper function to detect device and redirect to the appropriate store/app
function redirectToApp(smartLink: string, playStoreUrl: string, appStoreUrl: string) {
  if (smartLink && smartLink.trim() !== '') {
    window.location.href = smartLink
    return
  }

  const userAgent = navigator.userAgent || navigator.vendor || (window as unknown as { opera?: string }).opera || ''

  if (/android/i.test(userAgent)) {
    window.location.href = playStoreUrl
    return
  }

  if (/iPad|iPhone|iPod/.test(userAgent) && !(window as unknown as { MSStream?: unknown }).MSStream) {
    window.location.href = appStoreUrl
    return
  }

  // Desktop fallback: scroll smoothly to the mobile app download showcase
  const downloadSection = document.getElementById('download')
  if (downloadSection) {
    downloadSection.scrollIntoView({ behavior: 'smooth' })
  } else {
    window.location.href = playStoreUrl
  }
}

export default function App() {
  const [isStartupDone, setIsStartupDone] = useState(false)

  const handleStartupComplete = useCallback(() => {
    setIsStartupDone(true)
  }, [])

  // Directly redirect customer to the Avanto Rider application
  const handleOpenBooking = (_rideType?: string) => {
    redirectToApp(RIDER_SMART_LINK, RIDER_PLAY_STORE_URL, RIDER_APP_STORE_URL)
  }

  // Directly redirect driver to the Avanto Captain application
  const handleBecomeCaptain = () => {
    redirectToApp(CAPTAIN_SMART_LINK, CAPTAIN_PLAY_STORE_URL, CAPTAIN_APP_STORE_URL)
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
            onBecomeCaptain={handleBecomeCaptain}
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
          <Captain onBecomeCaptain={handleBecomeCaptain} />
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
            onBecomeCaptain={handleBecomeCaptain}
          />
        </SlideSection>
      </main>

      {/* Comprehensive Footer */}
      <Footer />
    </div>
      )}
    </>
  )
}
