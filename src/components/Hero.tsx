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
              Wiemy, nie wszyscy jeszcze dobrze przetrawili rok 2021, a tu już myślimy o 2022, ale po zakończonych sukcesami wyjazdach i wspaniałym Balu Członka mamy tyle energii, że w coś ją musimy wpakować.<br/><br/>
Pierwszym Cosiem będzie już trzeci wyjazd słonowodny w naszej historii, czyli DPŻ We Shall Sea 2022!<br/><br/>
Brzmi dobrze? NO RACZEJ, ŻE BRZMI DOBRZE!:)<br/><br/>
Jeśli wolne koje się skończyły, to ciągle warto dopisywać się do listy rezerwowej - przy odpowiednio dużym zainteresowaniu rozważymy wzięcie trzeciego jachtu.
Więc brać urlopy i do dzieła!
                <br />
                <br />A teraz przejdźmy do konkretów, czyli formularza
                zgłoszeniowego.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={3} sm={6}>
            <TripInfoWrapper>
              <Typography color="inherit" variant="h6">
                Termin: 23.04.2022 - 30.04.2022
                <br />
                Koszt: 1900 PLN
                <br />
                Start: Trogir, Chorwacja
                <br />
                Transport: własny lub grupowy (rozliczany osobno)
                <br/>
                Jachty: Elan Impression 45
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
