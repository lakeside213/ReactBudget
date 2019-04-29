import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import Header from "./components/Header";
import BottomNav from "./components/BottomNav";
class Wrapper extends Component {
    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
            window.scrollTo(0, 0);
        }
    }

    render() {
        let { location, children, setPage, selectedPage } = this.props;
        return location.pathname.startsWith("/auth") ? (
            <Fragment>{children}</Fragment>
        ) : (
            <Fragment>
                <Header pageName={selectedPage} />
                {children}
                <BottomNav setPage={setPage} value={selectedPage} />
            </Fragment>
        );
    }
}

export default withRouter(Wrapper);
