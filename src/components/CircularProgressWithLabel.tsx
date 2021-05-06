import React, { FunctionComponent } from "react";

import {
  Box,
  CircularProgress,
  CircularProgressProps,
  createStyles,
  Typography,
  withStyles,
  makeStyles,
  Theme,
} from "@material-ui/core";

const LabelBox = withStyles({
  root: {
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
})(Box);

const Label = withStyles({
  root: {
    color: "white",
    fontSize: 32,
  },
})(Typography);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      color: ({ loading, htmlColor }: any) =>
        loading ? theme.palette.primary : htmlColor,
    },
    bottom: {
      color: theme.palette.grey[100],
      position: "absolute",
      opacity: 0.15,
    },
    circle: {
      strokeLinecap: "round",
    },
  })
);

const CircularProgressWithLabel: FunctionComponent<
  CircularProgressProps & { label: string; htmlColor: string; loading: boolean }
> = (props) => {
  const { loading, htmlColor, label, value } = props;
  const styles = useStyles({ htmlColor, loading });

  return (
    <Box position="relative" display="inline-flex">
      <Box position="relative">
        <CircularProgress
          variant="static"
          size={140}
          thickness={4.5}
          value={100}
          color="inherit"
          classes={{ root: styles.bottom }}
        />
        <CircularProgress
          variant={loading ? "indeterminate" : "static"}
          size={140}
          thickness={4.5}
          value={value}
          classes={styles}
        />
      </Box>
      {!loading && (
        <LabelBox>
          <Label variant="body1">{label}</Label>
        </LabelBox>
      )}
    </Box>
  );
};

export default CircularProgressWithLabel;
