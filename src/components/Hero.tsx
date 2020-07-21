import React, { FunctionComponent } from "react";
import styled from "styled-components";

import { Typography, Grid, CardContent } from "@material-ui/core";

import colors from "config/colors";
import wtLogoImg from "assets/images/wt_logo.svg";

const Logo = styled.img`
  display: block;
  width: 250px;
  padding: 2em 0 1em;
  margin: 0 auto;
`;

const MainTextWrapper = styled.div`
  color: ${colors.white};
  text-shadow: 1px 1px rgba(0, 0, 0, 0.5);
  padding-bottom: 2em;
`;

//TODO: add WSS logo depending on env
const logoImg = wtLogoImg;

const Hero: FunctionComponent = () => (
  <>
    <Logo src={logoImg} alt="DPŻ World Tour" />
    <CardContent>
      <MainTextWrapper>
        <Typography color="inherit" variant="h2" component="h1">
          No siema!
        </Typography>
        <Grid container spacing={8}>
          <Grid item xs={12} md={9}>
            <Typography color="inherit" variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
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
