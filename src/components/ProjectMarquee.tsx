import { projects } from "../content/projects";
import { ProjectBrowserCard } from "./ProjectBrowserCard";

export function ProjectMarquee() {
  return (
    <div className="project-marquee" aria-label="Selected KLVR projects">
      <div className="project-marquee__viewport">
        <div className="project-marquee__track">
          {projects.map((project, index) => (
            <ProjectBrowserCard
              key={project.id}
              project={project}
              priority={index < 3}
            />
          ))}
          <div className="project-marquee__duplicate" aria-hidden="true">
            {projects.map((project) => (
              <ProjectBrowserCard
                key={`${project.id}-duplicate`}
                project={project}
                interactive={false}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
