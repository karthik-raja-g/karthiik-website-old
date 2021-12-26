import React from "react";
import styled from "styled-components";
import { socialMedia } from "../config";
import Side from "./Side";
import Icon from "./icons";

const StyledDiv = styled.div`
  &:after {
    content: "";
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: ${({ theme }) => theme.text};
  }
`;

const LinksDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
  gap: 10px;

  a {
    &:hover {
      transform: translateY(-3px);
    }
  }
`;
const SocialLinks = () => {
  return (
    <Side orientation="left">
      <StyledDiv>
        <LinksDiv>
          {socialMedia.map((platform) => (
            <a href={platform.url} target="_blank">
              <Icon name={platform.name} />
            </a>
          ))}
        </LinksDiv>
      </StyledDiv>
    </Side>
  );
};

export default SocialLinks;
