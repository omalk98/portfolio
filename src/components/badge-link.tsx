import { cn } from "@/lib/utils";
import LinkWrapper from "./link-wrapper";
import { Badge } from "./ui/badge";

export default function BadgeLink({
  text,
  href,
  icon: Icon,
  color = "#16a34a",
}: {
  text: string;
  href?: string;
  icon?: React.ComponentType<React.ComponentProps<"svg">>;
  color?: string;
}) {
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
            width={16}
            height={16}
            className='mr-1'
          />
        )}
        {text}
      </Badge>
    </LinkWrapper>
  );
}
