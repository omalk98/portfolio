import posts from '../assets/blog-data';
import PostCard from '../components/post-card/PostCard';
import { PostProps } from '../types/PropTypes';

function BlogPosts({ list }: PostProps) {
  return (
    <div>
      {list.map((post) => (
        <PostCard
          key={post.id}
          {...post}
        />
      ))}
    </div>
  );
}

export default function Blog() {
  return (
    <>
      <h1>Blog Posts</h1>
      <BlogPosts list={posts} />
    </>
  );
}
