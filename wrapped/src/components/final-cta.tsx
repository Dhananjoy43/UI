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
      className="mx-4 mb-8 flex-col overflow-hidden rounded-3xl bg-gradient-to-br from-purple-100 via-pink-100 to-purple-200 p-0 md:mx-auto md:mb-16 md:flex-row lg:pr-0"
    >
      <Motion
        animation="slideLeft"
        duration={0.8}
        delay={0.4}
        className="w-full space-y-4 p-4 md:w-1/2 md:p-12 lg:p-16"
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
        className="relative h-80 w-full md:h-[32rem] md:w-1/2"
      >
        <Image
          src={"/images/cards.png"}
          fill
          alt="Final CTA Image"
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
      </Motion>
    </MaxWidthWrapper>
  )
}
