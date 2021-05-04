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
import PreopenHero from "components/PreopenHero";

const Wrapper = styled.div`
  padding-bottom: 2em;
`;

enum APP_STATUSES_TYPES {
  OPEN,
  CLOSED,
  PREOPEN,
}

interface APP_STATUSES {
  [idx: string]: APP_STATUSES_TYPES;
}

const appStatuses: APP_STATUSES = {
  OPEN: APP_STATUSES_TYPES.OPEN,
  CLOSED: APP_STATUSES_TYPES.CLOSED,
  PREOPEN: APP_STATUSES_TYPES.PREOPEN,
};

const APP_STATUS: APP_STATUSES_TYPES =
  appStatuses[process.env.REACT_APP_STATUS || "OPEN"];

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Wrapper>
        <GradientBackground />
        <Container>
          {APP_STATUS === APP_STATUSES_TYPES.OPEN && (
            <>
              <Hero />
              <Form />
            </>
          )}
          {APP_STATUS === APP_STATUSES_TYPES.CLOSED && <ClosedHero />}
          {APP_STATUS === APP_STATUSES_TYPES.PREOPEN && <PreopenHero />}
        </Container>
      </Wrapper>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
