"use client"

import NumberFlow from "@number-flow/react"
import { Check, Star } from "lucide-react"
import { motion } from "motion/react"

import { cn } from "@/lib/utils"
import { AnimatedBorder } from "@/components/ui/animated-border"
import { Button } from "@/components/ui/button"
import { CardSpotlight } from "@/components/ui/card-spotlight"
import { Separator } from "@/components/ui/separator"
import { Heading } from "@/components/typography/heading"
import { Paragraph } from "@/components/typography/paragraph"

// Define types
export type FREQUENCY = "monthly" | "yearly"
const frequencies: FREQUENCY[] = ["monthly", "yearly"]

export interface PricingPlanProps {
  name: string
  description: string
  price: {
    monthly: number
    yearly: number
  }
  features: string[]
  buttonText: string
  isPopular?: boolean
  href?: string
}

interface PricingFrequencyToggleProps extends React.ComponentProps<"div"> {
  frequency: FREQUENCY
  setFrequency: React.Dispatch<React.SetStateAction<FREQUENCY>>
}

// Frequency Toggle Component
export const PricingFrequencyToggle = ({
  frequency,
  setFrequency,
  className,
  ...props
}: PricingFrequencyToggleProps) => {
  return (
    <div
      className={cn(
        "bg-muted/30 mx-auto flex w-fit rounded-full border p-1",
        className
      )}
      {...props}
    >
      {frequencies.map((freq) => (
        <button
          key={freq}
          onClick={() => setFrequency(freq)}
          className="relative px-4 py-1 text-sm capitalize"
        >
          <span
            className={cn(
              "relative z-10",
              frequency === freq && "text-background"
            )}
          >
            {freq === "monthly" ? freq : `${freq} (save 20%)`}
          </span>
          {frequency === freq && (
            <motion.span
              layoutId="frequency"
              transition={{ type: "spring", duration: 0.4 }}
              className="bg-foreground absolute inset-0 z-0 rounded-full mix-blend-difference"
            />
          )}
        </button>
      ))}
    </div>
  )
}

// Pricing Card Component
export const PricingCard = ({
  plan,
  frequency,
  index,
}: {
  plan: PricingPlanProps
  frequency: FREQUENCY
  index: number
}) => {
  return (
    <CardSpotlight className={cn("", plan.isPopular && "md:scale-105")}>
      {plan.isPopular && (
        <div className="absolute top-0 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
          <div className="bg-primary flex items-center gap-1.5 rounded-full px-2 py-1">
            <Star className="text-primary-foreground size-3 fill-current" />
            <span className="text-primary-foreground text-xs font-semibold">
              Most Popular
            </span>
          </div>
        </div>
      )}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
        className={cn(
          "from-background/40 relative flex h-full w-full flex-col overflow-hidden rounded-2xl bg-transparent bg-gradient-to-b to-black",
          plan.isPopular &&
            "bg-gradient-to-b from-purple-900/40 to-black shadow-2xl"
        )}
      >
        {plan.isPopular && <AnimatedBorder />}
        <div className="flex h-full grow flex-col p-4 py-8">
          <div className="mb-8">
            <Heading as="h3" className="mb-1 text-center">
              {plan.name}
            </Heading>
            <Paragraph className="text-center text-base">
              {plan.description}
            </Paragraph>
            <div className="mt-4 flex items-baseline justify-center gap-2">
              <NumberFlow
                value={Number(plan.price[frequency])}
                format={{
                  style: "currency",
                  currency: "USD",
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                }}
                transformTiming={{
                  duration: 500,
                  easing: "ease-out",
                }}
                willChange
                className="font-variant-numeric: text-4xl font-bold tabular-nums"
              />
              <span className="text-muted-foreground">/{frequency}</span>
            </div>
            {frequency === "yearly" && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-muted-foreground mt-1 text-center text-sm"
              >
                Billed annually
              </motion.p>
            )}
          </div>
          <Separator />
          <div className="mt-4 mb-8 space-y-4">
            {plan.features.map((feature, featureIndex) => (
              <motion.div
                key={featureIndex}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 + featureIndex * 0.05 }}
                className="flex items-start gap-3"
              >
                <Check className="text-primary mt-0.5 h-5 w-5 flex-shrink-0" />
                <span className="text-foreground text-sm">{feature}</span>
              </motion.div>
            ))}
          </div>
          <Button
            asChild
            className={cn(
              "mt-auto w-full",
              plan.isPopular
                ? "bg-primary text-primary-foreground hover:bg-primary/90"
                : "variant-outline"
            )}
            variant={plan.isPopular ? "default" : "outline"}
          >
            {plan.href ? (
              <a href={plan.href}>{plan.buttonText}</a>
            ) : (
              <span>{plan.buttonText}</span>
            )}
          </Button>
        </div>
      </motion.div>
    </CardSpotlight>
  )
}
