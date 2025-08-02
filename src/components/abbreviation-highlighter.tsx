import {
  TooltipProvider,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { dictionary } from "@/data/dictionary";

export default function AbbreviationHighlighter({
  children,
}: {
  children: string;
}) {
  return (
    <>
      {children.split(/([\s-_])/).map((word, index) => {
        const definition = dictionary[word.toUpperCase()];
        return definition ? (
          <TooltipProvider delayDuration={300}>
            <Tooltip key={index}>
              <TooltipTrigger asChild>
                <span className='cursor-pointer font-semibold text text-yellow-700 dark:text-cyan-500'>{word}</span>
              </TooltipTrigger>
              {definition && <TooltipContent>{definition}</TooltipContent>}
            </Tooltip>
          </TooltipProvider>
        ) : (
          word
        );
      })}
    </>
  );
}
