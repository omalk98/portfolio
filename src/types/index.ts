import { type IconType } from "react-icons/lib";

export type { IconType };

export interface Contact {
  icon: IconType;
  label: string;
  value: string;
  href: string;
  color: string;
}

export interface Experience {
  company: string;
  role: string;
  type: string;
  duration: string;
  location: string;
  highlights: string[];
}

export interface Project {
  title: string;
  description: string;
  stack: string[];
  github: string;
  live: string;
}

export interface BadgeLinkProps {
  text: string;
  href?: string;
  icon?: IconType | null;
  color?: string;
  textColor?: string;
  className?: string;
}
