import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/ChevronLeft";
import DeleteIcon from "@material-ui/icons/Delete";
import ExpensePage from "./expense";

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
    cashIn: {
        color: "#58a05b"
    },
    cashOut: {
        color: "#e60000"
    }
};

class FullScreenDialog extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <Fragment>
                <AppBar className={classes.appBar}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            onClick={this.handleClose}
                            aria-label="Close"
                        >
                            <CloseIcon />
                        </IconButton>
                        <Typography
                            variant="h6"
                            color="inherit"
                            className={classes.flex}
                        >
                            Edit Transaction
                        </Typography>
                        <IconButton
                            color="inherit"
                            onClick={this.handleClose}
                            aria-label="Close"
                        >
                            <DeleteIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <ExpensePage />
            </Fragment>
        );
    }
}

FullScreenDialog.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FullScreenDialog);
