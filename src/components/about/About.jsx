import React from "react";
import "./about.css";
import Pic from "../../assets/images/Pic.JPG";
import { FaCloud, FaRobot } from "react-icons/fa";
import { TbSettingsAutomation } from "react-icons/tb";
import { GiOilPump } from "react-icons/gi";
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Pic} alt="" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaRobot className="about__icon" />
              <h5>AI Engineering</h5>
              <small>LLMs · Prompt Engineering · AI Pipelines · Python</small>
            </article>

            <article className="about__card">
              <TbSettingsAutomation className="about__icon" />
              <h5>Test Automation</h5>
              <small>Selenium · Playwright · Python · Java/JS</small>
            </article>

            <article className="about__card">
              <FaCloud className="about__icon" />
              <h5>Cloud & DevOps</h5>
              <small>Azure · AWS · Jenkins · GitHub Actions · CI/CD</small>
            </article>

            <article className="about__card">
              <GiOilPump className="about__icon" />
              <h5>Mechanical & Petroleum</h5>
              <small>Field Engineering · Project Management</small>
            </article>
          </div>
          <p>
            I'm a multi-disciplinary engineer who doesn't stay in one lane — and that's exactly the point.
            With 8+ years across Mechanical Engineering, Petroleum Engineering, Software Development, and AI,
            I've gone from oil & gas field operations to building intelligent automation frameworks and AI-powered pipelines.
            I lead projects, engineer solutions, and deliver results — whether on a drilling site or architecting a cloud-based AI system.
            My stack includes Python, Java, Selenium, Playwright, Spring Boot, Azure, AWS, and LLM integrations.
            I don't just adapt to change — I engineer it.
          </p>
          <a href="#contact" className="btn btn-primary">
            {" "}
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
