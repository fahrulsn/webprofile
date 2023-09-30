import { styled } from "styled-components";
import { useState, useEffect } from "react";

const Nav = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 40%;

  cursor: pointer;
  p {
    font-size: 1rem;
    font-weight: 600;
    margin: 0;
    letter-spacing: 1px;
    margin: 3px 0;
    transition: 0.5s ease;
    padding: 5px 7px;
    border-radius: 5px;
    background-size: 200% 100%;
    background-position: 99.8% 0%;
    background-image: linear-gradient(
      to right,
      rgba(255 255, 255, 1) 0%,
      rgba(255 255, 255, 1) 50%,
      rgba(0, 0, 0, 0) 50%,
      rgba(0, 0, 0, 0) 100%
    );
  }
  p:hover {
    transform: scale(1.07);
    color: #000314;
    background-position: 0 105%;
    font-weight: 600;
  }
  .active {
    transform: scale(1.07);
    color: #000314;
    background-position: 0 100%;
    font-weight: 600;
  }
  @media (max-width: 1036px) {
    display: none;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      const experienceSection = document.getElementById("experience");
      const projectsSection = document.getElementById("projects");

      const scrollPosition = window.scrollY + 400;

      if (scrollPosition < experienceSection.offsetTop) {
        setActiveSection("about");
      } else if (
        scrollPosition >= experienceSection.offsetTop &&
        scrollPosition < projectsSection.offsetTop
      ) {
        setActiveSection("experience");
      } else {
        setActiveSection("projects");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Nav>
      <a href="#about">
        <p className={activeSection == "about" ? "active" : ""}>ABOUT</p>
      </a>
      <a href="#experience">
        <p className={activeSection == "experience" ? "active" : ""}>
          EXPERIENCES
        </p>
      </a>
      <a href="#projects">
        <p className={activeSection == "projects" ? "active" : ""}>PROJECTS</p>
      </a>
    </Nav>
  );
};

export default Navigation;
