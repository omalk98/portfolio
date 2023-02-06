import { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import './glow-card.css';

interface GlowCardProps {
  children: ReactNode;
  title: string;
  link: string;
  target?: boolean;
}
export default function GlowCard({
  children,
  title,
  link = '#',
  target = false
}: GlowCardProps) {
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
