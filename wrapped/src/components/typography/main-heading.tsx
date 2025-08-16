import React from "react"
import { LucideIcon } from "lucide-react"

import { cn } from "@/lib/utils"

import { Motion } from "../ui/motion"
import { Heading } from "./heading"
import { Paragraph } from "./paragraph"

interface MainHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  pill: string
  icon: LucideIcon
  title: string
  gradientText?: string
  description?: string
  className?: string
  containerClassName?: string
  descriptionClassName?: string
}

export const MainHeading = ({
  pill,
  icon: Icon,
  title,
  gradientText,
  description,
  className,
  containerClassName,
  descriptionClassName,
  ...props
}: MainHeadingProps) => {
  return (
    <div
      className={cn(
        "my-2 flex flex-col items-center gap-1",
        containerClassName
      )}
    >
      <Motion
        animation="zoom"
        duration={1.5}
        delay={0.1}
        className="group bg-background relative flex items-center overflow-hidden rounded-full border px-4 py-1 text-xs"
      >
        {<Icon className="mr-1 size-3 text-purple-600" />}
        <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-xs font-medium text-transparent">
          {pill}
        </span>
      </Motion>
      <Motion
        animation="slideUp"
        duration={0.8}
        delay={0.2}
        className="font-oswald text-center text-3xl font-bold md:text-4xl xl:text-5xl"
      >
        <Heading as="h2" className={cn(className)} {...props}>
          {title}
          {gradientText && (
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              {" "}
              {gradientText}
            </span>
          )}
        </Heading>
      </Motion>
      {description && (
        <Motion animation="slideUp" duration={0.8} delay={0.3}>
          <Paragraph
            className={cn(
              "text-muted-foreground max-w-screen-md text-center",
              descriptionClassName
            )}
          >
            {description}
          </Paragraph>
        </Motion>
      )}
    </div>
  )
}

MainHeading.displayName = "MainHeading"
