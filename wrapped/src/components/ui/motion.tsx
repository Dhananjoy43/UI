// components/Motion.tsx
"use client"

import * as React from "react"
import { motion, useInView, Variants, type Transition } from "motion/react"

import { cn } from "@/lib/utils"

// Define animation types with directional rotates
type AnimationType =
  | "fade"
  | "slideLeft"
  | "slideRight"
  | "slideUp"
  | "slideDown"
  | "scale"
  | "rotateLeft"
  | "rotateRight"
  | "rotateUp"
  | "rotateDown"
  | "bounce"
  | "pulse"
  | "flip"
  | "zoom"

// Define props for the Motion component
type MotionOwnProps<E extends React.ElementType = React.ElementType> = {
  as?: E
  children: React.ReactNode
  animation?: AnimationType
  duration?: number
  delay?: number
  className?: string
  scrollTrigger?: boolean
  scrollThreshold?: number
}

type MotionProps<E extends React.ElementType> = MotionOwnProps<E> &
  Omit<React.ComponentProps<E>, keyof MotionOwnProps>

// Predefined animation variants
const animationVariants: Record<AnimationType, Variants> = {
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  slideLeft: {
    initial: { x: -100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: 100, opacity: 0 },
  },
  slideRight: {
    initial: { x: 100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: -100, opacity: 0 },
  },
  slideUp: {
    initial: { y: 100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: -100, opacity: 0 },
  },
  slideDown: {
    initial: { y: -100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: 100, opacity: 0 },
  },
  scale: {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.8, opacity: 0 },
  },
  rotateLeft: {
    initial: { rotateY: -15, opacity: 0 },
    animate: { rotateY: 0, opacity: 1 },
    exit: { rotateY: 15, opacity: 0 },
  },
  rotateRight: {
    initial: { rotateY: 15, opacity: 0 },
    animate: { rotateY: 0, opacity: 1 },
    exit: { rotateY: -15, opacity: 0 },
  },
  rotateUp: {
    initial: { rotateX: 15, opacity: 0 },
    animate: { rotateX: 0, opacity: 1 },
    exit: { rotateX: -15, opacity: 0 },
  },
  rotateDown: {
    initial: { rotateX: -15, opacity: 0 },
    animate: { rotateX: 0, opacity: 1 },
    exit: { rotateX: 15, opacity: 0 },
  },
  bounce: {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: 50, opacity: 0 },
  },
  pulse: {
    initial: { scale: 0.95, opacity: 0.8 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.95, opacity: 0 },
  },
  flip: {
    initial: { rotateX: 90, opacity: 0 },
    animate: { rotateX: 0, opacity: 1 },
    exit: { rotateX: -90, opacity: 0 },
  },
  zoom: {
    initial: { scale: 0.5, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.5, opacity: 0 },
  },
}

export const Motion = <E extends React.ElementType = "div">({
  as,
  children,
  animation = "fade",
  duration = 0.5,
  delay = 0,
  className,
  scrollTrigger = false,
  scrollThreshold = 0.1,
  ...props
}: MotionProps<E>) => {
  const Component = as || "div"

  const MotionTag = motion(Component as React.ComponentType)
  const ref = React.useRef(null)
  const isInView = useInView(ref, { amount: scrollThreshold, once: true })

  // Adjust animation state based on scrollTrigger
  const animateState = scrollTrigger
    ? isInView
      ? "animate"
      : "initial"
    : "animate"

  // Customize transition based on animation type
  const transition: Transition = {
    duration,
    delay,
    ease: animation === "pulse" ? undefined : "easeInOut",
    ...(animation === "bounce"
      ? { type: "spring", stiffness: 100, damping: 10 }
      : {}),
    ...(animation === "zoom"
      ? { type: "spring", stiffness: 120, damping: 15 }
      : {}),
    ...(animation === "pulse"
      ? { repeat: Infinity, repeatType: "reverse", duration: 0.8 }
      : {}),
  }

  return (
    <MotionTag
      ref={ref}
      initial="initial"
      animate={animateState}
      exit="exit"
      variants={animationVariants[animation]}
      transition={transition}
      className={cn("inline-block transform-gpu", className)}
      style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
      {...props}
    >
      {children}
    </MotionTag>
  )
}
