import BorderGlowCard from '../border-glow-card/BorderGlowCard';
import { ProjectCardProps } from '../../types/PropTypes';
import './project-card.css';
import formatDate from '../../utilities/format-date';

export default function ProjectCard({
  link,
  title,
  text,
  date,
  target = false
}: ProjectCardProps) {
  return (
    <BorderGlowCard
      link={link}
      title={title}
      target={target}
    >
      <h3 className="project-card-title">{title}</h3>
      <p className="project-card-text">{`${text.slice(0, 190)}${
        text.length > 190 ? '...' : ''
      }`}</p>
      <span className="project-card-date">{formatDate(date)}</span>
    </BorderGlowCard>
  );
}
