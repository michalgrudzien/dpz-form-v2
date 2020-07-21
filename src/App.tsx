import React from "react";
import styled from "styled-components";

import { ThemeProvider } from "@material-ui/styles";
import { Container, CssBaseline } from "@material-ui/core";

import Form from "components/Form";
import Footer from "components/Footer";
import GradientBackground from "components/GradientBackground";

import theme from "config/muiTheme";
import Hero from "components/Hero";
import ClosedHero from "components/ClosedHero";

const Wrapper = styled.div`
  padding-bottom: 2em;
`;

enum APP_STATUSES {
  OPEN,
  CLOSED,
}

const APP_STATUS: APP_STATUSES =
  process.env.REACT_APP_STATUS === "OPEN"
    ? APP_STATUSES.OPEN
    : APP_STATUSES.CLOSED;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Wrapper>
        <GradientBackground />
        <Container>
          {APP_STATUS === APP_STATUSES.OPEN && (
            <>
              <Hero />
              <Form />
            </>
          )}
          {APP_STATUS === APP_STATUSES.CLOSED && <ClosedHero />}
        </Container>
      </Wrapper>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
