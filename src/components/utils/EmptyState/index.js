import React, { Fragment, Component } from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import AccountIcon from "@material-ui/icons/AccountBalance";
import AddIcon from "@material-ui/icons/AccountBalanceWallet";
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
function getContent(step, classes) {
    switch (step) {
        case 0:
            return (
                <Fragment>
                    <AccountIcon className={classes.icon} />
                    <Typography variant="h4" gutterBottom>
                        Create an Account
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        By Creating an Account,you'll be able to log your first
                        transaction.
                    </Typography>
                    <Button variant="contained" color="primary">
                        Create Account
                    </Button>
                </Fragment>
            );
        default:
            return (
                <Fragment>
                    <AddIcon className={classes.icon} />
                    <Typography variant="h4" gutterBottom>
                        Log a transaction
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        click on the button to log a transaction
                    </Typography>
                    <Button variant="contained" color="primary">
                        Log transaction
                    </Button>
                </Fragment>
            );
    }
}
class Home extends Component {
    render() {
        const { classes } = this.props;
        return (
            <Fragment>
                <div className={classes.root}>{getContent(88, classes)}</div>
            </Fragment>
        );
    }
}

export default withStyles(styles)(Home);
