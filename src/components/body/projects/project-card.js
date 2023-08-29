import React from "react";
import "./project-card.css";

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-info">
        <label className="project-title">{project.title}.</label>
        <div>
          <label className="project-funcion">{project.funcion}</label>
        </div>

        <div className="project-links">
          {project.tags.map((item) => {
            return (
              <a className="project-link" href={item.link} target="_blank" rel="noreferrer">
                <div className="link-button">
                  <i class={item.icon}></i> {item.name}
                </div>
              </a>
            );
          })}
        </div>
        <p className="about">{project.about}</p>
        <div className="project-techs">
          {project.techs.map((tech) => {
            return (
              <div className="tech">
                <img className="tech-img" src={tech.icon} alt="Img" />
                <label>{tech.name}</label>
              </div>
            );
          })}
        </div>
      </div>
      <img src={project.image} alt="Project" className="project-photo" />
    </div>
  );
}

export default ProjectCard;
