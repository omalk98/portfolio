interface ProjectCardProps extends ProjectData {
  target?: boolean;
}

interface ProjectProps {
  list: ProjectData[];
}

interface PostCardProps extends PostData {
  target?: boolean;
}

interface PostProps {
  list: PostData[];
}

interface NavItemProps {
  link: string;
  text: string;
  icon: Icon;
  color: string;
}

interface NavListProps {
  items: NavItemProps[];
}

interface SocialIconProps extends SocialLink {}

interface BasicCardProps {
  children: ReactNode;
  title: string;
  link: string;
  target?: boolean;
}
