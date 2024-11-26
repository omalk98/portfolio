import { Contact } from "@/types";
import { Mail, Phone, MapPin } from "lucide-react";
import { Github, Linkedin, Instagram } from "lucide-react";

export const myLocation: Contact = {
  icon: MapPin,
  label: "Location",
  value: "North York, ON",
  href: "",
  color: "red-400",
};

export const contactLinks: Contact[] = [
  {
    icon: Mail,
    label: "Email",
    value: "omalk298@gmail.com",
    href: "mailto:omalk298@gmail.com",
    // blue-400
    color: "#60a5fa",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (416) 434-4349",
    href: "tel:+14164344349",
    // green-400
    color: "#4ade80",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/omalk98",
    href: "https://github.com/omalk98",
    // purple-400
    color: "#c084fc",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/omalk98",
    href: "https://www.linkedin.com/in/omalk98",
    // blue-500
    color: "#3b89f6",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "instagram.com/omalk298",
    href: "https://www.instagram.com/omalk298",
    // pink-400
    color: "#f472b5",
  },
];