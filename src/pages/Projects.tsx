import ProjectCard from '../components/project-card/ProjectCard';
import projects from '../assets/project-data';
import { ProjectProps } from '../types/PropTypes';

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
