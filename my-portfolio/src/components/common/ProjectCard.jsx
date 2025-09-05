import {LuGithub } from "react-icons/lu";
import { LuSquareArrowOutUpRight } from "react-icons/lu";
import eCommerce from '../../assets/images/eCommerce.jpg';

export default function ProjectCard({ image, title, description, tags = [], codeLink, liveLink }){
    return(
        <div className="project-card">
            <div className="project-image">
                <img src={image}/>
            </div>
            <div className="project-content">
                <h3 className="project-title">{title}</h3>
                <p className="project-desc">{description}</p>
            </div>
            <div className="project-tags">
                {tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                ))}
            </div>
            <div className="project-links">
                {codeLink && (
                    <a href={codeLink} target="_blank" rel="noopener noreferrer">
                        <LuGithub /><span className="link-space">Code</span>
                    </a>
                )}
                {liveLink && (
                    <a href={liveLink} target="_blank" rel="noopener noreferrer">
                        <LuSquareArrowOutUpRight /><span className="link-space">Live Demo</span>
                    </a>
                )}
            </div>
        </div>
    );
}