import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Wrapper from "./wrapper";
import HomePage from "./components/Home";
import AccountsPage from "./components/Accounts";
import BudgetPage from "./components/Budget";
import ProfilePage from "./components/Profile";
import Signin from "./components/Auth/signin";
import Signup from "./components/Auth/signup";
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
            <Router basename="/">
                <Wrapper selectedPage={selectedPage} setPage={this.setPage}>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/accounts" component={AccountsPage} />
                    <Route path="/budget" component={BudgetPage} />
                    <Route path="/me" component={ProfilePage} />
                    <Route path="/auth/signin" component={Signin} />
                    <Route path="/auth/signup" component={Signup} />
                </Wrapper>
            </Router>
        );
    }
}

export default App;
