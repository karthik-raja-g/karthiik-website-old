import React from "react";
import styled from "styled-components";

const Aboutblock = styled.section``;

const Content = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;

  @media (max-width: 768px) {
    display: block;
  }
`;

const SkillsList = styled.ul`
  ${({ theme }) => theme.mixins.fancyList};
  display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;
`;
const skills = [
  "HTML & CSS",
  "Wordpress",
  "Javascript",
  "Webpack",
  "React",
  "Webflow",
  "Browser extensions/plugins",
  "Git",
];
const sk = [
  { "HTML & CSS": ["SCSS", "Bootstrap"] },
  { Javascript: ["ES6", { React: ["Gatsby"] }, "Browser extensions"] },
  { Wordpress: ["Wordpress"] },
  { Webflow: ["Webflow"] },
];
const About = () => {
  return (
    <Aboutblock>
      <h2 className="numbered-heading">About Me</h2>
      <Content>
        <div>
          Ad nisi mollit ad id velit deserunt do veniam quis fugiat deserunt
          veniam.Aliquip tempor aliqua cillum duis in elit anim sint veniam
          aute.Irure irure labore eiusmod culpa voluptate veniam.
        <SkillsList>
          {skills.map(sk => <li>{sk}</li>)}
        </SkillsList>
        </div>
        <div>photo</div>
      </Content>
    </Aboutblock>
  );
};

export default About;
