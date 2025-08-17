import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Motion } from "@/components/ui/motion"
import { MaxWidthWrapper } from "@/components/global/max-width-wrapper"
import { Heading } from "@/components/typography/heading"
import { Paragraph } from "@/components/typography/paragraph"

export default function FinalCTA() {
  return (
    <MaxWidthWrapper
      as="section"
      className="mb-8 flex-col overflow-hidden rounded-3xl bg-gradient-to-br from-purple-100 via-pink-100 to-purple-200 p-0 md:mb-16 md:flex-row md:pr-0 lg:pr-0"
    >
      <Motion
        animation="slideLeft"
        duration={0.8}
        delay={0.4}
        className="w-full space-y-4 p-4 md:w-2/3 md:p-6 lg:w-1/2 lg:p-16"
      >
        <Heading as="h3" weight="bold">
          Take Control of Your <br />
          Spending Experience
        </Heading>
        <Motion animation="slideLeft" duration={0.8} delay={0.3}>
          <Paragraph>
            Track your spending habits with AI-powered insights, real-time
            analytics, and personalized financial health.
          </Paragraph>
        </Motion>

        <Motion animation="slideLeft" duration={0.8} delay={0.3}>
          <Button size={"lg"}>Start For Free</Button>
        </Motion>
      </Motion>

      <Motion
        animation="slideRight"
        duration={0.8}
        delay={0.6}
        className="relative h-80 w-full sm:h-[24rem] md:h-[20rem] md:w-1/3 lg:h-[24rem] lg:w-1/2"
      >
        <Image
          src={"/images/cards.png"}
          fill
          alt="Final CTA Image"
          sizes="(min-width: 768px) 50vw, 100vw"
          className="h-auto w-full object-cover"
        />
      </Motion>
    </MaxWidthWrapper>
  )
}
