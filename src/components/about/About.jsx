import React from "react";
import "./about.css";
import { FaCloud, FaRobot } from "react-icons/fa";
import { TbSettingsAutomation } from "react-icons/tb";
import { GiOilPump } from "react-icons/gi";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <section id="about">
      <Helmet>
        <title>About Lisandro Fernando | Software Engineer</title>
        <meta name="description" content="Learn about Lisandro Fernando's background in Software Development, Test Automation, Cloud & DevOps, and AI Engineering." />
      </Helmet>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__content">
          <p className="about__bio">
            I'm a multi-disciplinary engineer who doesn't stay in one lane — and that's exactly the point.
            With 8+ years across Mechanical Engineering, Petroleum Engineering, Software Development, and AI,
            I've gone from oil & gas field operations to building intelligent automation frameworks and AI-powered pipelines.
            I lead projects, engineer solutions, and deliver results — whether on a drilling site or architecting a cloud-based AI system.
            My stack includes Python, Java, Selenium, Playwright, Spring Boot, Azure, AWS, and LLM integrations.
            I don't just adapt to change — I engineer it.
          </p>
          <div className="about__cards" role="region" aria-label="Core competencies">
            <article className="about__card" role="region" aria-label="AI Engineering services">
              <FaRobot className="about__icon" aria-hidden="true" />
              <h5>AI Engineering</h5>
              <small>LLMs · Prompt Engineering · AI Pipelines · Python</small>
            </article>

            <article className="about__card" role="region" aria-label="Test Automation services">
              <TbSettingsAutomation className="about__icon" aria-hidden="true" />
              <h5>Test Automation</h5>
              <small>Selenium · Playwright · Python · Java/JS</small>
            </article>

            <article className="about__card" role="region" aria-label="Cloud and DevOps services">
              <FaCloud className="about__icon" aria-hidden="true" />
              <h5>Cloud & DevOps</h5>
              <small>Azure · AWS · Jenkins · GitHub Actions · CI/CD</small>
            </article>

            <article className="about__card" role="region" aria-label="Mechanical and Petroleum engineering services">
              <GiOilPump className="about__icon" aria-hidden="true" />
              <h5>Mechanical & Petroleum</h5>
              <small>Field Engineering · Project Management</small>
            </article>
          </div>
          <a href="#contact" className="btn btn-primary about__cta" aria-label="Contact Lisandro to discuss your project">
            {" "}
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
