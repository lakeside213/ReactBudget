import React, { Fragment, Component } from "react";
import FinancialSummary from "./financialSummary";
import { withStyles } from "@material-ui/core/styles";
import Account from "./account";
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

class Accounts extends Component {
    render() {
        const { classes } = this.props;
        return (
            <Fragment>
                <div className={classes.root}>
                    <FinancialSummary />
                    <Account />
                </div>
            </Fragment>
        );
    }
}

export default withStyles(styles)(Accounts);
