import React from 'react';
import ProjectCard from '../components/common/ProjectCard.jsx';
function Projects() {
    return(
        <div className="project-container">
            <div className="project-header">
                <h1>
                My <span className="highlight">Projects</span>
                </h1>
                <p className="project-paragraph">
                Projects that I have worked on that showcase my skills and experience.
                </p>
            </div>
            <div className="project-cards">
                <ProjectCard/>
                <ProjectCard/>
            </div>
        </div>
    );
 }

export default Projects; 