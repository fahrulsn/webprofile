/* eslint-disable react/no-unescaped-entities */
import About from "./about";
import Experience from "./experience";
import Projects from "./projects";
import styled from "styled-components";

const SectionTitle = styled.div`
  display: none;
  @media (max-width: 1036px) {
    display: block;
    position: sticky;
    z-index: 20;
    top: 0;
    margin: 1rem 0;
    h1 {
      font-size: 1rem;
      font-weight: 700;
      letter-spacing: 1px;
      margin: 5px 0;
      transition: 0.5s ease;
      padding: 12px 14px;
      border-radius: 5px;
      color: #fff;
      backdrop-filter: blur(10px);
      background-image: linear-gradient(
        to right,
        rgba(0 0, 0, 0),
        rgba(0 0, 0, 0)
      );
    }
  }
`;
const Content = () => {
  return (
    <>
      <SectionTitle>
        <h1>ABOUT</h1>
      </SectionTitle>
      <About />
      <SectionTitle>
        <h1>EXPERIENCES</h1>
      </SectionTitle>
      <Experience />

      <SectionTitle>
        <h1>PROJECTS</h1>
      </SectionTitle>
      <Projects />
    </>
  );
};

export default Content;
