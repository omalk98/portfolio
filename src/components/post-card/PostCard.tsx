import GlowCard from '../glow-card/GlowCard';
import { PostCardProps } from '../../types/PropTypes';
import './post-card.css';
import formatDate from '../../utilities/format-date';

export default function PostCard({
  id,
  title,
  text,
  date,
  target = false
}: PostCardProps) {
  return (
    <GlowCard
      link={id.toString()}
      title={title}
      target={target}
    >
      <h3 className="blog-post-card-title">{title}</h3>
      <p className="blog-post-card-text">{`${text.slice(0, 190)}${
        text.length > 190 ? '...' : ''
      }`}</p>
      <span className="blog-post-card-date">{formatDate(date)}</span>
    </GlowCard>
  );
}
