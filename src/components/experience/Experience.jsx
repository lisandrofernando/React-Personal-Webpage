import React from 'react'
import './experience.css'
import { TbSettingsAutomation } from 'react-icons/tb'
import { FaCloud, FaRobot, FaDownload } from 'react-icons/fa'
import { GiOilPump, GiMechanicalArm } from 'react-icons/gi'
import { MdManageAccounts } from 'react-icons/md'
import { Helmet } from 'react-helmet'

const roles = [
  {
    icon: <TbSettingsAutomation className='role__icon spin' aria-hidden="true" />,
    title: 'SDET Engineer',
    description: 'Built end-to-end automation frameworks for UI and API testing. I leverage AI-powered test generation, self-healing locators, and LLM-assisted defect analysis to drastically reduce manual effort and deliver faster, smarter test coverage.',
    skills: ['Selenium · Java', 'Playwright · Python', 'REST Assured', 'Serenity · Cucumber', 'Jenkins · CI/CD', 'TestNG · Maven'],
    cv: '/cv/CV_SDET.pdf'
  },
  {
    icon: <FaCloud className='role__icon float' aria-hidden="true" />,
    title: 'Cloud & DevOps Engineer',
    description: 'Designed CI/CD pipelines and cloud infrastructure on Azure and AWS. I use AI-driven monitoring, anomaly detection, and intelligent automation scripts to predict failures before they happen and keep systems running at peak performance.',
    skills: ['Azure · AWS', 'Jenkins · GitHub Actions', 'Docker · Kubernetes', 'Prometheus · Grafana', 'Datadog', 'Python · Bash'],
    cv: '/cv/CV_Devops.pdf'
  },
  {
    icon: <GiOilPump className='role__icon pulse' aria-hidden="true" />,
    title: 'Petroleum Engineer',
    description: 'Managed oil & gas field operations across multiple sites. I apply AI-driven production optimization models and predictive maintenance algorithms to reduce downtime, cut costs, and make data-backed engineering decisions in the field.',
    skills: ['Field Operations', 'Project Management', 'Production Optimization', 'Drilling Engineering', 'HSE Standards', 'Data Analysis'],
    cv: '/cv/CV_Petroleum.pdf'
  },
  {
    icon: <FaRobot className='role__icon bounce' aria-hidden="true" />,
    title: 'AI Engineer',
    description: 'I design and deploy AI-powered pipelines, LLM integrations, and intelligent automation systems that solve real-world problems across industries. From prompt engineering to full AI workflow architecture — I build solutions that think.',
    skills: ['Python · LLMs', 'Prompt Engineering', 'AI Pipelines', 'Machine Learning', 'Data Processing', 'API Integration'],
    cv: '/cv/CV_SDET.pdf'
  },
  {
    icon: <MdManageAccounts className='role__icon swing' aria-hidden="true" />,
    title: 'Project Manager',
    description: 'Led cross-functional engineering teams across tech and energy industries. I use AI tools for risk forecasting, sprint planning insights, and automated reporting — turning project data into actionable decisions that keep teams aligned and deadlines met.',
    skills: ['Agile · Scrum', 'Stakeholder Mgmt', 'Risk Management', 'Business Analysis', 'Team Leadership', 'Roadmap Planning'],
    cv: '/cv/CV_Devops.pdf'
  }
]

const Experience = () => {
  return (
    <section id='experience'>
      <Helmet>
        <title>Experience | Lisandro Fernando</title>
        <meta name="description" content="Explore Lisandro Fernando's professional experience as an SDET Engineer, Cloud & DevOps Engineer, Petroleum Engineer, AI Engineer, and Project Manager." />
      </Helmet>
      <h5>What I Have Done</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        {roles.map((role, index) => (
          <article key={index} className='role__card' role="region" aria-label={`${role.title} experience`}>
            <div className='role__icon-wrapper' aria-hidden="true">{role.icon}</div>
            <h3>{role.title}</h3>
            <p>{role.description}</p>
            <div className='role__skills' role="region" aria-label={`${role.title} skills`}>
              {role.skills.map((skill, i) => (
                <span key={i} className='role__skill'>{skill}</span>
              ))}
            </div>
            <a 
              href={role.cv} 
              download 
              className='btn btn-primary role__btn'
              aria-label={`Download CV for ${role.title}`}
            >
              <FaDownload aria-hidden="true" /> Download CV
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Experience