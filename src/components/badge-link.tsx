import { cn } from "@/lib/utils";
import LinkWrapper from "@/components/link-wrapper";
import { Badge } from "@/components/ui/badge";
import { type BadgeLinkProps } from "@/types";
import { useDarkMode } from "@/hooks/use-dark-mode";

export default function BadgeLink({
  text,
  href,
  icon: Icon,
  color = "#16a34a",
  textColor,
  size = "sm",
  className,
}: BadgeLinkProps) {
  const isDark = useDarkMode();
  return (
    <LinkWrapper href={href}>
      <Badge
        title={text}
        variant='outline'
        className={cn(
          "rounded-full transition-transform duration-150 ease-in-out hover:scale-110 shadow-md text-nowrap",
          href ? "cursor-pointer" : "cursor-default",
          size === "sm"
            ? "text-xs pl-2"
            : size === "md"
            ? "text-sm"
            : "text-lg px-3",
          className
        )}
        style={{
          color: textColor ?? "#FFFFFF",
          borderWidth: "1.5px",
          borderColor: color,
          backgroundColor: `${color}${isDark ? "48" : "a0"}`,
        }}
      >
        {Icon && (
          <Icon
            size={size === "sm" ? 16 : size === "md" ? 20 : 26}
            className={size === "sm" ? "mr-1" : size === "md" ? "mr-2" : "mr-3"}
          />
        )}
        {text}
      </Badge>
    </LinkWrapper>
  );
}
