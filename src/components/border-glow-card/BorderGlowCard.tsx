import { NavLink } from 'react-router-dom';
import { BasicCardProps } from '../../types/PropTypes';
import './border-glow-card.css';

export default function BorderGlowCard({
  children,
  title,
  link = '#',
  target = false
}: BasicCardProps) {
  return (
    <div
      className="glow-card"
      title={title}
    >
      <NavLink
        to={link}
        target={target ? '_blank' : '_self'}
      >
        <div>{children}</div>
      </NavLink>
    </div>
  );
}
