import React, { Component } from "react";
import Dashboard from "./dashboard";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
    root: {
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

class Profile extends Component {
    render() {
        const { classes, setPage } = this.props;
        return (
            <div className={classes.root}>
                <Dashboard setPage={setPage} />
            </div>
        );
    }
}

export default withStyles(styles)(Profile);
