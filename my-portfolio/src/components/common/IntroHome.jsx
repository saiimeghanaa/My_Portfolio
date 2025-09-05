import React from 'react';
import { LuGithub, LuLinkedin, LuMail } from "react-icons/lu";



function IntroHome() {
    return(
        <div className='hero' id="home">
            <section>
            <p className='hero-description'>Hello, I am</p>
            <p className='hero-title'>Meghanaa</p>
            <p className='hero-subtitle'>A Frontend Developer</p>               
            <p className='hero-description'>I design and code beautifully simple things, and I love what I do.</p>
            <button 
                className='button-primary'
                onClick ={()=> document.getElementById('projects')?.scrollIntoView({behavior:'smooth'})}
            >
                View my work
            </button> 
            <button className='button-outline'
                onClick ={()=> document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})}
            >
                Get in touch
            </button>
            </section>
            <div className='hero-socials'>
                <a href="https://github.com/saiimeghanaa" target= "_blank" rel="noopener noreferrer" >
                    <LuGithub/>
                </a>    
                <a href="https://www.linkedin.com/in/meghapenumetsa" target= "_blank" rel="noopener noreferrer" >
                    <LuLinkedin />
                </a>
                <a href="mailto:saiimeghanaa9@gmail.com" target="_blank" rel="noopener noreferrer">
                    <LuMail  />
                </a>
                
            </div>
        </div>
    )
}
 export default IntroHome;