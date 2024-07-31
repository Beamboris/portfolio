import React from "react";
import "./profile.css";
import linkedinIcon from "/src/assets/icons8-linkedin-48.png";
import githubIcon from "/src/assets/icons8-github-100.png";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

const Profile = () => {
  return (
    <div className="profile section">
      <div className="profile-img"></div>
      <div>
        <h1>
          <RoughNotationGroup show={true}>
            Hello,{" "}
            <RoughNotation type="box" color="var(--third)">I am Boris.</RoughNotation>{" "}
            I'm a{" "}
            <RoughNotation type="circle" color="var(--secondary)">
              Frontend{" "}
            </RoughNotation>
            <RoughNotation type="underline" color="var(--third)">Web Developer.</RoughNotation>
          </RoughNotationGroup>
        </h1>
        <div className="media-container">
          <div className="media">
            <img src={linkedinIcon} alt="linkedin" />
            <a
              target="_blank"
              href="https://www.linkedin.com/in/borispetrovicdeveloper/"
            >
              Linkedin
            </a>
          </div>
          <div className="media">
            <img src={githubIcon} alt="github" />
            <a target="_blank" href="https://github.com/Beamboris">
              Github
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
