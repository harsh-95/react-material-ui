import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import App from "./components/App";
import { MuiThemeProvider, createMuiTheme} from '@material-ui/core';
import {red, amber} from '@material-ui/core/colors';

const rootElement = document.getElementById("root");
const theme = createMuiTheme({
  overrides: {
    MuiListItem: {
        root: {
            // Targets MuiSvgIcon elements that appear as descendants of MuiButton
            '& [class*="MuiSvgIcon-root"]': {
                color: amber.A400
            }
        },
    },
},
  palette:{
    primary:{
      main: red[500]
    },
    secondary: {
      main: amber.A400,
      light: amber[200],
      dark: amber[700]
    },
    type: 'dark'
  }
});

ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={theme}>
    <App />
    </MuiThemeProvider>
  </React.StrictMode>,
  rootElement
);
