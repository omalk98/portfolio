import NavigationBar from '../navigation-bar';
import SocialMediaLinks from '../social-media-links';
import { Download, PDF } from '../../assets/Icons';
import './header.css';

function Title() {
  return (
    <div className="head-title">
      <img
        src="/portfolio/images/me.png"
        alt="cartoon me"
        loading="lazy"
        className="logo"
      />
      <span className="head-text">
        Omar Hussein
        <SocialMediaLinks />
      </span>
    </div>
  );
}

function Resume() {
  return (
    <div className="resume">
      <a
        href="/portfolio/resume.pdf"
        download="Omar-Hussein_resume.pdf"
        className="download-resume"
        title="Download Resume"
      >
        <span>
          <PDF /> Resume <Download />
        </span>
      </a>
    </div>
  );
}

export default function Header() {
  return (
    <header className="header">
      <Title />
      <Resume />
      <NavigationBar />
    </header>
  );
}
