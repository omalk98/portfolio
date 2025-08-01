import { Contact } from "@/types";
import { LuMail, LuPhone, LuMapPin } from "react-icons/lu";
import { LuGithub, LuLinkedin, LuInstagram } from "react-icons/lu";

export const myLocation: Contact = {
  icon: LuMapPin,
  label: "Location",
  value: "North York, ON",
  href: "",
  color: "red-400",
};

export const contactLinks: Contact[] = [
  {
    icon: LuMail,
    label: "Email",
    value: "omalk298@gmail.com",
    href: "mailto:omalk298@gmail.com",
    // blue-400
    color: "#60a5fa",
  },
  {
    icon: LuPhone,
    label: "Phone",
    value: "+1 *** *** ****",
    href: "tel:+1**********",
    // green-400
    color: "#4ade80",
  },
  {
    icon: LuGithub,
    label: "GitHub",
    value: "github.com/omalk98",
    href: "https://github.com/omalk98",
    // purple-400
    color: "#c084fc",
  },
  {
    icon: LuLinkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/omalk98",
    href: "https://www.linkedin.com/in/omalk98",
    // blue-500
    color: "#3b89f6",
  },
  {
    icon: LuInstagram,
    label: "Instagram",
    value: "instagram.com/omalk298",
    href: "https://www.instagram.com/omalk298",
    // pink-400
    color: "#f472b5",
  },
];