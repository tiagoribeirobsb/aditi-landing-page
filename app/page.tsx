
import HeroSection from '@/components/hero-section'
import AboutSection from '@/components/about-section'
import CompaniesSection from '@/components/companies-section'
import MethodologySection from '@/components/methodology-section'
import SocialProofSection from '@/components/social-proof-section'
import CtaSection from '@/components/cta-section'
import FaqSection from '@/components/faq-section'
import Footer from '@/components/footer'
import WhatsAppWidget from '@/components/whatsapp-widget'

export default function Home() {
  return (
    <main className="min-h-screen smooth-scroll">
      <HeroSection />
      <AboutSection />
      <CompaniesSection />
      <MethodologySection />
      <SocialProofSection />
      <CtaSection />
      <FaqSection />
      <Footer />
      <WhatsAppWidget />
    </main>
  )
}
