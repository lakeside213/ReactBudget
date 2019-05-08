import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { openDialog } from "../../actions/dialog";
import Dashboard from "./dashboard";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({});

class Profile extends Component {
    render() {
        const { classes, openDialog, user } = this.props;

        return (
            <Fragment>
                <Dashboard openDialog={openDialog} user={user} />
            </Fragment>
        );
    }
}
function mapStateToProps({ user, dialog }) {
    return { user, dialog };
}
export default connect(
    mapStateToProps,
    { openDialog }
)(withRouter(withStyles(styles)(Profile)));
