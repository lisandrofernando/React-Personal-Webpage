import React, { useState, useEffect } from 'react'
import './header.css'
import CTA from '../download/CTA'
import Pic from '../../assets/images/Pic.JPG'

const roles = [
  'Software Developer Engineer In Test',
  'Cloud Engineer',
  'Petroleum Engineer',
  'AI Engineer',
  'Project Manager'
]

const Header = () => {
  const [displayedText, setDisplayedText] = useState('')
  const [roleIndex, setRoleIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = roles[roleIndex]
    const speed = isDeleting ? 50 : 100

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(current.slice(0, displayedText.length + 1))
        if (displayedText.length + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), 1500)
        }
      } else {
        setDisplayedText(current.slice(0, displayedText.length - 1))
        if (displayedText.length - 1 === 0) {
          setIsDeleting(false)
          setRoleIndex((prev) => (prev + 1) % roles.length)
        }
      }
    }, speed)

    return () => clearTimeout(timeout)
  }, [displayedText, isDeleting, roleIndex])

  return (
   <header>
    <div className='container header__container'>
      <h5>Hello I'm </h5>
      <h1>Lisandro Fernando</h1>
      <h5 className="text-light">
        {displayedText}<span className="cursor">|</span>
      </h5>
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