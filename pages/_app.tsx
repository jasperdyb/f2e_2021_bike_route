import type { AppProps } from "next/app";
import { useContext, createContext } from "react";
import { createGlobalStyle } from "styled-components";
import CssBaseline from "@mui/material/CssBaseline";
import {
  createTheme,
  styled,
  ThemeProvider,
  darken,
} from "@mui/material/styles";
import { SceneSpotContextProvider } from "context/sceneSpot";

const GlobalStyle = createGlobalStyle`
html{ 
}

body{ 
}
`;

const mainTheme = createTheme({
  palette: {
    primary: {
      main: "#E8CB89",
    },
    secondary: {
      main: "#A6CDE0",
    },
    info: {
      main: "#7BAEBE",
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
      fontSize: "22px",
      letterSpacing: "1.54px",
      lineHeight: "30px",
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
