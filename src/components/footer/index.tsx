import { Love } from '../../assets/Icons';
import SocialMediaLinks from '../social-media-links';
import './footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        Made with
        <Love
          className="heart"
          title="Heart"
        />
        somewhere in
        <img
          title="Canada"
          src="/portfolio/images/ca.svg"
          alt="Canada"
          loading="lazy"
        />
      </div>
      <div>
        Built with
        <img
          src="/portfolio/images/vite.svg"
          alt="Vite"
          title="Vite"
          loading="lazy"
        />
        Powered by
        <img
          src="/portfolio/images/react.svg"
          alt="React"
          title="React"
          loading="lazy"
        />
      </div>
      <SocialMediaLinks />
      <div>
        &copy; 2023 <u>Omar Hussein</u>
      </div>
    </footer>
  );
}
