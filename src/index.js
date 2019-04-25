import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import * as serviceWorker from "./serviceWorker";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#212121"
        },
        secondary: {
            main: "#ffffff"
        }
    }
});

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <App />
    </MuiThemeProvider>,
    document.getElementById("root")
);

serviceWorker.register();
