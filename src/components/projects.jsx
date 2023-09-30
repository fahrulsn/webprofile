/* eslint-disable react/no-unescaped-entities */
import styled from "styled-components";

const Project = styled.div`
  margin: 4rem 0;
  display: flex;
  padding: 1rem;
  border-radius: 0.5rem;
  transition: 0.5s ease;
  font-size: 0.9rem;
  &:hover {
    background-color: rgba(63, 69, 103, 0.3);
    box-shadow: 0px 0px 2rem rgba(63, 69, 103, 0.2);
  }
  &:hover h3 {
    color: rgb(61, 255, 174);
  }
  @media (max-width: 768px) {
    margin: 1rem 0;
    flex-direction: column;
    row-gap: 0.6rem;
    background-color: rgba(63, 69, 103, 0.3);
    box-shadow: 0px 0px 2rem rgba(63, 69, 103, 0.2);
  }
`;

const ProjImg = styled.div`
  width: 25%;
  img {
    width: 90%;
    border-radius: 10px;
  }
  @media (max-width: 768px) {
    width: 100%;
    img {
      width: 100%;
    }
  }
`;

const ProjInfo = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  row-gap: 0.6rem;
  p {
    font-weight: 300;
    line-height: 1.5;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Techs = styled.div`
  display: flex;
  column-gap: 0.5rem;
  row-gap: 0.5rem;
  flex-wrap: wrap;
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgb(0, 249, 145);
    background-color: rgba(0, 201, 117, 0.22);
    padding: 6px 10px;
    border-radius: 30px;
    font-weight: 500;
    font-size: 0.8rem;
  }
`;

const Projects = () => {
  return (
    <>
      <Project id="projects">
        <ProjImg>
          <img src={"/img/sortify.jpg"} alt="" />
        </ProjImg>
        <ProjInfo>
          <h3>Sortify App </h3>
          <p>
            Sortify is a image waste detection app to detect user's type of
            waste. It can detect type of waste to distinguish different kind of
            waste and identify recyable waste also with voice assist feature for
            disabilities.
          </p>
          <Techs>
            <span>Google Cloud Platform</span>
            <span>JavaScript</span>
            <span>Python</span>
            <span>Node.js</span>
            <span>Hapi</span>
            <span>Docker</span>
            <span>FastAPI</span>
          </Techs>
        </ProjInfo>
      </Project>
    </>
  );
};

export default Projects;
