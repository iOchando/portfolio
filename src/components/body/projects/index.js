import React from "react";
import "./projects.css";
import { ProjectsData } from "../../data/projects";
import ProjectCard from "./project-card";
import Separator from "../../common/separator";

function Projects() {
  const data = ProjectsData;
  return (
    <div className="projects">
      <Separator />
      <label className="section-title">MIS PROYECTOS Y CONTRIBUCIONES</label>
      <div>
        {data.map((project) => {
          return <ProjectCard project={project} />;
        })}
      </div>
    </div>
  );
}

export default Projects;
