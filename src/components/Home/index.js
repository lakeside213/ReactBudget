import React, { Fragment, Component } from "react";
import YesterdaysTrans from "./yesterdaysTrans";
import CashFlow from "./cashFlow";

import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
    root: {
        display: "flex",
        flexWrap: "wrap"
    }
});

class Home extends Component {
    render() {
        const { classes } = this.props;
        return (
            <Fragment>
                <div className={classes.root}>
                    <YesterdaysTrans />
                    <CashFlow />
                </div>
            </Fragment>
        );
    }
}

export default withStyles(styles)(Home);
