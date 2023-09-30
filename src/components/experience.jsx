/* eslint-disable react/no-unescaped-entities */
import { styled } from "styled-components";

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

const Experience = () => {
  return (
    <ExpWrapper id="experience">
      <InExp className="onHover">
        <Year>Feb - Jul 2023</Year>
        <InfoExp>
          <h3>Cloud Computing Cohort {"·"} Bangkit Academy</h3>
          <p>
            Learning technical aspects of cloud computing and GCP and soft
            skills such as critical thinking, project management, and time
            management. Collaborating on a team project to create a useful
            product for the community.
          </p>
          <Skills>
            <span>Google Cloud Platform</span>
            <span>JavaScript</span>
            <span>Node.js</span>
            <span>Hapi</span>
            <span>Docker</span>
          </Skills>
        </InfoExp>
      </InExp>
      <InExp className="onHover">
        <Year>2020 - 2023</Year>
        <InfoExp>
          <h3>Admin Design Staff {"·"} Golden Nusantara</h3>
          <p>
            Providing custom design solutions based on client requests and
            redesigning client-provided designs for production purposes.
            Managing warehouse stock administration and handling monthly tax
            input and reporting.
          </p>
          <Skills>
            <span>Corel Draw</span>
            <span>Photoshop</span>
          </Skills>
        </InfoExp>
      </InExp>
      <InExp className="onHover">
        <Year>2018 - 2020</Year>
        <InfoExp>
          <h3>IT Support Staff {"·"} SinarOzora Lestari</h3>
          <p>
            Performing installation of operating systems and software on office
            products and equipment, designing brochures, editing videos for
            marketing and presentation purposes, creating simple websites,
            monitoring product display signage through cloud services, and
            troubleshooting hardware, software, and network issues.
          </p>
          <Skills>
            <span>HTML</span>
            <span>CSS</span>
            <span>Corel Draw</span>
            <span>Photoshop</span>
            <span>After Effect</span>
            <span>Vegas Pro</span>
          </Skills>
        </InfoExp>
      </InExp>
    </ExpWrapper>
  );
};

export default Experience;
