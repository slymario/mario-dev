import React from 'react'
import "./About.css";
import ABOUT from "../../assets/about.png"
import { FaAward } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa6";
import { FaFolder } from "react-icons/fa";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ABOUT} alt="about" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>
            <article className='about__card'>
              <FaUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>3+ Worldwide</small>
            </article>
            <article className='about__card'>
              <FaFolder className='about__icon'/>
              <h5>Projects</h5>
              <small>3+ Completed</small>
            </article>
          </div>
          <p>
            Hello! I'm a passionate and dedicated Fullstack Developer with a strong foundation in both front-end and back-end technologies. My journey into the world of web development began with a curiosity for how things work behind the scenes and has since blossomed into a full-fledged career.
            I specialize in creating seamless, responsive, and user-friendly web applications using a variety of technologies, including HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB. My approach to development is centered around writing clean, efficient code and continuously learning to stay up-to-date with the latest industry trends and best practices. 
            I thrive on solving complex problems and bringing creative ideas to life through code. Whether I'm working on a dynamic front-end interface or an efficient back-end system, my goal is always to deliver high-quality, scalable solutions that provide an excellent user experience. 
            When I'm not coding, you can find me exploring new tech, contributing to open-source projects, or enjoying a good book. I'm excited to collaborate on innovative projects and bring your vision to reality. 
            Feel free to explore my portfolio and reach out if you'd like to connect or work together!
          </p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About;