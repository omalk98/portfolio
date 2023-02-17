import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import formatDate from '../../utilities/format-date';
import { PostData } from '../../types/PostData';
import MediaTypes from '../../assets/media-types';
import './markdown-post.css';

function RenderMedia({ src, alt, title }: any) {
  const type = src.split('.').pop().toLowerCase();
  if (!type) return null;
  else if (MediaTypes.audio.includes(type)) {
    return (
      <audio
        controls
        preload="none"
      >
        <source
          title={title}
          src={src}
          type={`audio/${type}`}
        />
      </audio>
    );
  } else if (MediaTypes.video.includes(type)) {
    return (
      <video
        controls
        preload="none"
      >
        <source
          title={title}
          src={src}
          type={`video/${type}`}
        />
      </video>
    );
  } else {
    return (
      <img
        src={src}
        alt={alt}
        title={alt}
        loading="lazy"
      />
    );
  }
}

export default function MarkdownPost({ title, text, date, image }: PostData) {
  return (
    <div className="markdown-post">
      <div className="markdown-post-header">
        <h1>{title}</h1>
        <div className="markdown-post-date">{formatDate(date)}</div>
      </div>
      <img
        src={image}
        alt="banner"
        title="Banner"
        loading="lazy"
        className="markdown-post-image"
      />
      <hr />
      <div className="markdown-post-content">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{ img: RenderMedia }}
          children={text}
        />
      </div>
    </div>
  );
}
