import React, { useState, useEffect } from "react";
import "./Nav.css"
import { FaHome } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { GrBusinessService } from "react-icons/gr";
import { TiMessages } from "react-icons/ti";


const Nav = () => {
  const [activeNav, setActiveNav] = useState("#home");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <nav>
      <a 
        href="#home" 
        onClick={() => setActiveNav("#home")} 
        className={activeNav === "#home" ? "active" : ""} 
        title="Home"
      >
        <FaHome/>
      </a>

      <a 
        href="#about" 
        onClick={() => setActiveNav("#about")} 
        className={activeNav === "#about" ? "active" : ""} 
        title="About"
      >
        <FaUserAlt/>
      </a>

      <a 
        href="#experience" 
        onClick={() => setActiveNav("#experience")} 
        className={activeNav === "#experience" ? "active" : ""} 
        title="Experience"
      >
        <FaBook/>
      </a>

      <a 
        href="#services" 
        onClick={() => setActiveNav("#services")} 
        className={activeNav === "#services" ? "active" : ""} 
        title="Services"
      >
        <GrBusinessService/>
      </a>

      <a 
        href="#contact" 
        onClick={() => setActiveNav("#contact")} 
        className={activeNav === "#contact" ? "active" : ""} 
        title="Contact"
      >
        <TiMessages/>
      </a>

    </nav>
  )
}

export default Nav;