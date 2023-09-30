/* eslint-disable react/no-unescaped-entities */
import styled from "styled-components";

const InFooter = styled.div`
  font-size: 0.8rem;
  margin: 2rem 0 3rem 0;
  padding: 1rem 5px;
  line-height: 1.5;
  span {
    font-weight: 700;
  }
`;

const Footer = () => {
  return (
    <InFooter>
      Designed flexible using <span>Figma</span> and personally coded it using{" "}
      <span>Visual Studio Code</span>. Built with <span>React.js</span> styled
      components, and deployed with <span>Vercel</span>. The text is styled
      using the <span>Inter</span> typeface.
    </InFooter>
  );
};

export default Footer;
