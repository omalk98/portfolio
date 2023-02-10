import { Icon } from '../assets/Icons';
import { PostData } from './PostData';
import { SocialLink } from './SocialLink';

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

export type {
  PostData,
  PostCardProps,
  PostProps,
  NavItemProps,
  NavListProps,
  SocialIconProps
};
