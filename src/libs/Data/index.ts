import { IconName } from "@/components/DynamicIcon";

export interface HeaderProps {
  name: string;
  hash: string;
  icon: IconName;
}

export const LINKS: HeaderProps[] = [
  {
    name: "Home",
    hash: "#home",
    icon: "HomeIcon",
  },
  {
    name: "About",
    hash: "#about",
    icon: "PencilIcon",
  },
  {
    name: "Projects",
    hash: "#projects",
    icon: "BriefcaseIcon",
  },
  {
    name: "Skills",
    hash: "#skills",
    icon: "Square3Stack3DIcon",
  },
  {
    name: "Experience",
    hash: "#experience",
    icon: "AcademicCapIcon",
  },
  {
    name: "Contact",
    hash: "#contact",
    icon: "ChatBubbleLeftEllipsisIcon",
  },
];
