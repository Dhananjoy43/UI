import { Banner } from "@/components/Banner"
import { CallToAction } from "@/components/CallToAction"
import { FAQs } from "@/components/FAQs"
import { Features } from "@/components/Features"
import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero"
import { LogoTicker } from "@/components/LogoTicker"
import { PricingSection } from "@/components/PricingSection"
import { ProductShowcase } from "@/components/ProductShowcase"
import { TestimonialsSection } from "@/components/TestimonialsSection"

export default function Home() {
  return (
    <>
      <Banner />
      <Header />
      <Hero />
      <LogoTicker />
      <Features />
      <ProductShowcase />
      <TestimonialsSection />
      <PricingSection />
      <FAQs />
      <CallToAction />
      <Footer />
    </>
  )
}
