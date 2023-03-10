import { useParams } from 'react-router-dom';
import posts from '../assets/blogs';
import { MarkdownPost } from '../components';

export default function BlogPost() {
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id) as PostData;
  return <MarkdownPost {...post} />;
}
