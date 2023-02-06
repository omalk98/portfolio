import { SocialIconProps } from '../../types/PropTypes';
import socialLinks from '../../assets/social-data';
import './social-media-links.css';

function SocialIcon({ Icon, link, name }: SocialIconProps) {
  return (
    <li
      className="social-icon"
      title={name}
    >
      <a
        href={link}
        target="_blank"
      >
        <Icon />
      </a>
    </li>
  );
}

export default function SocialMediaLinks() {
  return (
    <ul className="social-links">
      {socialLinks.map((socialLink) => (
        <SocialIcon
          key={socialLink.name}
          {...socialLink}
        />
      ))}
    </ul>
  );
}
