import React, { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyles from "../styles/GlobalStyles";
import themes from "../styles/themes";
import Email from "./Email";
import SocialLinks from "./SocialLinks";

const AppLayout = styled.div`
  counter-reset: section;
`;
const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
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
      <AppLayout>
        <SocialLinks />
        <Email />
        <StyledContent className="fillHeight">{children}</StyledContent>
      </AppLayout>
    </ThemeProvider>
  );
};

export default Layout;
