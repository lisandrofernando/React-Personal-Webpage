import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {BsTelephone} from 'react-icons/bs'
import {MdOutlineLocationOn} from 'react-icons/md'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fkxhtip', 'template_xwtla6p', form.current, 'q4aAZnX17FodrEeBP')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      form.current.reset()
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
           <AiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>lisandrusfernandus@gmail.com</h5>
            <a href="mailto:lisandrusfernandus@hotmail.com" target="_blank">Send a message</a>
          </article>
          <article className='contact__option'>
           <BsTelephone className='contact__option-icon'/>
            <h4>Phone</h4>
            <h5>+52(81)80546960</h5>
          </article>
          <article className='contact__option'>
           <MdOutlineLocationOn className='contact__option-icon'/>
            <h4>Location</h4>
            <h5>514-A Paseo Ecatepec, Colonia Residencial Anahuac, San Nicolas De Los Garza, Monterrey, N.L, Mexico</h5>
          </article>
        </div>
        <div className='right'>
            <form ref={form} onSubmit={sendEmail}>
              <input type="text" name='name' placeholder='Your Full Name'required/>
              <input type="email" name='email' placeholder='Your Email' required/>
              <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
              <button type='submit' className='btn btn-primary'> Send Message</button>
            </form>
          </div>
      </div>
    </section>
  )
}

export default Contact