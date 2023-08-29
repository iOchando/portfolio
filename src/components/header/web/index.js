import React from "react";
import "./web.css";

function Web() {
  return (
    <div className="web">
      <div className="web-option">
        <a href="#projects">
          <i class="fi fi-rr-edit-alt option-icon"></i> PROYECTOS
        </a>
      </div>
      <div className="web-option">
        <a href="#skills">
          <i class="fi fi-rr-laptop option-icon"></i> SKILLS
        </a>
      </div>
      <div className="web-option">
        <a href="#work">
          <i class="fi fi-rr-briefcase option-icon"></i> EXPERIENCIA
        </a>
      </div>
      <div className="web-option">
        <a href="#contact">
          <i class="fi fi-rr-user option-icon"></i> CONTACTO
        </a>
      </div>
    </div>
  );
}

export default Web;
