import Image from "next/image"

import { MaxWidthWrapper } from "@/components/global/max-width-wrapper"
import { Paragraph } from "@/components/typography/paragraph"

import { Motion } from "./ui/motion"

export default function CompanyLogos() {
  const companies = [
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

  return (
    <MaxWidthWrapper as="section" aria-labelledby="trusted-businesses-heading">
      <h2 id="trusted-businesses-heading" className="sr-only">
        Trusted by businesses
      </h2>
      <Paragraph className="text-center text-base">
        Trusted by 50,000+ businesses to scale outbound sales and drive new
        revenue
      </Paragraph>
      <Motion
        as="ul"
        animation="zoom"
        duration={2}
        delay={0.4}
        className="m-0 flex w-full list-none flex-wrap items-center justify-center gap-4 p-0 md:gap-6"
      >
        {companies.map((company) => (
          <li
            key={company.label}
            className="flex items-center justify-center p-2"
            style={{ width: 150, height: 150 }}
          >
            <div className="relative h-full w-full">
              <Image
                src={company.logo}
                alt={`${company.label} logo`}
                fill
                sizes="150px"
                className="object-contain p-2"
                draggable={false}
              />
            </div>
          </li>
        ))}
      </Motion>
    </MaxWidthWrapper>
  )
}
