import React, { FunctionComponent } from "react";
import styled from "styled-components";

import { Typography, CardContent } from "@material-ui/core";

import Logo from "components/Logo";
import colors from "config/colors";

const MainTextWrapper = styled.div`
  color: ${colors.white};
  text-shadow: 1px 1px rgba(0, 0, 0, 0.5);
  padding-bottom: 2em;
  padding-top: 1em;
  text-align: center;
`;

const ClosedHero: FunctionComponent = () => (
  <>
    <Logo />
    <CardContent>
      <MainTextWrapper>
        <Typography color="inherit" variant="h4" component="h1">
          Zapisy zakończone!
          <br />
          Do zobaczenia na pokładzie :)
        </Typography>
      </MainTextWrapper>
    </CardContent>
  </>
);

export default ClosedHero;
