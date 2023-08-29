import React, { useState, useCallback, useEffect } from "react";
import "./project-card.css";
import ImageViewer from "react-simple-image-viewer";

function ProjectCard({ project }) {
  const [currentImage, setCurrentImage] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  useEffect(() => {
    const nextImage = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % project.images.length);
    };

    const intervalId = setInterval(nextImage, 10000);

    return () => clearInterval(intervalId);
  }, [project.images]);

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(currentIndex);
    setIsViewerOpen(false);
  };

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

      <img
        src={project.images[currentIndex]}
        onClick={() => openImageViewer(currentIndex)}
        className={`project-photo ${isViewerOpen ? "fade-out" : ""}`}
        key={0}
        alt=""
      />
      {isViewerOpen && (
        <ImageViewer src={project.images} currentIndex={currentImage} disableScroll={false} closeOnClickOutside={true} onClose={closeImageViewer} />
      )}
    </div>
  );
}

export default ProjectCard;
