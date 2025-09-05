import React from 'react';
import ProjectCard from '../components/common/ProjectCard.jsx';
import eCommerce from '../assets/images/eCommerce.jpg';
function Projects() {

    const projects = [
        {
            image: eCommerce,
            title: "Parallax Website",
            description: "This is a Parallax Website built with HTML, CSS, JS",
            tags: ["HTML", "CSS", "JavaScript"],
            codeLink: "https://github.com/saiimeghanaa/My_Portfolio",
            liveLink: "file:///C:/Users/Meghanaa/Desktop/Frontend_Projects/ParallaxWebsite/index.html"
        },
        {
            image: eCommerce,
            title: "Portfolio Website",
            description: "My personal portfolio built with React and modern CSS",
            tags: ["React", "CSS", "JavaScript"],
            codeLink: "https://github.com/saiimeghanaa/Portfolio",
            liveLink: "http://localhost:5173/contact#home"
        }
    ];

    return(
        <div className="project-container" id="projects">
            <div className="project-header">
                <h1>
                My <span className="highlight">Projects</span>
                </h1>
                <p className="project-paragraph">
                Projects that I have worked on that showcase my skills and experience.
                </p>
            </div>
            <div className="project-cards">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        image={project.image}
                        title={project.title}
                        description={project.description}
                        tags={project.tags}
                        codeLink={project.codeLink}
                        liveLink={project.liveLink}
                    />
                ))}
            </div>
        </div>
    );
 }

export default Projects; 