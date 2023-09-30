import styled from "styled-components";

const Wrapper = styled.div`
  margin: 2rem 0;
`;

const Resume = () => {
  return (
    <Wrapper>
      <a href={"/docs/resume.pdf"}>
        <h4> View Full Resume </h4>
      </a>
    </Wrapper>
  );
};

export default Resume;
