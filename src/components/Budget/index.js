import React, { Fragment, Component } from "react";
import BudgetSummary from "./budgetSummary";
import BudgetView from "./budget";
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

class Budget extends Component {
    render() {
        const { classes } = this.props;
        return (
            <Fragment>
                <div className={classes.root}>
                    <BudgetSummary />
                    <BudgetView />
                </div>
            </Fragment>
        );
    }
}

export default withStyles(styles)(Budget);
