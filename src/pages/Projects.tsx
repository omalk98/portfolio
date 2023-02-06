import PostCard from '../components/post-card/PostCard';
import projects from '../assets/project-data';
import { PostProps } from '../types/PropTypes';

function ProjectPosts({ list }: PostProps) {
  return (
    <div>
      {list.map((post) => (
        <PostCard
          key={post.id}
          {...post}
          target
        />
      ))}
    </div>
  );
}

export default function Projects() {
  return (
    <>
      <h1>My Projects</h1>
      <ProjectPosts list={projects} />
    </>
  );
}
