import React from 'react'
import './nav.css'
import {AiFillHome} from 'react-icons/ai'
import {FaUserTie} from 'react-icons/fa'
import {RiMacbookFill} from 'react-icons/ri'
import {AiFillMessage} from 'react-icons/ai'
import { useState } from 'react'
const Navbar = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
   <nav>
    <a href="#" onClick={()=> setActiveNav('#')} className={ activeNav === '#' ? 'active' : '' }><AiFillHome/></a>
    <a href="#about" onClick={()=> setActiveNav('#about')} className={ activeNav === '#about' ? 'active' : '' }><FaUserTie/></a>
    <a href="#experience" onClick={()=> setActiveNav('#experience')} className={ activeNav === '#experience' ? 'active' : '' }><RiMacbookFill/></a>
    <a href="#contact" onClick={()=> setActiveNav('#contact')} className={ activeNav === '#contact' ? 'active' : '' }><AiFillMessage/></a>
   </nav>
  )
}

export default Navbar