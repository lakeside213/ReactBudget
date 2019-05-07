import React, { Fragment, Component } from "react";
import { closeDialog } from "../../../../actions/dialog";
import { createAccount } from "../../../../actions/user";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import AppBar from "./appbar";
import { accountTypes } from "../../../../utils/accountTypes";
const styles = theme => ({
    menu: {
        width: 300
    }
});

class CreateAccount extends Component {
    constructor(props) {
        super();
        this.state = {
            name: "",
            accountType: "",
            notes: "",
            amount: ""
        };
    }
    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    };
    handleSubmit = () => {
        const { name, accountType, notes, amount } = this.state;
        this.props.createAccount(name, accountType, notes, amount);
        this.setState({
            name: "",
            accountType: "",
            notes: "",
            amount: 0
        });
    };
    render() {
        const { name, accountType, notes, amount } = this.state;
        const { classes, closeDialog } = this.props;

        return (
            <Fragment>
                <AppBar
                    closeDialog={closeDialog}
                    handleSubmit={this.handleSubmit}
                />

                <List>
                    <ListItem>
                        <ListItemText
                            primary="Name"
                            secondary={
                                <TextField
                                    id="standard-with-placeholder"
                                    placeholder="Account Name"
                                    value={name}
                                    name="name"
                                    onChange={this.handleChange("name")}
                                    fullWidth
                                />
                            }
                        />
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <ListItemText
                            primary="Account type"
                            secondary={
                                <TextField
                                    id="standard-select-currency"
                                    select
                                    className={classes.textField}
                                    value={accountType}
                                    onChange={this.handleChange("accountType")}
                                    SelectProps={{
                                        MenuProps: {
                                            className: classes.menu
                                        }
                                    }}
                                >
                                    {accountTypes.map(accountType => (
                                        <MenuItem
                                            key={accountType}
                                            value={accountType}
                                        >
                                            {accountType}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            }
                        />
                    </ListItem>

                    <Divider />
                    <ListItem>
                        <ListItemText
                            primary="Amount"
                            secondary={
                                <TextField
                                    className={classes.formControl}
                                    value={amount}
                                    type="number"
                                    onChange={this.handleChange("amount")}
                                />
                            }
                        />
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <ListItemText
                            primary="Notes"
                            secondary={
                                <TextField
                                    id="standard-with-placeholder"
                                    placeholder="Notes"
                                    value={notes}
                                    name="notes"
                                    onChange={this.handleChange("notes")}
                                    fullWidth
                                />
                            }
                        />
                    </ListItem>
                </List>
            </Fragment>
        );
    }
}

CreateAccount.propTypes = {
    classes: PropTypes.object.isRequired
};

export default connect(
    null,
    { closeDialog, createAccount }
)(withStyles(styles)(CreateAccount));
