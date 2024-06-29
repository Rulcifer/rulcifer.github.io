import React from 'react';
import './About.css';
import HTML from '../assets/html.png';
import jQuery from '../assets/jquery.png';
import Flutter from '../assets/flutter.png';
import VSCode from '../assets/vscode.png';
import Figma from '../assets/figma.png';
import ReactIcon from '../assets/react.png'
import NPMlogo from '../assets/npm.png'
import GitLogo from '../assets/git.png'
import GitHublogo from '../assets/github.png'
import GMeet from '../assets/meet.png'
import Zoomlogo from '../assets/zoom.webp'
import Canva from '../assets/canva.png'
import CSS from '../assets/css.png'
import BootStrap from '../assets/bootstrap.png'
import JavaScript from '../assets/javascript.png'
import PostMan from '../assets/postman.png'
import WordPress from '../assets/wordpress.png'
import Tailwind from '../assets/tailwindcss.svg'
import Laravel from '../assets/laravel.svg'
import Java from '../assets/java.png'
import Nodejs from '../assets/nodejs.svg'
import MySQL from '../assets/mysql.png'
import Laragon from '../assets/laragon.svg'
import Discordjs from '../assets/discordjs.png'
import AdobeXD from '../assets/adobe-xd.svg'

const About = () => (
  <section className="about" id="about">
    <div className="about-me">
      <h2 className="title about-title">aBOUT mE</h2>
      <p className="paragraph about-para">
      My journey in the programming world began in 2019, when I was still in college I tried to be a freelancer. Since then, I have had the opportunity to work on various projects, hone my skills, and expand my knowledge. I have experience in creating information system projects such as creating website-based applications, creating user interface designs, and analyzing business processes.
      </p>
      <button className="hire-me">
        <a href="https://drive.google.com/file/d/1RIQlxcFspH89xvugEeEyvgSG_ABMX3rI/view?usp=drive_link" target="_blank" rel="noreferrer">
          GET MY CV
        </a>
      </button>
    </div>
    <div className="about-skills">
      <h2 className="skill-title">Front-End</h2>
      <div className="skills">
        <div className="skill">
          <img
            src={ReactIcon}
            alt=""
          />
          <p>React Js</p>
        </div>
        <div className="skill">
          <img
            src={JavaScript}
            alt=""
          />
          <p>JavaScript</p>
        </div>
        <div className="skill">
          <img
            src={HTML}
            alt=""
          />
          <p>HTML5</p>
        </div>
        <div className="skill">
          <img
            src={CSS}
            alt=""
          />
          <p>CSS3</p>
        </div>
        <div className="skill">
          <img
            src={jQuery}
            alt=""
          />
          <p>jQuery</p>
        </div>
        <div className="skill">
          <img
            src={BootStrap}
            alt=""
          />
          <p>Bootstrap</p>
        </div>
        <div className="skill">
          <img
            src={Tailwind}
            alt=""
          />
          <p>Tailwind CSS</p>
        </div>
      </div>
      <h2 className="skill-title">Back-End</h2>
      <div className="skills">
        <div className="skill">
          <img
            src={Laravel}
            alt=""
          />
          <p>Laravel</p>
        </div>
        <div className="skill">
          <img
            src={Nodejs}
            alt=""
          />
          <p>Node Js</p>
        </div>
        <div className="skill">
          <img
            src={Discordjs}
            alt=""
          />
          <p>Discord Js</p>
        </div>
        <div className="skill">
          <img
            src={MySQL}
            alt=""
          />
          <p>MySQL</p>
        </div>
      </div>
      <h2 className="skill-title">Mobile</h2>
      <div className="skills">
      <div className="skill">
          <img src={Java} alt="" />
          <p>Java</p>
        </div>
        <div className="skill">
          <img src={Flutter} alt="" />
          <p>Flutter</p>
        </div>

      </div>
      <h2 className="skill-title">Tools</h2>
      <div className="skills">
        <div className="skill">
          <img src={GitLogo} alt="" />
          <p>Git</p>
        </div>
        <div className="skill">
          <img src={GitHublogo} alt="" />
          <p>GitHub</p>
        </div>

        <div className="skill">
          <img src={VSCode} alt="" />
          <p>VS Code</p>
        </div>
        <div className="skill">
          <img src={PostMan} alt="" />
          <p>Postman</p>
        </div>
        <div className="skill">
          <img src={NPMlogo} alt="" />
          <p>npm</p>
        </div>
        <div className="skill">
          <img src={WordPress} alt="" />
          <p>WordPress</p>
        </div>
        <div className="skill">
          <img src={Laragon} alt="" />
          <p>Laragon</p>
        </div>
      </div>
      <h2 className="skill-title">Design</h2>
      <div className="skills">
        <div className="skill">
          <img src={Canva} alt="" />
          <p>Canva</p>
        </div>
        <div className="skill">
          <img src={Figma} alt="" />
          <p>Figma</p>
        </div>
        <div className="skill">
          <img src={AdobeXD} alt="" />
          <p>Adobe Xd</p>
        </div>
      </div>
      <h2 className="skill-title">Communication</h2>
      <div className="skills">
        <div className="skill">
          <img src={GMeet} alt="" />
          <p>Google Meet</p>
        </div>
        <div className="skill">
          <img src={Zoomlogo} alt="" />
          <p>Zoom</p>
        </div>
      </div>
      <h2 className="skill-title">Soft Skills</h2>
      <div className="skills">
        <p className="soft-skill">Remote Pair-Programming</p>
        <p className="soft-skill">Teamwork</p>
        <p className="soft-skill">Collaboration</p>
        <p className="soft-skill">Business process analysis</p>
        <p className="soft-skill">User experience analysis</p>
        <p className="soft-skill">Good listener</p>
        <p className="soft-skill">Relationship building skills</p>
        <p className="soft-skill">Logical thinking and problem solving</p>
      </div>
    </div>

  </section>
);

export default About;
