import styled from "styled-components";
import IconLinkedin from "../assets/icons/linkedin";
import IconGithub from "../assets/icons/github";
import IconInstagram from "../assets/icons/instagram";

const Wrapper = styled.div`
  display: flex;
  margin: 1rem 0 0.5rem 0;
  width: 80%;
  height: 2rem;
  justify-content: center;
  a {
    transition: 0.5s ease;
    border-radius: 15px;
    margin: 0 1rem;
    transform: scale(1.1);
  }
  a:hover {
    transform: scale(1.4);
  }
  @media (max-width: 768px) {
    margin: 2rem auto;
    width: 70%;
    transform: scale(1.2);
    justify-content: space-around;
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
