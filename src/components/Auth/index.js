import React, { Fragment, Component } from "react";
import Signup from "./signup";
import Signin from "./signin";
class Auth extends Component {
    state = {
        selectedPage: "Signin"
    };

    setPage = (event, selectedPage) => {
        this.setState({ selectedPage });
    };
    getPageContent(pageName) {
        switch (pageName) {
            case "Signup":
                return <Signup setPage={this.setPage} />;
            case "Signin":
                return <Signin setPage={this.setPage} />;

            default:
                return "Unbekannter Fehler";
        }
    }
    render() {
        const { selectedPage } = this.state;
        return <Fragment> {this.getPageContent(selectedPage)}</Fragment>;
    }
}

export default Auth;
