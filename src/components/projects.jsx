/* eslint-disable react/no-unescaped-entities */
import styled from "styled-components";
import { myData } from "../assets/data";

const Project = styled.div`
  margin: 1rem 0;
  display: flex;
  padding: 1rem;
  border-radius: 0.5rem;
  transition: 0.5s ease;
  font-size: 0.9rem;
  &:hover {
    background-color: rgba(63, 69, 103, 0.3);
    box-shadow: 0px 0px 2rem rgba(63, 69, 103, 0.2);
    backdrop-filter: blur(2px);
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

const data = myData.projects;
const Projects = () => {
  return (
    <>
      {data.map((project, index) => (
        <Project key={index} id="projects">
          <ProjImg>
            <img src={project.img} alt="" />
          </ProjImg>
          <ProjInfo>
            <h3>
              <a
                href="https://github.com/Sortify-Capstone/Sortify"
                target="_blank"
                rel="noreferrer"
              >
                {project.title}
              </a>
            </h3>
            <p>{project.desc}</p>
            <Techs>
              {project.techs.map((tech, i) => (
                <span key={i}>{tech}</span>
              ))}
            </Techs>
          </ProjInfo>
        </Project>
      ))}
    </>
  );
};

export default Projects;
