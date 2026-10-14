import { useState } from "react";
import { Link } from "react-router-dom";
import { projectPath, type Project } from "../content/projects";

type ProjectBrowserCardProps = {
  project: Project;
  priority?: boolean;
  interactive?: boolean;
  className?: string;
};

export function ProjectBrowserCard({
  project,
  priority = false,
  interactive = true,
  className = "",
}: ProjectBrowserCardProps) {
  const [imageFailed, setImageFailed] = useState(false);
  const content = (
    <span className={`project-browser-card ${className}`}>
      <span className="project-browser-card__dot project-browser-card__dot--tl" />
      <span className="project-browser-card__dot project-browser-card__dot--tr" />
      <span className="project-browser-card__dot project-browser-card__dot--bl" />
      <span className="project-browser-card__dot project-browser-card__dot--br" />
      <span className="project-browser-card__screen">
        {!imageFailed ? (
          <img
            src={project.previewImage}
            alt=""
            width="1440"
            height="900"
            loading={priority ? "eager" : "lazy"}
            decoding={priority ? "sync" : "async"}
            fetchPriority={priority ? "high" : "auto"}
            onError={() => setImageFailed(true)}
          />
        ) : (
          <span className="project-browser-card__fallback" aria-hidden="true" />
        )}
      </span>
    </span>
  );

  if (!interactive) {
    return content;
  }

  return (
    <Link
      to={projectPath(project)}
      className="project-browser-card-link"
      aria-label={`View ${project.name} project case study`}
    >
      {content}
    </Link>
  );
}
