import React, { Fragment, Component } from "react";
import Header from "./components/Header";
import BottomNav from "./components/BottomNav";
import HomePage from "./components/Home";
import AccountsPage from "./components/Accounts";
import BudgetPage from "./components/Budget";
import ProfilePage from "./components/Profile";
import Auth from "./components/Auth";
class App extends Component {
    state = {
        selectedPage: "Home"
    };

    setPage = (event, selectedPage) => {
        window.scrollTo(0, 0);
        this.setState({ selectedPage });
    };
    getPageContent(pageName) {
        switch (pageName) {
            case "Home":
                return <HomePage setPage={this.setPage} />;
            case "Accounts":
                return <AccountsPage setPage={this.setPage} />;
            case "Budget":
                return <BudgetPage setPage={this.setPage} />;
            case "Me":
                return <ProfilePage setPage={this.setPage} />;
            case "Auth":
                return <Auth setPage={this.setPage} />;
            default:
                return "Unbekannter Fehler";
        }
    }
    render() {
        const { selectedPage } = this.state;
        return (
            <Fragment>
                {selectedPage === "Auth" ? (
                    this.getPageContent(selectedPage)
                ) : (
                    <Fragment>
                        <Header pageName={selectedPage} />
                        {this.getPageContent(selectedPage)}
                        <BottomNav
                            setPage={this.setPage}
                            value={selectedPage}
                        />
                    </Fragment>
                )}
            </Fragment>
        );
    }
}

export default App;
