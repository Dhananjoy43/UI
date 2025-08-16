"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "motion/react"

import { cn } from "@/lib/utils"
import { BoxReveal } from "@/components/ui/box-reveal"
import { Heading } from "@/components/typography/heading"
import { Paragraph } from "@/components/typography/paragraph"

interface SectionHeadingProps {
  title: string
  description: string
  className?: string
  pillText?: string
  pillClassName?: string
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  description,
  className,
  pillText,
  pillClassName,
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"], // Trigger when section enters/leaves viewport
  })

  // Map scroll progress to animation properties with enhanced slide-up
  const pillOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1])
  // const pillY = useTransform(scrollYProgress, [0, 0.2], [40, 0]) // Increased from 20 to 40
  const headingOpacity = useTransform(scrollYProgress, [0.2, 0.4], [0.5, 1])
  // const headingY = useTransform(scrollYProgress, [0.2, 0.4], [50, 0]) // Increased from 20 to 50
  const paragraphOpacity = useTransform(scrollYProgress, [0.4, 0.6], [0.5, 1])
  // const paragraphY = useTransform(scrollYProgress, [0.4, 0.6], [50, 0]) // Increased from 20 to 50

  return (
    <div
      ref={containerRef}
      className={cn(
        "container mx-auto mb-12 flex max-w-3xl flex-col items-center p-2 text-center",
        className
      )}
    >
      {pillText && (
        <BoxReveal duration={0.1}>
          <motion.div
            style={{ opacity: pillOpacity }}
            whileHover={{
              scale: 1.05,
              filter: "brightness(1.1)",
              transition: { duration: 0.2 },
            }}
            className={cn(
              "mx-auto mb-4 inline-flex items-center rounded-full border bg-[linear-gradient(to_right,#6B21A8,#A855F7,#D8B4FE)] bg-clip-text px-3 py-1 text-sm font-medium text-transparent shadow-md",
              pillClassName
            )}
          >
            {pillText}
          </motion.div>
        </BoxReveal>
      )}
      <motion.div style={{ opacity: headingOpacity }}>
        <BoxReveal duration={0.2}>
          <Heading as="h2" className="text-center">
            {title}
          </Heading>
        </BoxReveal>
      </motion.div>
      <motion.div style={{ opacity: paragraphOpacity }}>
        <BoxReveal duration={0.4}>
          <Paragraph>{description}</Paragraph>
        </BoxReveal>
      </motion.div>
    </div>
  )
}
