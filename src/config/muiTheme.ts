import { createMuiTheme } from "@material-ui/core/styles";

import colors from "config/colors";
import BebasNeueBoldWoff from "fonts/BebasNeueBold.woff";

const headingStyle = {
  color: colors.graphite,
  fontFamily: "Bebas Neue Bold, sans-serif",
  marginBottom: "1rem",
};

const bodyStyle = {
  color: colors.graphite,
  fontFamily: "Poppins, sans-serif",
  lineHeight: 1.75,
};

const BebasNeueBold = {
  fontFamily: "Bebas Neue Bold",
  fontStyle: "bold",
  fontWeight: 600,
  src: `
    local('Bebas Neue Bold'),
    url(${BebasNeueBoldWoff}) format(woff)
  `,
};

const theme = createMuiTheme({
  typography: {
    h2: headingStyle,
    h3: headingStyle,
    h4: headingStyle,
    h5: headingStyle,
    body1: bodyStyle,
    fontSize: 14,
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
    MuiCssBaseline: {
      "@global": {
        "@font-face": [BebasNeueBold],
      },
    },
    MuiButton: {
      root: {
        fontWeight: 600,
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
        fontSize: "1.3em",
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
    MuiRadio: {
      root: {
        "&$checked": {
          color: colors.primary,
        },
      },
    },
    MuiCheckbox: {
      root: {
        "&$checked": {
          color: colors.primary,
        },
      },
    },
    MuiDialogContent: {
      root: {
        padding: "20px",
      },
    },
  },
});

export default theme;
