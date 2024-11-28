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
}: BadgeLinkProps) {
  const isDark = useDarkMode();
  return (
    <LinkWrapper href={href}>
      <Badge
        title={text}
        variant='outline'
        className={cn(
          "pl-2 rounded-full transition-transform duration-150 ease-in-out hover:scale-110 shadow-md",
          href ? "cursor-pointer" : "cursor-default"
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
            size={16}
            className='mr-1'
          />
        )}
        {text}
      </Badge>
    </LinkWrapper>
  );
}
