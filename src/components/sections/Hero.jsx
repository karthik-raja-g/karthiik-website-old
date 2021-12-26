import React from "react";
import styled from "styled-components";

const HeroDiv = styled.div`
  min-height: 100vh;
`
const Hero = () => {
  const one = <h3>Hello! I'm</h3>;
  const two = <h1 className="bigHeading">Karthik</h1>;
  const three = (
    <h1 className="bigHeading">I build apps and extensions to make the internet a better place</h1>
  );
  const four = (
    <p>
      Fugiat culpa pariatur exercitation aliqua qui veniam do sint culpa
      exercitation ad commodo.
    </p>
  );
  const items = [one, two, three, four];
  return (
    <HeroDiv id="intro">
      {items.map((item, i) => (
        <div key={i}>{item}</div>
      ))}
    </HeroDiv>
  );
};

export default Hero;
