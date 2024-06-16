import React from "react";
import "./Testimonials.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import {  Navigation } from 'swiper/modules';
import AVTR1 from "../../assets/AVTR1.jpg"
import AVTR2 from "../../assets/AVTR2.jpg"
import AVTR3 from "../../assets/AVTR3.jpg"
import AVTR4 from "../../assets/AVTR4.jpg"

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



const data = [
  {
    avatar: AVTR1,
    name: "Mr Ken - Colleague",
    review: "Obinna is a skilled fullstack developer who is proficient in React, Node.js, and MongoDB. He excels in both front-end and back-end development. His works is particularly notable for its user-friendly design and robust functionality. He is proactive, reliable, and talented developer who I highly recommend."
  },
  {
    avatar: AVTR2,
    name: "Jane Ibeh - Colleague",
    review: "Mr Obinna is an exceptional fullstack developer. His ability to seamlessly integrate front-end design with back-end functionality is impressive. He's a reliable and innovative team player who consistently delivers high-quality work"
  },
  {
    avatar: AVTR3,
    name: "Misheal - Client",
    review: "From start to finish, Mr. Obinna demonstrated exceptional skill and professionalism. He delivered a robust and scalable blog web application that has significantly improved my quest for writing. His ability to solve complex problems and provide innovative solutions is truly impressive."
  },
  {
    avatar: AVTR4,
    name: "Mr Sam - Colleague",
    review: "Mr Obinna is a fullstack developer par excellence. His expertise spans across various technologies and frameworks, making them incredibly versatile. He's proactive, reliable, and always willing to go the extra mile to ensure project success."
  }
]

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper 
        className="container testimonials__container"
        modules={[Navigation]}
        spaceBetween={40}
        slidesPerView={1}
        navigation={{ clickable: true }}
        >
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt="" />
                </div>
                <h5 className="client__name">{name}</h5>
                <small className="client__review">{review}</small>
              </SwiperSlide>
            )
          })
        }
        </Swiper>
    </section>
  )
}

export default Testimonials;