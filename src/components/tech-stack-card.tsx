import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import BadgeLink from "@/components/badge-link";
import { BadgeLinkProps, IconType } from "@/types";
import { LuCheck } from "react-icons/lu";
// import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

//     <TooltipProvider delayDuration={300}>
//       <Tooltip>
//         <TooltipTrigger asChild>
//           <BadgeLink
//             key={index}
//             {...badge}
//           />
//         </TooltipTrigger>
//         <TooltipContent>
//           <p>{text} Technology</p>
//         </TooltipContent>
//       </Tooltip>
//     </TooltipProvider>

export default function TechStackCard({
  title,
  icons,
  badges,
}: {
  title: string;
  icons: { icon: IconType; color: string }[];
  badges: BadgeLinkProps[];
}) {
  return (
    <Card className='w-full h-full bg-slate-200/50 dark:bg-gray-700/40 max-w-md hover:shadow-lg transition-shadow duration-300 mx-auto'>
      <CardHeader className='pb-3'>
        <CardTitle className='flex items-center justify-between'>
          <div className='flex items-center gap-2'>
            <div className='flex items-center gap-1'>
              {icons.map((Icon, index) => (
                <Icon.icon
                  key={`tech-header-icon-${title}-${index}`}
                  className='w-6 h-6 mx-1'
                  style={{ color: Icon.color }}
                />
              ))}
            </div>
            <h2 className='text-lg font-semibold'>{title}</h2>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className='flex flex-wrap gap-2 items-center'>
          {badges.map((badge, index) => (
            <BadgeLink
              key={`tech-badge-${title}-${index}`}
              text={badge.text}
              icon={badge.icon ?? LuCheck}
              color={badge.color}
              textColor={badge.textColor}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
