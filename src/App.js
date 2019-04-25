import React, { Fragment, Component } from "react";
import Header from "./components/Header";
import BottomNav from "./components/BottomNav";
import HomePage from "./components/Home";

class App extends Component {
    state = {
        selectedPage: "Home"
    };

    setPage = (event, selectedPage) => {
        this.setState({ selectedPage });
    };
    render() {
        const { selectedPage } = this.state;
        return (
            <Fragment>
                <Header pageName={selectedPage} />
                <HomePage />
                <BottomNav setPage={this.setPage} value={selectedPage} />
            </Fragment>
        );
    }
}

export default App;
