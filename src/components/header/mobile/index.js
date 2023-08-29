import React from "react";
import "./mobile.css";

function Mobile({ isOpen, setIsOpen }) {
  return (
    <div className="mobile">
      <div className="close-icon" onClick={() => setIsOpen(!isOpen)}>
        <i class="fi fi-rs-circle-xmark"></i>
      </div>
      <div className="mobile-options">
        <div className="mobile-option">
          <a href="#projects" onClick={() => setIsOpen((isOpen = false))}>
            <i class="fi fi-rr-edit-alt option-icon"></i> PROYECTOS
          </a>
        </div>
        <div className="mobile-option">
          <a href="#skills" onClick={() => setIsOpen((isOpen = false))}>
            <i class="fi fi-rr-laptop option-icon"></i> SKILLS
          </a>
        </div>
        <div className="mobile-option">
          <a href="#work" onClick={() => setIsOpen((isOpen = false))}>
            <i class="fi fi-rr-briefcase option-icon"></i> EXPERIENCIA
          </a>
        </div>
        <div className="mobile-option">
          <a href="#contact" onClick={() => setIsOpen((isOpen = false))}>
            <i class="fi fi-rr-user option-icon"></i> CONTACTO
          </a>
        </div>
      </div>
    </div>
  );
}

export default Mobile;
