import React from "react";
import "./styles.scss";
import { useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";
import resume from "../../images/resume.pdf";

const Home = () => {
  const navigate = useNavigate();

  const handleNavigatetoContactPage = () => {
    navigate("/contact");
  };
  return (
    <section id="home" className="home">
      <div className="home__text-wrapper">
        <h1>
          Hello, I'm Umesh
          <br />
          Software Developer
        </h1>
      </div>
      <Animate
        play
        duration={1.5}
        delay={1}
        start={{
          transform: "translateY(550px)",
        }}
        end={{ transform: "translateX(0px)" }}
      >
        <div className="home__contact-me">
          <button onClick={handleNavigatetoContactPage}>Hire Me</button>
          <a href={resume} download="Resume">
            <button >
              Download Resume
            </button>
          </a>
        </div>
      </Animate>
    </section>
  );
};

export default Home;
