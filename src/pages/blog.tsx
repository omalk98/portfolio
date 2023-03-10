import posts from '../assets/blogs';
import { PostCard } from '../components';

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
