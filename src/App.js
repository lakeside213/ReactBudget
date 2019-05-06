import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import Wrapper from "./wrapper";
import FullScreenDialog from "./components/utils/Dialogs/FullscreenDialog";
import HomePage from "./components/Home";
import AccountsPage from "./components/Accounts";
import BudgetPage from "./components/Budget";
import ProfilePage from "./components/Profile";
import Signin from "./components/Auth/signin";
import Signup from "./components/Auth/signup";
const Auth = ({ routes }) => (
    <div>
        {routes.map(route => (
            <RouteWithSubRoutes key={route.path} {...route} />
        ))}
    </div>
);
const routes = [
    {
        path: "/",
        component: HomePage,
        exact: true
    },
    {
        path: "/accounts",
        component: AccountsPage
    },
    {
        path: "/budget",
        component: BudgetPage
    },
    {
        path: "/me",
        component: ProfilePage
    },
    {
        path: "/auth",
        component: Auth,
        routes: [
            {
                path: "/auth/signin",
                component: Signin
            },
            {
                path: "/auth/signup",
                component: Signup
            }
        ]
    }
];
const RouteWithSubRoutes = (route, accountModalToggle, logModalToggle) => (
    <Route
        path={route.path}
        exact={route.exact}
        render={props => (
            <route.component
                {...props}
                accountModalToggle
                logModalToggle
                routes={route.routes}
            />
        )}
    />
);

class App extends Component {
    state = {
        selectedPage: "Home",
        isAccountModalOpen: false,
        isLogTransModalOpen: false
    };

    setPage = (event, selectedPage) => {
        this.setState({ selectedPage });
    };

    render() {
        const { selectedPage } = this.state;
        const { dialog, user } = this.props;
        const { isAccountModalOpen, isLogTransModalOpen } = dialog;
        return (
            <Router basename="/">
                <Wrapper
                    selectedPage={selectedPage}
                    setPage={this.setPage}
                    user={user}
                >
                    {routes.map(route => (
                        <RouteWithSubRoutes key={route.path} {...route} />
                    ))}
                </Wrapper>
                <FullScreenDialog
                    isOpen={isAccountModalOpen}
                    dialogToggle={this.accountModalToggle}
                >
                    gg
                </FullScreenDialog>
            </Router>
        );
    }
}

function mapStateToProps({ dialog, user }) {
    return { dialog, user };
}
export default connect(
    mapStateToProps,
    null
)(App);
