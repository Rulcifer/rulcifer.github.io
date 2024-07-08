import React from 'react';
import './Hero.css';
import { Link } from 'react-scroll';
import Imu from '../assets/profile.jpg';

const Hero = () => (
  <div className="hero" id="home">
    <div className="hero-overlay">
      <div className="description">
        <h2 className="title ">Hai, i am Sahrul Rafi Zulfitra</h2>
        <h3 className="tagline">I do UI/UX design, software engineer,  and analyze business processes.</h3>
        <p className="paragraph">I am a software engineer from Surabaya, I am passionate about creating amazing digital experiences. I am very enthusiastic about creating amazing digital experiences. I bring ideas to life in the virtual world with a keyboard as a paintbrush and lines of code as a canvas. Let's join and make your digital dreams come true. Contact us, and let's start this exciting journey together!</p>
        <div className="hero-btns">
          <button className="lets-talk">
            <Link spy smooth offset={50} duration={500} to="contact">
              LET'S TALK
            </Link>
          </button>
        </div>
      </div>
      <img src={Imu} alt="prantosh" className="hero-image" />
    </div>
    <div className="social-icons">
      <a href="https://github.com/Rulcifer" target="_blank" rel="noreferrer">
        <i className="fa-brands fa-github" />
      </a>
      <a
        href="https://www.linkedin.com/in/sahrul-rafi-zulfitra-7a3bb6172/"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fa-brands fa-linkedin-in" />
      </a>
      <a
        href="https://www.youtube.com/@rulcifer"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fa-brands fa-youtube" />
      </a>
      <a href="https://discord.com/invite/M5AERFR" target="_blank" rel="noreferrer">
        <i className="fa-brands fa-discord" />
      </a>
      <a
        href="https://www.instagram.com/sahrulrafii/"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fa-brands fa-instagram" />
      </a>
      <a
        href="https://steamcommunity.com/id/Rulcifer/"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fa-brands fa-steam" />
      </a>
      {/* <a
        href="https://www.tiktok.com/@rulcifer"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fa-brands fa-tiktok" />
      </a> */}
    </div>
  </div>
);

export default Hero;
