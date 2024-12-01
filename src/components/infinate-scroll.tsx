import React, { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const speedClasses = {
  slow: "animate-infinite-scroll-slow",
  default: "animate-infinite-scroll",
  fast: "animate-infinite-scroll-fast",
};

export default function InfiniteScroll<T>({
  items,
  renderComponent,
  speed = "default",
  className,
}: {
  items: T[];
  renderComponent: (item: T) => React.ReactNode;
  speed?: "slow" | "default" | "fast";
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number | undefined>(undefined);

  useEffect(() => {
    if (ref.current) {
      setHeight(ref.current.clientHeight);
    }
  }, [items]); // Recalculate height when items change

  return (
    <div
      className={cn("w-full overflow-hidden", className)}
      style={{ height }}
    >
      <div
        ref={ref}
        className={cn(
          "inline-flex w-max absolute",
          speedClasses[speed]
        )}
      >
        {items.map((item, index) => (
          <React.Fragment key={index}>
            {renderComponent(item)}
          </React.Fragment>
        ))}
        {items.map((item, index) => (
          <React.Fragment key={`clone-${index}`}>
            {renderComponent(item)}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
