import React from "react";
import styled from "styled-components";

import { ThemeProvider } from "@material-ui/styles";

import Form from "components/Form";
import theme from "config/muiTheme";

import logoImg from "assets/images/wt_logo.svg";
import { Container, CssBaseline, Typography } from "@material-ui/core";
import GradientBackground from "components/GradientBackground";
import colors from "config/colors";

const Wrapper = styled.div`
  padding-bottom: 2em;
`;

const Logo = styled.img`
  display: block;
  width: 250px;
  padding: 2em 0 1em;
  margin: 0 auto;
`;

const Footer = styled.footer`
  padding-bottom: 2em;
  color: ${colors.white};
  text-align: center;

  a {
    color: ${colors.white};
  }
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
      <Footer>
        <Typography color="inherit">
          © Dobra Praktyka Żeglarska {new Date().getFullYear()} |{" "}
          <a href="https://depezet.com">depezet.com</a> | Masz pytania? Zapytaj
          na{" "}
          <a href="https://m.me/dobrapraktykazeglarska" target="_blank">
            messengerze
          </a>{" "}
          :)
        </Typography>
      </Footer>
    </ThemeProvider>
  );
};

export default App;
