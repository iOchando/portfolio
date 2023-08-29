import React from "react";
import "./contact.css";
import Separator from "../../common/separator";
import SocialContact from "../../common/social-contact";

function Contact() {
  return (
    <div className="contact">
      <Separator />
      <label className="section-title">CONTACTO</label>
      <div className="contact-container">
        <div className="contact-left">
          <p>Si deseas ponerte en contacto conmigo o ver mas información sobre mí, puedes hacerlo a través de estas plataformas.</p>
        </div>
        <SocialContact />
      </div>
    </div>
  );
}

export default Contact;
