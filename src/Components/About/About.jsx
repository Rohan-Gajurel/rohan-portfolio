import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from "../../assets/profile_img.jpg"

const About = () => {
  return (
    <div id="about"className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
            <img src={profile_img} alt="" />
            </div>
            <div className="about-right"><div className="about_para"><p>I am an aspiring Full-Stack Developer with a strong foundation in web development technologies. I am eager to learn and grow in a professional environment, bringing fresh perspectives and a passion for creating innovative solutions.</p>
            <p>My enthusiasm for development drives me to continuously learn new technologies and contribute meaningfully to projects. I am excited about the opportunity to work alongside experienced professionals and gain valuable industry experience.</p>
            </div>
            <div className="about-skills"><div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}} />
            </div>
            <div className="about-skill"><p>React JS</p><hr style={{width:"65%"}}/>
            </div>
            <div className="about-skill"><p>Javascript</p><hr style={{width:"60%"}} /></div>
            <div className="about-skill"><p>PHP</p><hr style={{width:"50%"}}/>
            <div className="about-skill"><p>Python/Django</p><hr style={{width:"80%"}}/></div>
            </div>
            </div>
            </div>
        </div>
        <div className="about-achivements"> 
        <div className="about-achivement"> 
            <h1>5+</h1>
            <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achivement"> 
            <h1>5+</h1>
            <p>TECHNOLOGIES MASTERED</p>
        </div>
        <hr />
        <div className="about-achivement"> 
            <h1>100%</h1>
            <p>DEDICATED TO LEARN</p>
        </div>
        </div>

    </div>
  )
}

export default About