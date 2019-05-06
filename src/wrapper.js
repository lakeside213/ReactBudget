import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import Header from "./components/Header";
import BottomNav from "./components/BottomNav";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
    root: {
        display: "flex",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "3%"
        // flexWrap: "wrap",
        // [theme.breakpoints.up("md")]: {
        //     justifyContent: "center"
        // }
    }
});

class Wrapper extends Component {
    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
            window.scrollTo(0, 0);
        }
    }

    render() {
        let { location, children, setPage, selectedPage, classes } = this.props;
        return location.pathname.startsWith("/auth") ? (
            <Fragment>{children}</Fragment>
        ) : (
            <Fragment>
                <Header pageName={selectedPage} />
                <div className={classes.root}>{children}</div>
                <BottomNav setPage={setPage} value={selectedPage} />
            </Fragment>
        );
    }
}

export default withStyles(styles)(withRouter(Wrapper));
