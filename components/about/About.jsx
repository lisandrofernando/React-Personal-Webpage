import React from "react";
import "./about.css";
import Pic from "../../assets/images/Pic.JPG";
import { FaAward } from "react-icons/fa";
import { DiJava } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { TbSettingsAutomation } from "react-icons/tb";
import { FaJenkins } from "react-icons/fa";
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
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>5+ Years Working</small>
            </article>

            <article className="about__card">
              <DiJava className="about__icon" />
              <h5>Experience</h5>
              <h6>Java Object Oriented Programming</h6>
              <small>5+ Years Working</small>
            </article>

            <article className="about__card">
              <IoLogoJavascript className="about__icon" />
              <h5>Experience</h5>
              <h6>Javascript/Typescript</h6>
              <small>2+ Years Working</small>
            </article>

            <article className="about__card">
              <FaReact className="about__icon" />
              <h5>Experience</h5>
              <h6>React Front End</h6>
              <small>1+ Years Working</small>
            </article>

            <article className="about__card">
              <TbSettingsAutomation className="about__icon" />
              <h5>Experience</h5>
              <h6>Automation Testing</h6>
              <small>5+ Years Working</small>
            </article>

            <article className="about__card">
              <FaJenkins className="about__icon" />
              <h5>Experience</h5>
              <h6>Devops</h6>
              <small>3+ Years Working</small>
            </article>
          </div>
          <p>
            I develop fully automated frameworks and industry-standard which
            help eliminate manual effort on Testing and reducing time,
            maintenance, and reusability of code. I develop automation solutions
            for both UI and Server-side applications. I also develop web
            applications as one of my hobbies. My main expertise relies on
            Selenium Java, Serenity JUnit, WebdriverIo, PlayWright, Test Cafe,
            Python, Rest Assured, TestNG, Cucumber, Maven, Jenkins, GitHub,
            Mulesoft, Spring Boot, Node Js, React, Azure DevOps, and more.
            Using the above technologies give me the ability to test applications fast and
            accurately by using the latest trends in testing and development life cycle.
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
