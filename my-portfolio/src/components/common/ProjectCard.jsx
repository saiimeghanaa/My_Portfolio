import {LuGithub } from "react-icons/lu";
import { LuSquareArrowOutUpRight } from "react-icons/lu";
import eCommerce from '../../assets/images/eCommerce.jpg';

export default function ProjectCard(){
    return(
        <div className="project-card">
            <div className="project-image">
                <img src={eCommerce}/>
            </div>
            <div className="project-content">
                <h3 className="project-title">E-Commerce Website</h3>
                <p className="project-desc">This is an E-Commerce project built with HTML, CSS, JS, REACT, REDUX</p>
            </div>
            <div className="project-tags">
                <span className="tag">React</span>
                <span className="tag">Redux</span>
                <span className="tag">JavaScript</span>
                <span className="tag">CSS</span>
            </div>
            <div className="project-links">
                <a href="https://github.com/saiimeghanaa/My_Portfolio"><LuGithub/>Code</a>
                <a href=""><LuSquareArrowOutUpRight/>Live Demo</a>
            </div>
        </div>
    );
}