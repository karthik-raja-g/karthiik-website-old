import React from "react";
import styled from "styled-components";
import Welcome from "../Welcome";

const HeroSection = styled.section`
  min-height: 100vh;
`;
const Hero = () => {
  const one = <h3>Hello! I'm</h3>;
  const two = <h1 className="bigHeading">Karthik</h1>;
  const three = (
    <h1 className="bigHeading">
      Fugiat culpa pariatur exercitation 
    </h1>
  );
  const four = (
    <p>
      Fugiat culpa pariatur exercitation aliqua qui veniam do sint culpa
      exercitation ad commodo.
    </p>
  );
  const items = [one, two, three, four];
  return (
    <HeroSection id="intro">
      {/* <Welcome /> */}
      {items.map((item, i) => (
        <div key={i}>{item}</div>
      ))}
    </HeroSection>
  );
};

export default Hero;
