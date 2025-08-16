import BenefitsSection from "@/components/benefits-section"
import CompanyLogos from "@/components/company-logos"
import FeatureAnalysis from "@/components/feature-analysis"
import FeatureInsights from "@/components/feature-insights"
import FinalCTA from "@/components/final-cta"
import HeroSection from "@/components/hero-section"
import ReviewsSection from "@/components/reviews-section"
import SpendingCoach from "@/components/spending-coach"
import SubscriptionTracking from "@/components/subscription-tracking"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white not-first:space-y-8 not-first:lg:space-y-16">
      <HeroSection />
      <CompanyLogos />
      <FeatureAnalysis />
      <FeatureInsights />
      <SubscriptionTracking />
      <BenefitsSection />
      <SpendingCoach />
      <ReviewsSection />
      <FinalCTA />
    </main>
  )
}
