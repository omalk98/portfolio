import { useParams } from 'react-router-dom';
import posts from '../assets/blog-data';
import MarkdownPost from '../components/markdown-post/MarkdownPost';
import { PostData } from '../types/PostData';

export default function BlogPost() {
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id) as PostData;
  return <MarkdownPost {...post} />;
}
