import React from 'react'
import './hero.css'
import profile_img from "../../assets/profile_img.jpg"
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id="home" className='hero'>
        <img src={profile_img} alt="" />
        <h1><span>I'm Rohan Gajurel,</span> full-stack developer based in Nepal</h1>
        <p>I am a full-stack developer from Kathmandu, Nepal seeking internship opportunities to grow and contribute to innovative projects.</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className="anchor-link" offset={50} href='#contact'>Connect with me</AnchorLink> </div>
            <div className="hero-resume">My resume</div>
        </div>
    </div>
  )
}

export default Hero