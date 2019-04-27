import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import InputBase from "@material-ui/core/InputBase";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import InputAdornment from "@material-ui/core/InputAdornment";
import ConfirmDialog from "../../../utils/Dialogs/ConfirmationDialog";

const styles = {
    appBar: {
        position: "relative"
    },
    flex: {
        flex: 1
    },
    money: {
        fontSize: "3rem"
    },
    paper: {
        width: "80%",
        maxHeight: 435
    },
    cashIn: {
        color: "#58a05b"
    },
    cashOut: {
        color: "#e60000"
    }
};

class FullScreenDialog extends React.Component {
    state = {
        account: {
            isOpen: false,
            value: ""
        },
        category: {
            isOpen: false,
            value: ""
        }
    };

    handleClickListItem = event => {
        let inputName = event.target.id;
        let stateCopy = Object.assign({}, this.state);
        stateCopy[inputName].isOpen = true;

        this.setState(stateCopy);
    };

    handleClose = (value, id) => {
        let stateCopy = Object.assign({}, this.state);
        stateCopy[id].value = value;
        stateCopy[id].isOpen = false;
    };

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    };

    render() {
        const { account, category } = this.state;
        const { classes } = this.props;
        return (
            <Fragment>
                <List>
                    <ListItem button>
                        <ListItemText
                            primary={
                                <InputBase
                                    className={classes.money}
                                    startAdornment={
                                        <InputAdornment position="start">
                                            $
                                        </InputAdornment>
                                    }
                                    defaultValue="-88"
                                />
                            }
                        />
                    </ListItem>
                    <Divider />
                    <ListItem
                        button
                        id="account"
                        onClick={this.handleClickListItem}
                    >
                        <ListItemText
                            primary="Account"
                            secondary={account.value}
                        />
                    </ListItem>
                    <Divider />
                    <ListItem
                        button
                        id="category"
                        onClick={this.handleClickListItem}
                    >
                        <ListItemText
                            primary="Category"
                            secondary={category.value}
                        />
                    </ListItem>
                    <ConfirmDialog
                        classes={{
                            paper: classes.paper
                        }}
                        id="account"
                        dialogtitle="Select Account"
                        open={account.isOpen}
                        onClose={this.handleClose}
                        value={account.value}
                    />
                    <ConfirmDialog
                        classes={{
                            paper: classes.paper
                        }}
                        id="category"
                        dialogtitle="Select category"
                        open={category.isOpen}
                        onClose={this.handleClose}
                        value={category.value}
                    />
                </List>
            </Fragment>
        );
    }
}

FullScreenDialog.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FullScreenDialog);
