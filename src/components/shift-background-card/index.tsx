import { NavLink } from 'react-router-dom';
import './shift-background-card.css';

export default function ShiftBackgroundCard({
  children,
  title,
  link = '#',
  target = false
}: BasicCardProps) {
  return (
    <div
      className="shift-card"
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
