type Icon = import('../assets/Icons').Icon;

interface SocialLink {
  Icon: Icon;
  link: string;
  name: string;
}

interface PostData {
  id: number | string;
  title: string;
  text: string;
  date: Date;
  image: string;
}

interface ProjectData {
  link: string;
  title: string;
  text: string;
  date: Date;
}
