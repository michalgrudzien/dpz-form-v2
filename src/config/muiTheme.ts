import { createMuiTheme } from "@material-ui/core/styles";
import colors from "config/colors";

const headingStyle = {
  color: colors.graphite,
  fontFamily: "Bebas Neue, sans-serif",
  marginBottom: "1rem",
};

const bodyStyle = {
  color: colors.graphite,
  fontFamily: "Poppins, sans-serif",
  lineHeight: 1.75,
};

const theme = createMuiTheme({
  typography: {
    h2: headingStyle,
    h3: headingStyle,
    h4: headingStyle,
    h5: headingStyle,
    body1: bodyStyle,
  },
  palette: {
    primary: { main: colors.primary, contrastText: colors.white },
    secondary: { main: colors.secondary, contrastText: colors.white },
    error: { main: colors.red, contrastText: colors.white },
    success: { main: colors.green, contrastText: colors.white },
  },
  shape: {
    borderRadius: 8,
  },
  spacing: 8,
  overrides: {
    MuiButton: {
      root: {
        fontWeight: 600,
        borderRadius: 0,
      },
    },
    MuiCardContent: {
      root: {
        padding: 24,
      },
    },
    MuiFormControlLabel: {
      labelPlacementBottom: {
        display: "flex",
        textAlign: "center",
      },
    },
    MuiFormLabel: {
      root: {
        fontFamily: "Bebas Neue, sans-serif",
        marginBottom: "0.2em",
        fontSize: "1.2em",
      },
    },
    MuiTextField: {
      root: {
        fontFamily: "Poppins",
      },
    },
    MuiFormControl: {
      root: {
        marginBottom: "0.5em",
      },
    },
  },
});

export default theme;
