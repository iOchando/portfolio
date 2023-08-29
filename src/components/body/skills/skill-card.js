import React from "react";
import "./skill-card.css";

function SkillCard({ skill }) {
  return (
    <div className="skill-card">
      <img className="skill-icon" src={skill.icon} alt="tech" />
      <label className="skill-name">{skill.name}</label>
    </div>
  );
}

export default SkillCard;
