import React from "react";
import "./social-contact.css";
import { SocialData } from "../../data/social";
import pdf from "../../../assets/JOchandoCV.pdf";

function SocialContact() {
  const data = SocialData;
  return (
    <div className="social-contact">
      {data.map((item) => {
        return (
          <a href={item.link} target="_blank" rel="noreferrer">
            <div className="social-icon-div">
              <img src={item.icon} alt={item.social} className="social-icon" />
            </div>
          </a>
        );
      })}

      <a className="social-resume" href={pdf} target="_blank" rel="noopener noreferrer" download="JOchandoCV.pdf">
        <img src={require("../../../assets/icons/resume.png")} alt="resume" className="social-icon" />
        <label className="social-text">Descargar CV</label>
      </a>
    </div>
  );
}

export default SocialContact;
