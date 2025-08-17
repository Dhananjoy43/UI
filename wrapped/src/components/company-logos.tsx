"use client"

import Image from "next/image"
import AutoScroll from "embla-carousel-auto-scroll"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { MaxWidthWrapper } from "@/components/global/max-width-wrapper"
import { Paragraph } from "@/components/typography/paragraph"

const LOGOS = [
  {
    label: "Microsoft",
    logo: "/logo/microsoft.png",
  },
  {
    label: "Google",
    logo: "/logo/google.png",
  },
  {
    label: "Slack",
    logo: "/logo/slack.png",
  },
  {
    label: "Teradata",
    logo: "/logo/teradata.png",
  },
  {
    label: "UserTesting",
    logo: "/logo/user-testing.png",
  },
  {
    label: "Salesforce",
    logo: "/logo/salesforce.png",
  },
]

export default function CompanyLogos() {
  return (
    <MaxWidthWrapper
      as="section"
      aria-labelledby="trusted-businesses-heading"
      className="relative"
    >
      <h2 id="trusted-businesses-heading" className="sr-only">
        Trusted by businesses
      </h2>
      <Paragraph className="mb-4 text-center text-base">
        Trusted by 50,000+ businesses to scale outbound sales and drive new
        revenue
      </Paragraph>
      <div className="relative">
        {/* Left fade effect */}
        <div className="absolute top-0 left-0 z-10 h-full w-24 bg-gradient-to-r from-white to-transparent" />

        <Carousel
          opts={{ loop: true }}
          plugins={[
            AutoScroll({
              startDelay: 300,
              playOnInit: true,
              speed: 1,
              stopOnMouseEnter: true,
              stopOnInteraction: false,
            }),
          ]}
        >
          <CarouselContent className="relative ml-0">
            {[...LOGOS, ...LOGOS].map((company, index) => (
              <CarouselItem
                key={`${company.label}-${index}`}
                className="flex basis-1/2 justify-center pl-0 sm:basis-1/3 md:basis-1/4 lg:basis-1/6"
              >
                <Image
                  src={company.logo}
                  alt={`${company.label} logo`}
                  height={60}
                  width={150}
                  sizes="150px"
                  className="w-auto object-contain"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Right fade effect */}
        <div className="absolute top-0 right-0 z-10 h-full w-24 bg-gradient-to-l from-white to-transparent" />
      </div>
    </MaxWidthWrapper>
  )
}
