import Image from "next/image"
import { Activity, Shield, Users, Zap } from "lucide-react"

import { Card } from "@/components/ui/card"
import { Motion } from "@/components/ui/motion"
import { MaxWidthWrapper } from "@/components/global/max-width-wrapper"
import { Heading } from "@/components/typography/heading"
import { MainHeading } from "@/components/typography/main-heading"
import { Paragraph } from "@/components/typography/paragraph"

export default function BenefitsSection() {
  const benefits = [
    {
      icon: Shield,
      title: "Unified Data Documents",
      description:
        "All your financial data in one secure, organized platform with bank-level security.",
      image: "/images/documents.png",
    },
    {
      icon: Zap,
      title: "AI-powered Integrations",
      description:
        "Smart categorization and insights powered by machine learning algorithms.",
      image: "/images/ai-agents.png",
    },
    {
      icon: Users,
      title: "Collaborative Features",
      description:
        "Collaborate with family members and financial advisors seamlessly.",
      image: "/images/security.png",
    },
  ]

  return (
    <MaxWidthWrapper
      as="section"
      className="gap-6 rounded-3xl bg-gradient-to-br from-purple-100 to-pink-100 py-12"
    >
      <MainHeading
        pill="Benefits"
        icon={Activity}
        title="Some other"
        gradientText="Benefits"
        description=" Take advantage of everything we have to offer including cutting-edge
          technology."
      />

      <Motion
        animation="fade"
        delay={0.6}
        className="grid gap-4 md:grid-cols-3"
      >
        {benefits.map((benefit, index) => (
          <Motion
            key={index}
            animation="slideUp"
            duration={0.4}
            delay={0.2 * (index + 1)} // Staggered delay: 0.2s, 0.4s, 0.6s, etc.
            scrollTrigger={true}
            scrollThreshold={0.2}
          >
            <Card className="h-full gap-4 overflow-hidden rounded-2xl border-0 bg-white/80 p-4 shadow-xl backdrop-blur-sm">
              <div className="relative">
                <Image
                  src={benefit.image}
                  alt={benefit.title}
                  width={600}
                  height={400}
                  className="rounded-lg object-cover object-center"
                />
              </div>

              <div className="space-y-2 pb-4">
                <Heading as="h4" className="font-bold">
                  {benefit.title}
                </Heading>
                <Paragraph className="text-base">
                  {benefit.description}
                </Paragraph>
              </div>
            </Card>
          </Motion>
        ))}
      </Motion>
    </MaxWidthWrapper>
  )
}
