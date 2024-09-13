/* eslint-disable react/no-unescaped-entities */
import { styled } from "styled-components";
import { Reveal } from "../utils/Reveal";

const AboutWrapper = styled.div`
  width: 100%;
  padding: 1.5rem 0 0 0;
  margin: 0 0 1rem 0;
  p {
    font-size: 1.1rem;
    line-height: 1.7rem;
    margin-bottom: 1rem;
    span {
      font-weight: 700;
    }
  }
  @media (max-width: 768px) {
    padding: 0 0 0 0.5rem;
    p {
      font-size: 1rem;
    }
  }
`;

const About = () => {
  return (
    <AboutWrapper id="about">
      <Reveal>
        <p>
          Starts as a Graphic Designer. In 2019, I decided to try my hand at
          creating a static website for my company's needs and eventually
          ventured into programming and web development. Fast forward to today,
          I am pursuing a Bachelor's degree in Computer Science and have the
          opportunity to create a product for the community through the
          <span> Bangkit Academy </span>
          program.
        </p>
      </Reveal>
      <Reveal>
        <p>
          My primary focus right now is not only completing my degree but also
          creating products and projects to build my portfolio. In my free time,
          I usually design and edit photos.
        </p>
      </Reveal>
      <Reveal>
        <p>
          When I'm not at the computer, I typically play badminton and spend
          time with my cats.
        </p>
      </Reveal>
    </AboutWrapper>
  );
};

export default About;
