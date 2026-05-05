import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {BsTelephone} from 'react-icons/bs'
import {MdOutlineLocationOn} from 'react-icons/md'
import { useRef, useState } from 'react';
import emailjs from 'emailjs-com'
import { Helmet } from 'react-helmet'

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: '', text: '' });

    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      form.current,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    )
      .then((result) => {
        console.log(result.text);
        setMessage({
          type: 'success',
          text: 'Message sent successfully! I\'ll get back to you soon.'
        });
        form.current.reset();
      }, (error) => {
        console.error(error.text);
        setMessage({
          type: 'error',
          text: 'Failed to send message. Please try again or contact me directly.'
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section id='contact'>
      <Helmet>
        <title>Contact Lisandro Fernando | Software Engineer</title>
        <meta name="description" content="Get in touch with Lisandro Fernando. Contact via email, phone, or contact form." />
      </Helmet>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option' role="region" aria-label="Email contact option">
           <AiOutlineMail className='contact__option-icon' aria-hidden="true"/>
            <h4>Email</h4>
            <h5>lisandrusfernandus@gmail.com</h5>
            <a href="mailto:lisandrusfernandus@hotmail.com" aria-label="Send email to Lisandro Fernando">Send a message</a>
          </article>
          <article className='contact__option' role="region" aria-label="Phone contact option">
           <BsTelephone className='contact__option-icon' aria-hidden="true"/>
            <h4>Phone</h4>
            <h5>+52(81)80546960</h5>
          </article>
          <article className='contact__option' role="region" aria-label="Location information">
           <MdOutlineLocationOn className='contact__option-icon' aria-hidden="true"/>
            <h4>Location</h4>
            <h5>Monterrey, Mexico</h5>
          </article>
        </div>
        <div className='right'>
            <form ref={form} onSubmit={sendEmail} noValidate aria-label="Contact form">
              <div className="form-group">
                <input 
                  type="text" 
                  name='name' 
                  placeholder='Your Full Name'
                  aria-label="Full name"
                  required
                  disabled={loading}
                />
              </div>
              <div className="form-group">
                <input 
                  type="email" 
                  name='email' 
                  placeholder='Your Email'
                  aria-label="Email address"
                  required
                  disabled={loading}
                />
              </div>
              <div className="form-group">
                <textarea 
                  name="message" 
                  rows="7" 
                  placeholder='Your Message'
                  aria-label="Message"
                  required
                  disabled={loading}
                />
              </div>
              <button 
                type='submit' 
                className='btn btn-primary'
                disabled={loading}
                aria-busy={loading}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
              {message.text && (
                <div 
                  className={`form-message form-message--${message.type}`}
                  role="alert"
                  aria-live="polite"
                >
                  {message.text}
                </div>
              )}
            </form>
          </div>
      </div>
    </section>
  )
}

export default Contact