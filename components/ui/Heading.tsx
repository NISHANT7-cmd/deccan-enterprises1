import { cn } from "@/lib/utils";

interface HeadingProps {
  children: React.ReactNode;
  className?: string;
}

export default function Heading({
  children,
  className,
}: HeadingProps) {
  return (
    <h2
      className={cn(
        "font-[var(--font-poppins)] text-4xl font-bold tracking-tight lg:text-5xl",
        className
      )}
    >
      {children}
    </h2>
  );
} 