import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";
import "./styles.scss";
import { DiApple, DiAndroid } from "react-icons/di";
import { FaDev, FaDatabase } from "react-icons/fa";

const personalDetails = [
  {
    label: "Name",
    value: "Umesh Gardas",
  },
  {
    label: "Email",
    value: "umeshgardas123@gmail.com",
  },
];
const jobSummary =
  "A skilled and detail-oriented Software Developer with expertise in frontend development, specializing in creating intuitive and responsive user interfaces. Proficient in leveraging a combination of HTML, CSS, and JavaScript frameworks such as React.js and Nextjs to build dynamic and visually appealing web applications. Experienced in translating design mockups and wireframes into high-quality, pixel-perfect code while adhering to best practices in web development and ensuring cross-browser compatibility. Good problem-solving abilities, with a focus on optimizing application performance and enhancing user experience through efficient code architecture and implementation of modern frontend technologies.";
const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="about__content">
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(-900px)",
            }}
            end={{ transform: "translatex(0px)" }}
          >
            <h3>Software Developer</h3>
            <p>{jobSummary}</p>
          </Animate>
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(500px)",
            }}
            end={{ transform: "translatex(0px)" }}
          >
            <h3 className="personalInfornalHeaderText">Personal Information</h3>
            <ul>
              {personalDetails.map((item, i) => (
                <li key={i}>
                  <span className="title">{item.label} :</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className="about__content__servicesWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(500px)",
            }}
            end={{ transform: "translatex(0px)" }}
          >
            <div className="about__content__servicesWrapper__innerContent">
              <div>
                <FaDev size={60} color="var(--yellow-theme-main-color)" />
              </div>
              <div>
                <DiAndroid size={60} color="var(--yellow-theme-main-color)" />
              </div>
              <div>
                <FaDatabase size={60} color="var(--yellow-theme-main-color)" />
              </div>
              <div>
                <DiApple size={60} color="var(--yellow-theme-main-color)" />
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};

export default About;
