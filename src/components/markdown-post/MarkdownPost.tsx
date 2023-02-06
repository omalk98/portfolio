import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import formatDate from '../../utilities/format-date';
import { PostData } from '../../types/PostData';
import './markdown-post.css';

export default function MarkdownPost({ title, text, date }: PostData) {
  return (
    <div className="markdown-post">
      <div className="markdown-post-header">
        <h1>{title}</h1>
        <div className="markdown-post-date">{formatDate(date)}</div>
      </div>
      <hr />
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        children={text}
      />
    </div>
  );
}
