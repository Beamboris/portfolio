import React from "react";
import "./project.css";
import cinemaScope from "/src/assets/Screenshot 2024-07-31 at 00.00.31.png";
import githubIcon from '/src/assets/icons8-github-40.png';
import browserIcon from '/src/assets/icons8-browser-100.png'

const Projects = () => {
  return (
    <div className="projects section">
      <h3>Here you can find some of my projects, each one containing a short case-study</h3>

      <h5>CinemaScope</h5>
      <div className="project">
        <img src={cinemaScope} alt="Cinemascope" />
          <div className="case-study">
          <p>
          For my first major project, I drew inspiration from popular streaming platforms like <span className="netflix"><a href="https://www.netflix.com/de-en/" target="_blank">Netflix</a></span> and <span className="disney"><a href="https://www.disneyplus.com/en-de" target="_blank">Disney</a></span> to create a lookalike using ThemovieDB. To keep things user-friendly, I opted to eliminate the login process. Instead, I utilized Local storage to save users favorite movies. Simply click "Sign In," and you're all set to explore!
          </p>
          <div className="icons">
            <div className="icon">
          <span><img src={githubIcon} alt="github" /></span>
          <a href="https://github.com/Beamboris/Cinemascope" target="_blank">Code</a>
          </div>
          <div className="icon">
          <span><img className="smaller" src={browserIcon} alt="website" /></span>
          <a href="https://cinemascopee.netlify.app/" target="_blank">Live Website</a>
          </div>
          </div>
        </div>
      
      </div>
    </div>
  );
};

export default Projects;
