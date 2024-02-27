import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FaTiktok} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>thinhnho</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">Home</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com/"><FaFacebookF /></a>
        <a href="https://tiktok.com/"><FaTiktok /></a>
        <a href="https://twitter.com/"><FaTwitter /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy;thinhnho. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer