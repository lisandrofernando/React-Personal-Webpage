import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'


const Experience = () => {
  return (
    <section id='experience'>
      <h5>My Skills</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__testing">
           <h3>Software Testing</h3>
           <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <h4>Serenity Java</h4>
              <small>Experienced</small>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <h4>Cucumber</h4>
              <small>Experience</small>
            </article>
            
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <h4>TestCafe</h4>
              <small>Experienced</small>
            </article>
           
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <h4>WebDriverIo</h4>
              <small>Experienced</small>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <h4>Performance Testing</h4>
              <small>Experienced</small>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <h4>TestNG</h4>
              <small>Experienced</small>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <h4>PlayWright</h4>
              <small>Experienced</small>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <h4>Jenkins</h4>
              <small>Experienced</small>
            </article>
            
           </div>
        </div>
         <div className="experience__frontend">
            <h3>Development</h3>
           <article className='experience__details'>
           <BsPatchCheckFill className='experience__details-icon'/>
            <h4>HTML</h4>
            <small>Experienced</small>
           </article>
           <article className='experience__details'>
           <BsPatchCheckFill className='experience__details-icon'/>
            <h4>CSS</h4>
            <small>Experienced</small>
           </article>
           <article className='experience__details'>
           <BsPatchCheckFill className='experience__details-icon'/>
            <h4>React</h4>
            <small>Experienced</small>
           </article>
           <article className='experience__details'>
           <BsPatchCheckFill className='experience__details-icon'/>
            <h4>NodeJs</h4>
            <small>Experienced</small>
           </article>

           <article className='experience__details'>
           <BsPatchCheckFill className='experience__details-icon'/>
            <h4>Devops</h4>
            <small>Experienced</small>
           </article>

         </div>
         <div className="experice__management">
          <h3>Management</h3>
        <article className='experience__details'>
        <BsPatchCheckFill className='experience__details-icon'/>
       <h4>Project Management</h4>
       <small>Experienced</small>
       </article>
       <article className='experience_details'>
       <BsPatchCheckFill className='experience__details-icon'/>
        <h4>Business Analysis</h4>
        <small>Experienced</small>
       </article>
       <article className='experience__details'>
       <BsPatchCheckFill className='experience__details-icon'/>
        <h4>Scrum</h4>
        <small>Experienced</small>
        </article>       
         </div>
      </div>
    </section>
  )
}

export default Experience