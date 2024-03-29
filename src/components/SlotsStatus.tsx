import React, { FunctionComponent, useEffect, useState } from "react";

import { Box, Typography, withStyles } from "@material-ui/core";

import CircularProgressWithLabel from "components/CircularProgressWithLabel";
import getTrip from "api/getTrip";
import colors from "config/colors";

const Wrapper = withStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}))(Box);

const SlotsStatus: FunctionComponent = () => {
  const [loadingTrip, setLoadingTrip] = useState(true);
  const [trip, setTrip]: [any, Function] = useState({});

  useEffect(() => {
    getTrip(parseInt(process.env.REACT_APP_TRIP_ID || "0")).then(({ data }) => {
      setTrip(data);
      setLoadingTrip(false);
    });
  }, []);

  const { placesAvailable = 1, places = 1 } = trip;

  const noPlacesAvailable = placesAvailable < 1;

  const label = `${placesAvailable}/${places}`;
  const progress = Math.round((placesAvailable / places) * 100);

  const htmlColor =
    progress > 50 ? colors.green : progress > 25 ? colors.orange : colors.red;

  return (
    <Wrapper>
      <Typography color="inherit" variant="h6">
        Wolne koje:
      </Typography>
      <CircularProgressWithLabel
        value={noPlacesAvailable ? 100 : progress}
        label={label}
        htmlColor={htmlColor}
        loading={loadingTrip}
      />
      {noPlacesAvailable && (
        <Box pt={2}>
          <Typography color="inherit" variant="h6">
            Zapisy na listę rezerwową!
          </Typography>
        </Box>
      )}
    </Wrapper>
  );
};

export default SlotsStatus;
