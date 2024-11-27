import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export default function SectionWrapper({
  id,
  fullWidth = false,
  title,
  className,
  children,
}: {
  id?: string;
  fullWidth?: boolean;
  title?: string;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn("py-20 relative", !fullWidth && "px-4", className)}
    >
      <div
        className={cn("mx-auto max-w-[1200px]", !fullWidth && "container px-4")}
      >
        <h2 className='text-4xl font-bold mb-20 text-center'>{title}</h2>
        {children}
      </div>
    </section>
  );
}
