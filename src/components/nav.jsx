import { styled } from "styled-components";
import { useState, useEffect } from "react";

const Nav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  position: relative;
  width: 80%;
  cursor: pointer;

  &:hover .onHover:not(:hover) {
    opacity: 0.3;
  }

  a {
    transition: 0.5s ease;
  }
  p {
    font-size: 1rem;
    font-weight: 400;
    margin: 0;
    letter-spacing: 1px;
    margin: 3px 6px;
    transition: 0.5s ease;
    padding: 8px 10px;
    text-shadow: 0px 5px 15px rgba(61, 255, 174, 0.4),
      0px 20px 40px rgba(61, 255, 174, 0.3),
      0px 40px 70px rgba(61, 255, 174, 0.1);
    /* border-radius: 5px; */
    /* background-size: 200% 100%;
    background-position: 100% 0%;
    background-image: linear-gradient(
      to right,
      rgba(255 255, 255, 1) 0%,
      rgba(255 255, 255, 1) 50%,
      rgba(0, 0, 0, 0) 50%,
      rgba(0, 0, 0, 0) 100%
    ); */
    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(255 255, 255, 1);
      box-shadow: 0px 5px 15px rgba(255, 255, 255, 0.4),
        0px 20px 40px rgba(255, 255, 255, 0.3),
        0px 40px 70px rgba(255, 255, 255, 0.1);
      border-radius: 5px;
      transition: 0.5s;
      transform-origin: right;
      transform: scaleX(0);
      z-index: -1;
    }
    &:hover:before {
      transition: transform 0.5s;
      transform-origin: left;
      transform: scaleX(1);
    }
    &:hover {
      transform: scale(1.2);
      color: #000314;
      /* background-position: 0 105%; */
      font-weight: 600;
    }
  }

  .active {
    transform: scale(1.2);
    color: rgba(61, 255, 174, 1);
    background-position: 0 100%;
    font-weight: 900;
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
      <a href="#about" className="onHover">
        <p className={activeSection == "about" ? "active" : ""}>ABOUT</p>
      </a>
      <a href="#experience" className="onHover">
        <p className={activeSection == "experience" ? "active" : ""}>
          EXPERIENCES
        </p>
      </a>
      <a href="#projects" className="onHover">
        <p className={activeSection == "projects" ? "active" : ""}>PROJECTS</p>
      </a>
    </Nav>
  );
};

export default Navigation;
