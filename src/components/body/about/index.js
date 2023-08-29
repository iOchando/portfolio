import React from "react";
import "./about.css";
import SocialContact from "../../common/social-contact";

function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          ¡Hola!👋🏻 Soy <br /> <span className="info-name">Juan Ochando</span>. <br /> Desarrolador de Software,
          <br /> ¡Bienvenidos a mi portafolio!
        </div>
        <div className="about-photo">
          <img src={require("../../../assets/coding.png")} className="picture" alt="coding" />
        </div>
      </div>
      <div className="about-bottom"></div>
      <SocialContact />
    </div>
  );
}

export default About;
