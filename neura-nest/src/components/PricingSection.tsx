"use client"

import { useState } from "react"

import { cn } from "@/lib/utils"
import {
  FREQUENCY,
  PricingCard,
  PricingFrequencyToggle,
  PricingPlanProps,
} from "@/components/ui/pricing"

import { SectionHeading } from "./global/section-heading"

export const PRICING_PLANS: PricingPlanProps[] = [
  {
    name: "Starter",
    description: "Perfect for individuals and small projects",
    price: {
      monthly: 19,
      yearly: 190, // ~20% discount for yearly billing
    },
    features: [
      "Up to 3 integrations",
      "Basic AI insights",
      "Email support",
      "5GB storage",
      "Community access",
    ],
    buttonText: "Get Started",
    href: "/signup/starter",
  },
  {
    name: "Professional",
    description: "Ideal for growing teams and businesses",
    price: {
      monthly: 49,
      yearly: 490, // ~20% discount for yearly billing
    },
    features: [
      "Unlimited integrations",
      "Advanced AI analytics",
      "Priority support",
      "50GB storage",
      "Team collaboration tools",
      "Custom workflows",
      "API access",
    ],
    buttonText: "Start Free Trial",
    isPopular: true,
    href: "/signup/professional",
  },
  {
    name: "Enterprise",
    description: "For large organizations with custom needs",
    price: {
      monthly: 149,
      yearly: 1490, // ~20% discount for yearly billing
    },
    features: [
      "Everything in Professional",
      "Unlimited storage",
      "24/7 phone support",
      "Custom integrations",
      "SSO authentication",
      "Advanced security features",
      "Dedicated account manager",
    ],
    buttonText: "Contact Sales",
    href: "/contact",
  },
]

// Main Pricing Component
export const PricingSection: React.FC<{ className?: string }> = ({
  className,
}) => {
  const [frequency, setFrequency] = useState<FREQUENCY>("monthly")

  return (
    <div className={cn("w-full px-4 py-20", className)}>
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          pillText="Pricing"
          title="Choose Your Plan"
          description="Select the perfect plan for your needs with transparent pricing"
          className="mb-12"
        />
        <PricingFrequencyToggle
          frequency={frequency}
          setFrequency={setFrequency}
          className="mb-12 flex justify-center"
        />
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
          {PRICING_PLANS.map((plan, index) => (
            <PricingCard
              key={plan.name}
              plan={plan}
              frequency={frequency}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
