import React from "react";
import "./Footer.css"
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">NWOBODO OBINNA</a>

      <ul className="permalinks">
        <li><a href="#home">Home</a></li> 
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com/nwobodoo1" target="_blank" rel="noopener noreferrer"><FaFacebookF/></a>
        <a href="https://instagram.com/mistamarioo" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="https://twitter.com/sly_mario" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
      </div>

      <div className="footer__copyright">
        <small>Copyright &copy; Nwobodo Obinna.</small>
      </div>
    </footer>
  )
}

export default Footer;