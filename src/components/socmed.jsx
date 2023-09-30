import styled from "styled-components";
import IconLinkedin from "../assets/icons/linkedin";
import IconGithub from "../assets/icons/github";
import IconInstagram from "../assets/icons/instagram";

const Wrapper = styled.div`
  display: flex;
  margin: 2rem 0 0.5rem 0;
  width: 10rem;
  height: 2rem;
  justify-content: space-between;
  a {
    transition: 0.5s ease;
    border-radius: 15px;
  }
  a:hover {
    transform: scale(1.2);
  }
`;

const Socmed = () => {
  return (
    <Wrapper>
      <a
        href="https://www.linkedin.com/in/fahrul-sn/"
        target="_blank"
        rel="noreferrer"
      >
        <IconLinkedin />
      </a>
      <a href="https://github.com/fahrulsn" target="_blank" rel="noreferrer">
        <IconGithub />
      </a>
      <a
        href="https://www.instagram.com/fahrul.sn/"
        target="_blank"
        rel="noreferrer"
      >
        <IconInstagram />
      </a>
    </Wrapper>
  );
};

export default Socmed;
