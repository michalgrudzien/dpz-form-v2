import React, { FunctionComponent } from "react";
import styled from "styled-components";

import { Typography, Grid, CardContent } from "@material-ui/core";

import Logo from "components/Logo";
import colors from "config/colors";

const MainTextWrapper = styled.div`
  color: ${colors.white};
  text-shadow: 1px 1px rgba(0, 0, 0, 0.5);
  padding-bottom: 2em;
`;

const Hero: FunctionComponent = () => (
  <>
    <Logo />
    <CardContent>
      <MainTextWrapper>
        <Typography color="inherit" variant="h2" component="h1">
          No siema!
        </Typography>
        <Grid container spacing={8}>
          <Grid item xs={12} md={6}>
            <Typography color="inherit" variant="body1">
              W roku 2020 sporo rzeczy nie pykło i co nieco trzeba było odwołać
              (wesela, premiery filmowe, festiwal muzyki przeróżnej Grasz
              Bór...), ale widzimy, że na World Tourze DPŻ zależy Ci równie
              mocno jak nam! Dziękujemy!
              <br />
              <br />A teraz przejdźmy do konkretów, czyli formularza
              zgłoszeniowego.
            </Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography color="inherit" variant="h5">
              Termin: 19.06.2020 - 26.06.2020
            </Typography>
            <Typography color="inherit" variant="h5">
              Koszt: 900zł
            </Typography>
            <Typography color="inherit" variant="h5">
              Start: Kraków/Gizycko
            </Typography>
          </Grid>
        </Grid>
      </MainTextWrapper>
    </CardContent>
  </>
);

export default Hero;
