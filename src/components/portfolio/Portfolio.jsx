import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/band.jpg'
import IMG2 from '../../assets/tictactoe.jpg'
import IMG3 from '../../assets/me.jpg'


const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Band music',
    github: 'https://github.com',
    demo: 'https://bandmusic.vercel.app/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Tic Tac Toe Game',
    github: 'https://github.com',
    demo: 'https://tac-tic-toe.vercel.app/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Introduction',
    github: 'https://github.com',
    demo: 'https://thinhnho98.vercel.app/'
  }
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo})=>{
            return(
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank' rel="noreferrer">Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio