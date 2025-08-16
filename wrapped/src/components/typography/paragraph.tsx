import { cn } from "@/lib/utils";

interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
  className?: string;
}

export const Paragraph = ({
  children,
  className,
  ...props
}: ParagraphProps) => {
  return (
    <p
      className={cn(
        "text-muted-foreground text-pretty text-lg leading-relaxed",
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
};
