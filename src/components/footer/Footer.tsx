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
          src="src/assets/ca.svg"
          alt="Canada"
        />
      </div>
      <div>
        Built with
        <img
          src="src/assets/vite.svg"
          alt="Vite"
          title="Vite"
        />
        Powered by
        <img
          src="src/assets/react.svg"
          alt="React"
          title="React"
        />
      </div>
    </footer>
  );
}
