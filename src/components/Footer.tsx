import React, { FunctionComponent } from "react";
import styled from "styled-components";

import { Typography } from "@material-ui/core";

import colors from "config/colors";

const Wrapper = styled.footer`
  padding-bottom: 2em;
  color: ${colors.white};
  text-align: center;

  a {
    color: ${colors.white};
  }
`;

const Footer: FunctionComponent = () => (
  <Wrapper>
    <Typography color="inherit">
      © Dobra Praktyka Żeglarska {new Date().getFullYear()} |{" "}
      <a href="https://depezet.com">depezet.com</a> | Masz pytania? Zapytaj na{" "}
      <a
        href="https://m.me/dobrapraktykazeglarska"
        target="_blank"
        rel="noopener noreferrer"
      >
        messengerze
      </a>{" "}
      :)
    </Typography>
  </Wrapper>
);

export default Footer;
