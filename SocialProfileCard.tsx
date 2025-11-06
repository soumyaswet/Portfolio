import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface SocialProfileCardProps {
  platform: string;
  handle: string;
  url: string;
  icon: React.ReactNode;
  variant: "linkedin" | "instagram" | "x";
}

export const SocialProfileCard = ({
  platform,
  handle,
  url,
  icon,
  variant,
}: SocialProfileCardProps) => {
  const variantStyles = {
    linkedin: {
      card: "hover:shadow-[0_15px_45px_rgba(10,102,194,0.4)] dark:hover:shadow-[0_15px_45px_rgba(10,102,194,0.3)]",
      iconBg: "bg-[#0A66C2] shadow-[0_10px_30px_rgba(10,102,194,0.4)]",
      hoverBorder: "hover:border-[#0A66C2]",
    },
    instagram: {
      card: "hover:shadow-[0_15px_45px_rgba(225,48,108,0.4)] dark:hover:shadow-[0_15px_45px_rgba(225,48,108,0.3)]",
      iconBg: "bg-gradient-to-br from-[#f09433] via-[#e6683c] via-[#dc2743] via-[#cc2366] to-[#bc1888] shadow-[0_10px_30px_rgba(225,48,108,0.4)]",
      hoverBorder: "hover:border-[#E1306C]",
    },
    x: {
      card: "hover:shadow-[0_15px_45px_rgba(255,255,255,0.2)] dark:hover:shadow-[0_15px_45px_rgba(255,255,255,0.15)]",
      iconBg: "bg-black dark:bg-white shadow-[0_10px_30px_rgba(0,0,0,0.3)]",
      hoverBorder: "hover:border-gray-800 dark:hover:border-white",
    },
  };

  const styles = variantStyles[variant];

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group relative flex flex-col items-center gap-6 p-10 min-w-[280px] rounded-2xl overflow-hidden transition-all duration-500 ease-out hover:scale-105 hover:-translate-y-2",
        "bg-white/80 dark:bg-white/5 backdrop-blur-xl",
        "border-2 border-gray-200/50 dark:border-white/10",
        "shadow-[0_8px_32px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)]",
        styles.card,
        styles.hoverBorder
      )}
    >
      {/* Shimmer effect */}
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      {/* Icon */}
      <div
        className={cn(
          "w-[100px] h-[100px] rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 animate-pulse-slow",
          styles.iconBg
        )}
      >
        {icon}
      </div>

      {/* Content */}
      <div className="text-center space-y-4">
        <div className="space-y-2">
          <h3 className="text-2xl font-bold tracking-wide text-foreground">
            {platform}
          </h3>
          <p className="text-muted-foreground">{handle}</p>
        </div>

        <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-primary/10 dark:bg-white/10 border border-primary/30 dark:border-white/20 text-sm font-medium text-foreground transition-all duration-300 group-hover:bg-primary/20 dark:group-hover:bg-white/20 group-hover:border-primary/50 dark:group-hover:border-white/40">
          Visit Profile
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </a>
  );
};
