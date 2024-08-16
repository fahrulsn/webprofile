/* eslint-disable react/no-unescaped-entities */
import { styled } from "styled-components";
import { myData } from "../assets/data";

const ExpWrapper = styled.div`
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
  font-size: 0.9rem;
  pointer-events: none;

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

const InExp = styled.div`
  display: flex;
  margin: 0.5rem 0;
  padding: 1rem;
  border-radius: 0.5rem;
  pointer-events: auto;
  transition: 0.5s ease;
  &:hover {
    background-color: rgba(63, 69, 103, 0.3);
    box-shadow: 0px 0px 2rem rgba(63, 69, 103, 0.2);
    backdrop-filter: blur(2px);
  }
  &:hover h3 {
    color: rgb(61, 255, 174);
  }
  @media (max-width: 768px) {
    flex-direction: column;
    background-color: rgba(63, 69, 103, 0.3);
    box-shadow: 0px 0px 2rem rgba(63, 69, 103, 0.2);
    row-gap: 0.6rem;
  }
`;

const Year = styled.div`
  width: 25%;
  font-weight: 500;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const InfoExp = styled.div`
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

const Skills = styled.div`
  display: flex;
  column-gap: 0.5rem;
  row-gap: 0.5rem;
  flex-wrap: wrap;
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgb(61, 255, 174);
    background-color: rgba(0, 201, 117, 0.22);
    padding: 6px 10px;
    border-radius: 30px;
    font-weight: 500;
    font-size: 0.8rem;
  }
`;

const data = myData.exper;
const Experience = () => {
  return (
    <ExpWrapper id="experience">
      {data.map((exp, index) => (
        <InExp key={index} className="onHover">
          <Year>{exp.year}</Year>
          <InfoExp>
            <h3>
              {exp.pos} {"·"} {exp.comp}
            </h3>
            <p>{exp.desc}</p>
            <Skills>
              {exp.skills.map((skill, i) => (
                <span key={i}>{skill}</span>
              ))}
            </Skills>
          </InfoExp>
        </InExp>
      ))}
    </ExpWrapper>
  );
};

export default Experience;
