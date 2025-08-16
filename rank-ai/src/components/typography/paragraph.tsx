import { cn } from "@/lib/utils"

interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode
  className?: string
}

export const Paragraph = ({
  children,
  className,
  ...props
}: ParagraphProps) => {
  return (
    <p
      className={cn("text-foreground/70 text-lg text-pretty", className)}
      {...props}
    >
      {children}
    </p>
  )
}
