import React from "react";
import "./Testimonials.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import {  Navigation } from 'swiper/modules';
import AVTR1 from "../../assets/AVTR1.jpg"
import AVTR2 from "../../assets/AVTR2.jpg"
import AVTR3 from "../../assets/AVTR3.jpg"

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



const data = [
  {
    avatar: AVTR1,
    name: "Nneoma Nwamaka",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi eveniet, optio earum nesciunt perferendis natus. Libero, repellendus, quae aperiam optio deserunt, beatae sint vero dolorem incidunt autem esse expedita repudiandae!"
  },
  {
    avatar: AVTR2,
    name: "Jane Ibeh",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi eveniet, optio earum nesciunt perferendis natus. Libero, repellendus, quae aperiam optio deserunt, beatae sint vero dolorem incidunt autem esse expedita repudiandae!"
  },
  {
    avatar: AVTR3,
    name: "Samuel Odii",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi eveniet, optio earum nesciunt perferendis natus. Libero, repellendus, quae aperiam optio deserunt, beatae sint vero dolorem incidunt autem esse expedita repudiandae!"
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