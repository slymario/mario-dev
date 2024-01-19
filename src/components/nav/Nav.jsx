import React, { useState } from "react";
import "./Nav.css"
import { FaHome } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { GrBusinessService } from "react-icons/gr";
import { TiMessages } from "react-icons/ti";


const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <nav>
      <a href="#" onClick={() => setActiveNav("#")} className={activeNav === "#" ? "active" : ""}><FaHome/></a>
      <a href="#about" onClick={() => setActiveNav("#about")} className={activeNav === "#about" ? "active" : ""}><FaUserAlt/></a>
      <a href="#experience" onClick={() => setActiveNav("#experience")} className={activeNav === "#experience" ? "active" : ""}><FaBook/></a>
      <a href="#services" onClick={() => setActiveNav("#services")} className={activeNav === "#services" ? "active" : ""}><GrBusinessService/></a>
      <a href="#contact" onClick={() => setActiveNav("#contact")} className={activeNav === "#contact" ? "active" : ""}><TiMessages/></a>
    </nav>
  )
}

export default Nav;