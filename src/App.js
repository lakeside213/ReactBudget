import React, { Fragment, Component } from "react";
import Header from "./components/Header";
import BottomNav from "./components/BottomNav";
import HomePage from "./components/Home";
import Home from "@material-ui/icons/Home";
import AccountBalance from "@material-ui/icons/AccountBalance";
import Person from "@material-ui/icons/Person";
import Money from "@material-ui/icons/AttachMoney";

const pages = [
    {
        name: "Home",
        icon: <Home />
    },
    {
        name: "Accounts",
        icon: <AccountBalance />
    },
    {
        name: "Budget",
        icon: <Money />
    },
    {
        name: "Me",
        icon: <Person />
    }
];

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
                <BottomNav
                    pages={pages}
                    setPage={this.setPage}
                    value={selectedPage}
                />
            </Fragment>
        );
    }
}

export default App;
