import Image from "next/image"
import { Brain } from "lucide-react"

import { MaxWidthWrapper } from "@/components/global/max-width-wrapper"
import { MainHeading } from "@/components/typography/main-heading"

import { Motion } from "./ui/motion"

export default function SpendingCoach() {
  return (
    <MaxWidthWrapper
      as="section"
      className="overflow-hidden rounded-3xl bg-gradient-to-r from-purple-100 to-pink-100 pt-20 lg:px-20"
    >
      <MainHeading
        pill="AI Coach"
        icon={Brain}
        title="Your Spending"
        gradientText="Coach"
        description="Get personalized financial advice and insights to help you manage your
          spending effectively."
      />

      <Motion
        animation="slideUp"
        duration={0.8}
        delay={0.4}
        className="bg-background -mt-6 w-full translate-y-12 rounded-3xl px-4 shadow-lg sm:mx-6 md:mx-12 md:-mt-16 md:translate-y-20 lg:mx-12"
      >
        <Image
          src={"/images/hero.png"}
          height={800}
          width={1200}
          alt="Preview of the spending coach dashboard"
          priority
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
        />
      </Motion>
    </MaxWidthWrapper>
  )
}
