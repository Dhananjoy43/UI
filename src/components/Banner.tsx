"use client"

import { useRef } from "react"
import { ArrowRightIcon } from "lucide-react"
import { motion, useScroll, useTransform } from "motion/react"

export const Banner = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"], // Trigger when banner enters/leaves viewport
  })

  // Scroll-triggered animation for banner content
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1])
  const y = useTransform(scrollYProgress, [0, 0.3], [30, 0]) // Slide-up effect

  return (
    <div
      ref={containerRef}
      className="text-foreground flex h-12 items-center justify-center bg-[linear-gradient(to_right,#6B21A8,#A855F7,#D8B4FE)] px-4"
    >
      <motion.p
        style={{ opacity, y }}
        className="flex items-center justify-center text-base leading-none font-medium"
      >
        <span className="mr-2 hidden sm:inline">
          ✨ Discover NeuraNest’s AI-Powered Toolkit for Free!{" "}
        </span>
        <a
          href="/signup"
          className="group text-white underline-offset-2 hover:underline"
        >
          Try NeuraNest Now
          <ArrowRightIcon
            className="ms-2 -mt-0.5 inline-flex opacity-80 transition-transform group-hover:translate-x-0.5"
            size={16}
            aria-hidden="true"
          />
        </a>
      </motion.p>
    </div>
  )
}
