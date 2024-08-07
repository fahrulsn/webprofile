import { styled } from "styled-components";
import { myData } from "../assets/data";

const Data = styled.div`
  padding: 0.2;
  width: 100%;
  h1 {
    font-size: 2.8rem;
    margin: 0 0 1rem 0;
    text-shadow: -2px 1px #7f7f7f;
  }
  h3 {
    font-size: 1.3rem;
    font-weight: 500;
    margin-bottom: 1.5rem;
    text-shadow: -0.5px 0px #7f7f7f;
  }
  p {
    font-size: 1rem;
    text-shadow: -0.5px 0px #7f7f7f;
    font-weight: 300;
  }
  @media (max-width: 1280px) {
    h1 {
      font-size: 2.7rem;
      text-shadow: 0px 0px #7f7f7f;
    }
  }
  @media (max-width: 768px) {
    h1 {
      font-size: 2.7rem;
      text-shadow: 0px 0px #7f7f7f;
    }
    h3 {
      font-size: 1.2rem;
    }
    p {
      font-size: 1.1rem;
      font-weight: 300;
    }
  }
  @media (max-width: 450px) {
    h1 {
      font-size: 2.3rem;
      text-shadow: 0px 0px #7f7f7f;
    }
    h3 {
      font-size: 1.1rem;
    }
    p {
      font-size: 1rem;
      font-weight: 300;
    }
  }
`;
const data = myData.biodata[0];
const Biodata = () => {
  return (
    <Data>
      <h1>{data.name}</h1>
      <h3>
        {data.role1} <br /> {data.role2}
      </h3>
      <p>{data.desc}</p>
    </Data>
  );
};

export default Biodata;
