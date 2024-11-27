import { cn } from "@/lib/utils";
import LinkWrapper from "@/components/link-wrapper";
import { Badge } from "@/components/ui/badge";
import { type BadgeLinkProps } from "@/types";

export default function BadgeLink({
  text,
  href,
  icon: Icon,
  color = "#16a34a",
}: BadgeLinkProps) {
  return (
    <LinkWrapper href={href}>
      <Badge
        title={text}
        variant='outline'
        className={cn(
          "pl-2 rounded-full transition-transform duration-150 ease-in-out hover:scale-110 shadow-md text-white",
          href ? "cursor-pointer" : "cursor-default"
        )}
        style={{
          borderWidth: "1.5px",
          borderColor: color,
          backgroundColor: `${color}48`,
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
