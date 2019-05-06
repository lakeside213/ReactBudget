import React, { Fragment, Component } from "react";
import YesterdaysTrans from "./yesterdaysTrans";
import CashFlow from "./cashFlow";
import Dialog from "../utils/Dialogs/FullscreenDialog";
import EditTrans from "./Dialogs/EditTrans";
import { withStyles } from "@material-ui/core/styles";
import EmptyState from "../utils/EmptyState";
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

class Home extends Component {
    render() {
        const { classes } = this.props;
        return (
            <Fragment>
                <div className={classes.root}>
                    {/* <YesterdaysTrans />
                    <CashFlow />
                    <Dialog>
                        <EditTrans />
                    </Dialog> */}
                    <EmptyState />
                </div>
            </Fragment>
        );
    }
}

export default withStyles(styles)(Home);
