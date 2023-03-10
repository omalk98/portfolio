import ShiftBackgroundCard from '../shift-background-card';
import formatDate from '../../utilities/format-date';
import './post-card.css';

export default function PostCard({
  id,
  title,
  text,
  date,
  image,
  target = false
}: PostCardProps) {
  return (
    <ShiftBackgroundCard
      link={id.toString()}
      title={title}
      target={target}
    >
      <div className="post-card-header">
        <h3>{title}</h3>
        <img
          src={image}
          alt="banner"
          loading="lazy"
        />
      </div>
      <p>{`${text.slice(0, 190)}${text.length > 190 ? '...' : ''}`}</p>
      <span className="post-card-date">{formatDate(date)}</span>
    </ShiftBackgroundCard>
  );
}
