export interface Contact {
  icon: React.ComponentType<React.ComponentProps<"svg">>;
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