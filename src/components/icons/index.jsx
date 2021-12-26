import React from "react";
import IconGitHub from "./Github";
import IconLinkedin from "./Linkedin";
import IconTwitter from "./Twitter";

const Icon = ({ name }) => {
  switch (name) {
    case "Github":
      return <IconGitHub />;
    case "Linkedin":
      return <IconLinkedin />;
    case "Twitter":
      return <IconTwitter />;
  }
};

export default Icon;
