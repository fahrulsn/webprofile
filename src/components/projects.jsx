/* eslint-disable react/no-unescaped-entities */
import styled from "styled-components";
import { myData } from "../assets/data";
import { Reveal } from "../utils/Reveal";
import IconGithub from "../assets/icons/github";

const ProjWrapper = styled.div`
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
  font-size: 0.9rem;
  /* pointer-events: none; */

  &:hover .onHover:not(:hover) {
    opacity: 0.3;
  }
  @media (max-width: 768px) {
    margin: 0;
    &:hover .onHover:not(:hover) {
      opacity: 1;
    }
  }
`;
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
  h3:hover {
    text-decoration: underline;
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
const GithubBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 0.2rem;
  border-radius: 999px;
  border: 1px solid rgba(0, 0, 0, 0);
  padding: 0.4rem 1rem;
  color: white;
  background: none;
  height: auto;
  cursor: pointer;
  &:hover {
    border: 1px solid white;
  }
  transition: 0.5s ease;
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
    <ProjWrapper>
      {data.map((project, index) => (
        <Project key={index} id="projects" className="onHover">
          <ProjImg>
            <Reveal>
              <a href={project.link}>
                <img src={project.img} alt="" />
              </a>
            </Reveal>
          </ProjImg>
          <ProjInfo>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: ".2rem 0",
              }}
            >
              <Reveal>
                <h3>
                  <a href={project.link} target="_blank" rel="noreferrer">
                    {project.title}
                  </a>
                </h3>
              </Reveal>
              <Reveal>
                <GithubBtn
                  onClick={() =>
                    window.open(project.github, "_blank", "noopener,noreferrer")
                  }
                >
                  <IconGithub height="1.5rem" />
                  Repos
                </GithubBtn>
              </Reveal>
            </div>
            <Reveal>
              <p>{project.desc}</p>
            </Reveal>
            <Reveal>
              <Techs>
                {project.techs.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
              </Techs>
            </Reveal>
          </ProjInfo>
        </Project>
      ))}
    </ProjWrapper>
  );
};

export default Projects;
