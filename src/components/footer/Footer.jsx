import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import { Helmet } from 'react-helmet'

const Footer = () => {
  return (
    <footer role="contentinfo">
      <Helmet>
        <meta name="description" content="Contact Lisandro Fernando on LinkedIn and GitHub. Learn more about my projects and connect with me." />
      </Helmet>
      <a href="#" className='footer__logo' aria-label="Go to home">Lisandro</a>
      <ul className='permalinks' role="navigation" aria-label="Footer navigation">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#contact">Contact</a></li> 
      </ul>

      <div className="footer__socials" role="region" aria-label="Social media links">
        <a 
          href='https://www.linkedin.com/in/lisandro-fernando-8a607758/' 
          target="_blank" 
          rel="noreferrer"
          aria-label="Visit Lisandro's LinkedIn profile"
          title="LinkedIn"
        >
          <BsLinkedin aria-hidden="true" />
        </a>
        <a 
          href='https://github.com/lisandrofernando' 
          target="_blank" 
          rel="noreferrer"
          aria-label="Visit Lisandro's GitHub profile"
          title="GitHub"
        >
          <BsGithub aria-hidden="true" />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Lisandro. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer