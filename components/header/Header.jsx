import React from 'react'
import './header.css'
import CTA from '../download/CTA'
import Pic from '../../assets/images/Pic.JPG'

const Header = () => {
  return (
   <header>
    <div className='container header__container'>
      <h5>Hello I'm </h5>
      <h1>Lisandro Fernando</h1>
      <h5 className="text-light">Software Developer Engineer In Test / Frontend Developer / Business
            Analyst / Project Manager</h5> 
      <CTA/>
      <div className="me">
        <img src={Pic} alt="dev" />
      </div>
      <a href='#contact' className='scroll__down'> Scroll Down</a>
    </div>

   </header>
  )
}

export default Header