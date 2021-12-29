import React from "react";
import styled from "styled-components";
import Html from "../../images/logos/html-5.svg";
import Angular from "../../images/logos/angularjs.svg";
import BrowserLogo from "../../images/logos/chrome.svg";
import Css from "../../images/logos/css3.svg";
import Gatsby from "../../images/logos/gatsbyjs .svg";
import Javascript from "../../images/logos/javascript.svg";
import ReactLogo from "../../images/logos/react.svg";
import Wordpress from "../../images/logos/wordpress.svg";

const SkillSection = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 15px;
  padding: 15px;
  max-width: 100%;

  @media (max-width: 425px) {
    grid-template-columns: repeat(auto-fill, minmax(50px, 1fr));
  }

  img {
    width: min(100px, 100%);

    @media (max-width: 425px) {
      width: 100%;
    }
  }
`;

const logos = [
  Html,
  Css,
  Javascript,
  ReactLogo,
  BrowserLogo,
  Gatsby,
  Wordpress,
  Angular,
];
const Skills = () => {
  return (
    <section>
      <h1 className="bigHeading">Karthik</h1>
      <h1 className="bigHeading">
        I build apps and extensions to make the internet a better place
      </h1>
      <SkillSection>
        {logos.map((logo) => (
          <img src={logo} />
        ))}
      </SkillSection>
    </section>
  );
};

export default Skills;
