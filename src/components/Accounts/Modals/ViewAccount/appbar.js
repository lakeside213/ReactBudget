import React, { Fragment, Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import KeyboardBackspace from "@material-ui/icons/KeyboardBackspace";
import Delete from "@material-ui/icons/Delete";
const styles = theme => ({
    appBar: {
        position: "relative"
    },
    flex: {
        flex: 1
    }
});

class Appbar extends Component {
    render() {
        const { classes, closeDialog, deleteAccount } = this.props;
        return (
            <Fragment>
                <AppBar className={classes.appBar}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="Close"
                            onClick={() => {
                                closeDialog();
                            }}
                        >
                            <KeyboardBackspace />
                        </IconButton>
                        <Typography
                            variant="h6"
                            color="inherit"
                            className={classes.flex}
                        >
                            Account Details
                        </Typography>
                        <Button
                            color="inherit"
                            onClick={() => {
                                deleteAccount();
                                closeDialog();
                            }}
                        >
                            <Delete />
                        </Button>
                    </Toolbar>
                </AppBar>
            </Fragment>
        );
    }
}

Appbar.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Appbar);
