import NavigationBar from '../navigation-bar/NavigationBar';
import './header.css';

function Title() {
  return (
    <div className="head-title">
      <img
        src="src/assets/me.png"
        alt="cartoon me"
        className="logo"
      />
      <span className="head-text">Omar Hussein</span>
    </div>
  );
}

export default function Header() {
  return (
    <header className="header">
      <Title />
      <NavigationBar />
    </header>
  );
}
