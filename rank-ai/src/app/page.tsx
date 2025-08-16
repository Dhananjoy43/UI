import { CallToAction } from "@/sections/CallToAction"
import { FAQs } from "@/sections/FAQs"
import { Features } from "@/sections/Features"
import { Hero } from "@/sections/Hero"
import { LogoTicker } from "@/sections/LogoTicker"
import { PricingSection } from "@/sections/PricingSection"
import { Testimonials } from "@/sections/Testimonials"

export default function Home() {
  return (
    <main>
      <Hero />
      <LogoTicker />
      <Features />
      <PricingSection />
      <Testimonials />
      <FAQs />
      <CallToAction />
    </main>
  )
}
