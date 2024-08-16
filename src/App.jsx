import { useState, useEffect } from "react";
import styled from "styled-components";
import Biodata from "./components/biodata";
import Navigation from "./components/nav";
import Content from "./components/content";
import Socmed from "./components/socmed";
import Footer from "./components/footer";

const RightWrapper = styled.div`
  display: flex;
  width: 75%;
  margin: 0 auto;
  height: auto;
  justify-content: flex-end;
  @media (max-width: 768px) {
    width: 90%;
  }
`;
const LeftWrapper = styled.div`
  display: flex;
  width: 75%;
  padding: 6rem 0 0 0;
  margin: 0 auto;
  height: auto;
  justify-content: flex-start;
  @media (max-width: 768px) {
    width: 90%;
    padding: 2rem 0 0 0;
  }
`;

const Right = styled.div`
  flex-direction: column;
  display: flex;
  width: 50%;
  height: auto;
  @media (max-width: 1036px) {
    width: 100%;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Left = styled.div`
  position: fixed;
  flex-direction: column;
  padding: 1.5rem 0 0 0;
  border-radius: 0.5rem;
  display: flex;
  width: 32%;
  justify-content: space-between;
  height: calc(100vh - 12rem);
  transform-origin: 100%;
  /* transform: perspective(1000px) rotateY(12deg); */
  transition: 0.5s ease;
  /* background-color: rgba(63, 69, 103, 0.3); */
  /* box-shadow: 0px 0px 2rem rgba(63, 69, 103, 0.2); */
  /* backdrop-filter: blur(5px); */
  @media (max-width: 1036px) {
    position: relative;
    padding: 1rem 0.5rem;
    width: 100%;
    height: auto;
    /* transform: perspective(1000px) rotateY(0deg); */
  }
`;

const LightPointer = styled.div`
  position: relative;
  width: 100%;
  display: block;
`;

const RadialBackground = styled.div`
  position: fixed;
  inset: 0;
  transition-duration: 0.3s;
  pointer-events: none;
  z-index: 30;
  background: radial-gradient(
    600px circle at var(--x) var(--y),
    rgba(29, 78, 216, 0.2),
    transparent 80%
  );
  height: 100vh;

  @media (max-width: 768px) {
    background: radial-gradient(
      600px circle at 10% 20%,
      rgba(29, 78, 216, 0.3),
      transparent 80%
    );
    z-index: -30;
  }
`;
const GridBg = styled.div`
  background-image: url("/img/ooorganize.svg");
  /* background-size: 70%; */
  z-index: -30;
  opacity: 0.05;
  position: fixed;
  height: 100vh;
  width: 100vw;
`;
function App() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const handlePointerMove = (ev) => {
    setX(`${ev.clientX}px`);
    setY(`${ev.clientY}px`);
  };
  useEffect(() => {
    const darkIcon = document.getElementById("dark-icon");
    const lightIcon = document.getElementById("light-icon");

    const toggleFavicon = (isDarkMode) => {
      if (isDarkMode) {
        darkIcon.setAttribute("href", "img/logo-dark.png");
        lightIcon.setAttribute("href", "");
      } else {
        lightIcon.setAttribute("href", "img/logo-light.png");
        darkIcon.setAttribute("href", "");
      }
    };

    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
    toggleFavicon(prefersDarkScheme.matches);

    const mediaQueryListener = (e) => {
      toggleFavicon(e.matches);
    };

    prefersDarkScheme.addListener(mediaQueryListener);

    return () => {
      prefersDarkScheme.removeListener(mediaQueryListener);
    };
  }, []);

  return (
    <LightPointer onPointerMove={handlePointerMove}>
      <RadialBackground
        style={window.innerWidth <= 768 ? {} : { "--x": x, "--y": y }}
      />
      <GridBg></GridBg>
      <LeftWrapper>
        <Left>
          <Biodata />
          <Navigation />
          <Socmed />
        </Left>
      </LeftWrapper>
      <RightWrapper>
        <Right>
          <Content />
          <Footer />
        </Right>
      </RightWrapper>
    </LightPointer>
  );
}

export default App;
