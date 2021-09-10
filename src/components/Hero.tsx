import React, { FunctionComponent } from "react";
import styled from "styled-components";

import {
  Typography,
  Grid,
  CardContent,
  Box,
  withStyles,
} from "@material-ui/core";

import Logo from "components/Logo";
import colors from "config/colors";
import SlotsStatus from "./SlotsStatus";

const MainTextWrapper = styled.div`
  color: ${colors.white};
  text-shadow: 1px 1px rgba(0, 0, 0, 0.5);
  padding-bottom: 2em;
`;

const TripInfoWrapper = withStyles((theme) => ({
  root: {
    [theme.breakpoints.up("md")]: {
      paddingLeft: theme.spacing(3),
    },
  },
}))(Box);

const Hero: FunctionComponent = () => (
  <>
    <Logo />
    <CardContent>
      <MainTextWrapper>
        <Typography color="inherit" variant="h2" component="h1">
          No siema!
        </Typography>
        <Grid container spacing={0}>
          <Grid item xs={12} md={5}>
            <Box pb={3}>
              <Typography color="inherit" variant="body1">
                Rok 2021 nie spełnił jak na razie wszystkich pokładanych w nim
                oczekiwań, ale jesteśmy bliżej niż dalej. Jednym z elementów
                starej i&nbsp;nowej normalności musi oczywiście być wyjazd DPŻ,
                więc bardzo dziękujemy, że razem z nami płyniesz po takie sobie
                jutro! ;)
                <br />
                <br />A teraz przejdźmy do konkretów, czyli formularza
                zgłoszeniowego.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={3} sm={6}>
            <TripInfoWrapper>
              <Typography color="inherit" variant="h6">
                Termin: 13.11.2021 - 20.11.2021
                <br />
                Koszt: 1800 PLN
                <br />
                Start: Ateny
                <br />
                Transport: własny
              </Typography>
            </TripInfoWrapper>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <SlotsStatus />
          </Grid>
        </Grid>
      </MainTextWrapper>
    </CardContent>
  </>
);

export default Hero;
