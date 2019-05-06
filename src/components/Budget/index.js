import React, { Fragment, Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import BudgetSummary from "./budgetSummary";
import BudgetView from "./budget";
import { withStyles } from "@material-ui/core/styles";
import EmptyState from "../utils/EmptyState";
const styles = theme => ({});

class Budget extends Component {
    render() {
        const { classes } = this.props;
        return (
            <Fragment>
                <BudgetSummary />
                <BudgetView />
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
)(withRouter(withStyles(styles)(EmptyState(Budget))));
