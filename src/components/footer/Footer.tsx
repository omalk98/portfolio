import { Love } from '../../assets/Icons';
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
          src="ca.svg"
          alt="Canada"
        />
      </div>
      <div>
        Built with
        <img
          src="vite.svg"
          alt="Vite"
          title="Vite"
        />
        Powered by
        <img
          src="react.svg"
          alt="React"
          title="React"
        />
      </div>
      <div>
        &copy;<u>Omar Hussein</u>2023
      </div>
    </footer>
  );
}
