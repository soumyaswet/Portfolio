import { cn } from "@/lib/utils";

interface GradientOrbProps {
  className?: string;
  variant?: "orb1" | "orb2" | "orb3" | "orb4";
}

export const GradientOrb = ({ className, variant = "orb1" }: GradientOrbProps) => {
  const variantStyles = {
    orb1: "w-[500px] h-[500px] top-[-100px] left-[-100px] bg-[radial-gradient(circle,hsl(var(--orb-1)/0.4),transparent)]",
    orb2: "w-[400px] h-[400px] bottom-[-50px] right-[-50px] bg-[radial-gradient(circle,hsl(var(--orb-2)/0.4),transparent)] animation-delay-[5s]",
    orb3: "w-[600px] h-[600px] top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle,hsl(var(--orb-3)/0.3),transparent)] animation-delay-[10s]",
    orb4: "w-[350px] h-[350px] top-[20%] right-[10%] bg-[radial-gradient(circle,hsl(var(--orb-1)/0.35),transparent)] animation-delay-[15s]",
  };

  return (
    <div
      className={cn(
        "fixed rounded-full blur-[80px] animate-float-orb pointer-events-none",
        variantStyles[variant],
        className
      )}
    />
  );
};
