import React from "react";
import "./project.css";
import cinemaScope from "/src/assets/Screenshot 2024-07-31 at 00.00.31.png";
import reactIcon from '/src/assets/icons8-react-50.png';
import tailwindIcon from '/src/assets/icons8-tailwind-css-48.png';
import githubIcon from '/src/assets/icons8-github-50.png';
import browserIcon from '/src/assets/icons8-website-48.png';

const Projects = () => {
  return (
    <div className="projects section">
      <h3>Here you can find some of my projects, each one containing a short case-study</h3>

      <h5>CinemaScope</h5>
      <div className="project">
        <div className="img-container">
        <img className="cinemascope" src={cinemaScope} alt="Cinemascope" />
        <div className="overlay">
          <p>Technologies used</p>
          <div className="tech">
            <div>
            <img src={reactIcon} alt="react" />
            <p>React</p>
            </div>
            <div>
            <img src={tailwindIcon} alt="tailwind" />
            <p>Tailwind</p>
            </div>
          </div>
        </div>
        </div>
          <div className="case-study">
          <p>
          For my first major project, I drew inspiration from popular streaming platforms like <span className="netflix"><a href="https://www.netflix.com/de-en/" target="_blank">Netflix</a></span> and <span className="disney"><a href="https://www.disneyplus.com/en-de" target="_blank">Disney</a></span> to create a lookalike using ThemovieDB. To keep things user-friendly, I opted to eliminate the login process. Instead, I utilized Local storage to save users favorite movies. Simply click "Sign In," and you're all set to explore!
          </p>
          <div className="icons">
            <div className="icon">
          <span><img src={githubIcon} alt="github" /></span>
          <a className="project-buttons" href="https://github.com/Beamboris/Cinemascope" target="_blank">Code</a>
          </div>
          <div className="icon">
          <span><img src={browserIcon} alt="website" /></span>
          <a className="project-buttons" href="https://cinemascopee.netlify.app/" target="_blank">Live Website</a>
          </div>
          </div>
        </div>
      
      </div>
    </div>
  );
};

export default Projects;
