import React, { Fragment, Component } from "react";
import { connect } from "react-redux";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import AccountIcon from "@material-ui/icons/AccountBalance";
import { openDialog } from "../../../actions/dialog";
const styles = theme => ({
    root: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "3%"
    },
    icon: {
        fontSize: "100px"
    }
});

class EmptyState extends Component {
    render() {
        const { classes, openDialog } = this.props;
        return (
            <Fragment>
                <div className={classes.root}>
                    <AccountIcon className={classes.icon} />
                    <Typography variant="h4" gutterBottom>
                        Create an Account
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        By Creating an Account,you'll be able to log your first
                        transaction.
                    </Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => {
                            openDialog("isAccountModalOpen");
                        }}
                    >
                        Create Account
                    </Button>
                </div>
            </Fragment>
        );
    }
}
export default connect(
    null,
    { openDialog }
)(withStyles(styles)(EmptyState));
