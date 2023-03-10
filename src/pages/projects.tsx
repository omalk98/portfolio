import projects from '../assets/project-data';
import { ProjectCard } from '../components';

function ProjectPosts({ list }: ProjectProps) {
  return (
    <div>
      {list.map((post) => (
        <ProjectCard
          key={post.link}
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
