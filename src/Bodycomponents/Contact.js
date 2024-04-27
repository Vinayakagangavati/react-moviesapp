import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-container">
      <h1 id="heading">Contact</h1>
      <div className="contact-info">
        <div className="contact-item">
          <FaEnvelope />
          <a href="mailto:vinayakagvt22@gmail.com">Mail</a>
        </div>
        <div className="contact-item">
          <FaLinkedin />
          <a href="https://www.linkedin.com/in/vinayakagangavati/">LinkedIn</a>
        </div>
        <div className="contact-item">
          <FaGithub />
          <a href="https://github.com/Vinayakagangavati/">GitHub</a>
        </div>
      </div>
      <div className="summary-info">
        <p>
          Myself Vinayaka G Graduated with a Bachelor's degree in Electronics
          And Communication Engineering .Proficient in ReactJs, JavaScript,
          Python3, MySQL, HTML, and CSS. Now, I am eager to launch my career in
          the IT sector, where I look forward to exploring and contributing to
          the ever-evolving world of technology.
        </p>
      </div>
    </div>
  );
}

export default Contact;
