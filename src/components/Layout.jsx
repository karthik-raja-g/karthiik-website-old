import React, { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyles from "../styles/GlobalStyles";
import themes from "../styles/themes";

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
`;

const Layout = ({ children }) => {
  const [theme, setTheme] = useState("dark");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyles />
      <div id="root">
        <StyledContent>
          <div id="content">{children}</div>
        </StyledContent>
      </div>
      ;
    </ThemeProvider>
  );
};

export default Layout;
