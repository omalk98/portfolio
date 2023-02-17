import ShiftBackgroundCard from '../shift-background-card/ShiftBackgroundCard';
import { PostCardProps } from '../../types/PropTypes';
import formatDate from '../../utilities/format-date';
import './post-card.css';

export default function PostCard({
  id,
  title,
  text,
  date,
  target = false
}: PostCardProps) {
  return (
    <ShiftBackgroundCard
      link={id.toString()}
      title={title}
      target={target}
    >
      <h3 className="post-card-title">{title}</h3>
      <p className="post-card-text">{`${text.slice(0, 190)}${
        text.length > 190 ? '...' : ''
      }`}</p>
      <span className="post-card-date">{formatDate(date)}</span>
    </ShiftBackgroundCard>
  );
}
