import React, { Fragment, Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
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
        const { classes, user } = this.props;

        return (
            <Fragment>
                <YesterdaysTrans />
                <CashFlow />
                <Dialog>
                    <EditTrans />
                </Dialog>
            </Fragment>
        );
    }
}
function mapStateToProps({ user }) {
    return { user };
}
export default connect(
    mapStateToProps,
    null
)(withRouter(withStyles(styles)(EmptyState(Home))));
