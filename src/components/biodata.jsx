import { styled } from "styled-components";
import { myData } from "../assets/data";

const Data = styled.div`
  padding: 0.1;
  width: 100%;
  h1 {
    font-size: 5rem;
    margin: 0 0 1rem 0;
    background-size: 400% 100%;
    background-position: 0% 0%;
    color: rgb(235, 235, 235);
    background-image: linear-gradient(
      120deg,
      rgb(235, 235, 235) 0%,
      rgb(169, 251, 221) 33%,
      rgb(255, 236, 191) 66%,
      rgb(235, 235, 235) 100%
    );
    background-clip: text;
    color: transparent;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: moveGradient 30s linear infinite;
  }
  h3 {
    font-size: 1rem;
    font-weight: 500;
    margin-bottom: 1.5rem;
    margin-top: 0.5rem;
  }
  p {
    font-size: 0.9rem;
    font-weight: 300;
    width: 80%;
  }
  span {
    color: rgb(61, 255, 174);
    background-color: rgba(0, 201, 117, 0.22);
    padding: 8px 12px;
    border-radius: 30px;
    font-weight: 500;
  }
  @keyframes moveGradient {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: 400% 0%;
    }
  }
  @media (max-width: 1280px) {
    h1 {
      font-size: 4rem;
    }
  }
  @media (max-width: 768px) {
    h1 {
      font-size: 3.8;
    }
    h3 {
      font-size: 1rem;
    }
    p {
      font-size: 1.1rem;
      font-weight: 300;
      width: 100%;
    }
  }
  @media (max-width: 450px) {
    h1 {
      font-size: 3.5rem;
    }
    h3 {
      font-size: 0.9rem;
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
        <span>{data.role1}</span> <span>{data.role2}</span>
      </h3>

      <p>{data.desc}</p>
    </Data>
  );
};

export default Biodata;
