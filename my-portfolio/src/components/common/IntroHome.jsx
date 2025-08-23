import React from 'react';
import { LuGithub } from "react-icons/lu";
import { LuLinkedin } from "react-icons/lu";
import { LuMail } from "react-icons/lu";


function IntroHome() {
    return(
        <div className='hero'>
            <section>
            <p className='hero-description'>Hello, I am</p>
            <p className='hero-subtitle'>Meghanaa</p>
            <p className='hero-subtitle'>A Frontend Developer</p>               
            <p className='hero-description'>I design and code beautifully simple things, and I love what I do.</p>
            <button className='button-primary'>View my work </button> 
            <button className='button-outline'>Get in touch</button>
            </section>
            <div className='hero-socials'>
                <LuGithub/>
                <LuLinkedin />
                <LuMail />
            </div>
        </div>
    )
}
 export default IntroHome;