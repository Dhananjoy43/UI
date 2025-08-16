"use client"

import { motion } from "motion/react"

import { cn } from "@/lib/utils"

interface BorderTrailProps {
  className?: string
  size?: number
  style?: React.CSSProperties
}

export const AnimatedBorder = ({
  className,
  size = 60,
  style,
}: BorderTrailProps) => {
  return (
    <div className="pointer-events-none absolute inset-0 rounded-[inherit] border border-transparent [mask-image:linear-gradient(transparent,transparent),linear-gradient(#000,#000)] [mask-composite:intersect] [mask-clip:padding-box,border-box]">
      <motion.div
        className={cn("bg-primary/50 absolute aspect-square", className)}
        style={{
          width: size,
          offsetPath: `rect(0 auto auto 0 round ${size}px)`,
          ...style,
        }}
        animate={{
          offsetDistance: ["0%", "100%"],
        }}
        transition={{
          repeat: Infinity,
          duration: 5,
          ease: "linear",
        }}
      />
    </div>
  )
}
