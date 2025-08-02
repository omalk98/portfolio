import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { BadgeLinkProps } from "@/types";
import BadgeLink from "./badge-link";
import InfiniteScroll from "./infinate-scroll";

export default function DetailCard({
  title,
  description,
  content,
  date,
  badges,
  badgeCarousel,
  className,
  variant = "light",
  children,
  ...props
}: {
  title?: React.ReactNode;
  content?: React.ReactNode;
  description?: React.ReactNode;
  date?: React.ReactNode;
  badges?: BadgeLinkProps[];
  badgeCarousel?: BadgeLinkProps[];
  className?: string;
  variant?: "light" | "dark";
  children?: React.ReactNode;
  props?: typeof Card;
}) {
  return (
    <Card
      className={cn(
        "border-none h-full w-full relative overflow-hidden",
        variant === "light"
          ? "bg-slate-200/50 dark:bg-gray-700/40"
          : "bg-slate-400/50 dark:bg-gray-800/50",
        className
      )}
      {...props}
    >
      <div className='relative z-10'>
        <CardHeader className='pb-2.5 p-4'>
          <div className='flex justify-between items-start'>
            <div className='w-full'>
              {title && (
                <CardTitle className='text-2xl font-semibold'>
                  {title}
                </CardTitle>
              )}
              {description && (
                <CardDescription className='text-gray-900 dark:text-gray-400'>
                  {description}
                </CardDescription>
              )}
            </div>
            {date && (
              <span className='text-gray-800 dark:text-gray-300 ml-3'>
                {date}
              </span>
            )}
          </div>
          {badges && (
            <div className='flex flex-wrap pt-2'>
              {badges.map((badge, index) => (
                <>
                <BadgeLink
                  size='lg'
                  className={cn(
                    "mx-2 my-1 hidden md:inline-flex",
                    index === 0  && "ml-0",
                    index === badges.length - 1  && "mr-0"
                  )}
                  key={`card-badge-${index}`}
                  {...badge}
                />
                <BadgeLink
                  size='md'
                  className={cn(
                    "mx-2 my-1 md:hidden",
                    index === 0  && "ml-0",
                    index === badges.length - 1  && "mr-0"
                  )}
                  key={`card-badge-m-${index}`}
                  {...badge}
                />
                </>
              ))}
            </div>
          )}
          {badgeCarousel && (
            <InfiniteScroll
              speed='slow'
              items={badgeCarousel}
              renderComponent={(item) => (
                <BadgeLink
                  size='sm'
                  className='m-1'
                  {...item}
                />
              )}
            />
          )}
        </CardHeader>
        {content && (
          <CardContent className='text-gray-800 dark:text-gray-300'>
            {content}
          </CardContent>
        )}
      </div>
      {children}
    </Card>
  );
}
