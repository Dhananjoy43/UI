"use client"

import React, {
  ForwardRefExoticComponent,
  RefAttributes,
  useEffect,
  useRef,
} from "react"
import {
  BarChart,
  Brain,
  Clock,
  LucideProps,
  MessageSquare,
  Puzzle,
  Shield,
  Target,
  Users,
  Zap,
} from "lucide-react"
import { motion, useMotionTemplate, useMotionValue } from "motion/react"

import { Button } from "@/components/ui/button"
import { Heading } from "@/components/typography/heading"
import { Paragraph } from "@/components/typography/paragraph"

import { Card, CardContent, CardHeader } from "./ui/card"

// Map icon strings to lucide-react components
const ICON_MAP: Record<
  string,
  ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >
> = {
  Puzzle,
  Target,
  Shield,
  Brain,
  MessageSquare,
  BarChart,
  Zap,
  Clock,
  Users,
}

export const FeatureCard: React.FC<{
  title: string
  description: string
  icon: string
}> = ({ icon, title, description }) => {
  const offsetX = useMotionValue(-100)
  const offsetY = useMotionValue(-100)
  const maskImage = useMotionTemplate`radial-gradient(100px 100px at ${offsetX}px ${offsetY}px, black, transparent)`
  const border = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      if (!border.current) return

      const borderRect = border.current?.getBoundingClientRect()
      offsetX.set(e.x - borderRect.x)
      offsetY.set(e.y - borderRect.y)
    }
    window.addEventListener("mousemove", updateMousePosition)
    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
    }
  }, [offsetX, offsetY])

  // Get the icon component from the map
  const Icon = ICON_MAP[icon]

  if (!Icon) {
    console.error(`Icon "${icon}" not found in ICON_MAP`)
    return null
  }

  return (
    <Card
      key={title}
      className="bg-background relative gap-2 rounded-md shadow-md transition-transform duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:rotate-[0.5deg]"
      style={{
        perspective: "1000px",
        transformStyle: "preserve-3d",
      }}
    >
      <motion.div
        ref={border}
        style={{
          maskImage,
          WebkitMaskImage: maskImage,
        }}
        className="absolute inset-0 rounded-md border border-purple-500"
      />
      <CardHeader>
        <Button size={"icon"}>
          <Icon />
        </Button>
      </CardHeader>
      <CardContent>
        <Heading as="h5" weight="bold">
          {title}
        </Heading>
        <Paragraph className="text-base tracking-tight">
          {description}
        </Paragraph>
      </CardContent>
    </Card>
  )
}
