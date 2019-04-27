import React, { Fragment, Component } from "react";
import Header from "./components/Header";
import BottomNav from "./components/BottomNav";
import HomePage from "./components/Home";
import AccountsPage from "./components/Accounts";
import BudgetPage from "./components/Budget";
import ProfilePage from "./components/Profile";
class App extends Component {
    state = {
        selectedPage: "Home"
    };

    setPage = (event, selectedPage) => {
        this.setState({ selectedPage });
    };
    getPageContent(pageName) {
        switch (pageName) {
            case "Home":
                return <HomePage />;
            case "Accounts":
                return <AccountsPage />;
            case "Budget":
                return <BudgetPage />;
            case "Me":
                return <ProfilePage />;
            default:
                return "Unbekannter Fehler";
        }
    }
    render() {
        const { selectedPage } = this.state;
        return (
            <Fragment>
                <Header pageName={selectedPage} />
                {this.getPageContent(selectedPage)}

                <BottomNav setPage={this.setPage} value={selectedPage} />
            </Fragment>
        );
    }
}

export default App;
