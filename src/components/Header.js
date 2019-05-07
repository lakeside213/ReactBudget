import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { openDialog } from "../actions/dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Add from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";

const styles = {
    root: {
        flexGrow: 1
    }
};

function Header(props) {
    const { classes, pageName, openDialog, location } = props;

    return (
        <div className={classes.root}>
            <AppBar position="static" color="primary">
                <Toolbar>
                    <Typography
                        variant="h6"
                        color="secondary"
                        style={{ marginRight: "auto" }}
                    >
                        {pageName}
                    </Typography>
                    {location.pathname === "/accounts" ? (
                        <IconButton
                            color="inherit"
                            onClick={() => {
                                openDialog("isAccountModalOpen");
                            }}
                        >
                            <Add />
                        </IconButton>
                    ) : (
                        ""
                    )}
                </Toolbar>
            </AppBar>
        </div>
    );
}
Header.propTypes = {
    classes: PropTypes.object.isRequired
};

export default connect(
    null,
    { openDialog }
)(withStyles(styles)(withRouter(Header)));
