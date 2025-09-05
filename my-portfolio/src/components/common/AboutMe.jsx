import React from "react";
import SkillsCard from "./Card.jsx";
import { LuChevronsLeftRight, LuUsers } from "react-icons/lu";
// import 'bootstrap/dist/css/bootstrap.min.css';

export default function AboutMe() {
    const skills = [
    "React",
    "JavaScript",
    "HTML",
    "CSS",
    "Bootstrap",
  ];
  return (
    <div className="about-container" id="about">
      <div className="about-header">
        <h1>
          About <span className="highlight">Me</span>
        </h1>
        <p className="about-paragraph">
          I’m a budding web developer learning React, JavaScript,
          HTML and CSS, and love creating simple, responsive websites.
        </p>
      </div>

      <div className="about-main">
        <div className="about-text">
          <h2>Hi there! I'm Meghanaa</h2>
          <p>
            I am a dedicated and passionate developer with a strong foundation
            in React and JavaScript. I thrive on creating dynamic and responsive
            web applications that provide seamless user experiences. My journey
            in web development has equipped me with a diverse skill set,
            allowing me to tackle complex challenges and deliver innovative
            solutions.
          </p>
          <p>
            With a keen eye for detail and a commitment to staying updated with
            the latest industry trends, I continuously strive to enhance my
            skills and contribute to impactful projects.
          </p>
          <h3 className="skills-heading">Technologies I Work With</h3>
          <div className="skills-chips">
            {skills.map((skill, index) => (
              <span key={index} className="chip">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="about-cards">
          <SkillsCard
            title="Frontend Development"
            text="React, HTML, CSS, JavaScript, Bootstrap"
            icon={<LuChevronsLeftRight />}
          />
          <SkillsCard
            title="Collaboration"
            text="Agile methodologies, Git workflow, Team communication"
            icon={<LuUsers />}
          />
        </div>
      </div>
    </div>
  );
}
