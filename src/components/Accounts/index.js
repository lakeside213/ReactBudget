import React, { Fragment, Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import FinancialSummary from "./financialSummary";
import { withStyles } from "@material-ui/core/styles";
import Account from "./account";

import EmptyStateHOC from "../utils/EmptyState";
const styles = theme => ({});

class Accounts extends Component {
    render() {
        const { classes, user } = this.props;

        const { accounts } = user;

        let assets = 0;
        accounts.forEach(function(account) {
            assets = assets + account.amount;
        });
        const accountTypes = Array.from(
            new Set(accounts.map(({ accountType }) => accountType))
        );

        return (
            <Fragment>
                <FinancialSummary assets={assets} />
                {accountTypes.map(AccountType => (
                    <Account
                        key={AccountType}
                        name={AccountType}
                        data={accounts.filter(function(account) {
                            return account.accountType === AccountType;
                        })}
                    />
                ))}
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
)(withRouter(withStyles(styles)(EmptyStateHOC(Accounts))));
