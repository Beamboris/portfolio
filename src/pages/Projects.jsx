import React from "react";
import "./project.css";
import cinemaScope from "/src/assets/Screenshot 2024-07-31 at 00.00.31.png";
import githubIcon from '/src/assets/icons8-github-100.png';
import browserIcon from '/src/assets/icons8-browser-100.png'

const Projects = () => {
  return (
    <div className="projects section">
      <h3>Here you can find some of my projects</h3>


      <div className="project">
        <img src={cinemaScope} alt="Cinemascope" />
        <div className="overlay">
          <div className="case-study">
          <p>
          For my first major project, I drew inspiration from popular streaming platforms like <span className="netflix">Netflix</span> and <span className="disney">Disney</span> to create a lookalike using ThemovieDB. To keep things user-friendly, I opted to eliminate the login process. Instead, I utilized <span className="storage">Local Storage</span> to save users favorite movies. Simply click "Sign In," and you're all set to explore!
          </p>
          <div className="icons">
          <span><img src={githubIcon} alt="" /></span>
          <p>Code</p> 
          <span><img className="smaller" src={browserIcon} alt="" /></span>
          <a href="https://cinemascopee.netlify.app/">Live Website</a>
          </div>
        </div>
      </div>
      </div>
      <h5>CinemaScope</h5>
    </div>
  );
};

export default Projects;
