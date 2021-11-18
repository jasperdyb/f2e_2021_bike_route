import type { AppProps } from "next/app";
import { useContext, createContext } from "react";
import { createGlobalStyle } from "styled-components";
import CssBaseline from "@mui/material/CssBaseline";
import {
  createTheme,
  styled,
  ThemeProvider,
  darken,
  Palette,
  PaletteOptions,
} from "@mui/material/styles";
import { SceneSpotContextProvider } from "context/sceneSpot";

const GlobalStyle = createGlobalStyle`
html{ 
}

body{ 
}
`;

declare module "@mui/material/styles" {
  interface Palette {
    primaryContrast: Palette["primary"];
  }
  interface PaletteOptions {
    primaryContrast?: PaletteOptions["primary"];
  }
}

const mainTheme = createTheme({
  palette: {
    primary: {
      main: "#E1AB43",
      contrastText: "#FFF",
    },
    primaryContrast: {
      main: "#FFF",
      contrastText: "#E1AB43",
    },
    secondary: {
      main: "#A6CDE0",
    },
    info: {
      main: "#FFF",
      contrastText: "#000",
    },
  },

  shape: {
    borderRadius: 15,
  },

  typography: {
    // fontFamily:font-family: PingFangTC-Regular, sans-serif,
    fontFamily: [
      "'EB Garamond'",
      "PingFang TC",
      "'Noto Sans TC'",
      "Roboto",
      "sans-serif",
    ].join(","),
    fontSize: 14,

    h1: {
      fontSize: "24px",
    },
    h2: {
      fontSize: "18px",
      letterSpacing: "1.26px",
      lineHeight: "25px",
    },
    subtitle1: {
      fontSize: "14px",
      lineHeight: "16px",
    },
    body1: {
      fontSize: "16px",
      lineHeight: "25px",
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        containedPrimary: {
          color: "#FFF",
        },
      },
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <CssBaseline />
      <GlobalStyle />
      <ThemeProvider theme={mainTheme}>
        <SceneSpotContextProvider>
          <Component {...pageProps} />
        </SceneSpotContextProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
