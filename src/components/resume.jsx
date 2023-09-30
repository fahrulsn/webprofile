import styled from "styled-components";

const Wrapper = styled.div`
  margin: 3rem 0;
  width: 60%;
  margin: auto;
  display: flex;
  justify-content: center;
  padding: 0.8rem 0;
  border-radius: 10px;
  border: 1px solid rgba(61, 255, 174, 0.5);
  transition: 0.5s ease;
  color: rgb(61, 255, 174);
  background-size: 100% 205%;
  background-position: 0% -96%;
  background-image: linear-gradient(
    to bottom,
    rgba(61, 255, 174, 1) 0%,
    rgba(61, 255, 174, 1) 50%,
    rgba(0, 0, 0, 0) 50%,
    rgba(0, 0, 0, 0) 100%
  );
  &:hover {
    /* background-color: rgb(61, 255, 174); */
    background-position: 100% 0;
    color: #000314;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Resume = () => {
  return (
    <a
      style={window.innerWidth <= 768 ? { margin: "1rem 0" } : {}}
      href={"/docs/resume.pdf"}
    >
      <Wrapper>
        <h4> View Full Resume </h4>
      </Wrapper>
    </a>
  );
};

export default Resume;
