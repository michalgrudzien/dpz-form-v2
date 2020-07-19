import React from "react";
import styled from "styled-components";

import { ThemeProvider } from "@material-ui/styles";

import Form from "components/Form";
import theme from "config/muiTheme";

import logoImg from "assets/images/wt_logo.svg";
import { Container, CssBaseline } from "@material-ui/core";
import GradientBackground from "components/GradientBackground";

const Wrapper = styled.div`
  padding-bottom: 2em;
`;

const Logo = styled.img`
  display: block;
  width: 250px;
  padding: 2em 0 1em;
  margin: 0 auto;
`;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Wrapper>
        <GradientBackground />
        <Container>
          <Logo src={logoImg} alt="DPŻ World Tour" />
          <Form />
        </Container>
      </Wrapper>
    </ThemeProvider>
  );
};

export default App;
