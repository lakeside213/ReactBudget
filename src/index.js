import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers";
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
const store = createStore(reducers);

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider theme={theme}>
            <App />
        </MuiThemeProvider>
    </Provider>,
    document.getElementById("root")
);

serviceWorker.register();
