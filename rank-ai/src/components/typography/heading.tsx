import type * as React from "react"

import { cn } from "@/lib/utils"

// Define types for the heading props
type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
type HeadingVariant = "primary" | "secondary" | "muted"
type HeadingWeight =
  | "light"
  | "normal"
  | "medium"
  | "semibold"
  | "bold"
  | "extrabold"

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as: HeadingLevel
  variant?: HeadingVariant
  weight?: HeadingWeight
  className?: string
  children: React.ReactNode
}

// Define styles for variants
const variantStyles: Record<HeadingVariant, string> = {
  primary: "text-gray-900 dark:text-white",
  secondary: "text-blue-600 dark:text-blue-400",
  muted: "text-gray-600 dark:text-gray-400",
}

// Define font weights
const weightStyles: Record<HeadingWeight, string> = {
  light: "font-light",
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
  extrabold: "font-extrabold",
}

// Define responsive font sizes and base styles for each heading level
// Define responsive font sizes and base styles for each heading level
const levelStyles: Record<HeadingLevel, string> = {
  h1: "text-4xl md:text-5xl xl:text-7xl",
  h2: "text-3xl text-left sm:text-4xl md:text-5xl",
  h3: "text-2xl sm:text-3xl md:text-4xl",
  h4: "text-xl sm:text-2xl",
  h5: "text-lg sm:text-xl",
  h6: "text-base sm:text-lg text-center",
}

// Define default font weights for each heading level
const defaultWeights: Record<HeadingLevel, HeadingWeight> = {
  h1: "extrabold",
  h2: "bold",
  h3: "bold",
  h4: "semibold",
  h5: "medium",
  h6: "medium",
}

export const Heading: React.FC<HeadingProps> = ({
  as: Tag,
  variant = "primary",
  weight,
  className,
  children,
  ...props
}) => {
  const finalWeight = weight || defaultWeights[Tag]

  return (
    <Tag
      className={cn(
        levelStyles[Tag], // Base styles with responsive font sizes
        variantStyles[variant], // Color variants
        weightStyles[finalWeight], // Font weight (default or override)
        "tracking-tight", // Consistent letter spacing
        "mb-2", // Consistent margin-bottom
        className // Custom classes to override or extend
      )}
      {...props}
    >
      {children}
    </Tag>
  )
}
