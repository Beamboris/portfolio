import React from 'react';
import './about.css';
import wave from '/src/assets/waving-hand-svgrepo-com.svg';
import javascriptIcon from '/src/assets/icons8-javascript-64.png';
import cssIcon from '/src/assets/icons8-css-100.png';
import htmlIcon from '/src/assets/icons8-html-100.png';
import reactIcon from '/src/assets/icons8-react-50.png';
import tailwindIcon from '/src/assets/icons8-tailwind-css-48.png';
import { RoughNotation, RoughNotationGroup } from 'react-rough-notation';

const About = () => {
  return (
    <div className='about section'>
      <div className='entry-text-container'>
      <h4 className='entry-text'>  Hello! I'm Boris. </h4>
      <img src={wave} alt="" />
      </div>
      <RoughNotationGroup show="true">
      <p>I finished a four-year IT high school in {" "}
        <RoughNotation type='circle' color="var(--third)">
          Serbia {" "}
        </RoughNotation>
        , which is where my interest in {" "}
        <RoughNotation type='highlight' color="var(--secndary)">
          technology {" "}
        </RoughNotation>
        started.
      </p>

      <p>After high school, I moved to {" "}
        <RoughNotation type='underline' color="var(--secondary)">
          Germany {" "}
        </RoughNotation>
        and joined a {" "}
        <RoughNotation type='box' color="var(--third)">
          bootcamp {" "}
        </RoughNotation>
        in {" "}
        <RoughNotation type='underline' color="var(--secondary)">
          Berlin
        </RoughNotation>
        . During the bootcamp, I got to work with tools like {" "}
        <RoughNotation type='highlight' color="var(--third)">
          React
        </RoughNotation>
        , JavaScript, HTML, CSS, and Tailwind CSS. It was a great experience that helped me learn a lot and build some cool {" "}
        <RoughNotation type='circle' color="var(--third)">
          projects
        </RoughNotation>
        .
      </p>

      <p>
        I love {" "}
        <RoughNotation type='highlight' color="var(--third)">
          creating {" "}
        </RoughNotation>
        websites and working on new {" "}
        <RoughNotation type='circle' color="var(--secondary)">
          ideas
        </RoughNotation>
        . I'm always excited to {" "}
        <RoughNotation type='circle' color="var(--secondary)">
          learn{" "}
        </RoughNotation>
        more and take on new {" "}
        <RoughNotation type='box' color="var(--third)">
          challenges
        </RoughNotation>
        . Thanks for {" "}
        <RoughNotation type='highlight' color="var(--third)">
          visiting{" "}
        </RoughNotation>
        my site, and I look {" "}
        <RoughNotation type='underline' color="var(--secondary)">
          forward{" "}
        </RoughNotation>
        to working/connecting with you!
      </p>
      </RoughNotationGroup>
      <h5>My Tech Stack</h5>
    <div className='tech-stack'>
    <div className='stack'>
    <img src={javascriptIcon} className='stack-img' alt="javascript" />
    <span>Javascript</span>
    </div>
    <div className='stack'>
    <img src={htmlIcon} className='stack-img' alt="html" />
    <span className='stack-name'>Html</span>
    </div>
    <div className='stack'>
    <img src={reactIcon} className='stack-img' alt="react" />
    <span className='stack-name'>React</span>
    </div>
    <div className='stack'>
    <img src={cssIcon} className='stack-img' alt="css" />
    <span className='stack-name'>Css</span>
    </div>
    <div className='stack'>
    <img src={tailwindIcon} className='stack-img' alt="tailwind" />
    <span className='stack-name'>Tailwind</span>
    </div>
    </div>

    </div>
  )
}

export default About
