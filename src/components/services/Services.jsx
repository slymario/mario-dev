import React from "react";
import "./Services.css"
import { FaCheck } from "react-icons/fa";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>User Experience and User Interface</h3>
          </div>
          <ul className="service__list">
            <li>
              <IoMdCheckmarkCircleOutline className="list__icon"/>
              <p>Custom Web Application Development</p>
            </li>
            <li>
              <IoMdCheckmarkCircleOutline className="list__icon"/>
              <p>Single Page Application (SPA) Development</p>
            </li>
            <li>
              <IoMdCheckmarkCircleOutline className="list__icon"/>
              <p>Responsive Web Design</p>
            </li>
            <li>
              <IoMdCheckmarkCircleOutline className="list__icon"/>
              <p>User Authentication and Authorization</p>
            </li>
            <li>
              <IoMdCheckmarkCircleOutline className="list__icon"/>
              <p>Intuitive Navigation Design</p>
            </li>
            <li>
              <IoMdCheckmarkCircleOutline className="list__icon"/>
              <p>Visual Design Consistency</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}
        <article className="service">
          <div className="service__head">
            <h3>System Architecture and Functionality</h3>
          </div>
          <ul className="service__list">
            <li>
              <IoMdCheckmarkCircleOutline className="list__icon"/>
              <p>Full-Stack Development</p>
            </li>
            <li>
              <IoMdCheckmarkCircleOutline className="list__icon"/>
              <p>RESTful API Development</p>
            </li>
            <li>
              <IoMdCheckmarkCircleOutline className="list__icon"/>
              <p>Database Design and Integration</p>
            </li>
            <li>
              <IoMdCheckmarkCircleOutline className="list__icon"/>
              <p>Deployment and Hosting</p>
            </li>
            <li>
              <IoMdCheckmarkCircleOutline className="list__icon"/>
              <p>Version Control and Collaboration</p>
            </li>
            <li>
              <IoMdCheckmarkCircleOutline className="list__icon"/>
              <p>Consultation and Project Planning</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services;