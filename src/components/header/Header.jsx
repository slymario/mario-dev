import React from "react";
import "./Header.css";
import CallToAction from "./CallToAction";
import ME from "../../assets/me1.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello, I'm</h5>
        <h1>Nwobodo Obinna</h1>
        <h5 className="text-light">FullStack Developer</h5>
        <CallToAction/>
        <HeaderSocials/>

        <div className="me">
          <img src={ME} alt="Nwobodo" />
        </div>

        <a href="#contact" className="scroll__down">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header;