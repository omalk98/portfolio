import { ReactNode } from 'react';
import { Icon } from '../assets/Icons';
import { PostData } from './PostData';
import { ProjectData } from './ProjectData';
import { SocialLink } from './SocialLink';

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

export type {
  ProjectCardProps,
  ProjectProps,
  PostCardProps,
  PostProps,
  NavItemProps,
  NavListProps,
  SocialIconProps,
  BasicCardProps
};
