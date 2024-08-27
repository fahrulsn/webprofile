import styled from "styled-components";

const Button = styled.div`
  margin: 1rem 0 0 0;
  width: 80%;
  display: flex;
  justify-content: center;
  position: relative;
  padding: 0.8rem 0;
  border-radius: 1rem;
  transition: 0.75s ease;
  color: #000314;
  background-size: 205% 100%;
  background-position: 100% 0%;
  background-image: linear-gradient(
    120deg,
    rgb(255, 200, 138) 0%,
    rgb(255, 200, 138) 20%,
    rgba(61, 255, 174, 1) 60%,
    rgba(61, 255, 174, 1) 100%
  );
  cursor: pointer;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 1rem;
    transition: 0.75s ease;
    box-shadow: 0px 5px 15px rgba(61, 255, 174, 0.4),
      0px 20px 40px rgba(61, 255, 174, 0.3),
      0px 40px 70px rgba(61, 255, 174, 0.1);
    z-index: -1;
  }
  &:hover::after {
    box-shadow: 0px 0px 0rem rgba(61, 255, 174, 1);
  }
  &:hover {
    background-position: 0% 0;
    /* color: rgb(61, 255, 174); */
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const handleClick = () => {
  window.location.href = "/docs/resume.pdf";
};
const Resume = () => {
  return (
    <Button
      onClick={handleClick}
      style={window.innerWidth <= 768 ? { margin: "1rem 0" } : {}}
    >
      <h4> View Full Resume </h4>
    </Button>
  );
};

export default Resume;
