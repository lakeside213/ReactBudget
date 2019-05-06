import React, { Fragment, Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import FinancialSummary from "./financialSummary";
import { withStyles } from "@material-ui/core/styles";
import Account from "./account";
import EmptyState from "../utils/EmptyState";
const styles = theme => ({});

class Accounts extends Component {
    render() {
        const { classes } = this.props;
        return (
            <Fragment>
                <FinancialSummary />
                <Account />
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
)(withRouter(withStyles(styles)(EmptyState(Accounts))));
