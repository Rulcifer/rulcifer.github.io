import React from "react";
import "./Contact.css";

const Contact = () => (
  <div className="contact" id="contact">
    <div className="footer-left">
      <h1>
        I LOVE <br />
        COFFEE
        <br /> CHAT ☕️
      </h1>
    </div>
    <div className="footer-right">
      <h3>I'M ALWAYS INTERESTED ABOUT</h3>
      <div className="interests">
        <p>Frontend Development</p>
        <p>Backend Development</p>
        <p>JavaScript</p>
        <p>WordPress Development</p>
        <p>Startups</p>
        <p>New Opportunities</p>
        <p>Video Game</p>
        <p>Music</p>
        <p>Space</p>
      </div>

      <hr />

      <h3>
        MINDING A PROJECT?
        <span>
          <a href="mailto:sahrulrafizulfitra@gmail.com">Contact Me</a>
        </span>
      </h3>

      <hr />

      <div className="social">
        <span>
          <a
            href="https://github.com/Rulcifer"
            target="_blank"
            rel="noreferrer"
          >
            GITHUB
          </a>
        </span>
        <span>
          {" "}
          <a
            href="https://www.linkedin.com/in/sahrul-rafi-zulfitra-7a3bb6172/"
            target="_blank"
            rel="noreferrer"
          >
            LINKEDIN
          </a>
        </span>
      </div>
    </div>
  </div>
);

export default Contact;
