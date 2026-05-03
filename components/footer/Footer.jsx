import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
const Footer = () => {
  return (
    <footer>
    <a href="#" className='footer__logo'>Lisandro</a>
    <ul className='permalinks'>
      <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#contact">Contact</a></li> 
    </ul>

    <div className="footer__socials">
      <a href='https://www.linkedin.com/in/lisandro-fernando-8a607758/' target="_blank" rel="noreferrer"><BsLinkedin/></a>
      <a href='https://github.com/lisandrofernando' target="_blank" rel="noreferrer"><BsGithub/></a>
    </div>
    <div className="footer__copyright">
      <small>&copy; Lisandro. All rights reserved.</small>
    </div>
    </footer>
  )
}

export default Footer