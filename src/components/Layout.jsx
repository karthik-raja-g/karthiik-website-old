import React, { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyles from "../styles/GlobalStyles";
import themes from "../styles/themes";
import Email from "./Email";
import SocialLinks from "./SocialLinks";

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Layout = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyles />
      <SocialLinks/>
      <Email />
      <section className="fillHeight">
        <StyledContent>{children}</StyledContent>
      </section>
    </ThemeProvider>
  );
};

export default Layout;
