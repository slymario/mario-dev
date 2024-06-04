import React from "react";
import "./Portfolio.css"
import IMG1 from "../../assets/portfolio1.png"
import IMG2 from "../../assets/portfolio2.png"
import IMG3 from "../../assets/portfolio3.png"


const data = [
  {
    id: 1,
    image: IMG1,
    title: "Elis Fragrance Website",
    github: "https://github.com/slymario/elis-store",
    // demo: "https://dribbble.com/clickable_design"
  },
  {
    id: 2,
    image: IMG2,
    title: "Blog Web App",
    github: "https://github.com/slymario/amaka-blog",
    // demo: "https://dribbble.com/clickable_design"
  },
  {
    id: 3,
    image: IMG3,
    title: "Fodd Delivery Landing Page",
    github: "https://github.com",
    // demo: "https://dribbble.com/clickable_design"
  },
]


const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github}) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className="btn" target="blank">Github</a>
                  {/* <a href={demo} className="btn btn-primary" target="blank">Live Demo</a> */}
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio;