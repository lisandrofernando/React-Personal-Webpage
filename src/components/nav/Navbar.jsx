import React from 'react'
import './nav.css'
import {AiFillHome} from 'react-icons/ai'
import {FaUserTie} from 'react-icons/fa'
import {RiMacbookFill} from 'react-icons/ri'
import {AiFillMessage} from 'react-icons/ai'
import { useState } from 'react'

const Navbar = () => {
  const [activeNav, setActiveNav] = useState('#');
  
  const navItems = [
    { href: '#', icon: AiFillHome, label: 'Home' },
    { href: '#about', icon: FaUserTie, label: 'About' },
    { href: '#experience', icon: RiMacbookFill, label: 'Experience' },
    { href: '#contact', icon: AiFillMessage, label: 'Contact' }
  ];

  return (
   <nav role="navigation" aria-label="Main navigation">
    {navItems.map(item => {
      const Icon = item.icon;
      return (
        <a 
          key={item.href}
          href={item.href} 
          onClick={() => setActiveNav(item.href)} 
          className={activeNav === item.href ? 'active' : ''} 
          aria-current={activeNav === item.href ? 'page' : undefined}
          aria-label={item.label}
          title={item.label}
        >
          <Icon aria-hidden="true"/>
        </a>
      );
    })}
   </nav>
  )
}

export default Navbar