import React from "react";
import styled from "styled-components";

import { ThemeProvider } from "@material-ui/styles";
import { Container, CssBaseline } from "@material-ui/core";

import Form from "components/Form";
import Footer from "components/Footer";
import GradientBackground from "components/GradientBackground";

import theme from "config/muiTheme";
import Hero from "components/Hero";

const Wrapper = styled.div`
  padding-bottom: 2em;
`;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Wrapper>
        <GradientBackground />
        <Container>
          <Hero />
          <Form />
        </Container>
      </Wrapper>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
