import React, { Fragment, Component } from "react";
import PropTypes from "prop-types";
import { deleteAccount } from "../../../../actions/user";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import AppBar from "./appbar";

const styles = theme => ({
    menu: {
        width: 300
    }
});

class ViewAccount extends Component {
    render() {
        const {
            classes,
            handleCloseAccount,
            account,
            currency,
            deleteAccount
        } = this.props;

        return (
            <Fragment>
                <AppBar
                    closeDialog={handleCloseAccount}
                    deleteAccount={() => {
                        deleteAccount(account.id);
                    }}
                />

                <List>
                    <ListItem>
                        <ListItemText primary="Name" secondary={account.name} />
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <ListItemText
                            primary="Type"
                            secondary={account.accountType}
                        />
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <ListItemText
                            primary="Balance"
                            secondary={`${currency}${account.amount}`}
                        />
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <ListItemText
                            primary="Notes"
                            secondary={account.notes}
                        />
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <ListItemText
                            primary="Cumulative Inflow"
                            secondary={`${currency}${account.cumulativeInflow}`}
                        />
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <ListItemText
                            primary="Cumulative Outflow"
                            secondary={`${currency}${
                                account.cumulativeOutflow
                            }`}
                        />
                    </ListItem>
                    <Divider />
                </List>
            </Fragment>
        );
    }
}

ViewAccount.propTypes = {
    classes: PropTypes.object.isRequired
};

export default connect(
    null,
    { deleteAccount }
)(withStyles(styles)(ViewAccount));
