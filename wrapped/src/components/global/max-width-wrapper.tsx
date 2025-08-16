import { ComponentPropsWithoutRef, ElementType, ReactNode } from "react"

import { cn } from "@/lib/utils"

interface MaxWidthWrapperProps<T extends ElementType = "div"> {
  as?: T
  children: ReactNode
  className?: string
}

type Props<T extends ElementType = "div"> = Omit<
  ComponentPropsWithoutRef<T>,
  keyof MaxWidthWrapperProps<T>
> &
  MaxWidthWrapperProps<T>

export const MaxWidthWrapper = <T extends ElementType = "div">({
  as,
  children,
  className,
  ...props
}: Props<T>) => {
  const Component = as || "div"

  return (
    <Component
      className={cn(
        "mx-auto flex max-w-6xl flex-col items-center justify-center px-4 sm:px-6 lg:px-8",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  )
}
