import Image from "next/image"
import { AudioWaveform } from "lucide-react"

import { Motion } from "@/components/ui/motion"
import { MaxWidthWrapper } from "@/components/global/max-width-wrapper"
import { MainHeading } from "@/components/typography/main-heading"

export default function SubscriptionTracking() {
  return (
    <MaxWidthWrapper as="section" className="gap-6">
      <MainHeading
        icon={AudioWaveform}
        title="Subscription and"
        gradientText="Tracking"
        pill="All-in-One Platform"
        description="From prototyping to production - develop without switching tabs"
      />

      <Motion
        animation="slideUp"
        duration={0.8}
        delay={0.4}
        className="relative mx-auto max-w-4xl"
      >
        <Image
          src="/images/subscription-and-tracking.png"
          alt="Subscription Tracking"
          width={800}
          height={600}
          className="h-auto w-full"
        />
      </Motion>
    </MaxWidthWrapper>
  )
}
