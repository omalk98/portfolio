import { ReactNode } from "react";

export default function LinkWrapper({
  href,
  children,
  ...props
}: {
  href: string | undefined;
  children: ReactNode;
  [key: string]: unknown;
}) {
  if (!href) {
    return <div {...props}>{children}</div>;
  }
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      {...props}
    >
      {children}
    </a>
  );
}
