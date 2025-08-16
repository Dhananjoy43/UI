"use client"

import { useRef } from "react"
import Image from "next/image"
import appScreen from "@/assets/images/app-screen.png"
import { motion, useScroll, useTransform } from "motion/react"

export const ProductShowcaseImage = () => {
  const appImage = useRef<HTMLImageElement>(null)
  const { scrollYProgress } = useScroll({
    target: appImage,
    offset: ["start end", "end end"],
  })
  const rotateX = useTransform(scrollYProgress, [0, 1], [15, 0])
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1])
  return (
    <motion.div
      className="mx-auto max-w-6xl p-2"
      style={{
        opacity,
        rotateX,
        transformPerspective: "800px",
      }}
    >
      <Image
        ref={appImage}
        src={appScreen.src}
        height={appScreen.height}
        width={appScreen.width}
        alt="The product screenshot"
        className="h-auto w-full"
      />
    </motion.div>
  )
}
