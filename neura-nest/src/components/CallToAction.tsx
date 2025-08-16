"use client"

import { useRef } from "react"
import Image from "next/image"
import emojiStarImage from "@/assets/images/emojistar.png"
import helixImage from "@/assets/images/helix2.png"
import { Send } from "lucide-react"
import { motion, useScroll, useTransform } from "motion/react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { SectionHeading } from "@/components/global/section-heading"

export const CallToAction = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  })
  const translateY = useTransform(scrollYProgress, [0, 1], [-80, 80])
  return (
    <div ref={containerRef} className="overflow-hidden bg-black py-16 md:py-40">
      <SectionHeading
        pillText="Start Now"
        title="Supercharge Your Business"
        description="Join thousands of teams using our AI-powered platform to automate workflows, gain deep insights, and accelerate growth. Sign up today!"
        className="mb-6 text-center"
      />
      <div className="relative container mx-auto mb-12 max-w-3xl text-center">
        <motion.div
          className="absolute -right-60 -bottom-40"
          style={{ translateY }}
        >
          <Image src={helixImage.src} height={200} width={200} alt="" />
        </motion.div>

        <motion.div
          className="absolute -top-40 -left-60"
          style={{ translateY }}
        >
          <Image src={emojiStarImage.src} height={200} width={200} alt="" />
        </motion.div>
      </div>
      <form
        action=""
        className="mx-auto flex max-w-md flex-row items-center justify-center gap-2 p-2"
      >
        <Input placeholder="name@email.com" />
        <Button>
          <Send />
          <span className="hidden sm:inline">Subscribe</span>
        </Button>
      </form>
    </div>
  )
}
