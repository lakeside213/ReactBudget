import React, { Fragment, Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import FinancialSummary from "./financialSummary";
import { withStyles } from "@material-ui/core/styles";
import Account from "./account";
import FullScreenDialog from "../utils/Dialogs/FullscreenDialog";
import ViewAccount from "./Modals/ViewAccount";
import EmptyStateHOC from "../utils/EmptyState";
const styles = theme => ({});

class Accounts extends Component {
    state = {
        viewAccount: {
            isOpen: false,
            account: {}
        }
    };

    handleOpenAccount = account => {
        this.setState({
            viewAccount: {
                isOpen: true,
                account
            }
        });
    };
    handleCloseAccount = () => {
        this.setState({
            viewAccount: {
                isOpen: false,
                account: {}
            }
        });
    };
    render() {
        const { classes, user } = this.props;
        const { viewAccount } = this.state;
        const { accounts, baseCurrency } = user;
        const { isOpen, account } = viewAccount;

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
                        handleOpenAccount={this.handleOpenAccount}
                        data={accounts.filter(function(account) {
                            return account.accountType === AccountType;
                        })}
                    />
                ))}
                <FullScreenDialog
                    isOpen={isOpen}
                    onClose={this.handleCloseAccount}
                >
                    <ViewAccount
                        handleCloseAccount={this.handleCloseAccount}
                        account={account}
                        currency={baseCurrency.symbol}
                    />
                </FullScreenDialog>
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
