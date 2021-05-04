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

const PreopenHero: FunctionComponent = () => (
  <>
    <Logo />
    <CardContent>
      <MainTextWrapper>
        <Typography color="inherit" variant="h4" component="h1">
          Dobrze trafiłeś!
          <br />
          Tu wkrótce pojawi się formularz zgłoszeniowy.
        </Typography>
      </MainTextWrapper>
    </CardContent>
  </>
);

export default PreopenHero;
